import type { BaseFormComponentType, FormProps } from './types';

import { defineComponent, h, isReactive, onBeforeUnmount, watch } from 'vue';

import { FormApi } from './form-api';
import UseEleFormCom from './use-ele-form-com.vue';

export function useForm<
  T extends BaseFormComponentType = BaseFormComponentType,
>(options: FormProps<T>) {
  const IS_REACTIVE = isReactive(options);
  const api = new FormApi(options);
  const extendedApi = api;

  const Form = defineComponent(
    (props: FormProps, { attrs, slots }) => {
      onBeforeUnmount(() => {
        api.unmount();
      });
      api.setState({ ...props, ...attrs });
      return () =>
        h(UseEleFormCom, { ...props, ...attrs, formApi: extendedApi }, slots);
    },
    {
      name: 'UseEleForm',
      inheritAttrs: false,
    },
  );
  // Add reactivity support
  if (IS_REACTIVE) {
    watch(
      () => options.schema,
      () => {
        api.setState({ schema: options.schema });
      },
      { immediate: true },
    );
  }

  return [Form, extendedApi] as const;
}

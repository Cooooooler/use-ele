import type { BaseFormComponentType, FormProps } from './types';

import type { MaybeRef } from '@vueuse/core';
import {
  defineComponent,
  h,
  isReactive,
  isRef,
  onBeforeUnmount,
  unref,
  watch,
} from 'vue';

import { FormApi } from './form-api';
import UseEleFormCom from './use-ele-form-com.vue';

export function useForm<
  T extends BaseFormComponentType = BaseFormComponentType,
>(options: MaybeRef<FormProps<T>>) {
  const opts = unref(options);
  const IS_REACTIVE = isReactive(opts);
  const api = new FormApi<T>(opts);
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
  if (isRef(options) || IS_REACTIVE) {
    watch(
      () => unref(options).schema,
      () => {
        api.setState({ schema: unref(options).schema });
      },
      { immediate: true },
    );
  }

  return [Form, extendedApi] as const;
}

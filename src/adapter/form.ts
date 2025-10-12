import * as z from 'zod';
import { setupForm } from '../hooks/form/src/config';
import type { FormProps, FormSchema } from '../hooks/form/src/types';
import { useForm } from '../hooks/form/src/use-ele-form';
import type { ComponentType } from './component';
import { initComponentAdapter } from './component';

async function initSetupForm() {
  setupForm<ComponentType>({
    config: {
      modelPropNameMap: {
        Upload: 'fileList',
        CheckboxGroup: 'model-value',
      },
    },
    defineRules: {
      required: (value, _params, ctx) => {
        if (value === undefined || value === null || value.length === 0) {
          return '请输入';
        }
        return true;
      },
      selectRequired: (value, _params, ctx) => {
        if (value === undefined || value === null) {
          return '请输入';
        }
        return true;
      },
    },
  });
}

const useEleForm = useForm<ComponentType>;

export { initComponentAdapter, initSetupForm, useEleForm, z };

export type EleFormSchema = FormSchema<ComponentType>;
export type { FormProps };

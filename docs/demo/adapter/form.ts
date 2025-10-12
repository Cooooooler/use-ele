import type { FormProps, FormSchema } from 'use-ele';
import { setupForm, useForm } from 'use-ele';
import type { ComponentType } from './component';
import { initComponentAdapter } from './component';
// 请确保在main.ts中引入element-plus样式文件，这是element-plus文档要求的
import 'element-plus/dist/index.css';

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

/**
 * 特别注意⚠️
 * 这两行代码请写入到项目的main.js/ts中
 * 初始化适配器
 */
await initComponentAdapter();
await initSetupForm();

export { initComponentAdapter, initSetupForm, useEleForm };

export type EleFormSchema = FormSchema<ComponentType>;
export type { FormProps };

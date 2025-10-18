<template>
  <Form />
</template>

<script setup lang="ts">
import { useEleForm } from '../adapter';
import { h } from 'vue';
import { ElCheckbox, ElMessage } from 'element-plus';

const [Form] = useEleForm({
  handleSubmit: (values: Record<string, any>) => {
    console.log('🚀 ~ handleSubmit ~ values: ', values);
    ElMessage.success(`表单数据：${JSON.stringify(values)}`);
  },
  schema: [
    {
      component: 'Input',
      fieldName: 'string',
      label: '输入框',
      rules: 'required',
      componentProps: {
        placeholder: '请输入内容',
      },
    },
    {
      component: 'InputNumber',
      fieldName: 'number',
      label: '数字输入框',
    },
    {
      component: 'RadioGroup',
      fieldName: 'radio',
      label: '单选框',
      componentProps: {
        options: [
          { value: 'A', label: 'A' },
          { value: 'B', label: 'B' },
          { value: 'C', label: 'C' },
          { value: 'D', label: 'D' },
          { value: 'E', label: 'E' },
        ],
      },
    },
    {
      component: 'RadioGroup',
      fieldName: 'radioButton',
      label: '单选框按钮',
      componentProps: {
        isButton: true,
        options: ['A', 'B', 'C', 'D', 'E', 'F'].map((v) => ({
          value: v,
          label: `选项${v}`,
        })),
      },
    },
    {
      component: 'CheckboxGroup',
      fieldName: 'checkbox',
      label: '复选框',
      componentProps: {
        options: ['A', 'B', 'C'].map((v) => ({ value: v, label: `选项${v}` })),
      },
    },
    {
      component: 'CheckboxGroup',
      fieldName: 'checkboxGroup',
      label: '复选框组',
      renderComponentContent: () => {
        return {
          default: () => {
            return ['A', 'B', 'C', 'D'].map((v) =>
              h(ElCheckbox, { label: v, value: v }),
            );
          },
        };
      },
    },
    {
      component: 'CheckboxGroup',
      fieldName: 'checkButton',
      label: '复选框按钮',
      rules: 'selectRequired',
      componentProps: {
        isButton: true,
        options: [
          { value: 'A', label: '选项A' },
          { value: 'B', label: '选项B' },
          { value: 'C', label: '选项C' },
        ],
      },
    },
    {
      component: 'DatePicker',
      fieldName: 'date',
      label: '日期选择器',
    },
    {
      component: 'Select',
      fieldName: 'select',
      label: '下拉选择',
      componentProps: {
        filterable: true,
        options: [
          { value: 'A', label: '选项A' },
          { value: 'B', label: '选项B' },
          { value: 'C', label: '选项C' },
        ],
      },
    },
  ],
});
</script>

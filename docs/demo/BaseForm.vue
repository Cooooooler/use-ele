<template>
  <MyForm />
</template>

<script setup lang="ts">
import { useEleForm } from './adapter';
import { h, ref } from 'vue';
import { ElCheckbox, ElMessage } from 'element-plus';
import type { ComponentType } from './adapter/component';
import { FormProps } from 'use-ele';

const formSchema = ref<FormProps<ComponentType>>({
  layout: 'horizontal',
  wrapperClass: 'grid grid-cols-1 w-[600px]',
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
const [MyForm, formApi] = useEleForm(formSchema.value);

function setFormValues() {
  formApi.setValues({
    string: 'string',
    number: 123,
    radio: 'B',
    radioButton: 'C',
    checkbox: ['A', 'C'],
    checkButton: ['B', 'C'],
    checkbox1: ['A', 'B'],
    date: new Date(),
    select: 'B',
  });
}

setFormValues();
formSchema.value.schema.push({
  component: 'Input',
  fieldName: 'string1',
  label: '输入框1',
  rules: 'required',
});
</script>

<style lang="less" scoped></style>

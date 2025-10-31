<template>
  <Form />
</template>

<script setup lang="ts">
import { useEleForm } from '../adapter';
import { ElMessage } from 'element-plus';

const [Form] = useEleForm({
  arrayToStringFields: [
    [['checkbox'], ';'],
    [['string'], ';'],
  ],
  handleSubmit: (values: Record<string, any>) => {
    ElMessage.success(`表单数据：${JSON.stringify(values)}`);
  },
  schema: [
    {
      component: 'Input',
      fieldName: 'string',
      label: '输入框',
      componentProps: {
        placeholder: '请输入内容',
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
  ],
});
</script>

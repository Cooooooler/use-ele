<template>
  <Form />
</template>

<script setup lang="ts">
import { useEleForm } from '../adapter';
import { ElMessage } from 'element-plus';

const [Form] = useEleForm({
  handleSubmit: (values: Record<string, any>) => {
    ElMessage.success(`表单数据：${JSON.stringify(values)}`);
    console.log(values);
  },
  fieldMappingTime: [['date', ['startDate', 'endDate']]],
  schema: [
    {
      component: 'DatePicker',
      fieldName: 'date',
      label: '时间范围',
      componentProps: {
        type: 'daterange',
        startPlaceholder: '开始日期',
        endPlaceholder: '结束日期',
        format: 'YYYY-MM-DD',
        valueFormat: 'YYYY-MM-DD',
      },
    },
  ],
});
</script>

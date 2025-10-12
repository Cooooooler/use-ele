<template>
  <Form />
</template>

<script setup lang="ts">
import { useEleForm } from '../adapter';

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

function handleClick(e: MouseEvent) {
  emit('click', e);
}

const [Form, formApi] = useEleForm({
  commonConfig: {
    componentProps: {
      class: 'w-full',
    },
  },
  layout: 'horizontal',
  wrapperClass: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
  handleSubmit: (values: Record<string, any>) => {
    console.log('submit', values);
  },
  schema: [
    {
      component: 'Input',
      fieldName: 'string',
      label: '输入框',
    },
  ],
});
</script>

<style lang="less" scoped></style>

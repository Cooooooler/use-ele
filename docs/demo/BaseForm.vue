<template>
  <Form />
</template>

<script setup lang="ts">
import { initComponentAdapter, initSetupForm, useEleForm } from 'use-ele';
import { onMounted, ref } from 'vue';

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

function handleClick(e: MouseEvent) {
  emit('click', e);
}
const ifShow = ref(false);
onMounted(async () => {
  await initSetupForm();
  await initComponentAdapter();
  ifShow.value = true;
});

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

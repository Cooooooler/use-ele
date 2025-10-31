<script lang="ts" setup>
import { AiOutlineDown } from 'vue-icons-plus/ai';
import { cn } from '../../../utils';

const props = defineProps<{
  class?: string;
}>();

// 控制箭头展开/收起状态
const collapsed = defineModel({ default: false });
</script>

<template>
  <div
    :class="cn('use-link inline-flex items-center', props.class)"
    @click="collapsed = !collapsed"
  >
    <slot :is-expanded="collapsed">
      {{ collapsed }}
    </slot>
    <div
      :class="{ 'rotate-180': !collapsed }"
      class="transition-transform duration-300"
    >
      <slot name="icon">
        <AiOutlineDown class="mx-2 text-xs w-4 h-4" />
      </slot>
    </div>
  </div>
</template>

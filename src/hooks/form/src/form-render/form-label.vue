<script setup lang="ts">
import type { CustomRenderType } from '../types';

import { FormLabel } from './ui';
import { cn } from '../../../utils';
import { HelpTooltip, RenderContent } from '../../../radix-ui';

interface Props {
  class?: string;
  colon?: boolean;
  help?: CustomRenderType;
  label?: CustomRenderType;
  required?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <FormLabel :class="cn('flex items-center', props.class)">
    <span v-if="required" class="text-destructive mr-[2px]">*</span>
    <slot></slot>
    <HelpTooltip v-if="help" trigger-class="size-3.5 ml-1">
      <RenderContent :content="help" />
    </HelpTooltip>
    <span v-if="colon && label" class="ml-[2px]">:</span>
  </FormLabel>
</template>

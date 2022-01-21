<script setup lang="ts">
import { computed } from 'vue';

interface MBadgeProps {
  type?: 'information' | 'success' | 'warning' | 'danger' | 'neutral'
  htmlTag: string
}

const props = withDefaults(defineProps<MBadgeProps>(), {
  htmlTag: 'span'
})

const classes = computed(() => props.type ? `mc-badge--${props.type}` : '')
</script>

<script lang="ts">
export default { 
  name: 'MBadge' 
}
</script>

<template>
  <component :is="htmlTag" class="mc-badge" :class="classes">
    <slot />
  </component>
</template>

<style lang="scss">
@import '@mozaic-ds/styles/settings-tools/all-settings';
@import '@mozaic-ds/styles/components/_c.badge';
</style>
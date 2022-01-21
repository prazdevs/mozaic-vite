<script setup lang="ts">
interface MButtonProps {
  label?: string
  href?: string
  theme?: string
  disabled?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
}

withDefaults(defineProps<MButtonProps>(), {
  label: '',
  href: '',
  disabled: false,
  iconPosition: 'left',
})

const emit = defineEmits(['click'])
</script>

<script lang="ts">
export default {
  name: 'MButton',
  inheritAttrs: false,
  data() {
    return {
      id: this.$.uid
    }
  },
}
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="mc-button"
    v-bind="$attrs"
  >
    <!-- <m-icon
      v-if="icon && iconPosition === 'left'"
      :id="`mc-button__${iconPosition}-icon-${id}`"
      :class="`mc-button__icon mc-button__icon--${iconPosition}`"
      :name="icon"
    /> -->
    <span v-if="label" class="mc-button__label">
      {{ label }}
    </span>
    <!-- <m-icon
      v-if="icon && iconPosition === 'right'"
      :id="`mc-button__${iconPosition}-icon-${id}`"
      :class="`mc-button__icon mc-button__icon--${iconPosition}`"
      :name="icon"
    /> -->
  </a>
  <button
    v-else
    class="mc-button"
    :disabled="disabled"
    v-bind="$attrs"
    @click="emit('click', $event)"
  >
    <!-- <m-icon
      v-if="icon && iconPosition === 'left'"
      :id="`mc-button__${iconPosition}-icon-${id}`"
      :class="`mc-button__icon mc-button__icon--${iconPosition}`"
      :name="icon"
    /> -->
    <span v-if="label" class="mc-button__label">
      {{ label }}
    </span>
    <!-- <m-icon
      v-if="icon && iconPosition === 'right'"
      :id="`mc-button__${iconPosition}-icon-${id}`"
      :class="`mc-button__icon mc-button__icon--${iconPosition}`"
      :name="icon"
    /> -->
  </button>
</template>

<style lang="scss" scoped>
@import '@mozaic-ds/styles/settings-tools/_all-settings';
@import '@mozaic-ds/styles/components/_c.button';
</style>

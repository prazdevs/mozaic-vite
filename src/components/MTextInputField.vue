<script setup lang="ts">
import { computed } from 'vue'

type Type =
  | 'date'
  | 'email'
  | 'number'
  | 'password'
  | 'tel'
  | 'text'
  | 'time'
  | 'search'

type Size = 's' | 'm'

interface MTextInputFieldProps {
  type?: Type
  required?: boolean
  modelValue?: string
  isValid?: boolean
  isInvalid?: boolean
  icon?: string
  size?: Size
}

const props = withDefaults(defineProps<MTextInputFieldProps>(), {
  type: 'text',
  required: false,
  size: 'm'
})

const emit = defineEmits(['update:modelValue'])

const classes = computed(() => {
  return {
    'is-valid': !!props.isValid,
    'is-invalid': !!props.isInvalid,
    'mc-left-icon-input__input': !!props.icon,
    [`mc-text-input--${props.size}`]: true,
  }
})

defineExpose({ classes })
</script>

<script lang="ts">
export default {
  name: 'MTextInputField'
}
</script>

<template>
  <input
    :modelValue="modelValue"
    :type="type"
    :required="required"
    class="mc-text-input"
    :class="classes"
    :aria-invalid="isInvalid"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style lang="scss">
@import '@mozaic-ds/styles/settings-tools/_all-settings';
@import '@mozaic-ds/styles/components/_c.text-input';
</style>
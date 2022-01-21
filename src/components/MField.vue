<script setup lang="ts">
interface MFieldProps {
  id: string
  label: string
  required?: boolean
  requirementText?: string
  helpId?: string
  helpText?: string
  errorId?: string
  errorMessage?: string
  isInvalid?: boolean
}

const props = withDefaults(defineProps<MFieldProps>(), {
  required: false,
  isInvalid: false
})
</script>

<script lang="ts">
export default {
  name: 'MField'
}
</script>

<template>
  <div class="mc-field">
    <label :for="id" class="mc-field__label">
      {{ label }}
      <span
        v-if="requirementText"
        class="mc-field__requirement"
        aria-hidden="true"
      >
        {{ requirementText }}
      </span>
    </label>
    <span v-if="helpId && helpText" :id="helpId" class="mc-field__help">
      {{ helpText }}
    </span>
    <slot />
    <span v-if="isInvalid" :id="errorId" class="mc-field__error-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<style lang="scss">
@import '@mozaic-ds/styles/settings-tools/_all-settings';
@import '@mozaic-ds/styles/components/_c.fields';
</style>

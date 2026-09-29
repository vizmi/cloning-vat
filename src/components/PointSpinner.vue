<template>
  <div class="d-flex align-center ga-2 point-spinner">
    <div class="point-spinner-label" :style="{ width: labelWidth + 'px' }">{{ label }}</div>
    <v-btn
      v-if="!readOnly"
      icon="mdi-minus"
      size="small"
      variant="tonal"
      :disabled="modelValue <= min"
      @click="decrement"
    />
    <div class="point-spinner-value" :style="{ width: readOnly ? '80px' : '32px' }">{{ modelValue }}</div>
    <v-btn
      v-if="!readOnly"
      icon="mdi-plus"
      size="small"
      variant="tonal"
      :disabled="modelValue >= max"
      @click="increment"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    labelWidth?: number
    modelValue: number
    min?: number
    max?: number
    step?: number
    readOnly?: boolean
  }>(),
  {
    labelWidth: 120,
    min: 0,
    max: 10,
    step: 1,
    readOnly: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

function increment(): void {
  emit('update:modelValue', Math.min(props.modelValue + props.step, props.max))
}

function decrement(): void {
  emit('update:modelValue', Math.max(props.modelValue - props.step, props.min))
}
</script>

<style scoped>
.point-spinner-label {
  font-weight: 500;
}
.point-spinner-value {
  text-align: center;
  font-weight: 600;
}
</style>

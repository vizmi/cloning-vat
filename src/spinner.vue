<template>
  <div class="field is-horizontal has-addons">
    <p class="control">
     <button type="button" class="button is-static" :style="labelStyle"> {{label}} </button>
    </p>
    <p class="control">
     <button type="button" v-if="!readOnly" class="button is-primary" style="width: 40px;"
      @click="decrement" :disabled="value <= min">
      <i class="fa fa-minus" aria-hidden="true"></i>
     </button>
    </p>
    <p class="control">
     <button type="button" class="button is-static" :style="valueStyle"> {{value}} </button>
    </p>
    <p class="control">
     <button type="button" v-if="!readOnly" class="button is-primary" style="width: 40px;"
      @click="increment" :disabled="value >= max">
      <i class="fa fa-plus" aria-hidden="true"></i>
     </button>
    </p>
  </div>
</template>
<script>
  export default {
    props: {
      label: { type: String, required: true },
      labelWidth: { type: Number, default: 120 },
      value: { type: Number, default: 0 },
      min:  { type: Number, default: 0 },
      max: { type: Number, default: 10 },
      step:  { type: Number, default: 1 },
      readOnly: { type: Boolean, default: false }
    },
    data: function() {
      return {
        labelStyle: {
          width: this.labelWidth + 'px'
        },
        valueStyle: {
          width: (this.readOnly ? '120px' : '40px')
        }
      }
    },
    methods: {
      increment: function() {
        this.$emit('input', Math.min(this.value + this.step, this.max));
      },
      decrement: function() {
        this.$emit('input', Math.max(this.value - this.step, this.min));
      }
    }
  }
</script>

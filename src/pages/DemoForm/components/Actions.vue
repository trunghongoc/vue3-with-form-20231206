<template>
  <button type="submit">SUBMIT</button>
  <button @click.prevent="reset">RESET</button>
  <button @click.prevent="setData">SET DATA TO FORM</button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { FormContextType } from '../form'

// Get directly provided data from '../DemoForm.vue' (component on top level)
const form: FormContextType = inject('form')!

const reset = () => {
  form.resetForm()
}

const setData = () => {
  console.log(form)
  form.setValues({
    name: 'abcd',
    email: 'abc@test.com',
    password: '123456',
    passwordConfirm: '123456',
  })
}
</script>

<template>
  <h1>Demo Form</h1>

  <form @submit="onSubmit">
    <div class="general">
      <p>General info</p>

      <!--
        These input fields will be handled by vee-validate form (https://www.npmjs.com/package/vee-validate).
        And the validate will be handled by yup (https://www.npmjs.com/package/yup)
       -->
      <FormInput name="email" type="email" label="Email" />
      <FormInput name="name" type="text" label="Name" />
      <FormInput name="password" type="text" label="Password" />
      <FormInput name="passwordConfirm" type="text" label="Password Confirm" />
    </div>

    <div class="actions">
      <!--
        because the form will have nested components,
        so emitter should be avoid to pass data from children to parent.
        In this case I create one more level wrap the Actions component in order to
        show how `provide/inject` work, how it can replace emitter.
        Actions can receive directly data from this component, no need to passing multiple level.
      -->
      <WrapperOfActions />
    </div>
  </form>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { useGetTags } from '../../features/DemoForm/hooks/useGetTags'
import { useCreate } from '../../features/DemoForm/hooks/useCreate/useCreate'
import FormInput from '../../components/FormInput.vue'
import Actions from './components/Actions.vue'
import WrapperOfActions from './components/WrapperOfActions.vue'
import { initForm, FormContextType } from './form'

/**
 * initForm
 * Init default values, init necessary methods (setValues, setErrors, get values, validate, reset, ...)
 * Defined validation rules
 */
const form = initForm()

/**
 * Provide form to all descendant components.
 * Components can directly use this variable for it self purpose.
 * Ex:
 * - The reset button need trigger form.reset() to reset all form fields data/errors
 * - All components can directly get form value and all methods of this form (see line 39)
 */
provide<FormContextType>('form', form)

/**
 * Init API for submittion
 * submittion = {
    data,
    success,
    error,
    loading,
    mutation,
  }
*/
const submittion = useCreate()

/**
 * on submit form, this function will be called and do these steps sequentially
 * 1. Validate form data (follow above validation rules - defined at line 42)
 * 2. If validate get failed. Stop. Show errors.
 * 3. If validation get success. The callback will be called (show alert box)
 */
const onSubmit = form.handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));

  /**
   * make api call to save data to Database
   * The result will be reactive, automatically update value to all variables (line 59-62)
  */
  // submittion.mutate(values)
})

/**
 * Make API call to get tags
 * tags = {
    data,
    success,
    error,
    loading,
  }
 *
 * */
const tags = useGetTags({ key: 'type-or-id-or-any-thing' })
/** provide tags to all components if needed */
provide('tags', tags)


/**
 * If this page is detail page we can call a hook here to get data and populate to current form
 * By using form.setValues({...})
 * Ex:
 * const detail = useGetDetail({ id: 123 })
 * watch(detail.data, () => {
 *  form.setValues(detail.data)
 * })
 */
</script>


<style lang="css" scoped>
.general {
  border: 1px solid #ddd;
  box-sizing: border-box;
  padding: 20px;
  margin: 20px 0;
}
</style>

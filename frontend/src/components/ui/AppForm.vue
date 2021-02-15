<template>
  <form class="form">
    <div class="container">
      <div class="form--title">
        <h1>{{ formTitle }}</h1>
      </div>

      <div class="form--data text--left mt-1">
        <span v-for="input of formData" :key="input.index">
          <label for="">{{ input.label }}: </label>
          <input
            :type="input.type ? input.type : 'text'"
            :name="input.label.toLowerCase()"
            class="mb-1 form--data__input"
            @input="$emit('onInput', $event.target)"
            :placeholder="input.placeholder"
            :value="value[input.label.toLowerCase()]"
            autocomplete="on"
          />
        </span>
      </div>
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: "AppForm",

  props: {
    formData: {
      type: Array,
      default: function () {
        return [];
      },
    },
    formTitle: {
      type: String,
      default: "Login",
    },
    value: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.form--title {
  text-align: center;
}

.form--data span * {
  display: block;
}

.form--data__input {
  width: 100%;
  height: 2.3rem;
  border: 1px solid #e0e0e0;
  padding-left: 0.2rem;
  font-size: 1rem;
}

.form--btn {
  background-color: #333333;
  color: #f3f3f3;
  font-weight: 700;
}

p {
  display: inline-block;
  text-align: center;
}

.signup--link {
  text-align: center;
}

.signup--link .link {
  color: #197bbd;
  font-weight: 700;
}
</style>
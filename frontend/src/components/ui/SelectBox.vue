<template>
  <div class="select-box mb-1 mt-1">
    <div class="qty flex--half">
      <div>
        <label for="" class="label">
          <slot></slot>
        </label>
      </div>
      <div>
        <select
          :name="selectName"
          :id="productId"
          class="select"
          @change="valueHandler"
          v-model="selected"
        >
          <option v-for="i in value" :key="i" :value="i">
            {{ i }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectBox",
  data() {
    return {
      // selected: 0,
    };
  },

  props: {
    value: {
      type: Number,
      default: 0,
    },
    selectName: {
      type: String,
    },
    productId: {
      type: String,
    },
    initValue: {
      type: Number,
    },
  },

  computed: {
    selected: {
      get() {
        return this.initValue;
      },
      set(e) {
        return e;
      },
    },
  },

  methods: {
    valueHandler(e) {
      this.$emit("selected", { purchaseQty: e.target.value, id: e.target.id });
    },
  },
};
</script>

<style scoped>
.flex--half {
  display: flex;
  justify-content: space-between;
}

.label {
  margin-right: 0.2rem;
}

.select {
  width: 3rem;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
}

.select option {
  border: 1px solid #e0e0e0;
}
</style>
<template>
    <div class="modal">
    <div class="modal__card text--center">
      <section class="modal__card--icon success" v-if="type === 'success'">
        <div>
          <i class="fas fa-check-circle"></i>
          Success
        </div>
      </section>

      <section class="modal__card--icon" v-else>
        <div>
          <i class="fas fa-exclamation-triangle icon"></i>
        </div>
      </section>

      <section class="modal__card--text">
        <h2>Notes!</h2>

        <p class="mt-1">
          <slot> Your login session has expired. Please log in again! </slot>
        </p>
        <button class="modal__btn--danger mt-1" @click="$emit('close')">
          Close
        </button>
        <button
          class="modal__btn--success mt-1"
          @click="$emit('routeHandler')"
          v-if="route"
        >
          <slot name="router"></slot>
        </button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: {
    route: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
    },
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  z-index: 50;
  background-color: rgba(51, 51, 51, 0.6);
  width: 100%;
  height: 100%;
}

.modal__card {
  position: fixed;
  left: 0%;
  right: 0;
  top: 30%;
  /* transform: translateX(-50%); */
  width: 350px;
  height: auto;
  margin: 0 auto;
  background-color: rgba(255, 255, 255);
  border-radius: 1rem;
  z-index: 60;
}

.modal__card--icon {
  position: relative;
  background-color: #ff6347;
  height: 5rem;
  font-size: 2rem;
  color: #fff;
  border-radius: 1rem 1rem 0 0;
}
.modal__card--icon div {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.success {
  background-color: lightgreen;
}

.modal__card--text {
  padding: 1rem 0;
  font-weight: 700;
}

.modal__btn--danger,
.modal__btn--success {
  width: 8rem;
  background-color: #ff6347;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  padding: 0.3rem 0;
  border-radius: 0.4rem;
  border: 1px solid transparent;
}

.modal__btn--success {
  background-color: lightgreen;
  margin-left: 0.3rem;
}

.icon {
  padding: 0;
  margin: 0;
}
</style>
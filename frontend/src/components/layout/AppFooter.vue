<template>
  <footer class="footer">
    <section class="footer__links container">
      <div class="footer__container">
        <div class="links mb-2">
          <h3 class="links__title mb-2">Links</h3>
          <ul class="links__list">
            <li>Search</li>
            <li>Our Story</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div class="email__box mb-2">
          <h3 class="email__box__title mb-2">Be in the know</h3>
          <p>Promotions, new products, and sales directly to your mailbox</p>
          <div class="email__form">
            <input type="text" class="email__input" placeholder="Your email" />
            <m-button class="btn">
              <span>Subscribe</span>
            </m-button>
          </div>
        </div>
      </div>
    </section>
    <section class="footer__copyright container">
      <div class="footer__container">Copyright &copy; Made by Jason</div>
    </section>
  </footer>
</template>

<script>
import mButton from "../ui/Button";

export default {
  name: "AppFooter",

  components: {
    mButton,
  },
};
</script>

<style src='@/assets/styles/utils.css'></style>


<style scoped>
.footer {
  background: #fff;
  padding-top: 3rem;
  padding-bottom: 1rem;
  text-align: left;
  font-family: "Raleway", sans-serif;
}

.footer__copyright,
.footer__links {
  margin: 0 auto;
  border-top: 1px solid #e2e2e2;
  padding-top: 1rem;
}

.footer__copyright {
  text-align: center;
}

.links__list {
  list-style-type: none;
}

.links__title,
.email__box__title {
  font-weight: 500;
}

.email__form {
  display: grid;
  grid-template-columns: 60% 40%;
  margin-top: 2rem;
  height: 2.7rem;
}

.email__input {
  display: inline-block;
  background: #f4f4f4;
  border: 0;
  padding: 0 0.5rem;
}

.btn {
  background: #333;
  color: #fff;
  border-radius: 0;
  box-shadow: none;
  width: 100%;
  padding: 0;
  position: relative;
}

.btn span {
  display: inline-block;
  text-transform: uppercase;
}

input[placeholder] {
  font-size: 1rem;
  font-family: sans-serif;
}
</style>
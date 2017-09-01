<template>
  <section class="container">
    <div>
      <nuxt-logo/>
      <h1 class="title">
        nuxt-template
      </h1>
      <h2 class="subtitle">
        basic nuxt project template, with vuetify and elements preinstalled
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <div class="sub-container">
        <h2 class="subtitle">With Elements components</h2>
        <a href="http://element.eleme.io/#/en-US/component/button" target="_blank">
          <el-button type="primary">Elements UI Docs</el-button>
        </a>
      </div>
      <div class="sub-container">
        <h2 class="subtitle">And Vuetify</h2>
        <a href="https://vuetifyjs.com/components/buttons" target="_blank">
          <v-btn primary dark>Vuetify Docs</v-btn>
        </a>
        <nuxt-link to="vuetify">
          <v-btn primary dark>Vuetify Example Page</v-btn>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import NuxtLogo from '~/components/NuxtLogo.vue'

export default {
  components: {
    NuxtLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.sub-container {
  padding-top:50px;
  width: 100%;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

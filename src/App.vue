<template>
  <div id="app">
    <Notifications />
    <div class="content">
      <HeaderApartments/>
      <router-view></router-view>
      <!-- <h2>{{ text }}</h2> -->
    </div>
    <FooterApartments/>
  </div>
</template>

<script>
import FooterApartments from './components/FooterApartments.vue';
import HeaderApartments from './components/HeaderApartments.vue';
import Notifications from './components/notifications'

export default {
  name: "App",
  components: {
    FooterApartments,
    HeaderApartments,
    Notifications
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content {
  flex-grow: 1;
}
</style>

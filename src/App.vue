<script>
import Head from "./components/Head.vue";
import foot from "./components/foot.vue";
export default {
  components: {
    Head,
    foot,
  },
};
</script>
<template>
  <Head />
  <div class="content">
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
  </div>
  <foot />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
  color: #333;
}
img{
  width: 100%;
  max-width: fit-content;
}
.logo{
    img{
      max-width: 42px;
    }
  }
.content{
  max-width: 1000px;
  margin: 40px auto;
}
</style>

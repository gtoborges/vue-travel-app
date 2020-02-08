<template>
  <div id="nav">
    <p class="logo">Traveling the world</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li v-for="destination in destinations" 
      :key="destination.name"
      class="links">
        <router-link 
        :to="{
          name: 'DestinationDetails',
          params: { slug: destination.slug }
        }"
        >
          {{ destination.name }}
        </router-link>

      </li>
    </ul>
  </div>
</template>
<script>
import store from "../store.js"
export default {
  data () {
    return {
      destinations: store.destinations
    }
  }
}
</script>
<style scoped>
#nav {
  display: flex;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

#nav a.navigate-active-link {
  color: #ab26ab;
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */

</style>
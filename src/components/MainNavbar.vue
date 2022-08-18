<template>
  <div class="row navbar-container max-w-screen-xl">
    <div class="col">
      <img class="style-logo" src="images/logo.png" alt="Songket logo" />
      <nav class="style-nav navbar-menu">
        <ul>
          <li><router-link to="/" @click="scrollTop">Home</router-link></li>
          <li><router-link to="/TheMaking">The Making</router-link></li>
          <li>The Types</li>
          <li>Story Time</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  setup() {
    // scroll to the top of the page when user is directed to another route
    const scrollTop = () => {
      window.scrollTo(0, 0)
    }

    // animeJS will not work during setup, only on mount
    onMounted(() => {})

    return {
      scrollTop,
    }
  },
}
</script>

<style scoped>
.navbar-container {
  max-width: 1600px;
  overflow: auto;
  display: flex;
  margin: 0 auto;
}

.navbar-menu {
}

.col {
  display: block;
  flex-direction: row;
  width: 100%;
}

.row {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.style-logo {
  margin-right: auto;
  display: block;
  width: 120px;
  right: 0;
}

.style-nav ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

.style-nav ul li {
  text-decoration: none;
  color: #559953;
  text-align: center;
  display: block;
  padding: 8px;
}

/* unvisited link */
.style-nav ul li a:link {
  color: #559953;
}

/* visited link */
.style-nav ul li a:visited {
  color: #559953;
}

/* mouse over link */
.style-nav ul li a:hover {
  color: #865399;
}

/* selected link */
.style-nav ul li a :active {
  color: #538499;
}
</style>

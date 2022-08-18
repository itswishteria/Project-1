<template>
  <div class="row">
    <div class="col">
      <img class="style-logo" src="images/logo.png" alt="Songket logo" />
      <nav class="style-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
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
export default {}
</script>

<style scoped>
.col {
  display: block;
  flex-direction: flex-row;
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

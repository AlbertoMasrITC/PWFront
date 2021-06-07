<template>
  <div id="app">

    <b-navbar type="dark" variant="dark" toggleable="">

      <b-navbar-brand>

        <router-link to="/Categorias">Categorías</router-link> |
        <router-link to="/Personas">Personal</router-link>

      </b-navbar-brand>

    </b-navbar>

    <router-view class="container mt-3"/>
    <notifications position="bottom right"/>

  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

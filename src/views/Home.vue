<template>

  <div class="home">

    <h1>Categorías</h1>

    <b-button variant="primary" to="/Agregar">Agregar</b-button>
    <Table :items="categorias"/>

  </div>

</template>

<script>

import Table from '../components/Table'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {

    Table

  },
  computed: {

    ...mapState(['categorias'])

  },
  methods: {

    ...mapActions(['setCategorias'])

  },
  created() {

    this.setCategorias()

  }

}
</script>
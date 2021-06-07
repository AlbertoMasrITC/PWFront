<template>

  <div>

    <h1>Categorías</h1>

    <b-button variant="primary" to="/AgregarCategoria">Agregar</b-button>
    <Table :items="categorias"/>

  </div>

</template>

<script>

import Table from '../components/Table'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomeCategoria',
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
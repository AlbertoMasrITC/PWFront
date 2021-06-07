<template>

  <div>

    <h1>Personal</h1>

    <b-button variant="primary" to="/AgregarPersona">Agregar</b-button>
    <Table :items="personal" :fields = "campos">

      <template slot = "actions" slot-scope="{ item }"> 
        <b-button class="me-1" @click="OnEditar(item)">Editar</b-button>
        <b-button class="me-1" @click="OnEliminar(item)">Eliminar</b-button>

      </template>
    </Table>

  </div>

</template>

<script>

import Table from '../components/Table'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomePersona',
  components: {

    Table

  },
  data(){
    return {
      campos: [
        {key: 'ID', label: 'Clave'},
        {key: 'Nombre'},
        {key: 'Apellidos'},
        {key: 'Telefono'},
        {key: 'Direccion'},
        {key: "actions", label: "Acciones"}
      ]
    }
  },
   computed: {

    ...mapState(['personal'])

  },
  methods: {

    ...mapActions(['setPersonal']),
    OnEditar(item) {
      console.log("Editar", item);
    },
    OnEliminar(item) {
      console.log("Eliminar", item);
    }

  },
  created() {

    this.setPersonal()

  }

}
</script>
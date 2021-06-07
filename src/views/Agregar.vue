<template>
  <div>

      <h1>Agregar categoría</h1>
      <b-form @submit.prevent="guardarCategoria()">

          <Input 
            v-model="categoria.Nombre"
            id="nombre"
            titulo="Nombre"
            placeholder="Ingrese el nombre"
            :maxlength="50"
            :error="errorValidacion && !validacionNombre"
            mensajeError="Es necesario ingresar el nombre"
          />

          <b-button type="submit" variant="primary">Guardar</b-button>

      </b-form>

  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Input from '../components/Input'

export default {

    name: 'Agregar',
    components: {

        Input

    },
    data() {

        return {

            categoria: {

                Nombre: ""

            },
            errorValidacion: false

        }

    },
    computed: {

        validacionNombre() {

            return (

                this.categoria.Nombre !== undefined && this.categoria.Nombre.trim() !== ''

            )

        }

    },
    methods: {

        ...mapActions(['crearCategoria']),
        guardarCategoria() {

            if(this.validacionNombre) {

                this.errorValidacion = false;

                // Guardar
                this.crearCategoria({ 
                
                    params: this.categoria,
                    onComplete: (response) => {

                        console.log(response.data);
                        
                        // Muetra tarjeta
                        this.$notify({

                            type: 'success',
                            title: response.data.mensaje

                        });

                        // Mandar a la pantalla principal
                        this.$router.push({

                            name: 'Home'

                        })

                    },
                    onError: (error) => {

                        console.log(error.response.data.mensaje)
                        
                        this.$notify({

                            type: 'error',
                            title: error.response.data.mensaje

                        });

                    }
                                        
                })

            } else {

                this.errorValidacion = true;

            }

        }

    },

}
</script>

<style>

</style>
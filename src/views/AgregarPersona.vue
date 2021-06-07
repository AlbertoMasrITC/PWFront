<template>
  <div>

      <h1>Agregar Personal</h1>
      <b-form @submit.prevent="guardarPersona()">

          <Input 
            v-model="persona.Nombre"
            id="nombre"
            titulo="Nombre"
            placeholder="Ingrese el nombre"
            :maxlength="50"
            :error="errorValidacion && !validacionNombre"
            mensajeError="Es necesario ingresar el nombre"
          />

           <Input 
            v-model="persona.Apellido"
            id="apellido"
            titulo="Apellido"
            placeholder="Ingrese los apellido"
            :maxlength="80"
            :error="errorValidacion && !validacionApellido"
            mensajeError="Es necesario ingresar los apellidos"
          />

           <Input 
            v-model="persona.Telefono"
            id="telefono"
            titulo="Telefono"
            placeholder="Ingrese el telefono"
            :maxlength="10"
          />
        
        <Input 
            v-model="persona.Direccion"
            id="direccion"
            titulo="Direccion"
            placeholder="Ingrese la direccion"
            :maxlength="150"
          />
          
          <b-button type="submit" variant="primary">Guardar</b-button>

      </b-form>

  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Input from '../components/Input'

export default {

    name: 'AgregarPersona',
    components: {

        Input

    },
    data() {

        return {

            persona: {

                Nombre: "",
                Apellido: "",
                Telefono: "",
                Direccion: ""

            },
            errorValidacion: false

        }

    },
    computed: {

        validacionNombre() {

            return (

                this.persona.Nombre !== undefined && this.persona.Nombre.trim() !== ''

            )

        },

        validacionApellido() {

            return (

                this.persona.Apellido !== undefined && this.persona.Apellido.trim() !== ''

            )

        }

    },
    methods: {

        ...mapActions(['crearPersona']),
        guardarPersona() {

            if(this.validacionNombre && this.validacionApellido) {

                console.log("Antes");
                // Guardar
                this.crearPersona({ 
                
                    params: this.persona,
                    onComplete: (response) => {

                        console.log(response.data);
                        
                        // Muetra tarjeta
                        this.$notify({

                            type: 'success',
                            title: response.data.mensaje

                        });

                        // Mandar a la pantalla principal
                        this.$router.push({

                            name: 'Personas'

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
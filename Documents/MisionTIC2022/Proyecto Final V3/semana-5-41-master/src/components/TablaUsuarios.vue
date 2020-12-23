<template>
    <div>
        <v-data-table
              :headers="headers"
              :items="usuarios"
              sort-by="id"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar
                  flat
                >
                  <v-toolbar-title>Users</v-toolbar-title>
                  <v-divider
                    class="mx-4"
                    inset
                    vertical
                  ></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog
                    v-model="dialog"
                    max-width="500px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                      >
                        add user
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>
          
                      <v-card-text>
                        <v-container>
                          <v-row>
                              <v-text-field
                                v-model="editedItem.nombre"
                                label="User Name"
                              ></v-text-field>
                          </v-row>
                          <v-row>
                              <v-text-field
                                v-model="editedItem.email"
                                label="Email"
                              ></v-text-field>
                          </v-row>
                          <v-row>
                              <v-text-field
                                type="password"
                                v-model="editedItem.password"
                                label="Password"
                              ></v-text-field>
                          </v-row>
                          <v-row>
                              <v-text-field
                                v-model="editedItem.rol"
                                label="Role"
                              ></v-text-field>
                          </v-row>
                        </v-container>
                      </v-card-text>
          
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="close"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="save"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                      <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:[`item.actions`] ="{ item }">
                <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  small
                  @click="deleteItem(item)"
                >
                  mdi-checkbox-marked-outline
                </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn
                  color="primary"
                  @click="initialize"
                >
                  Reset
                </v-btn>
              </template>
            </v-data-table>
    </div>
</template>

<script>
import axios from "axios"
export default {
   
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Base de mis Usuarios',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'ID', value: 'id', sortable: false },
      { text: 'Name', value: 'nombre' },
      { text: 'Email', value: 'email' },
      { text: 'Status', value: 'estado' },
      { text: 'Role', value: 'rol' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    usuarios: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      nombre: '',
      email: '',
      password: '',
      rol: '',
      estado: 0,
    },
    defaultItem: {
      id: 0,
      nombre: '',
      email: '',
      password: '',
      rol: '',
      estado: 0,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nuevo usuario' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
    this.list()
  },

  methods: {
    initialize () {
      this.list()
          
      //  this.usuarios = [
      //    {
      //      name: 'Frozen Yogurt',
      //      id: 159,
      //      nombre: 6.0,
      //      descripcion: 24,
      //      estado: 4.0,
      //    },
      //  ]
    },

    list(){
       this.$http.get('/usuario/list')
        .then((response) =>{
          this.usuarios = response.data
        })
        .catch( error => { 
            return error
        })
    },

    editItem (item) {
      this.editedIndex = this.usuarios.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.usuarios.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      if (this.editedItem.estado === 1) {
          this.$http.put('/usuario/deactivate', {id: this.editedItem.id})
      } else {
          this.$http.put('/usuario/activate', {id: this.editedItem.id})
      }
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      this.list()
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      this.list()
    },

    save () {
      if (this.editedIndex > -1) {

        // Editar en Base de datos
        let objetoBusqueda = {
          nombre: this.editedItem.nombre,
          email: this.editedItem.email,
          id: this.editedItem.id
        }

        this.$http.put('/usuario/update', objetoBusqueda)
        this.list()
        Object.assign(this.usuarios[this.editedIndex], this.editedItem)
      } else {

        // Crear en Base de datos
        let objetoBusqueda = {
          nombre: this.editedItem.nombre,
          email: this.editedItem.email,
          password: this.editedItem.password,
          rol: this.editedItem.rol,
          estado: 1
        }
        this.$http.post('/usuario/add', objetoBusqueda)
        this.usuarios.push(this.editedItem)
        this.list()
      }
      this.list()
      this.close()
    },
  }      
}
</script>
<template>
    <div>
        <v-data-table
              :headers="headers"
              :items="articulos"
              sort-by="id"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar
                  flat
                >
                  <v-toolbar-title>Shipment requests</v-toolbar-title>
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
                        Request a shipment
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
                                label="Pick up address"
                              ></v-text-field>
                          </v-row>
                          <v-row>
                              <v-textarea
                                v-model="editedItem.descripcion"
                                label="Drop off address"
                              ></v-textarea>
                          </v-row>
                          <v-row>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                v-model="editedItem.categoriaId"
                                label="Weight (Kg)"
                              ></v-text-field>
                            </v-col>
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
        text: 'Articulos',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'ID', value: 'id', sortable: false },
      { text: 'Nombre', value: 'nombre' },
      { text: 'Descripcion', value: 'descripcion' },
      { text: 'Estado', value: 'estado' },
      { text: 'CategoriaId', value: 'categoriaId' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    articulos: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      nombre: '',
      descripcion: '',
      estado: 0,
      categoriaId: 0,
    },
    defaultItem: {
      id: 0,
      nombre: '',
      descripcion: '',
      estado: 0,
      categoriaId: 0,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nuevo Articulo' : 'Edit Item'
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
          
      //  this.articulos = [
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
       this.$http.get('/articulo/list')
        .then((response) =>{
          this.articulos = response.data
        })
        .catch( error => { 
            return error
        })
    },

    editItem (item) {
      this.editedIndex = this.articulos.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.articulos.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      if (this.editedItem.estado === 1) {
          this.$http.put('/articulo/deactivate', {id: this.editedItem.id})
      } else {
          this.$http.put('/articulo/activate', {id: this.editedItem.id})
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
          descripcion: this.editedItem.descripcion,
          id: this.editedItem.id,
          categoriaId: this.editedItem.categoriaId
        }

        this.$http.put('/articulo/update', objetoBusqueda)
        this.list()
        Object.assign(this.articulos[this.editedIndex], this.editedItem)
      } else {

        // Crear en Base de datos
        let objetoBusqueda = {
          nombre: this.editedItem.nombre,
          descripcion: this.editedItem.descripcion,
          categoriaId: this.editedItem.categoriaId,
          estado: 1
        }
        this.$http.post('/articulo/add', objetoBusqueda)
        this.articulos.push(this.editedItem)
        this.list()
      }
      this.list()
      this.close()
    },
  }      
}
</script>
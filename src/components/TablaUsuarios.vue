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
                  <v-toolbar-title>Listado de Usuarios</v-toolbar-title>
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
                        AGREGAR ARTICULO
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>
          
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                v-model="editedItem.name"
                                label="Dessert name"
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                v-model="editedItem.id"
                                label="id"
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                v-model="editedItem.nombre"
                                label="nombre (g)"
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                v-model="editedItem.descripcion"
                                label="descripcion (g)"
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                v-model="editedItem.estado"
                                label="estado (g)"
                              ></v-text-field>
                            </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                v-model="editedItem.categoriaId"
                                label="CategoriaId (g)"
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
              <template v-slot: [item.actions] ="{ item }">
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
                  mdi-delete
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
        text: 'Usuario',
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
      nombre: 0,
      descripcion: 0,
      estado: 0,
      categoriaId: 0,
    },
    defaultItem: {
      id: 0,
      nombre: 0,
      descripcion: 0,
      estado: 0,
      categoriaId: 0,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nuevo Usuario' : 'Edit Item'
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
  },

  methods: {
    initialize () {
          
       this.articulos = [
         {
           name: 'Frozen Yogurt',
           id: 159,
           nombre: 6.0,
           descripcion: 24,
           estado: 4.0,
         },
       ]
    },

    list(){
       axios.get('http://localhost:3000/api/categoria/list')
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
      this.articulos.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.articulos[this.editedIndex], this.editedItem)
      } else {
        this.articulos.push(this.editedItem)
      }
      this.close()
    },
  }      
}
</script>
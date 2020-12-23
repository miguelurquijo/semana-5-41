<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CARGO SOLUTIONS</v-toolbar-title>
      <!--v-btn
        v-on:click="unhide"
        rounded
        color=black
        dark
        style="float: right;">
        Log Out
      </v-btn-->
    </v-app-bar>
    

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >

        <v-card
      class="mx-auto"
      width="300">


      <v-list>
        
        <v-list-item
        to="Home">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
  
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>

        <!-- <v-list-item
        to="Login">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>
  
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item> -->
  
        <v-list-group
          id='MenuNavigation'
          :value="true"
          prepend-icon="mdi-account-circle"
          

        >
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
          </template>
  
          <v-list-group
            :value="true"
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon, ruta], i) in admins"
              :key="i"
              :to="ruta"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
  
          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon, ruta], i) in cruds"
              :key="i"
              :to="ruta"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card>

      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">

      <v-container fluid>
        <router-view></router-view>
      </v-container>


    </v-main>
  </v-app>
</template>

<script>
function unhide(){
  if(localStorage.getItem('token') != null){
        console.log('hola')
        document.getElementById('MenuNavigation').style.visibility = "visible";
  } else {
    document.getElementById('MenuNavigation').style.visibility = "hidden";
  }
}
window.onload = unhide;
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },

  data: () => ({
    //
    drawer: null,
        admins: [
      ['Usuarios', 'mdi-account-multiple-outline', 'Usuarios'],
    ],
    cruds: [
      ['Articulos', 'mdi-cart', 'Articulos'],
      ['Categorias', 'mdi-view-list', 'Categorias'],
    ]
  }),
};
</script>

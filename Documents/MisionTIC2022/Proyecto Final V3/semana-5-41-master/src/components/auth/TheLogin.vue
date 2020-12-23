<template>
    <div class="estiloLoginContainer">
        <v-layout style="padding-left: 30%; padding-right: 30%; padding-top: 10%; padding-bottom: 10%"> 
            <v-flex>
                <v-row
                    align="center"
                    align-content="center"
                    style="height:50vh">
                    <v-col>
                        <v-card
                            class="px-5 py-12"
                            style="background: rgba(255,255,255,0.8); border-radius: 12px">
                            <v-card-title style="padding-left: 15%; padding-right: 15%">Welcome to Cargo Solutions! Log in to Contiune</v-card-title>
                            <v-form
                                ref="form"
                                lazy-validation>

                                <v-text-field
                                    v-model="login.email"
                                    label="Email"
                                    required>
                                </v-text-field>

                                <v-text-field
                                    v-model="login.password"
                                    label="Password"
                                    type="password" 
                                    required>
                                </v-text-field>

                                <v-btn
                                    :disabled="!this.login.email || !this.login.password"
                                    color="success"
                                    class="mr-4"
                                    @click="loginUser"> 
                                Login</v-btn>
                            </v-form>
                        <!--pre>
                            {{ $data }}
                        </pre--> 
                        </v-card>
                    </v-col>
                </v-row>
            </v-flex>
        </v-layout>
    </div>
</template>

<script> 
    import axios from 'axios';
    import VueJwtDecode from 'vue-jwt-decode';
    import swal from 'sweetalert';
    export default {
        data(){
            return {
                login: {
                    email: '',
                    password: ''
                }
            }
        },
        methods:{
            async loginUser(){
                this.$http.post('/usuario/login', this.login)
                    .then(response => {
                    return response.data
                })
                .then(data => {
                    swal("Login correcto", 'Los datos son correctos, bienvenido! usuario' , "success");
                    console.log(data);
                    let token = data.tokenReturn;
                    let usuario = data.user;
                    localStorage.setItem('token', token);
                    localStorage.setItem('usuario', JSON.stringify(usuario));
                    this.$router.push('/home')
                    document.getElementById('MenuNavigation').style.visibility = "visible";
                    
                })
                .catch(error => {
                    swal("Oops!", "Algo salio mal", "error");
                    console.log(error);
                    return error;
                })
                
            }
        }
    }
</script>

<style scoped>
    .estiloLoginContainer {
        background-image: url("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2048,h_1152/v1579052146/assets/fa/4e8de5-1c54-4aba-8035-d14addfacac9/original/Self-service-hero.png");
        height: 1010px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
</style>

<!-->https://glacial-everglades-74306.herokuapp.com  prueba@gmail.com  micontraseña-->
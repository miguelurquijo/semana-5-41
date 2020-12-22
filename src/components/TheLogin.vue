<template>
        <div>
        <div class="container">
            <div class="mb-3 row">
                <label for="exampleFormControlInput1" class="col-sm-2 col-form-label">Email address</label>
                <div class="col-sm-10">
                    <input v-model="login.email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input v-model="login.password" type="password" class="form-control" id="inputPassword" placeholder="password">
                </div>
                
            </div>
            <div>
                <button @click="iniciarSesion()" type="button" class="btn btn-dark">Iniciar Sesion</button>
            </div>
            <br>
        </div>

    </div>
</template>


<script>
import swal from 'sweetalert';
    export default {
    name: "TheLogin",
    data(){
        return{
            login:{
                email: '',
                password: '',
            }
            
        }
    },
    methods:{
        async iniciarSesion(){
            //Funcion de iniciar sesion
            try {
                this.$http.post('/usuario/login', this.login)
                    .then((response)=>{
                        let token = response.data.tokenReturn;
                        let usuario = response.data.user;
                        if(token){
                            localStorage.setItem('token', token);
                            localStorage.setItem('usuario', JSON.stringify(usuario));
                            swal("Exito!" , "Iniciaste sesion corretamente!", "success");
                            this.$router.push('/home');
                        }
                    })
                    .catch(error => {
                        return error;
                    })
            } catch (error) {
                swal("Oops!" , "No ha podido iniciar!", "error")
            }
            
        }
    }
}
</script>

<style scoped>
</style>
<template>
        <div>
        <div class="container">
            <div class="mb-3 row">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <div class="col-sm-10">
                    <input v-model="login.email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                
            </div>
            <div class="mb-3 row">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <div class="col-sm-10">
                    <input v-model="login.password" type="password" class="form-control" id="exampleFormControlInput1" placeholder="password">
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
                let response = await this.$http.post('/api/user/login', this.login)
                let token = response.data.tokenReturn;
                let usuario = response.data.user;
                if(token){
                    localStorage.setItem('token', token);
                    localStorage.setItem('usuario', JSON.stringify(usuario));
                    this.$router.push('/home');
                }
                console.log(response.data)
            } catch (error) {
                
            }
            
        }
    }
}
</script>

<style scoped>
</style>
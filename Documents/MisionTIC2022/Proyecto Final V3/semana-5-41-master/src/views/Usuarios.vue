<template>
  <div>
     <div class="carousel-inner">  
        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2048,h_1152/v1581630507/assets/40/e160e9-4017-41e3-9d3e-abfee4437025/original/1.-Hero-Testimonials-Shipper.png" class="d-block w-100"  alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="carousel-title">Users Sections</h5>
          <p>Here you can manage all the users of your company</p>
        </div>
        </div>
        <tabla-usuarios></tabla-usuarios>
  </div>
    
</template>


<script>
import TablaUsuarios from '../components/TablaUsuarios.vue'
export default {
  components: { TablaUsuarios },
    
}
</script>

<style scoped>
.carousel-inner{
  width:100%;
  max-height: 600px !important;
  position:center
}
.carousel-caption {
   position: absolute;
   font-size: 18px;
   text-align: center;
   top: 15%
}
</style>
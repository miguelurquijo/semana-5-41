<template>
  <div>
     <div class="carousel-inner">  
        <img src="https://www.uber-assets.com/image/upload/v1579213645/assets/73/933025-65fe-415c-9a97-776cda27cd63/original/6.-Section-Break---Tablet.png" class="d-block w-100"  alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="carousel-title">Shipments and Orders</h5>
          <p>Request your shipment by registering a new order</p>
        </div>
        </div>
        <tabla-articulos></tabla-articulos>
  </div>
    
</template>


<script>
import TablaArticulos from '../components/TablaArticulos.vue'
export default {
  components: { TablaArticulos },
    
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
<template>
   <div>
     <div class="carousel-inner">  
        <img src="https://www.uber-assets.com/image/upload/v1579053426/assets/c8/f29b2c-f0bd-4133-8d36-32e70d84f09b/original/SelfServe-SectionBreak--Tablet.png" class="d-block w-100"  alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="carousel-title">Categories</h5>
          <p>Find all the categories in one place</p>
        </div>
        </div>
        <tabla-categorias></tabla-categorias>
  </div>
    
</template>


<script>
import TablaCategorias from '../components/TablaCategorias.vue'
export default {
  components: { TablaCategorias },
    
}
</script>

<style scoped>
</style>

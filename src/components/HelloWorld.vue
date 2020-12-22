<template>
  <div>
    <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <a class="navbar-brand " href="# ">
              <img src="https://i.ibb.co/vQS9CL1/logo.png" width="30 " height="30 " class="d-inline-block align-top " alt=" " loading="lazy "> CARGO SOLUTIONS S.A.S
          </a>
          <div class="collapse navbar-collapse justify-content-end " id="navbarNav ">
              <ul class="navbar-nav ">
                  <li class="nav-item active ">
                      <a class="nav-link " v-on:click="ingresar" href="# ">System <span class="sr-only ">(current)</span></a>
                  </li>
              </ul>
          </div>
      </nav>
      
        <!-- carousel -->
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
              </ol>
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="https://uberblogapi.10upcdn.com/1080x540/smart/blogapi.uber.com/wp-content/uploads/2020/12/UF_Truck_On_Road_B-0322-1024x683.jpg" class="d-block w-100" alt="...">
                      <div class="carousel-caption d-none d-md-block">
                          <h5 class="carousel-title">Moving the world, together</h5>
                          <p>Taking logistics in a new direction with an advanced platform for both shippers and carriers.</p>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <img src="https://www.uber-assets.com/image/upload/v1579293448/assets/aa/c57bd0-2541-49d4-9c21-90be8882beb3/original/3.-Section-Break---Desktop.png" class="d-block w-100" alt="...">
                      <div class="carousel-caption d-none d-md-block">
                          <h5 class="carousel-title">Freight always at your fingertips</h5>
                          <p>When shipping runs better, the whole world runs better too</p>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <img src="https://www.uber-assets.com/image/upload/v1579550245/assets/b6/45f710-ca89-426f-81f8-1dd51dcaba58/original/Carrier-Next---Desktop.png" class="d-block w-100" alt="...">
                      <div class="carousel-caption d-none d-md-block">
                          <h5 class="carousel-title">Direct access to immediate capacity</h5>
                          <p>Our single platform gives our clients the confidence and ability to move freight efficiently.</p>
                      </div>
                  </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
              </a>
          </div>
          <div class="bordeEquipo">
              <h2 class="estitloTiulo">SERVICES</h2>
          </div>
          <div class="servicesContainer">
            <div class="row">
              <div class="col-sm-6">
                <div class="card text-center">
                  <div class="card-body">
                    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1579807296/assets/99/1eefcc-0df5-47b3-b678-e815a16d4d54/original/UF-EMEA-Carrier.jpg" alt="Carrier" role="presentation" aria-hidden="true" class="bf bp d5 r7 r8">
                    <h5 class="card-title">Carriers</h5>
                    <p class="card-text">More flexible bookings. One tap away</p>
                    <a href="#" class="btn btn-secondary">Learn more</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card text-center">
                  <div class="card-body">
                  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1579805807/assets/e7/b2a0a8-769d-403d-83b9-34928b87da94/original/UF-EMEA-Shipper-Warehouse-Stacks-Patricia-08537.jpg" alt="Shipper" role="presentation" aria-hidden="true" class="bf bp d5 r7 r8">
                    <h5 class="card-title">Shippers</h5>
                    <p class="card-text">Tender shipments easily. Get quotes instantly.</p>
                    <a href="#"  class="btn btn-secondary">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <div>
        <home/>
      </div>
        <!-- Footer -->
      <footer class="page-footer bg-secondary text-white pt-4">
      
          <!-- Footer Text -->
          <div class="container-fluid text-center text-md-left">
      
              <!-- Grid row -->
              <div class="row">
      
                  <!-- Grid column -->
                  <div class="col-md-6 mt-md-0 mt-3">
      
                      <!-- Content -->
                      <p>Repositorio del proyecto</p>
                      <p>Creador: Grupo 41</p>
                      <p>Contacto: grupo41@misiontic.com</p>
      
                  </div>
                  <!-- Grid column -->
      
                  <hr class="clearfix w-100 d-md-none pb-3">
      
                  <!-- Grid column -->
                  <div class="col-md-6 mb-md-0 mb-3">
      
                      <!-- Content -->
                      <ui>
                          <li><a class="estilosVinvulos" href="https://www.w3schools.com/"  target="_blank">Politica de privacidad</a></li>
                          <li><a class="estilosVinvulos" href="https://www.w3schools.com/"  target="_blank">Condiciones de uso</a></li>
                          <li><a class="estilosVinvulos" href="https://www.w3schools.com/"  target="_blank">Declaracion de accesibilidad</a></li>
                      </ui>
      
                  </div>
                  <!-- Grid column -->
      
              </div>
              <!-- Grid row -->
      
          </div>
          <!-- Footer Text -->
      
          <!-- Copyright -->
          <div class="footer-copyright text-center py-1 bg-">Copyright ©️2020. DavidFender Musical Instruments Corporation. All Rights Reserved.
          </div>
          <!-- Copyright -->
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

  }
</script>

<style>
.carousel-inner{
  width:100%;
  max-height: 600px !important;
}

.carousel-caption {
   position: absolute;
   font-size: 18px;
   text-align: center;
   top: 15%
}

.carousel-title {
    font-size: 100px; 
}

 .carousel-caption p {
  font-size: 18px;
  position: relative
}
.estilosVinvulos {
    color: white;
}

.estilosVinvulos:link {
  text-decoration: none;
}

.estilosVinvulos:visited {
  text-decoration: none;
}

.estilosVinvulos:hover {
  text-decoration: underline;
}

.estilosVinvulos:active {
  text-decoration: underline;
}

.navbar {
  box-shadow: 0px 6px 6px #00000029;
}

.card-title {
  padding-top: 10px;
}

.card {
  border: none;
}

.servicesContainer {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-left: 150px; /* Added */
  margin-right: 150px;
  margin-top: 30px;
}

.card-title .card-text {
  text-align: center;
  color:white;
}

.estitloTiulo {
  align: center;

}

.bordeEquipo{
    border-style: solid;
    border-width: 0px 0px 2px 0px;
    margin-right: 60px;
    margin-left: 60px;
    border-color:black;
    text-align: center;
    padding-top: 30px;
}

.d-block {
  filter: brightness(80%);
}
</style>

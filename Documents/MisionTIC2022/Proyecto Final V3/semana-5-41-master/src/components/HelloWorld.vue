<template>
  <div>
    <div class="homeStyle">
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
                    <p class="card-text">We allow carries to colaborate with companies or individuals that need to move cargo, regardless if is a one time request or requerrent job. Throught our platofrm all the logistics are taken care off, tehy just need to take care of what they do best... get the cargo safe</p>
                    <v-btn v-on:click="newOrder" outlined rounded text>Create an order</v-btn>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card text-center">
                  <div class="card-body">
                  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1579805807/assets/e7/b2a0a8-769d-403d-83b9-34928b87da94/original/UF-EMEA-Shipper-Warehouse-Stacks-Patricia-08537.jpg" alt="Shipper" role="presentation" aria-hidden="true" class="bf bp d5 r7 r8">
                    <h5 class="card-title">Shippers</h5>
                    <p class="card-text">Tender shipments easily. Get quotes instantly.</p>
                    <p class="card-text">Shppers can get in touch with carries on demand, if tis your first time you can contact a widly range of carriesrs based on their prices, ratings and locations or if you are a recurrent user, you can schedule recurrent trips, whatever fits you to make sure your cargo arrives on time</p>
                    <v-btn v-on:click="newOrder" outlined rounded text>Create an order</v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="bordeEquipo">
          <h2 class="estitloTiulo">TESTIMONIALS</h2>
        </div>
        <div class="testimonials">
        <div class="test-body">
            <div class="item">
                <img src="https://www.trucks.com/wp-content/uploads/2017/08/truck-driver.jpg">
                <div class="name">Carlos Alvarez</div>
                <small class="desig">Truck Driver - Trucks and Loads ltd</small>
                <p>I have all my intinerary at the reach of my fingertrips. With Cargo Solutions I dont need to call my clients, everthing is organized and at the reach of my phone. I have save hours of logistics which now I can translate into better timing for my clietns</p>
            </div>
            <div class="item">
                <img src="https://images.squarespace-cdn.com/content/v1/57bb8a7cebbd1a30a1b103c6/1556750733659-AFHHV8OAYSOLRS8G210Y/ke17ZwdGBToddI8pDm48kFQp98f7P3-jcoxLKJST9qJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpy__tRYpc11rxxSibkaytA9Aoe7kBZPRlmkYY6m009pfJq96XqIwcOk4GcEiuRzrJc/megan-smith-symbia-ceo-headshot.jpg?format=500w">
                <div class="name">Sofia Murillo</div>
                <small class="desig">Logistics Manager - Cosco ltd</small>
                <p>I use to make docens of phone calls to arrenage a shippment. With Cargo Solution I can coordinate the shipment of the products and goods in a few minutes and evertime the order arrives when is sopposed to. I save millions by using Cargo software</p>
            </div>
            <div class="item">
                <img src="https://livedemo00.template-help.com/wt_prod-10943/images/testimonials-3-120x120.jpg">
                <div class="name">Pedro Salazar</div>
                <small class="desig">Accountat - Big Load Company</small>
                <p>The costs of shipment and logitstcs have dramatically declined since all of our shipments arrived on time and in top conditions. Those days of having the construction presonal waiting for the materials are gone, I recommend everyone to use Cargo Solutions</p>
            </div>
        </div> 
    </div>

          <v-footer padless>
            <v-col
              class="text-center"
              cols="12">
              {{ new Date().getFullYear() }} — <strong>Cargo Solutions</strong>
              <div style="padding: 5px" class="text-center">
            <v-btn
              v-on:click="logout"
              rounded
              color=black
              dark>
              Log Out
            </v-btn>
          </div>
            </v-col>
          </v-footer>
        </div>
      </div>
         
            
</template>
<script>
  export default {
    name: 'HelloWorld',
    methods: {
              logout() {
                localStorage.removeItem('token'),
                this.$router.push('/login')
              },

              newOrder() {
                this.$router.push('/articulos')
              }
            },
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
<style>

.homeStyle {
  background: white;
}
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
  align-items: center;

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


.EstiloImagen {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 250PX;
}

.borde{
    border-style: solid;
    border-width: 2px 0px 0px 0px;
    margin-right: 60px;
    margin-left: 60px;
    border-color:black;
    outline: 0;
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

.Team-container {
     margin-right: 60px;
    margin-left: 60px;
}

html{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
    font-weight: 200;
}

h1, h2, h3, h4 ,h5 ,h6, p{
    margin: 0;
    padding: 0;
}
body *{
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}


.testimonials{
    padding-bottom: 2.2em; 
    text-align: center;
    color: #666;
}
.testimonials h1{
    color: #222;
    font-size: 1.3em;
}
.testimonials .test-body{padding: 1em;}
.testimonials .item{ 
    text-align: center;
    padding: 1em 0;
}

.item{
  background-color: white;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 12px;
}
.testimonials img{
    width: 4.8em;
    height: 4.8em;
    border-radius: 50%;
}
.testimonials .name{color: blue;}
.testimonials .desig{
    font-size: 0.7em;
    padding: 0.5em 0;
    color: #777;
}
.testimonials .share{
    margin: 0 auto;
    width: 5em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
}
.testimonials i{
    color: white;
    padding: 0.5em 0;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    cursor: pointer;
}
.testimonials p{
    max-width: 27em;
    margin: 0 auto;
    font-size: 0.8em;
}


@media (min-width: 38.4rem){
    .testimonials{
        font-size: 1.2em;
    }
    .testimonials .test-body{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }
    .testimonials p{
        text-align: left;
        padding: 1em;
    }
}


</style>

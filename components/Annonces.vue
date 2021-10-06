<!-- Please remove this file from your project -->
<template>
<div>
  <section class="py-5">
            <div class="container px-4 px-lg-1 mt-5">
                <div class="row gx-2 gx-lg-3 row-cols-12 row-cols-md-4 row-cols-xl-4 justify-content-center">
                    <div class="col-xl-4 col-md-4 col-sm-12 mb-5">
                        <div class="btn rien"  @click="Transforme()">
                        <div class="card text-white">
                            <img src="~assets/image/inter.jpg" class="card-img" >
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text</p>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                
                            </div>
                            </div>
                            
                            </div>
                     </div>
                    </div>
                    <div class="col-xl-4 col-md-4 col-sm-12 mb-5">
                        <div class="btn rien"  @click="Transforme()">
                        <div class="card  text-white">
                            <img src="~assets/image/house1.jpg" class="card-img" >
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural</p>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            </div>
                            </div>
                            
                            </div>
                     </div>
                    </div> 
                    <div class="col-xl-4 col-md-4 col-sm-12 mb-5">
                        <div class="btn rien" @click="Transforme()">
                        <div class="card text-white">
                            <img src="~assets/image/house.jpg" class="card-img" >
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with</p>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            </div>
                            </div>

                        </div>
                     </div>
                    </div>
                </div>
            </div>
  </section>
  <div class="text-center"><button class="btn btn-outline-warning mt-auto" @click="Transforme()" >En savoir plus</button></div>
  <br>
  <hr class="container">
  <br>
  <Affichage :afficher="afficher" :Transforme="Transforme"/>
</div>
</template>

<script>
export default {

 data: function(){
     return{
    afficher:false
    }
 }, 
 methods:{
     Transforme(){
        this.afficher=!this.afficher
     }
 }
}
</script>

<style scoped>
.py-5{
    font-family: times sans-serif;
    font-size: 18px;
}
.card-tille{
    text-align:right;
}  
.card-img-overlay{
    margin-top:300px
}
.card-text{
    text-align:bottom;
}
   .card-img{
       height:460px;
   }
.rien{
    text-decoration: none;
}
.rien>.card:hover{
    margin-top:-10px;
    box-shadow:8px 3px 3px #D8D7D7

}
</style>

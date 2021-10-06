<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light color">
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand " style=" font-family: 'Open Sans', sans-serif;" href="#!"><!--<img class="im" src="~assets/image/logo1.jpg"/>--> SosMaison</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-3 mb-lg-0 ms-lg-4">
                            <li class="nav-item"><NuxtLink class="nav-link" to="/#Acceuil">Accueil</NuxtLink></li>
                            <li class="nav-item"><NuxtLink class="nav-link" to="/#Apropos">A Propos</NuxtLink></li>
                            <li class="nav-item"><NuxtLink class="nav-link" to="/#Team">Notre Team</NuxtLink></li>
                            <li class="nav-item"><NuxtLink class="nav-link" to="#">Contact</NuxtLink></li>
                        </ul>
                       <div class="connection">
                       <div class="nav-link" id="bt" @click="toggleModale()">Se connecter</div>
                       </div>
                    </div>
                </div>
            </nav>
            <!-- Header-->
            <header class="back py-5" id="Acceuil">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-4 fw-bolder">Sos Maison</h1>
                        <p class="lead fw-normal text-white-50 mb-0">la platfrome en ligne qui vous facilite la recherche immobilièere</p>
                    </div>
                </div>
            </header>
            <div class="block container">
             <form class="row g-3">
                <div class="col-xl-5 col-md-5 col-sm-5 col-xs-12">
                    <label  class="visually-hidden">Email</label>
                    <input type="text"  class="form-control"  placeholder="localite">
                </div>
                <div class="col-xl-5 col-md-5 col-sm-5 col-xs-12">
                    <label  class="visually-hidden">Password</label>
                    <input type="text" class="form-control"  placeholder="prix">
                </div>
                <div class="col-xl-2 col-md-2 col-sm-2 col-xs-12 ici">
                    <button type="submit" class="btn btn-perso mb-1">Recherche</button>
                </div>
            </form>
            </div>
 <Nuxt />
 <Connexion :revele="revele" :toggleModale="toggleModale"/>
 <footer class="py-5 bg-dark">
                <div class="container">
                <br>
                <br>
                <p class="mt-10 text-center text-white">Copyright &copy; Your Website 2021</p>
                </div>
        </footer>
        </div>
</template>

<script>
export default {

head:{

    script: [
        {
            src: 'https://kit.fontawesome.com/c2ac644b87.js',
        },
        
        {
        src:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js',
        body: true
    },
    {
        src:'js/scripts.js',
        body:true
    }
    
    ]
  },
  
data: function(){
return{
  revele:false 
}

},
methods:{
    toggleModale(){
        this.revele = !this.revele
    }
}
}
</script>

<style scoped>
.im{
    height:50px;
    width:50px;
}
.nuxt-link-active{
    border-bottom:solid 2px orange;
}
.form-control{
    height:75px;
    border: none;
    background:#E3E0E0;
}
.btn-perso{
    border: solid 1px orange;
    height:75px;
    border-radius: 10px;
    color:orange;
}
.btn-perso:hover{
    border: solid 1px orange;
    height:75px;
    background:orange;
    border-radius: 10px;
    color:black;
}
.block{
    padding-left:70px;
    padding-top:25px;
    /*margin-left:auto;
    margin-right:auto;
    width:725px;*/
    margin-top:-60px;
    height:120px;
    background: white;
    border:solid 2px #F7F3F2;
    border-radius:5px;
    box-shadow:2px 2px 2px #D8D7D7  
}
.py-5{
    height:200px
}
@media screen and (max-width: 559px) {
  .block{
    padding:5px 5px 5px 5px;
    height:270px;
    background: white;
    border:solid 2px #F7F3F2;
    border-radius:5px;
    margin-top:-100px;
    width:350px;
    box-shadow:2px 2px 2px #D8D7D7
}
.ici{
    margin-left:auto;
    margin-right:auto;
    width:120px;
}
}
 .nav-link{
   text-align:center;
 }
 .active{
      border-bottom:solid 3px orange;
      color: orange;
 }
 
 .nav-link:hover{
   color: orange;
 }
/*.bg-light{
    background-color: white;
}*/
.color{
     background-color: white;
}
#bt{
    border: solid 1px green;
    color:black;
    border-radius: 25px;
}
#bt:hover{
    border: solid 1px;
    color:white;
    background: green;
    border-radius: 25px;
}
.back{
    background: url("~assets/image/inter.jpg");
    height:450px
}
.connection{
    text-decoration:none;
    padding:2px 2px 2px 2px;
    border: solid 1 green;

}
.mod{
    font-family: 'Open Sans', sans-serif;
    font-family: 'Roboto', sans-serif;
}
button{
    background:none;
}
</style>


<template>
<div class="bloc-modal" v-if="afficher">

<div class="overlay" @click="Transforme"></div>
     <div class="modale card">
        <p class="para">Vous dévez préalablement vous connecter pour acceder a plus de contenu.</p>
    </div>
</div>
</template>
<script>
export default {

    props:['afficher','Transforme'],

}
</script>
<style>
.overlay{
  background:rgb(0,0,0,0.5);
  position:fixed;
  top: 0;
  bottom:0;
  left:0;
  right:0;
}
.para{
    color:red;
    font-size:18px;
    font-family:times sans-serif;
}
.bloc-modal{
  position:fixed;
  top: 0;
  bottom:0;
  left:0;
  right:0;
  display:flex;
  justify-content:center;
  align-Items:center;
}
.modale{
    position:fixed; 
    padding:45px;
    margin-top:-15%;

}
</style>
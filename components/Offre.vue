<template>
    <div class="container-fluid">
     <div class="row">
       <div class="col-md-5">
       <p class="centrer"><i class="fas fa-house-user"></i> <span class="valeur">.205</span></p>
       </div>
       <div class="col-md-2">
       <p class="trait"><hr></p>
       </div>
       <div class="col-md-5">
       <p class="centrer"><i class="fas fa-key"></i> <span class="valeur">.401</span></p>
       </div>
     </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.centrer{
    text-align: center;
}
.trait>hr{
    color:orange;
}
.valeur{
    font:bolder;
    font-size:40px;
}
.fas{
    color: #F7695B ;
    font-size:55px;
}
.container-fluid{
    background:#D4CFCE ;
    margin-top:40px;
    padding: 65px
}
</style>
<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">COVID</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/pacientes" class="nav-link">Pacientes</a>
        </li>
        <li class="nav-item">
          <a href="/adicionar" class="nav-link">Adicionar Paciente</a>
        </li>
      </div>
    </nav>


  <!--   <div class="form-row">
    <div class="col-md-4 mb-3">
    <img src="./assets/medico-no-computador.jpg" alt="Cadastro Covid" 
    width="300" height="200">

    </div>

    <div class="col-md-8 mb-3">
      <h5> Seja Bem Vindo! <br> Você Está na Central de Cadastro da COVID-19</h5>

    </div>
    </div> -->



    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body{
  background:rgba(158, 230, 200, 0.445);
}
img{
  margin-top:20px;
  margin-left: 60px;
  border-style:solid;
}
h5{
  margin-top:60px;
  margin-right:80px;
  text-align: center;
}

</style>
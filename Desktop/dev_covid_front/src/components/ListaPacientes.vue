<!-- ESTRUTURA -->

<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Lista de Pacientes</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(paciente, index) in pacientes"
          :key="index"
          @click="selecionarPaciente(paciente, index)"
        >{{ paciente.nome }}</li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removerTodosPacientes()">Excluir Pacientes</button>
    </div>
    <div class="col-md-6">
      <div v-if="currentPaciente">
        <h4>Paciente</h4>
        <div>
          <label>
            <strong>Nome:</strong>
          </label>
          {{ currentPaciente.nome }}
        </div>

         <div>
          <label>
            <strong>UF:</strong>
          </label>
          {{ currentPaciente.uf }}
        </div>

         <div>
          <label>
            <strong>Cidade:</strong>
          </label>
          {{ currentPaciente.cid }}
        </div>

         <div>
          <label>
            <strong>Endereço:</strong>
          </label>
          {{ currentPaciente.end }}
        </div>

         <div>
          <label>
            <strong>Nº:</strong>
          </label>
          {{ currentPaciente.num }}
        </div>

         <div>
          <label>
            <strong>Telefone:</strong>
          </label>
          {{ currentPaciente.tel }}
        </div>

         <div>
          <label>
            <strong>Peso:</strong>
          </label>
          {{ currentPaciente.peso }}
        </div>

         <div>
          <label>
            <strong>Altura:</strong>
          </label>
          {{ currentPaciente.alt }}
        </div>

         <div>
          <label>
            <strong>Problemas de Saude:</strong>
          </label>
          {{ currentPaciente.prob_saude }}
        </div>

        <a class="badge badge-warning" :href="'/pacientes/' + currentPaciente.id">Editar Paciente</a>
      </div>
      <div v-else>
        <h4>Dados do Paciente</h4>
        <p>Por favor, selecione um paciente!</p>
      </div>
    </div>
  </div>
</template>

<!-- COMPORTAMENTO -->

<script>
import PacienteWS from "../services/PacientesWS";
export default {
  name: "listarPacientes",
  data() {
    return {
      pacientes: [],
      currentIndex: -1,
      currentPaciente: null,
      nome: ""
    };
  },
  methods: {
    obterPacientes() {
      PacienteWS.getPacientes()
        .then(pacientes => {
          this.pacientes = pacientes.data;
          console.log(this.pacientes);
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    refreshPacientes() {
      this.obterPacientes();
      this.currentPaciente = null;
      this.currentIndex = -1;
    },
    selecionarPaciente(paciente, index) {
      this.currentPaciente = paciente;
      this.currentIndex = index;
    },
    removerTodosPacientes() {
      PacienteWS.deletarTodosPacientes()
        .then(response => {
          console.log(response.data);
          this.refreshPacientes();
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },
  mounted() {
    this.obterPacientes();
  }
};
</script>

<!-- ESTILIZAÇÃO -->

<style>
    .list{
        text-align: left;
        max-width: 750px;
        margin: auto;
    }
</style>
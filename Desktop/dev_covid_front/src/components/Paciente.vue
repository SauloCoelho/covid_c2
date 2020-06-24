<template>
    <div v-if="currentPaciente" class="edit-form">
        <h4>Paciente</h4>
        <form>
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" v-model="currentPaciente.nome">
            </div>

            <div class="form-group">
                <label for="uf">UF</label>
                <input type="text" class="form-control" id="uf" v-model="currentPaciente.uf">
            </div>

            <div class="form-group">
                <label for="cid">Cidade</label>
                <input type="text" class="form-control" id="cid" v-model="currentPaciente.cid">
            </div>

            <div class="form-group">
                <label for="end">Endereço</label>
                <input type="text" class="form-control" id="end" v-model="currentPaciente.end">
            </div>

            <div class="form-group">
                <label for="num">Nº</label>
                <input type="text" class="form-control" id="num" v-model="currentPaciente.num">
            </div>

            <div class="form-group">
                <label for="tel">Telefone</label>
                <input type="text" class="form-control" id="tel" v-model="currentPaciente.tel">
            </div>

            <div class="form-group">
                <label for="peso">Peso</label>
                <input type="text" class="form-control" id="peso" v-model="currentPaciente.peso">
            </div>

            <div class="form-group">
                <label for="alt">Altura</label>
                <input type="text" class="form-control" id="alt" v-model="currentPaciente.alt">
            </div>

            <div class="form-group">
                <label for="prob_saude">Problemas de Saude</label>
                <input type="text" class="form-control" id="prob_saude" v-model="currentPaciente.prob_saude">
            </div>

        </form>
        <button class="badge badge-danger mr-2" @click="deletarPaciente">Deletar Paciente</button>
        <button type="submit" class="badge badge-success mr-2" @click="atualizarPaciente">Atualizar Paciente</button>
        <p>
            {{ message }}
        </p>
    </div>
    <div v-else>
        <p>
            Por favor, selecione um paciente!!!
        </p>
    </div>
</template>

<script>
    import PacienteWS from "../services/PacientesWS";
    export default {
        name: "paciente",
        data(){
            return {
                currentPaciente: null,
                message: ''
            }
        }, 
        methods: {
            getPaciente(id){
                PacienteWS.getPacienteID(id)
                    .then(paciente => {
                        this.currentPaciente = paciente.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            deletarPaciente(){
                PacienteWS.deletarPacienteID(this.currentPaciente.id)
                    .then(response => {
                        console.log(response.data);
                        this.message = 'O paciente foi deletado com sucesso!'
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            },
            atualizarPaciente(){
                PacienteWS.atualizarPaciente(this.currentPaciente.id, this.currentPaciente)
                    .then(response => {
                        console.log(response.data);
                        this.message = "Paciente atualizado com sucesso!"
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            }
        },
        beforeMount(){
            this.message = '',
            this.getPaciente(this.$route.params.id);
        }
    }
</script>

<style>
</style>
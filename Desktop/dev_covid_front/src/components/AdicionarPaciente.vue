<template>

    <div class="submit-form">
        <div class="form-row">
            <div class="col-md-12 mb-3">
            <label for="nome">Nome</label>
            <input 
                type="text" 
                class="form-control"
                id="nome"
                required
                v-model="paciente.nome"
                name="nome"          
            />
         
        </div>

    <div class="col-md-2 mb-3">
        <div class="form-group">
            <label for="uf">UF</label>
            <select class="custom-select" id="uf" required
            v-model="paciente.uf"
            name="uf">
              <option selected disabled value=""></option>
              <option>AC</option>
              <option>AL</option>
              <option>AM</option>
              <option>AP</option>
              <option>BA</option>
              <option>CE</option>
              <option>DF</option>
              <option>ES</option>
              <option>GO</option>
              <option>MA</option>
              <option>MG</option>
              <option>MS</option>
              <option>MT</option>
              <option>PA</option>
              <option>PB</option>
              <option>PE</option>
              <option>PI</option>
              <option>PR</option>
              <option>RJ</option>
              <option>RN</option>
              <option>RO</option>
              <option>RR</option>
              <option>RS</option>
              <option>SC</option>
              <option>SE</option>
              <option>SP</option>
              <option>TO</option>
            </select>
             
            
            
        </div>
    </div>
    
    <div class="col-md-10 mb-3">
        <div class="form-group">
            <label for="cid">Cidade</label>
            <input 
                type="text" 
                class="form-control"
                id="cid"
                required
                v-model="paciente.cid"
                name="cid"
            />
        </div>
    </div>
    </div>

        <div class="form-row">
            <div class="col-md-10 mb-3">
            <label for="end">Endereço</label>
            <input 
                type="text" 
                class="form-control"
                id="end"
                required
                v-model="paciente.end"
                name="end"
            />
        </div>
        

    <div class="col-md-2 mb-3">
        <div class="form-group">
            <label for="num">Nº</label>
            <input 
                type="text" 
                class="form-control"
                id="num"
                required
                v-model="paciente.num"
                name="num"
            />
        </div>
    </div>
    </div>

        <div class="form-group">
            <label for="tel">Telefone</label>
            <input 
                type="text" 
                class="form-control"
                id="tel"
                required
                v-model="paciente.tel"
                name="tel"
            />
        </div>

        <div class="form-row">
            <div class="col-md-6 mb-3">
            <label for="peso">Peso (kg)</label>
            <input 
                type="text" 
                class="form-control"
                id="peso"
                required
                v-model="paciente.peso"
                name="peso"
            />
        </div>

        
            <div class="col-md-6 mb-3">
            <label for="alt">Altura (cm)</label>
            <input 
                type="text" 
                class="form-control"
                id="alt"
                required
                v-model="paciente.alt"
                name="alt"
            />
        
        </div>
        </div>

        <div class="form-group">
            <label for="prob_saude">Problemas de Saude (caso não tenha digite "saudavel" ou "nenhum")</label>
            <input 
                type="text" 
                class="form-control"
                id="prob_saude"
                required
                v-model="paciente.prob_saude"
                name="prob_saude"
            />
        </div>

        

        <button @click="inserirPaciente" class="btn btn-success">Inserir Paciente</button>
    
    </div>
    
</template>

<script>
    import PacienteWS from '../services/PacientesWS';
    export default {
        name: "adicionarPaciente",
        data(){
            return {
                paciente: {
                    id: "",
                    nome: "",
                    uf: "",
                    cid: "",
                    end: "",
                    num: "",
                    tel: "",
                    peso: "",
                    alt: "",
                    prob_saude: ""
                }
            }
        },
        methods: {
            inserirPaciente(){
                let dadosPaciente = {
                    nome: this.paciente.nome,
                    uf: this.paciente.uf,
                    cid: this.paciente.cid,
                    end: this.paciente.end,
                    num: this.paciente.num,
                    tel: this.paciente.tel,
                    peso: this.paciente.peso,
                    alt: this.paciente.alt,
                    prob_saude: this.paciente.prob_saude
                }
                PacienteWS.criarPaciente(dadosPaciente)
                    .then(response => {
                        this.paciente.id = response.data.id;
                        console.log(this.paciente.id);
                    }).catch(error => {
                        console.log(error.message);
                    })
            }
        }
    }
</script>

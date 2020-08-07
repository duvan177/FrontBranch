<template>
  <div>
    <form ref="formVisitor" id="formVisitor" @submit="sendVisitor">
      <div class="form-group mt-2">
        <label for="state" class="text-black text-form">Departamento*</label>
        <select v-model="state" @change="SelectSite" class="form-control" name="state" id="state">
          <option selected>Selecciona departamento</option>
          <option v-for="site in states" :key="site" v-text="site"></option>
        </select>
      </div>
      <div class="form-group">
        <label for="city" class="text-black text-form">Cuidad*</label>
        <select :disabled="status" v-model="city" class="form-control" name="city" id="city">
          <option v-text="city" v-for="(city,index) in citys" :key="index"></option>
        </select>
      </div>

      <div class="form-group">
        <label for="name" class="text-black text-form">Nombre*</label>
        <input v-model="name" type="text" class="form-control" name="name" id="name" />
      </div>
      <div class="form-group">
        <label for="email" class="text-black text-form">Correo*</label>
        <input v-model="email" type="email" class="form-control" id="email" name="email" />
      </div>
      <div class="form-group d-flex justify-content-center">
        <button
          :disabled="!res"
          type="submit"
          class="btn rounded-pill text-white mt-3 w-50"
          style="background: #e03b65; font-weight: bold; height: 50px"
        >
          <span v-show="res">ENVIAR</span>
          <div v-show="!res" class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Apis from "../assets/apis";
import axios from "axios";
export default {
  components: {},
  props: ["stateColombia", "action"],
  data() {
    return {
      varprueba: "desde front",
      res: true,
      status: false,
      states: [],
      citys: [],
      respStates: {},
      // variables del formulario
      name: "",
      email: "",
      state: "",
      city: "",
      // end variables
    };
  },
  async created() {
    
  
    console.log("antes de montar");
    try {
      const response = await axios.get(Apis.URL.URL_COLOMBIA);
      
      this.respStates = response.data;
      Object.keys(response.data).map((item) => this.states.push(item));
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async sendVisitor(e) {
      e.preventDefault();

      this.res = false;

      try {
        var response = await axios.post(Apis.baseURL + Apis.URL.URL_CONTACT, {
          name: this.name,
          email: this.email,
          state: this.state,
          city: this.city,
        });
        setTimeout(() => {
          $("#success").toast("show");
          this.action(response.data.message);
          this.res = true;
          this.name = "";
          this.email = "";
          this.state = "";
          this.city = "";
        }, 3000);
        console.log(response);
      } catch (error) {
        this.action('Error, intentalo mas tarde');
        console.log(error);
      }
    },
    SelectSite(e) {
      this.citys = this.respStates[e.target.value];
    },
  },
  mounted() {},
};
</script>

<style>
</style>
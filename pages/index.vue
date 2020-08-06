<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 d-flex flex-column col-12 mt-5">
          <img
            src="https://sigma-studios.s3-us-west-2.amazonaws.com/test/sigma-logo.png"
            class="rounded mx-auto d-block"
          />
          <h2 class="text-center my-4 text-form">Prueba de desarrollo Sigma</h2>
          <div class="col-md-8 offset-md-2">
            <h6
              class="text-center"
              style="color: gray; "
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis voluptates nihil assumenda aperiam, optio nam accusantium minima ullam vel itaque ipsa dicta. Vel aliquam animi autem odio nesciunt et?</h6>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-sm-12 col-md-6">
          <img
            class="img-fluid"
            src="https://sigma-studios.s3-us-west-2.amazonaws.com/test/sigma-image.png"
            alt
          />
        </div>
        <div class="col-sm-12 col-md-6 mb-5">
          <div
            class="card shadow border-0 col-md-11 col-sm-12"
            style="border-radius: 15px 30px 30px 30px !important"
          >
            <div class="card-body p-5">
              <card-form  :action="getMessageAlert" />
            </div>
            
          </div>
        </div>
      </div>
    </div>

  <div data-delay="3000" id="success" class="toast" style="position: absolute; top: 0; right: 0;">
    <div class="toast-header">
      <!-- <img src="..." class="rounded mr-2" alt="..."> -->
      <strong class="mr-auto">Notificacion</strong>
      <small>11 mins ago</small>
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div  class="toast-body">
      {{textAlert}}
    </div>
  </div>

  </div>
</template>

<script>
import CardForm from "~/components/CardFormComponent";
export default {
  components: {
    CardForm,
  },
  data() {
    return {
      textAlert:"hola bebe desde el padre",
    };
  },
  methods: {
    getMessageAlert(text){
     this.textAlert = text;
    }
  },
  mounted() {

  }
};
</script>

<style>
.text-form {
  font-weight: bold;
}
</style>

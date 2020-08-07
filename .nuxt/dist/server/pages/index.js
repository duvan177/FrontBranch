exports.ids = [1];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".text-form{font-weight:700}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=d9d25d8c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-md-12 d-flex flex-column col-12 mt-5\"><img src=\"https://sigma-studios.s3-us-west-2.amazonaws.com/test/sigma-logo.png\" class=\"rounded mx-auto d-block\"> <h2 class=\"text-center my-4 text-form\">Prueba de desarrollo Sigma</h2> <div class=\"col-md-8 offset-md-2\"><h6 class=\"text-center\" style=\"color: gray; \">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis voluptates nihil assumenda aperiam, optio nam accusantium minima ullam vel itaque ipsa dicta. Vel aliquam animi autem odio nesciunt et?</h6></div></div></div> "),_vm._ssrNode("<div class=\"row mt-3\">","</div>",[_vm._ssrNode("<div class=\"col-sm-12 col-md-6\"><img src=\"https://sigma-studios.s3-us-west-2.amazonaws.com/test/sigma-image.png\" alt class=\"img-fluid\"></div> "),_vm._ssrNode("<div class=\"col-sm-12 col-md-6 mb-5\">","</div>",[_vm._ssrNode("<div class=\"card shadow border-0 col-md-11 col-sm-12\" style=\"border-radius: 15px 30px 30px 30px !important\">","</div>",[_vm._ssrNode("<div class=\"card-body p-5\">","</div>",[_c('card-form',{attrs:{"action":_vm.getMessageAlert}})],1)])])],2)],2),_vm._ssrNode(" <div data-delay=\"3000\" id=\"success\" class=\"toast\" style=\"position: absolute; top: 0; right: 0;\"><div class=\"toast-header\"><strong class=\"mr-auto\">Notificacion</strong> <small>11 mins ago</small> <button type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\" class=\"ml-2 mb-1 close\"><span aria-hidden=\"true\">×</span></button></div> <div class=\"toast-body\">"+_vm._ssrEscape("\n    "+_vm._s(_vm.textAlert)+"\n  ")+"</div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=d9d25d8c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardFormComponent.vue?vue&type=template&id=67c63aa0&
var CardFormComponentvue_type_template_id_67c63aa0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form id=\"formVisitor\">","</form>",[_vm._ssrNode("<div class=\"form-group mt-2\">","</div>",[_vm._ssrNode("<label for=\"state\" class=\"text-black text-form\">Departamento*</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.state),expression:"state"}],staticClass:"form-control",attrs:{"name":"state","id":"state"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.state=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.SelectSite]}},[_c('option',{attrs:{"selected":""}},[_vm._v("Selecciona departamento")]),_vm._v(" "),_vm._l((_vm.states),function(site){return _c('option',{key:site,domProps:{"textContent":_vm._s(site)}})})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label for=\"city\" class=\"text-black text-form\">Cuidad*</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.city),expression:"city"}],staticClass:"form-control",attrs:{"disabled":_vm.status,"name":"city","id":"city"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.city=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.citys),function(city,index){return _c('option',{key:index,domProps:{"textContent":_vm._s(city)}})}),0)],2),_vm._ssrNode(" <div class=\"form-group\"><label for=\"name\" class=\"text-black text-form\">Nombre*</label> <input type=\"text\" name=\"name\" id=\"name\""+(_vm._ssrAttr("value",(_vm.name)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for=\"email\" class=\"text-black text-form\">Correo*</label> <input type=\"email\" id=\"email\" name=\"email\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"form-control\"></div> <div class=\"form-group d-flex justify-content-center\"><button"+(_vm._ssrAttr("disabled",!_vm.res))+" type=\"submit\" class=\"btn rounded-pill text-white mt-3 w-50\" style=\"background: #e03b65; font-weight: bold; height: 50px\"><span"+(_vm._ssrStyle(null,null, { display: (_vm.res) ? '' : 'none' }))+">ENVIAR</span> <div role=\"status\" class=\"spinner-border text-light\""+(_vm._ssrStyle(null,null, { display: (!_vm.res) ? '' : 'none' }))+"><span class=\"sr-only\">Loading...</span></div></button></div>")],2)])}
var CardFormComponentvue_type_template_id_67c63aa0_staticRenderFns = []


// CONCATENATED MODULE: ./components/CardFormComponent.vue?vue&type=template&id=67c63aa0&

// CONCATENATED MODULE: ./assets/apis.js
/* harmony default export */ var apis = ({
  baseURL: "http://174.138.40.79:5000/",
  URL: {
    URL_COLOMBIA: "https://cors-anywhere.herokuapp.com/https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json",
    URL_CONTACT: "api/contact"
  }
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardFormComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CardFormComponentvue_type_script_lang_js_ = ({
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
      city: "" // end variables

    };
  },

  async created() {
    console.log("antes de montar");

    try {
      const response = await external_axios_default.a.get(apis.URL.URL_COLOMBIA);
      this.respStates = response.data;
      Object.keys(response.data).map(item => this.states.push(item));
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async sendVisitor(e) {
      e.preventDefault();
      this.res = false;

      try {
        var response = await external_axios_default.a.post(apis.baseURL + apis.URL.URL_CONTACT, {
          name: this.name,
          email: this.email,
          state: this.state,
          city: this.city
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
    }

  },

  mounted() {}

});
// CONCATENATED MODULE: ./components/CardFormComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CardFormComponentvue_type_script_lang_js_ = (CardFormComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CardFormComponent.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CardFormComponentvue_type_script_lang_js_,
  CardFormComponentvue_type_template_id_67c63aa0_render,
  CardFormComponentvue_type_template_id_67c63aa0_staticRenderFns,
  false,
  injectStyles,
  null,
  "2f4919f9"
  
)

/* harmony default export */ var CardFormComponent = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    CardForm: CardFormComponent
  },

  data() {
    return {
      textAlert: "hola bebe desde el padre"
    };
  },

  methods: {
    getMessageAlert(text) {
      this.textAlert = text;
    }

  },

  mounted() {}

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  null,
  "76b34bb4"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
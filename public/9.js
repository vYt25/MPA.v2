(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../plugins/i18n */ "./resources/js/plugins/i18n.js");
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
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      username: "",
      password: "",
      csrf: null,
      error: {
        email: false,
        password: false
      }
    };
  },
  created: function created() {
    this.getCsrf();
    _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].locale = this.$store.state.language;
  },
  methods: {
    handleChangeLanguage: function handleChangeLanguage(obj) {
      this.$store.commit("CHANGE_LANGUAGE", obj);
      _plugins_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].locale = obj.locale;
    },
    login: function login() {
      var _this = this;

      if (!this.username && !this.password) {
        return false;
      } else {
        this.loading = true;
        axios.post('api/MPALogin', {
          email: this.username,
          password: this.password,
          Password: md5(this.password)
        }).then(function (res) {
          // console.log(res.data.email !== undefined && res.data.password !== undefined)
          // console.log(res.data.email !== undefined)
          // console.log(res.data.password !== undefined)
          if (res.data.email !== undefined && res.data.password !== undefined) {
            _this.error.email = true;
            _this.error.password = true;
          } else if (res.data.email !== undefined || res.data == 'Invalid Email') {
            _this.error.password = false;
            _this.error.email = true;
          } else if (res.data.password !== undefined || res.data == 'Invalid Password') {
            _this.error.password = true;
            _this.error.email = false;
          } else {
            _this.error.email = false;
            _this.error.password = false;
            axios.defaults.headers = {
              Authorization: "Bearer ".concat(res.data.token)
            };
            var x = res.data;
            delete x.token;

            _this.$store.commit("SET_USER_DATA", res.data); //  if(res.data.AccessLevel == 1){
            //     window.location.href = `${window.location.protocol}//${window.location.host}/appplication_list`
            // }else{
            //     // window.location.href = `${window.location.protocol}//${window.location.host}/home`
            // }

          }

          setTimeout(function () {
            _this.loading = false;
          }, 200);
        })["catch"](function (err) {
          console.log(err);
        });
      }
    },
    getCsrf: function getCsrf() {
      this.csrf = document.querySelector('meta[name="csrf-token"]').content;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "", "fill-height": "" } },
    [
      _c(
        "v-row",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: {
                "offset-y": "",
                transition: "slide-y-transition",
                bottom: "",
                rounded: ""
              },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._g(
                          _vm._b(
                            { attrs: { icon: "" } },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                "border-style": "solid",
                                "border-width": "thin"
                              }
                            },
                            [
                              _c("v-img", {
                                attrs: {
                                  "aspect-ratio": "16/9",
                                  width: "30",
                                  height: "20",
                                  src:
                                    _vm.$store.state.language == "english"
                                      ? "/images/Us.jpg"
                                      : "/images/Japan.jpg"
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  }
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                { attrs: { color: "#ECEFF1" } },
                _vm._l(_vm.$store.state.languageList, function(flag, i) {
                  return _c(
                    "v-list-item",
                    {
                      key: i,
                      on: {
                        click: function($event) {
                          return _vm.handleChangeLanguage(flag)
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-item-title",
                        [
                          _c("v-img", {
                            attrs: {
                              "aspect-ratio": "16/9",
                              width: "30",
                              height: "20",
                              src:
                                i == 0 ? "/images/Us.jpg" : "/images/Japan.jpg",
                              alt: flag.name
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { "align-center": "", "justify-center": "" } },
        [
          _c(
            "v-card",
            {
              staticClass: "mx-auto elevation-20 pl-3 pr-3",
              staticStyle: { "border-radius": "10px" },
              attrs: { "max-width": "700px" }
            },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      staticStyle: {
                        "background-color": "#80CBC4",
                        "border-radius": "10px 0px 0px 10px",
                        "border-bottom": "20px solid #80CBC4",
                        "border-top": "20px solid #80CBC4"
                      },
                      attrs: { cols: "12", md: "7", sm: "7" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { staticClass: "mt-4" },
                            [
                              _c("v-img", {
                                attrs: {
                                  src: "images/mpav2.png",
                                  alt: "lagyan mo img"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: {
                            width: "100%",
                            "text-align": "center",
                            "font-style": "italic",
                            "text-decoration": "underline"
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.$t("mpa")) +
                              "\n                        "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticStyle: { "text-align": "center" },
                      attrs: { cols: "12", md: "5", sm: "5" }
                    },
                    [
                      _c(
                        "v-card-title",
                        {
                          staticClass: "mt-3 text-center",
                          staticStyle: {
                            display: "inherit",
                            "font-size": "20px",
                            "font-weight": "bold"
                          },
                          attrs: { col: "12" }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.$t("login")) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "text--primary mt-5 mx-2" },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "prepend-icon": "mdi-email",
                              type: "text",
                              error: _vm.error.email,
                              "error-messages": _vm.error.email
                                ? "Invalid Email"
                                : null,
                              label: _vm.$t("email")
                            },
                            on: {
                              keyup: function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                return _vm.login()
                              }
                            },
                            model: {
                              value: _vm.username,
                              callback: function($$v) {
                                _vm.username = $$v
                              },
                              expression: "username"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              id: "password",
                              label: _vm.$t("password"),
                              error: _vm.error.password,
                              "prepend-icon": "mdi-lock",
                              type: "password",
                              "error-messages": _vm.error.password
                                ? "Invalid Password"
                                : null
                            },
                            on: {
                              keyup: function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                return _vm.login()
                              }
                            },
                            model: {
                              value: _vm.password,
                              callback: function($$v) {
                                _vm.password = $$v
                              },
                              expression: "password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                raised: "",
                                loading: _vm.loading,
                                disabled: !_vm.username || !_vm.password,
                                color: "#80CBC4",
                                width: "120"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.login()
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("login")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Login.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/pages/Login.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_4fe3757a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4fe3757a& */ "./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_4fe3757a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_4fe3757a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Login.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/Login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4fe3757a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=4fe3757a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Login.vue?vue&type=template&id=4fe3757a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4fe3757a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4fe3757a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
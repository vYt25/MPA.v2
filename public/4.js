(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Department.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Department.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
      departments: [],
      EditDeptDialog: false,
      edit: {},
      overlay: true,
      saveBtnState: false,
      search: '',
      UpdateButton: false
    };
  },
  computed: {
    FilterDepartments: function FilterDepartments() {
      var _this = this;

      if (!!this.search) {
        return this.departments.filter(function (rec) {
          return rec.DepartmentNameEng.toLowerCase().includes(_this.search) || rec.DepartmentNameJap.toLowerCase().includes(_this.search);
        });
      } else {
        return this.departments;
      }
    }
  },
  watch: {
    edit: {
      handler: function handler(val) {
        var _this2 = this;

        setTimeout(function () {
          _this2.saveBtnState = $('.error--text').length > 0;
        }, 50);
      },
      deep: true
    }
  },
  created: function created() {
    this.getDepartment();
  },
  methods: {
    UpdateDepartment: function UpdateDepartment() {
      var _this3 = this;

      this.UpdateButton = true;

      if ($('.error--text').length == 0) {
        setTimeout(function () {
          axios.post('/api/UpdateDepartment', _this3.edit).then(function (res) {
            _this3.getDepartment();

            _this3.EditDeptDialog = false;
            _this3.edit = {};
            _this3.UpdateButton = false;
          });
        }, 200);
      }
    },
    requiredRule: function requiredRule(value) {
      if (value instanceof Array && value.length == 0) {
        return 'Required.';
      } else {
        return !!value || 'Required.';
      }
    },
    emailRule: function emailRule(value) {
      var ctr = 0; // if(!value === undefined){

      value.forEach(function (rec) {
        if (!/.+@.+/.test(rec)) {
          ctr++;
        }
      }); //  }

      return ctr != 0 ?  false || 'E-mail must be valid' : true;
    },
    editRow: function editRow(dept) {
      var i = this.departments.findIndex(function (rec) {
        return rec.id == dept.id;
      });
      this.EditDeptDialog = true;
      this.edit = JSON.parse(JSON.stringify(this.departments[i]));
      this.edit.DcCode = this.edit.DcCode != "" && this.edit.DcCode != null ? this.edit.DcCode.split(',') : null;
      this.edit.McJaEmails = this.edit.McJaEmails != null ? this.edit.McJaEmails.split(',') : null;
      this.edit.McStaffEmails = this.edit.McStaffEmails != null ? this.edit.McStaffEmails.split(',') : null;
      this.edit.ProductionJaEmails = this.edit.ProductionJaEmails != null ? this.edit.ProductionJaEmails.split(',') : null;
      this.edit.ProductionStaffEmails = this.edit.ProductionStaffEmails != null ? this.edit.ProductionStaffEmails.split(',') : null;
      this.edit.FaCustotianEmails = this.edit.FaCustotianEmails != null ? this.edit.FaCustotianEmails.split(',') : null;
      this.edit.AccountingEmails = this.edit.AccountingEmails != null ? this.edit.AccountingEmails.split(',') : null; // this.edit.AccountingEmails = this.edit.fa_custodian != null ? this.edit.fa_custodian.split(',') : null
      // this.edit.accounting = this.edit.accounting != null ? this.edit.accounting.split(',') : null
    },
    getDepartment: function getDepartment() {
      var _this4 = this;

      axios.get('/api/GetDepartment').then(function (res) {
        _this4.departments = res.data;
        _this4.overlay = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Department.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Department.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table--custom th {\r\n  background-color: #004D40 !important;\r\n  color: white !important;\r\n  /* font-size: 18px  !important; */\r\n  font-weight: normal !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Department.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Department.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Department.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Department.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Department.vue?vue&type=template&id=284df330&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Department.vue?vue&type=template&id=284df330& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "div",
    { attrs: { align: "center" } },
    [
      _c(
        "v-overlay",
        { attrs: { value: _vm.overlay } },
        [
          _c("v-progress-circular", {
            attrs: { indeterminate: "", size: "64", color: "black", width: "1" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "mt-2 rounded-md",
          staticStyle: { width: "98%" },
          attrs: { align: "center", height: "90vh", justify: "middle" }
        },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "4", sm: "4" } },
                [
                  _c("v-text-field", {
                    staticClass: "ml-3",
                    attrs: {
                      "prepend-inner-icon": "mdi-magnify",
                      label: "Search",
                      dense: "",
                      "hide-details": "",
                      outlined: "",
                      clearable: ""
                    },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
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
            "v-simple-table",
            {
              staticClass: "table table--custom",
              staticStyle: { width: "98%" },
              attrs: { "fixed-header": "", height: "75vh" }
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v("#")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Payer Code")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("DC Code")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Accounting Code")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Department Name(Eng)")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Department Name(Jap)")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("MC Adviser Emails")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("MC Staff Emails")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Production Adviser Emails")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Production Head Emails")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("FA Custotian Emails")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Accounting Emails")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Action")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.FilterDepartments, function(dept, i) {
                  return _c("tr", { key: i }, [
                    _c("td", [_vm._v(_vm._s(i + 1))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(dept.PayerCode))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(dept.DcCode))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(dept.AccountingCode))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(dept.DepartmentNameEng))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(dept.DepartmentNameJap))]),
                    _vm._v(" "),
                    _c("td", [
                      dept.McJaEmails != null
                        ? _c(
                            "ul",
                            _vm._l(dept.McJaEmails.split(","), function(
                              email,
                              ind
                            ) {
                              return _c(
                                "li",
                                { key: ind, staticClass: "text-nowrap" },
                                [
                                  _vm._v(
                                    "\r\n                                    " +
                                      _vm._s(email) +
                                      "\r\n                                "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      dept.McStaffEmails != null
                        ? _c(
                            "ul",
                            _vm._l(dept.McStaffEmails.split(","), function(
                              email,
                              ind
                            ) {
                              return _c(
                                "li",
                                { key: ind, staticClass: "text-nowrap" },
                                [
                                  _vm._v(
                                    "\r\n                                    " +
                                      _vm._s(email) +
                                      "\r\n                                "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      dept.ProductionJaEmails != null
                        ? _c(
                            "ul",
                            _vm._l(dept.ProductionJaEmails.split(","), function(
                              email,
                              ind
                            ) {
                              return _c(
                                "li",
                                { key: ind, staticClass: "text-nowrap" },
                                [
                                  _vm._v(
                                    "\r\n                                    " +
                                      _vm._s(email) +
                                      "\r\n                                "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      dept.ProductionStaffEmails != null
                        ? _c(
                            "ul",
                            _vm._l(
                              dept.ProductionStaffEmails.split(","),
                              function(email, ind) {
                                return _c(
                                  "li",
                                  { key: ind, staticClass: "text-nowrap" },
                                  [
                                    _vm._v(
                                      "\r\n                                    " +
                                        _vm._s(email) +
                                        "\r\n                                "
                                    )
                                  ]
                                )
                              }
                            ),
                            0
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      dept.FaCustotianEmails != null
                        ? _c(
                            "ul",
                            _vm._l(dept.FaCustotianEmails.split(","), function(
                              email,
                              ind
                            ) {
                              return _c(
                                "li",
                                { key: ind, staticClass: "text-nowrap" },
                                [
                                  _vm._v(
                                    "\r\n                                    " +
                                      _vm._s(email) +
                                      "\r\n                                "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      dept.AccountingEmails != null
                        ? _c(
                            "ul",
                            _vm._l(dept.AccountingEmails.split(","), function(
                              email,
                              ind
                            ) {
                              return _c(
                                "li",
                                { key: ind, staticClass: "text-nowrap" },
                                [
                                  _vm._v(
                                    "\r\n                                    " +
                                      _vm._s(email) +
                                      "\r\n                                "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "mx-2 my-10",
                            attrs: { icon: "", color: "blue darken-3" },
                            on: {
                              click: function($event) {
                                return _vm.editRow(dept)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-pencil-circle")])],
                          1
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            persistent: "",
            "max-width": "1000px",
            scrollable: "",
            "max-height": "90vh"
          },
          model: {
            value: _vm.EditDeptDialog,
            callback: function($$v) {
              _vm.EditDeptDialog = $$v
            },
            expression: "EditDeptDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dense: "", dark: "", color: "teal darken-4" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "", medium: "" },
                      on: {
                        click: function($event) {
                          _vm.EditDeptDialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [_vm._v("Edit Department")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            dark: "",
                            text: "",
                            loading: _vm.UpdateButton,
                            disabled: _vm.saveBtnState
                          },
                          on: {
                            click: function($event) {
                              return _vm.UpdateDepartment()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                        Update\r\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Payer Code*",
                                  rules: [_vm.requiredRule],
                                  dense: ""
                                },
                                model: {
                                  value: _vm.edit.PayerCode,
                                  callback: function($$v) {
                                    _vm.$set(_vm.edit, "PayerCode", $$v)
                                  },
                                  expression: "edit.PayerCode"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c("v-combobox", {
                                attrs: {
                                  label: "DC Code",
                                  multiple: "",
                                  "small-chips": "",
                                  "deletable-chips": "",
                                  "hide-details": ""
                                },
                                model: {
                                  value: _vm.edit.DcCode,
                                  callback: function($$v) {
                                    _vm.$set(_vm.edit, "DcCode", $$v)
                                  },
                                  expression: "edit.DcCode"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "4" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Accounting Code*",
                                  rules: [_vm.requiredRule],
                                  "hide-details": "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.edit.AccountingCode,
                                  callback: function($$v) {
                                    _vm.$set(_vm.edit, "AccountingCode", $$v)
                                  },
                                  expression: "edit.AccountingCode"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Department Name(Eng)*",
                                  rules: [_vm.requiredRule],
                                  "hide-details": "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.edit.DepartmentNameEng,
                                  callback: function($$v) {
                                    _vm.$set(_vm.edit, "DepartmentNameEng", $$v)
                                  },
                                  expression: "edit.DepartmentNameEng"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Department Name(Jap)*",
                                  rules: [_vm.requiredRule],
                                  "hide-details": "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.edit.DepartmentNameJap,
                                  callback: function($$v) {
                                    _vm.$set(_vm.edit, "DepartmentNameJap", $$v)
                                  },
                                  expression: "edit.DepartmentNameJap"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { staticStyle: { "min-height": "100px" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      label: "MC Adviser Emails",
                                      multiple: "",
                                      "small-chips": "",
                                      "deletable-chips": "",
                                      rules: [_vm.emailRule]
                                    },
                                    model: {
                                      value: _vm.edit.McJaEmails,
                                      callback: function($$v) {
                                        _vm.$set(_vm.edit, "McJaEmails", $$v)
                                      },
                                      expression: "edit.McJaEmails"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      label: "Production Adviser Emails",
                                      multiple: "",
                                      "small-chips": "",
                                      "deletable-chips": "",
                                      rules: [_vm.emailRule]
                                    },
                                    model: {
                                      value: _vm.edit.ProductionJaEmails,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.edit,
                                          "ProductionJaEmails",
                                          $$v
                                        )
                                      },
                                      expression: "edit.ProductionJaEmails"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      label: "Accounting Emails",
                                      multiple: "",
                                      "small-chips": "",
                                      "deletable-chips": "",
                                      rules: [_vm.emailRule]
                                    },
                                    model: {
                                      value: _vm.edit.AccountingEmails,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.edit,
                                          "AccountingEmails",
                                          $$v
                                        )
                                      },
                                      expression: "edit.AccountingEmails"
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
                            "v-row",
                            { staticStyle: { "min-height": "100px" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      label: "FA Custodian Emails",
                                      multiple: "",
                                      "small-chips": "",
                                      "deletable-chips": "",
                                      rules: [_vm.emailRule]
                                    },
                                    model: {
                                      value: _vm.edit.FaCustotianEmails,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.edit,
                                          "FaCustotianEmails",
                                          $$v
                                        )
                                      },
                                      expression: "edit.FaCustotianEmails"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      label: "MC Staff Emails",
                                      multiple: "",
                                      "small-chips": "",
                                      "deletable-chips": "",
                                      rules: [_vm.emailRule]
                                    },
                                    model: {
                                      value: _vm.edit.McStaffEmails,
                                      callback: function($$v) {
                                        _vm.$set(_vm.edit, "McStaffEmails", $$v)
                                      },
                                      expression: "edit.McStaffEmails"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4" } },
                                [
                                  _c("v-combobox", {
                                    attrs: {
                                      label: "Production Head Emails",
                                      multiple: "",
                                      "small-chips": "",
                                      "deletable-chips": "",
                                      rules: [_vm.emailRule]
                                    },
                                    model: {
                                      value: _vm.edit.ProductionStaffEmails,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.edit,
                                          "ProductionStaffEmails",
                                          $$v
                                        )
                                      },
                                      expression: "edit.ProductionStaffEmails"
                                    }
                                  })
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

/***/ "./resources/js/components/pages/Department.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/pages/Department.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Department_vue_vue_type_template_id_284df330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Department.vue?vue&type=template&id=284df330& */ "./resources/js/components/pages/Department.vue?vue&type=template&id=284df330&");
/* harmony import */ var _Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Department.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Department.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Department.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/pages/Department.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Department_vue_vue_type_template_id_284df330___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Department_vue_vue_type_template_id_284df330___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Department.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Department.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/pages/Department.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Department.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Department.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Department.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/Department.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Department.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Department.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pages/Department.vue?vue&type=template&id=284df330&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/Department.vue?vue&type=template&id=284df330& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_284df330___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Department.vue?vue&type=template&id=284df330& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Department.vue?vue&type=template&id=284df330&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_284df330___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Department_vue_vue_type_template_id_284df330___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
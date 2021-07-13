(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Users.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Users.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      add: {
        EmployeeID: null,
        Department: null,
        FirstNameEng: null,
        LastNameEng: null,
        FirstNameJap: null,
        LastNameJap: null,
        Email: null,
        AccessLevel: null
      },
      search: {},
      Access: [{
        id: 1,
        Name: 'Administrator'
      }, {
        id: 2,
        Name: 'User'
      }],
      users: [],
      overlay: true,
      OnEdit: {},
      EditUserDialog: false,
      AddUserDialog: false,
      AddUserLoading: false
    };
  },
  created: function created() {
    this.GetUsers();
  },
  computed: {
    FilteredUsers: function FilteredUsers() {
      var _this = this;

      // return this.users.filter(rec=>{
      //     if(!this.search.EmployeeID && !this.search.FirstName && !this.search.LastName){
      //         return rec
      //     }else{
      //         if(!!this.search.EmployeeID){
      //             return  rec.EmployeeID.includes(this.search.EmployeeID)
      //         }
      //         if(!!this.search.FirstName){
      //             return rec.FirstNameEng.toLowerCase().includes(this.search.FirstName.toLowerCase()) || rec.FirstNameJap.includes(this.search.FirstName)
      //         }
      //         if(!!this.search.LastName){
      //             return rec.LastNameEng.toLowerCase().includes(this.search.LastName.toLowerCase()) || rec.LastNameJap.includes(this.search.LastName)
      //         }
      //     }
      // })
      return this.users.filter(function (rec) {
        if (!!_this.search.EmployeeID) {
          return rec.EmployeeID.includes(_this.search.EmployeeID);
        } else {
          return rec;
        }
      }).filter(function (rec) {
        if (!!_this.search.FirstName) {
          return rec.FirstNameEng.toLowerCase().includes(_this.search.FirstName.toLowerCase()) || rec.FirstNameJap.includes(_this.search.FirstName);
        } else {
          return rec;
        }
      }).filter(function (rec) {
        if (!!_this.search.LastName) {
          return rec.LastNameEng.toLowerCase().includes(_this.search.LastName.toLowerCase()) || rec.LastNameJap.includes(_this.search.LastName);
        } else {
          return rec;
        }
      });
    }
  },
  methods: {
    Notify: function Notify(msg, msg1, type) {
      this.$swal.fire(msg, msg1, type);
    },
    AddUser: function AddUser(val) {
      var _this2 = this;

      this.AddUserLoading = true;

      if (this.$refs.addForm.validate()) {
        axios.post('/api/AddNewUser', val).then(function (res) {
          _this2.AfterModifyFunctions();

          _this2.AddUserLoading = false;

          _this2.Notify('Success', 'Registered!', 'success');
        })["catch"](function (err) {
          console.log(err);
          _this2.AddUserLoading = false;
        });
      } else {
        setTimeout(function () {
          _this2.AddUserLoading = false; // alert('Please Fill-up Required Fields')

          _this2.Notify('Warning', 'Please Fill-up Required Fields!', 'warning');
        }, 200);
      }
    },
    AfterModifyFunctions: function AfterModifyFunctions() {
      this.AddUserDialog = false;
      this.add = {
        EmployeeID: null,
        Department: null,
        FirstNameEng: null,
        LastNameEng: null,
        FirstNameJap: null,
        LastNameJap: null,
        Email: null,
        AccessLevel: null
      };
      this.GetUsers();
      this.overlay = false;
      this.EditUserDialog = false;
      this.OnEdit = {};
    },
    DeleteUser: function DeleteUser() {
      var _this3 = this;

      this.overlay = true;
      axios.post('/api/DeleteUser', this.OnEdit).then(function (res) {
        _this3.AfterModifyFunctions();

        _this3.Notify('', 'Account Revoked!', 'info');
      });
    },
    RestoreUser: function RestoreUser() {
      var _this4 = this;

      axios.post('/api/RestoreUser', this.OnEdit).then(function (res) {
        _this4.AfterModifyFunctions();

        _this4.Notify('', 'Account Reactivated!', 'info');
      });
    },
    requiredRule: function requiredRule(value) {
      if (value instanceof Array && value.length == 0) {
        return 'Required.';
      } else {
        return !!value || 'Required.';
      }
    },
    emailRule: function emailRule(value) {
      var ctr = 0;
      value.forEach(function (rec) {
        if (!/.+@.+/.test(rec)) {
          ctr++;
        }
      });
      return ctr != 0 ?  false || 'E-mail must be valid' : true;
    },
    UpdateUser: function UpdateUser() {
      var _this5 = this;

      this.overlay = true;
      axios.post('/api/UpdateUser', this.OnEdit).then(function (res) {
        _this5.AfterModifyFunctions();
      });
    },
    edit: function edit(user) {
      this.OnEdit = JSON.parse(JSON.stringify(user));
      this.EditUserDialog = true;
    },
    remove: function remove(user) {
      alert();
    },
    GetUsers: function GetUsers() {
      var _this6 = this;

      axios.get('/api/GetUsers').then(function (res) {
        _this6.users = res.data;

        _this6.users.forEach(function (rec) {
          if (rec.FirstNameJap == null) {
            rec.FirstNameJap = "";
          }

          if (rec.LastNameJap == null) {
            rec.LastNameJap = "";
          }
        });

        _this6.overlay = false;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* .tableFixHead {\r\n    overflow-y: auto;\r\n    max-height: 75vh;\r\n}\r\n\r\n.tableFixHead thead th {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 100;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth,\r\ntd {\r\n    padding: 8px 16px;\r\n    border: 1px solid #ddd !important;\r\n} \r\n\r\n\r\n.tabletable tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n.table tr:hover {\r\n    background-color: #ddd;\r\n}*/\nth[data-v-53d07c62] {\r\n    background-color: #004D40 !important;\r\n    color: white !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Users.vue?vue&type=template&id=53d07c62&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Users.vue?vue&type=template&id=53d07c62&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-btn",
        {
          attrs: {
            fab: "",
            fixed: "",
            color: "success",
            small: "",
            bottom: "",
            right: ""
          },
          on: {
            click: function($event) {
              _vm.AddUserDialog = true
            }
          }
        },
        [_c("v-icon", [_vm._v("mdi-plus")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-alert",
        {
          staticClass: "mx-5 my-1",
          attrs: {
            text: "",
            color: "teal",
            border: "left",
            prominent: "",
            dense: ""
          }
        },
        [
          _c(
            "span",
            { staticClass: "ml-1", staticStyle: { "font-size": "15px" } },
            [_vm._v(_vm._s(_vm.$t("userManagement")))]
          )
        ]
      ),
      _vm._v(" "),
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
        "v-row",
        { staticClass: "mx-3" },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "4", md: "4" } },
            [
              _c("v-text-field", {
                attrs: {
                  label: _vm.$t("employeeid"),
                  outlined: "",
                  dense: "",
                  "hide-details": "",
                  clearable: ""
                },
                model: {
                  value: _vm.search.EmployeeID,
                  callback: function($$v) {
                    _vm.$set(_vm.search, "EmployeeID", $$v)
                  },
                  expression: "search.EmployeeID"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "4", md: "4" } },
            [
              _c("v-text-field", {
                attrs: {
                  label: _vm.$t("firstName"),
                  outlined: "",
                  dense: "",
                  "hide-details": "",
                  clearable: ""
                },
                model: {
                  value: _vm.search.FirstName,
                  callback: function($$v) {
                    _vm.$set(_vm.search, "FirstName", $$v)
                  },
                  expression: "search.FirstName"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "4", md: "4" } },
            [
              _c("v-text-field", {
                attrs: {
                  label: _vm.$t("lastName"),
                  outlined: "",
                  dense: "",
                  "hide-details": "",
                  clearable: ""
                },
                model: {
                  value: _vm.search.LastName,
                  callback: function($$v) {
                    _vm.$set(_vm.search, "LastName", $$v)
                  },
                  expression: "search.LastName"
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
          staticClass: "tableFixHead mx-2",
          staticStyle: { "border-bottom": "0.5px solid  #f2f2f2" }
        },
        [
          _c(
            "v-simple-table",
            {
              staticClass: "table-bordered",
              attrs: { "fixed-header": "", height: "73vh" }
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", [_vm._v(_vm._s(_vm.$t("employeeid")))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(_vm.$t("firstNameEng")))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(_vm.$t("lastNameEng")))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(_vm.$t("firstNameJap")))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(_vm.$t("lastNameJap")))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(_vm.$t("dept")))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(_vm.$t("email")))]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Account Type")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Action")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.FilteredUsers, function(user, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(user.EmployeeID))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.FirstNameEng))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.LastNameEng))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.FirstNameJap))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.LastNameJap))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.Department))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.Email))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.AccessName))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              disabled: user.AccessLevel == 1,
                              icon: "",
                              "x-small": ""
                            },
                            on: {
                              click: function($event) {
                                return _vm.edit(user)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-pencil")])],
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
            "max-width": "600px",
            scrollable: "",
            "max-height": "90vh"
          },
          model: {
            value: _vm.EditUserDialog,
            callback: function($$v) {
              _vm.EditUserDialog = $$v
            },
            expression: "EditUserDialog"
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
                          _vm.EditUserDialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [_vm._v("Edit User")]),
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
                            disabled: _vm.OnEdit.deleted_at != null,
                            dark: "",
                            text: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.UpdateUser()
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
                            { attrs: { cols: "12", sm: "6", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "First Name(Eng)*",
                                  rules: [_vm.requiredRule],
                                  dense: ""
                                },
                                model: {
                                  value: _vm.OnEdit.FirstNameEng,
                                  callback: function($$v) {
                                    _vm.$set(_vm.OnEdit, "FirstNameEng", $$v)
                                  },
                                  expression: "OnEdit.FirstNameEng"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Last Name(Eng)*",
                                  rules: [_vm.requiredRule],
                                  dense: ""
                                },
                                model: {
                                  value: _vm.OnEdit.LastNameEng,
                                  callback: function($$v) {
                                    _vm.$set(_vm.OnEdit, "LastNameEng", $$v)
                                  },
                                  expression: "OnEdit.LastNameEng"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "First Name(Jap)*",
                                  rules: [_vm.requiredRule],
                                  "hide-details": "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.OnEdit.FirstNameJap,
                                  callback: function($$v) {
                                    _vm.$set(_vm.OnEdit, "FirstNameJap", $$v)
                                  },
                                  expression: "OnEdit.FirstNameJap"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Last Name(Jap)*",
                                  rules: [_vm.requiredRule],
                                  "hide-details": "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.OnEdit.LastNameJap,
                                  callback: function($$v) {
                                    _vm.$set(_vm.OnEdit, "LastNameJap", $$v)
                                  },
                                  expression: "OnEdit.LastNameJap"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Department Name*",
                                  rules: [_vm.requiredRule],
                                  "hide-details": "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.OnEdit.Department,
                                  callback: function($$v) {
                                    _vm.$set(_vm.OnEdit, "Department", $$v)
                                  },
                                  expression: "OnEdit.Department"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Email*",
                                  rules: [_vm.requiredRule],
                                  "hide-details": "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.OnEdit.Email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.OnEdit, "Email", $$v)
                                  },
                                  expression: "OnEdit.Email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.Access,
                                  label: "Account Type*",
                                  dense: "",
                                  "hide-details": "",
                                  "item-text": "Name",
                                  "item-value": "id"
                                },
                                model: {
                                  value: _vm.OnEdit.AccessLevel,
                                  callback: function($$v) {
                                    _vm.$set(_vm.OnEdit, "AccessLevel", $$v)
                                  },
                                  expression: "OnEdit.AccessLevel"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "6" } },
                            [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
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
                                                {
                                                  attrs: {
                                                    small: "",
                                                    block: "",
                                                    color: "green",
                                                    disabled:
                                                      _vm.OnEdit.deleted_at ==
                                                      null
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.RestoreUser()
                                                    }
                                                  }
                                                },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-delete-restore")
                                              ])
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ])
                                },
                                [_vm._v(" "), _c("span", [_vm._v("Restore")])]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "6" } },
                            [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
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
                                                {
                                                  attrs: {
                                                    small: "",
                                                    block: "",
                                                    color: "red",
                                                    disabled:
                                                      _vm.OnEdit.deleted_at !=
                                                      null
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.DeleteUser()
                                                    }
                                                  }
                                                },
                                                "v-btn",
                                                attrs,
                                                false
                                              ),
                                              on
                                            ),
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-delete")
                                              ])
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ])
                                },
                                [_vm._v(" "), _c("span", [_vm._v("Delete")])]
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            persistent: "",
            "max-width": "700px",
            scrollable: "",
            "max-height": "90vh"
          },
          model: {
            value: _vm.AddUserDialog,
            callback: function($$v) {
              _vm.AddUserDialog = $$v
            },
            expression: "AddUserDialog"
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
                          _vm.AddUserDialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [_vm._v("Add User")]),
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
                            loading: _vm.AddUserLoading
                          },
                          on: {
                            click: function($event) {
                              return _vm.AddUser(_vm.add)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                        Submit\r\n                    "
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
                        "v-form",
                        { ref: "addForm" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Employee Code*",
                                      rules: [_vm.requiredRule],
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.add.EmployeeID,
                                      callback: function($$v) {
                                        _vm.$set(_vm.add, "EmployeeID", $$v)
                                      },
                                      expression: "add.EmployeeID"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Department*",
                                      rules: [_vm.requiredRule],
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.add.Department,
                                      callback: function($$v) {
                                        _vm.$set(_vm.add, "Department", $$v)
                                      },
                                      expression: "add.Department"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Firstname(Eng)*",
                                      rules: [_vm.requiredRule],
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.add.FirstNameEng,
                                      callback: function($$v) {
                                        _vm.$set(_vm.add, "FirstNameEng", $$v)
                                      },
                                      expression: "add.FirstNameEng"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Lastname(Eng)*",
                                      rules: [_vm.requiredRule],
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.add.LastNameEng,
                                      callback: function($$v) {
                                        _vm.$set(_vm.add, "LastNameEng", $$v)
                                      },
                                      expression: "add.LastNameEng"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Firstname(Jap)",
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.add.FirstNameJap,
                                      callback: function($$v) {
                                        _vm.$set(_vm.add, "FirstNameJap", $$v)
                                      },
                                      expression: "add.FirstNameJap"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Lastname(Jap)",
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.add.LastNameJap,
                                      callback: function($$v) {
                                        _vm.$set(_vm.add, "LastNameJap", $$v)
                                      },
                                      expression: "add.LastNameJap"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Email",
                                      rules: [_vm.requiredRule],
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.add.Email,
                                      callback: function($$v) {
                                        _vm.$set(_vm.add, "Email", $$v)
                                      },
                                      expression: "add.Email"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.Access,
                                      label: "Account Type*",
                                      dense: "",
                                      "hide-details": "",
                                      "item-text": "Name",
                                      "item-value": "id",
                                      rules: [_vm.requiredRule]
                                    },
                                    model: {
                                      value: _vm.add.AccessLevel,
                                      callback: function($$v) {
                                        _vm.$set(_vm.add, "AccessLevel", $$v)
                                      },
                                      expression: "add.AccessLevel"
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

/***/ "./resources/js/components/pages/Users.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/pages/Users.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_53d07c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=53d07c62&scoped=true& */ "./resources/js/components/pages/Users.vue?vue&type=template&id=53d07c62&scoped=true&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Users_vue_vue_type_style_index_0_id_53d07c62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css& */ "./resources/js/components/pages/Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_53d07c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_53d07c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53d07c62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Users.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/Users.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pages/Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_53d07c62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Users.vue?vue&type=style&index=0&id=53d07c62&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_53d07c62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_53d07c62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_53d07c62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_53d07c62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_style_index_0_id_53d07c62_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pages/Users.vue?vue&type=template&id=53d07c62&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/Users.vue?vue&type=template&id=53d07c62&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_53d07c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=53d07c62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Users.vue?vue&type=template&id=53d07c62&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_53d07c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_53d07c62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
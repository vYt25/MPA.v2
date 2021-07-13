(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NavBar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/NavBar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/i18n */ "./resources/js/plugins/i18n.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    source: String
  },
  data: function data() {
    return {
      AccountDetailsDialog: false,
      item: {
        model: 0
      },
      dialog: false,
      drawer: false,
      fab: true,
      menu: false,
      message: false,
      hints: true,
      items: [{
        icon: "mdi-pencil-plus",
        text_en: "Create MPA",
        text_jp: "機械設備購入申請書作成",
        accessibleBy: [1, 2],
        to: "/home",
        model: false
      }, {
        icon: "mdi-format-list-text",
        text_en: "Purchase Application List",
        text_jp: "購入申請一覧",
        accessibleBy: [1, 2, 3, 4],
        to: "/application_list",
        model: false
      }, {
        icon: "mdi-file-document-outline",
        text_en: "Incoterms ",
        text_jp: "インコタームズ",
        accessibleBy: [1, 2, 3, 4],
        to: "/incoterms",
        model: false
      }, {
        icon: "mdi-file-document-outline",
        text_en: "Data Extraction ",
        text_jp: "データ抽出",
        accessibleBy: [1, 2, 3, 4],
        to: "/data_extraction",
        model: false
      }, {
        icon: "mdi-file-document-outline",
        text_en: "Manual",
        text_jp: "マニュアル",
        accessibleBy: [1, 2, 3, 4],
        to: "/manual",
        model: false
      }, {
        icon: "mdi-format-list-bulleted",
        text_en: "Maintainance",
        text_jp: "メンテナンス",
        accessibleBy: ['経理'],
        model: false,
        children: [{
          icon: "mdi-blank",
          text_en: "Department",
          text_jp: "部署",
          to: "/maintainance/department",
          accessibleBy: ['経理'],
          model: false
        }, {
          icon: "mdi-blank",
          text_en: "User Management",
          text_jp: "ユーザー設定",
          to: "/maintainance/users_management",
          accessibleBy: ['経理'],
          model: false
        }]
      }],
      NotificationMenu: false,
      user: {},
      JessUsers: [],
      Notifications: {}
    };
  },
  computed: {
    TotalNotifications: function TotalNotifications() {
      if (this.Notifications.Applicant !== undefined && this.Notifications.Approver !== undefined) {
        return parseInt(this.Notifications.Applicant) + parseInt(this.Notifications.Approver);
      }
    },
    UserFullName: function UserFullName() {
      return this.$store.state.language == 'english' ? "".concat(this.$store.state.user.FirstNameEng, " ").concat(this.$store.state.user.LastNameEng) : "".concat(this.$store.state.user.LastNameJap, " ").concat(this.$store.state.user.FirstNameJap);
    },
    UserAccessName: function UserAccessName() {
      if (this.$store.state.language == 'english') {
        return this.$store.state.user.AccessLevel == 1 ? 'Administrator' : 'User';
      } else {
        return this.$store.state.user.AccessLevel == 1 ? '管理者' : 'ユーザー';
      }
    }
  },
  created: function created() {
    var _this = this;

    _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].locale = this.$store.state.language;
    this.user = JSON.parse(JSON.stringify(this.$store.state.user));
    this.testFunction();
    this.GetNotifications();
    this.$EventBus.$on('GET_NOTIFICATIONS', function () {
      _this.GetNotifications();
    });
  },
  methods: {
    GetNotifications: function GetNotifications() {
      var _this2 = this;

      axios.post('/api/GetNotifications', {
        EmployeeID: this.$store.state.user.EmployeeID
      }).then(function (res) {
        _this2.Notifications = res.data;
      });
    },
    testFunction2: function testFunction2() {
      axios.post('/api/test', {
        data: this.JessUsers
      }).then(function (res) {
        console.log(res.data);
      });
    },
    testFunction: function testFunction() {
      var _this3 = this;

      var apiKey = {
        headers: {
          "x-api-key": 'JUe7mHXOhR6ziaSDHXUDJ310nTfdsH8s1ph44z2q'
        }
      };
      delete axios.defaults.headers.common['X-Requested-With'];
      axios.get('https://1ze9v428i9.execute-api.us-east-2.amazonaws.com/prod/getUsers', apiKey).then(function (res) {
        _this3.JessUsers = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    requiredRule: function requiredRule(value) {
      if (value instanceof Array && value.length == 0) {
        return 'Required.';
      } else {
        return !!value || 'Required.';
      }
    },
    SubmitAccountDetails: function SubmitAccountDetails() {
      var _this4 = this;

      this.$refs.AccountForm.validate();

      if (this.user.Password != this.user.ConfirmPassword) {
        alert('Password Does Not Match');
      } else {
        if ($('.error--text').length == 0) {
          axios.post('/api/UpdateUserAccount', this.user).then(function (res) {
            _this4.AccountDetailsDialog = false;

            _this4.$swal.fire('Your Account Details Updated!', 'Please relogin your account to take effect.', 'success');
          })["catch"](function (err) {
            console.log(err);
          });
        }
      }
    },
    // GetNotifications() {
    //     axios.post('/api/GetNotifications', {
    //             EmployeeID: this.$store.state.user.EmployeeID
    //         })
    //         .then(res => {
    //         }).catch(err => {
    //             cosole.log(err)
    //         })
    // },
    collapse: function collapse(index) {
      this.items.forEach(function (rec) {
        rec.model = false;
      });
      this.items[index].model = true;
    },
    navigationShow: function navigationShow(item) {
      if (item.accessibleBy.includes(this.$store.state.user.AccessLevel)) {
        return true;
      }

      if (item.accessibleBy.includes(this.$store.state.user.Department)) {
        return true;
      }

      return false;
    },
    handleChangeLanguage: function handleChangeLanguage(obj) {
      this.$store.commit("CHANGE_LANGUAGE", obj);
      _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].locale = obj.locale;
    },
    logout: function logout() {
      this.$store.commit('LOGOUT');
    },
    // checkNotifications() {
    //     axios
    //         .get("api/notification", {
    //             headers: {
    //                 Authorization: `Bearer ${this.$store.state.user.token}`
    //             }
    //         })
    //         .then(res => {
    //             this.$store.state.notifications = res.data;
    //             this.notifications = res.data;
    //         });
    // },
    notice: function notice(_notice) {
      this.$toast.show(_notice, 'Notice!', {
        id: 'haduken',
        theme: 'dark',
        icon: 'icon-contacts',
        timeout: 10000,
        // title: 'Hey',
        displayMode: 2,
        // message: 'This is Layout <b>2</b> example',
        position: 'topCenter',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        progressBarColor: 'rgb(0, 255, 184)',
        image: 'img/mail.png',
        imageWidth: 70,
        layout: 2,
        iconColor: 'rgb(0, 255, 184)'
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NavBar.vue?vue&type=template&id=29c751f4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/NavBar.vue?vue&type=template&id=29c751f4& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    {
      staticStyle: { "background-color": "lightgrey" },
      attrs: { id: "inspire" }
    },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { color: "#ECEFF1", app: "" },
          scopedSlots: _vm._u([
            {
              key: "append",
              fn: function() {
                return undefined
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "", shaped: "" } },
            [
              _c(
                "v-list-item",
                {
                  staticStyle: { "padding-top": "5px", "padding-bottom": "5px" }
                },
                [
                  _c(
                    "v-col",
                    {
                      staticStyle: {
                        "padding-top": "5px",
                        "padding-bottom": "5px",
                        height: "75px"
                      },
                      attrs: { cols: "12", align: "center" }
                    },
                    [
                      _c(
                        "v-list-item-avatar",
                        { attrs: { size: "90" } },
                        [_c("v-img", { attrs: { src: "/images/avatar.png" } })],
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
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    {
                      staticStyle: {
                        "padding-top": "5px",
                        "padding-bottom": "5px"
                      }
                    },
                    [
                      _c(
                        "v-list-item-title",
                        {
                          staticStyle: {
                            "font-size": "15px",
                            "font-weight": "300",
                            "padding-top": "5px",
                            "padding-bottom": "5px"
                          }
                        },
                        [
                          _c(
                            "v-col",
                            {
                              staticStyle: {
                                "padding-top": "5px",
                                "padding-bottom": "5px"
                              },
                              attrs: { cols: "12", align: "center" }
                            },
                            [
                              _vm._v(
                                "\r\n                            " +
                                  _vm._s(_vm.UserFullName) +
                                  "\r\n                            "
                              ),
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "", small: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.AccountDetailsDialog = true
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", [
                                    _vm._v("mdi-square-edit-outline")
                                  ])
                                ],
                                1
                              ),
                              _c("br"),
                              _vm._v(
                                "\r\n                            " +
                                  _vm._s(_vm.UserAccessName) +
                                  "\r\n                        "
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
              _c("v-divider"),
              _vm._v(" "),
              _vm._l(_vm.items, function(item, index) {
                return [
                  _c(
                    "div",
                    { key: index },
                    [
                      _c("v-divider", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              index == 2 &&
                              _vm.$store.state.user.Department == "経理",
                            expression:
                              "index == 2 && $store.state.user.Department == '経理'"
                          }
                        ]
                      }),
                      _vm._v(" "),
                      _c(
                        "v-subheader",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                index == 2 &&
                                _vm.$store.state.user.Department == "経理",
                              expression:
                                "index == 2 && $store.state.user.Department == '経理'"
                            }
                          ]
                        },
                        [_vm._v("Settings")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  item.heading
                    ? _c(
                        "v-row",
                        { key: item.heading, attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "6" } },
                            [
                              item.heading
                                ? _c("v-subheader", [
                                    _vm._v(_vm._s(item.heading))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "text-center",
                              attrs: { cols: "6" }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "body-2 black--text",
                                  attrs: { href: "#!" }
                                },
                                [_vm._v("EDIT")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : item.children
                    ? _c(
                        "v-list-group",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.navigationShow(item),
                              expression: "navigationShow(item)"
                            }
                          ],
                          key: item.text,
                          attrs: {
                            color: "teal",
                            "prepend-icon": item.icon,
                            "append-icon": item["icon-alt"],
                            to: item.to
                          },
                          on: {
                            click: function($event) {
                              return _vm.collapse(index)
                            }
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "activator",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$store.state.language ==
                                                "english"
                                                ? item.text_en
                                                : item.text_jp
                                            )
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            true
                          ),
                          model: {
                            value: item.model,
                            callback: function($$v) {
                              _vm.$set(item, "model", $$v)
                            },
                            expression: "item.model"
                          }
                        },
                        [
                          _vm._v(" "),
                          _vm._l(item.children, function(child, i) {
                            return _c(
                              "v-list-item",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.navigationShow(child),
                                    expression: "navigationShow(child)"
                                  }
                                ],
                                key: i,
                                attrs: {
                                  link: "",
                                  to: child.to,
                                  color: "teal"
                                },
                                model: {
                                  value: child.model,
                                  callback: function($$v) {
                                    _vm.$set(child, "model", $$v)
                                  },
                                  expression: "child.model"
                                }
                              },
                              [
                                child.icon
                                  ? _c(
                                      "v-list-item-action",
                                      [
                                        _c("v-icon", [
                                          _vm._v(_vm._s(child.icon))
                                        ])
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$store.state.language == "english"
                                            ? child.text_en
                                            : child.text_jp
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                    : _c(
                        "v-list-item",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.navigationShow(item),
                              expression: "navigationShow(item)"
                            }
                          ],
                          key: item.text,
                          attrs: { link: "", to: item.to, color: "teal" },
                          on: {
                            click: function($event) {
                              return _vm.collapse(index)
                            }
                          },
                          model: {
                            value: item.model,
                            callback: function($$v) {
                              _vm.$set(item, "model", $$v)
                            },
                            expression: "item.model"
                          }
                        },
                        [
                          _c(
                            "v-list-item-action",
                            [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(
                                  _vm._s(
                                    _vm.$store.state.language == "english"
                                      ? item.text_en
                                      : item.text_jp
                                  )
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                ]
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        { attrs: { dense: "", color: "teal", app: "" } },
        [
          _c("v-app-bar-nav-icon", {
            attrs: { dark: "" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-toolbar-title",
            { staticClass: "ml-0 pl-4", staticStyle: { width: "600px" } },
            [
              _c(
                "v-row",
                [
                  _c("v-img", {
                    attrs: {
                      conatain: "",
                      "max-width": "100",
                      src: "/images/mpav2.png"
                    },
                    on: {
                      click: function($event) {
                        return _vm.$router.push("/home")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "hidden-sm-and-down text-white my-2 mr-1" },
                    [_vm._v(_vm._s(_vm.$t("mpa")))]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: {
                "close-on-content-click": false,
                "nudge-width": 250,
                left: "",
                absolute: "",
                "offset-x": ""
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
                            {
                              staticClass: "mx-5",
                              attrs: { icon: "", small: "", dark: "" },
                              on: {
                                click: function($event) {
                                  _vm.NotificationMenu = !_vm.NotificationMenu
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
                          _c(
                            "v-badge",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.TotalNotifications > 0,
                                  expression: "TotalNotifications > 0"
                                }
                              ],
                              attrs: {
                                color: "red lighten-1",
                                content: _vm.TotalNotifications,
                                dense: "",
                                overlap: ""
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-bell")])],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.NotificationMenu,
                callback: function($$v) {
                  _vm.NotificationMenu = $$v
                },
                expression: "NotificationMenu"
              }
            },
            [
              _vm._v(" "),
              _c(
                "v-card",
                { staticStyle: { "z-index": "9999" } },
                [
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c("v-list-item-content", [
                            _vm._v(
                              "\r\n                            Notifications\r\n                        "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    [
                      _c(
                        "v-list-item",
                        { attrs: { link: "" } },
                        [
                          _c("v-list-item-title", [
                            _vm._v("On-Going Applications")
                          ]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticStyle: {
                                color: "teal",
                                "font-weight": "bold"
                              }
                            },
                            [_vm._v(_vm._s(_vm.Notifications.Applicant))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.$store.state.user.AccessLevel == 1
                        ? _c(
                            "v-list-item",
                            { attrs: { link: "" } },
                            [
                              _c("v-list-item-title", [_vm._v("For Approval")]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    color: "teal",
                                    "font-weight": "bold"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.Notifications.Approver))]
                              )
                            ],
                            1
                          )
                        : _vm._e()
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
                            {
                              staticStyle: { "margin-right": "15px" },
                              attrs: { icon: "", small: "" }
                            },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
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
          ),
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
                            {
                              staticStyle: { "margin-right": "5px" },
                              attrs: { icon: "", small: "" }
                            },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [_c("v-icon", [_vm._v("mdi-chevron-down")])],
                        1
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
                [
                  _c(
                    "v-list-item",
                    {
                      attrs: { link: "" },
                      on: {
                        click: function($event) {
                          return _vm.logout()
                        }
                      }
                    },
                    [
                      _c("span", { staticStyle: { "font-size": "12px" } }, [
                        _vm._v(_vm._s(_vm.$t("Logout")))
                      ])
                    ]
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
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.AccountDetailsDialog,
            callback: function($$v) {
              _vm.AccountDetailsDialog = $$v
            },
            expression: "AccountDetailsDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v("Account Details")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-form",
                    { ref: "AccountForm" },
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
                                      label: "First Name (Eng)*",
                                      rules: [_vm.requiredRule]
                                    },
                                    model: {
                                      value: _vm.user.FirstNameEng,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "FirstNameEng", $$v)
                                      },
                                      expression: "user.FirstNameEng"
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
                                      label: "Last Name (Eng)*",
                                      rules: [_vm.requiredRule]
                                    },
                                    model: {
                                      value: _vm.user.LastNameEng,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "LastNameEng", $$v)
                                      },
                                      expression: "user.LastNameEng"
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
                                      label: "First Name (Jap)*",
                                      rules: [_vm.requiredRule]
                                    },
                                    model: {
                                      value: _vm.user.FirstNameJap,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "FirstNameJap", $$v)
                                      },
                                      expression: "user.FirstNameJap"
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
                                      label: "Last Name (Jap)*",
                                      rules: [_vm.requiredRule]
                                    },
                                    model: {
                                      value: _vm.user.LastNameJap,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "LastNameJap", $$v)
                                      },
                                      expression: "user.LastNameJap"
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
                                      label: "Department(Jap)*",
                                      rules: [_vm.requiredRule]
                                    },
                                    model: {
                                      value: _vm.user.Department,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "Department", $$v)
                                      },
                                      expression: "user.Department"
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
                                      label: "Access Type",
                                      value: _vm.UserAccessName,
                                      readonly: ""
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
                                      label: "Password*",
                                      type: "password",
                                      rules: [_vm.requiredRule]
                                    },
                                    model: {
                                      value: _vm.user.Password,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "Password", $$v)
                                      },
                                      expression: "user.Password"
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
                                      label: "Confirm Password*",
                                      type: "password",
                                      rules: [_vm.requiredRule]
                                    },
                                    model: {
                                      value: _vm.user.ConfirmPassword,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.user,
                                          "ConfirmPassword",
                                          $$v
                                        )
                                      },
                                      expression: "user.ConfirmPassword"
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
                  ),
                  _vm._v(" "),
                  _c("small", [_vm._v("*indicates required field")])
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
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.AccountDetailsDialog = false
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                    Close\r\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.SubmitAccountDetails()
                        }
                      }
                    },
                    [_vm._v("\r\n                    Save\r\n                ")]
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

/***/ "./resources/js/components/pages/NavBar.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/pages/NavBar.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBar_vue_vue_type_template_id_29c751f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue?vue&type=template&id=29c751f4& */ "./resources/js/components/pages/NavBar.vue?vue&type=template&id=29c751f4&");
/* harmony import */ var _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavBar_vue_vue_type_template_id_29c751f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavBar_vue_vue_type_template_id_29c751f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/NavBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/NavBar.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/pages/NavBar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/NavBar.vue?vue&type=template&id=29c751f4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pages/NavBar.vue?vue&type=template&id=29c751f4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_29c751f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=template&id=29c751f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/NavBar.vue?vue&type=template&id=29c751f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_29c751f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_29c751f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
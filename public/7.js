(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Application.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Application.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      loading: false,
      ApplicationList: [],
      search: {},
      DraftListDialog: false,
      drafts: [],
      fab: true,
      dialogRecall: false,
      noAttachment: false,
      saveDraftDialog: false,
      deleteDraftConfirm: false,
      draftsDialog: false,
      draftName: null,
      isClicked: false,
      fileInputError: false,
      rules: [function (v) {
        return !!v || 'File is required';
      }, function (v) {
        return v && v.length > 0 || 'File is required';
      }],
      general: {},
      items: [],
      otherCost: {},
      paymentSchedule: {},
      recallData: null,
      recallItemName: null,
      recallVendorName: null
    }, _defineProperty(_ref, "drafts", []), _defineProperty(_ref, "approvers", []), _defineProperty(_ref, "currencies", []), _defineProperty(_ref, "departments", []), _defineProperty(_ref, "months", []), _defineProperty(_ref, "payers", []), _defineProperty(_ref, "payment_dues", []), _defineProperty(_ref, "schedules", []), _defineProperty(_ref, "quotation_statuses", []), _defineProperty(_ref, "trade_terms", []), _defineProperty(_ref, "ratio", 0), _ref;
  },
  computed: {
    totalRatio: function totalRatio() {
      return 100 - (parseInt(this.paymentSchedule.PoRatio == '' ? 0 : this.paymentSchedule.PoRatio) + parseInt(this.paymentSchedule.RecievingBlRatio == '' ? 0 : this.paymentSchedule.RecievingBlRatio) + parseInt(this.paymentSchedule.InspectionRatio == '' ? 0 : this.paymentSchedule.InspectionRatio) + parseInt(this.paymentSchedule.OthersRatio == '' ? 0 : this.paymentSchedule.OthersRatio));
    },
    TotalPerCurrency: function TotalPerCurrency() {
      return this.currencies.filter(function (rec) {
        return rec.Total > 0;
      });
    },
    departmentFilter: function departmentFilter() {
      var _this = this;

      return this.departments.filter(function (rec) {
        if (_this.general.PayerCompanyCode == 'HS') {
          return rec;
        } else {
          return rec.PayerCode == _this.general.PayerCompanyCode;
        }
      });
    },
    applicantName: function applicantName() {
      // return this.$store.state.user.FirstNameJap !== null || this.$store.state.user.LastNameJap !== null
      if (this.$store.state.language == 'english') {
        return "".concat(this.$store.state.user.FirstNameEng, " ").concat(this.$store.state.user.LastNameEng);
      } else {
        if (this.$store.state.user.FirstNameJap == null || this.$store.state.user.LastNameJap == null) {
          return "".concat(this.$store.state.user.FirstNameEng, " ").concat(this.$store.state.user.LastNameEng);
        } else {
          return "".concat(this.$store.state.user.LastNameJap, " ").concat(this.$store.state.user.FirstNameJap, " ");
        }
      }
    },
    totalPercent: function totalPercent() {
      return parseInt(this.paymentSchedule.PoRatio == '' ? 0 : this.paymentSchedule.PoRatio) + parseInt(this.paymentSchedule.RecievingBlRatio == '' ? 0 : this.paymentSchedule.RecievingBlRatio) + parseInt(this.paymentSchedule.InspectionRatio == '' ? 0 : this.paymentSchedule.InspectionRatio) + parseInt(this.paymentSchedule.OthersRatio == '' ? 0 : this.paymentSchedule.OthersRatio);
    }
  },
  created: function created() {
    this.addItem();
    this.getMasterLists();
    this.defaultSetters();
    this.getDate();
  },
  methods: {
    isChekedNihonSangyou: function isChekedNihonSangyou(val) {
      if (val) {
        this.$set(this.general, 'HrdSingapore', true);
      }
    },
    setItemDepartments: function setItemDepartments() {
      var _this2 = this;

      this.items.forEach(function (rec) {
        if (!rec.DepartmentCode) {
          rec.DepartmentCode = _this2.general.DepartmentCode;
        }
      });
    },
    JapaneseNumberToInteger: function JapaneseNumberToInteger(val) {
      // return val
      var search = "０１２３４５６７８９";
      var replace = "0123456789"; // Make the search string a regex.

      var regex = RegExp('[' + search + ']', 'g');
      var t = val.toString().replace(regex, function (chr) {
        // Get the position of the found character in the search string.
        var ind = search.indexOf(chr); // Get the corresponding character from the replace string.

        var r = replace.charAt(ind);
        return r;
      });
      return t;
    },
    reset: function reset() {
      this.$refs.attachment.reset();
      this.general = {};
      this.items = [];
      this.otherCost = {};
      this.paymentSchedule = {};
      this.getDate();
      this.computeTotalPerCurrency();
      this.defaultSetters();
      this.addItem();
    },
    UseRecall: function UseRecall(MpaNo) {
      var _this3 = this;

      axios.post('api/GetApplicationDetails', {
        MpaNo: MpaNo
      }).then(function (res) {
        _this3.getDate();

        _this3.general = res.data.general_informations;
        _this3.items = res.data.items;
        _this3.otherCost = res.data.other_informations;
        _this3.paymentSchedule = res.data.payment_schedules;

        _this3.computeTotalPerCurrency();
      });
    },
    SearchApplicationItems: function SearchApplicationItems() {
      var _this4 = this;

      axios.post('api/SearchApplicationItems', this.search).then(function (res) {
        _this4.ApplicationList = res.data;
      });
    },
    DeleteDraft: function DeleteDraft(draft) {
      var _this5 = this;

      axios.post('api/DeleteDraft', {
        DraftID: draft.id
      }).then(function (res) {
        _this5.getDrafts();
      });
    },
    UseDraft: function UseDraft(draft) {
      this.DraftListDialog = false;
      this.general = JSON.parse(draft.general_informations);
      this.items = JSON.parse(draft.items);
      this.otherCost = JSON.parse(draft.other_informations);
      this.paymentSchedule = JSON.parse(draft.payment_schedules);
      this.getDate();
      this.computeTotalPerCurrency();
    },
    getDrafts: function getDrafts() {
      var _this6 = this;

      axios.post('api/GetDrafts', {
        EmployeeID: this.$store.state.user.EmployeeID
      }).then(function (res) {
        _this6.drafts = res.data;
      });
    },
    SaveDraft: function SaveDraft() {
      var _this7 = this;

      axios.post('api/SaveDraft', {
        draftName: this.draftName,
        general_informations: this.general,
        items: this.items,
        payment_schedule: this.paymentSchedule,
        other_informations: this.otherCost,
        EmployeeID: this.$store.state.user.EmployeeID
      }).then(function (res) {
        _this7.saveDraftDialog = false;
        alert('Draft Saved');
      });
    },
    RegisterApplication: function RegisterApplication() {
      var _this8 = this;

      this.loading = true;
      var formData = new FormData($('form')[0]);
      var values = {
        general_informations: this.general,
        items: this.items,
        other_informations: this.otherCost,
        payment_schedules: this.paymentSchedule
      };
      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      formData.append('values', JSON.stringify(values));
      axios({
        method: 'post',
        url: 'api/RegisterApplication',
        data: formData,
        headers: headers
      }).then(function (res) {
        //handle successa
        // console.log(res.data);
        _this8.$swal.fire('Success!', 'Application Successfully Registered!', 'success');

        _this8.loading = false;

        _this8.reset();
      })["catch"](function (err) {
        //handle error
        console.log(err);
      });
    },
    paymentScheduleRowChecker: function paymentScheduleRowChecker(row, field) {
      return !(this.paymentSchedule[row + 'ratio'] > 0) && !this.general.NihonSangyou && this.totalPercent <= 100 && !this.paymentSchedule[field];
    },
    deleteItem: function deleteItem(i) {
      this.items.splice(i, 1);
      this.computeTotalPerCurrency();
    },
    checkRequiredFields: function checkRequiredFields() {
      var itemChecker = false;
      this.items.forEach(function (rec) {
        var x = parseInt(rec.UnitPrice.split(',').join('')) * rec.Quantity;

        if (rec.Currency == 'JPY') {
          if (x >= 200000) {
            itemChecker = true;
          }
        }

        if (rec.Currency == 'USD') {
          if (x * 100 >= 200000) {
            itemChecker = true;
          }
        }

        if (rec.Currency == 'EUR') {
          if (x * 133.333333333333 >= 200000) {
            itemChecker = true;
          }
        }

        if (rec.Currency == 'PHP') {
          if (x * 2 >= 200000) {
            itemChecker = true;
          }
        }

        if (rec.Currency == 'TWD') {
          if (x * 3.333333333333 >= 200000) {
            itemChecker = true;
          }
        }
      });
      var msg = [];

      if (!itemChecker) {
        msg.push('An Item must be Greater than or Equal to ¥200,000');
      }

      if (this.$refs.attachment.$refs.input.files.length == 0) {
        msg.push('No Attached File');
      }

      if ($('.error--text').length > 0) {
        msg.push('Check Required Fields Marked as red');
      }

      if (msg.length > 0) {
        alert(msg.join('\n'));
      } else {
        this.RegisterApplication();
      }
    },
    getDate: function getDate() {
      var _this9 = this;

      axios.get('api/getDate').then(function (res) {
        _this9.$set(_this9.general, 'Date', res.data);
      });
    },
    checkDisabled: function checkDisabled(field) {
      return this.totalRatio <= 0 && this.paymentSchedule[field] <= 0;
    },
    checkRatio: function checkRatio(i) {
      var fields = ['PoRatio', 'RecievingBlRatio', 'InspectionRatio', 'OthersRatio'];

      if (this.totalRatio < 0) {
        this.paymentSchedule[fields[i - 1]] = 0;
        this.paymentSchedule[fields[i - 1]] = this.totalRatio;
      }
    },
    defaultSetters: function defaultSetters() {
      this.$set(this.general, 'Applicant', this.$store.state.user.EmployeeID); // this.$set(this.general, 'QuotedPrice', "")

      this.$set(this.otherCost, 'PackingExpenseStatus', '1');
      this.$set(this.otherCost, 'DistributionExpenseStatus', '1');
      this.$set(this.otherCost, 'InstallationExpenseStatus', '1');
      this.$set(this.otherCost, 'OtherExpenseStatus', '1');
      this.$set(this.otherCost, 'PackingExpenseAmount', 0);
      this.$set(this.otherCost, 'DistributionExpenseAmount', 0);
      this.$set(this.otherCost, 'InstallationExpenseAmount', 0);
      this.$set(this.otherCost, 'OtherExpenseAmount', 0);
      this.$set(this.paymentSchedule, 'PoRatio', 0);
      this.$set(this.paymentSchedule, 'RecievingBlRatio', 0);
      this.$set(this.paymentSchedule, 'InspectionRatio', 0);
      this.$set(this.paymentSchedule, 'OthersRatio', 0);
    },
    addItem: function addItem() {
      var dept = this.general.DepartmentCode == "" ? "" : this.general.DepartmentCode;
      this.items.push({
        ItemNameJap: "",
        ItemNameEng: "",
        DepartmentCode: dept,
        ItemId: "",
        UnitPrice: "",
        Quantity: "",
        Currency: ""
      });
    },
    computeTotalPerCurrency: function computeTotalPerCurrency() {
      var _this10 = this;

      var totals = [0, 0, 0, 0, 0];
      this.items.forEach(function (rec) {
        if (rec.UnitPrice != '' && rec.Quantity != '' && rec.Currency != '' && rec.UnitPrice !== null && rec.Quantity !== null && rec.Currency !== null) {
          var index = _this10.currencies.findIndex(function (res) {
            return res.currency_code == rec.Currency;
          });

          var UP = 0;
          var QTY = 0;
          rec.unitprice = rec.UnitPrice.toString();
          rec.Quantity = rec.Quantity.toString();

          if (rec.UnitPrice != null && rec.Quantity != null) {
            UP = rec.UnitPrice.includes(',') ? parseFloat(rec.UnitPrice.split(',').join('')) : parseFloat(rec.UnitPrice);
            QTY = rec.Quantity.includes(',') ? parseFloat(rec.Quantity.split(',').join('')) : parseFloat(rec.Quantity);
          }

          totals[index] += UP * QTY;
        }
      });

      for (var x = 0; x < totals.length; x++) {
        this.$set(this.currencies[x], 'Total', totals[x]);
      }
    },
    numberWithComma: function numberWithComma(i, field) {
      // console.log(this.items[i])
      // var regex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g; 
      // var input = this.items[i][field]; 
      // if(regex.test(input)) {
      //     // this.items[i][field]
      //     console.log(tr(input, "０１２３４５６７８９　", "0123456789 "))
      //     return false
      // }
      if (field != '') {
        if (this.items[i][field] != "") {
          this.$set(this.items[i], field, parseInt(this.JapaneseNumberToInteger(this.items[i][field]).split(',').join('')).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        } else {
          this.$set(this.items[i], field, 0);
        }
      } else if (field == '') {
        if (i.toString().includes('.') && this.general.QuotedPrice != 'maker') {
          var fields = i.split('.');

          if (this[fields[0]][fields[1]] != "") {
            this.$set(this[fields[0]], fields[1], parseInt(this.JapaneseNumberToInteger(this[fields[0]][fields[1]]).toString().split(',').join('')).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          } else {
            this.$set(this[fields[0]], fields[1], 0);
          }
        } else if (this.general.QuotedPrice == 'maker') {
          return parseFloat(i).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
          if (i != '') {
            return parseInt(this.JapaneseNumberToInteger(i)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } else {
            return 0;
          }
        }
      } // if(i == "" ){
      //     this.$set(this.items[i], field, 0)
      // }

    },
    onlyNumber: function onlyNumber(evt) {
      var charCode = evt.which ? evt.which : evt.keyCode;

      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      }
    },
    checkIfPdf: function checkIfPdf() {
      if (this.$refs.attachment.$refs.input.files[0].type != "application/pdf") {
        alert('Attachment must be PDF only');
        this.$refs.attachment.reset();
      }
    },
    getMasterLists: function getMasterLists() {
      var _this11 = this;

      axios.get('api/getMasterLists').then(function (res) {
        _this11.approvers = res.data.approvers;
        _this11.currencies = res.data.currencies;
        _this11.departments = res.data.departments;
        _this11.months = res.data.months;
        _this11.payers = res.data.payers;
        _this11.payment_dues = res.data.payment_dues;
        _this11.schedules = res.data.schedules;
        _this11.quotation_statuses = res.data.quotation_statuses;
        _this11.trade_terms = res.data.trade_terms;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Application.vue?vue&type=template&id=2b4eb62a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Application.vue?vue&type=template&id=2b4eb62a& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          staticStyle: { bottom: "16px" },
          attrs: {
            dark: "",
            fixed: "",
            bottom: "",
            right: "",
            loading: _vm.loading,
            small: "",
            color: "green",
            readonly: true
          },
          on: {
            click: function($event) {
              return _vm.checkRequiredFields()
            }
          }
        },
        [_vm._v("\r\n        " + _vm._s(_vm.$t("apply")) + "\r\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticStyle: { bottom: "60px", "z-index": "999" },
          attrs: {
            dark: "",
            fixed: "",
            bottom: "",
            right: "",
            small: "",
            color: "indigo"
          },
          on: {
            click: function($event) {
              _vm.saveDraftDialog = true
            }
          }
        },
        [_vm._v("\r\n        " + _vm._s(_vm.$t("saveAsDraft")) + "\r\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticStyle: { bottom: "104px", "z-index": "999" },
          attrs: {
            dark: "",
            fixed: "",
            bottom: "",
            right: "",
            small: "",
            color: "red"
          },
          on: {
            click: function($event) {
              ;(_vm.DraftListDialog = true), _vm.getDrafts()
            }
          }
        },
        [_vm._v("\r\n        " + _vm._s(_vm.$t("drafts")) + "\r\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticStyle: { bottom: "148px", "z-index": "999" },
          attrs: {
            dark: "",
            fixed: "",
            bottom: "",
            right: "",
            small: "",
            color: "grey"
          },
          on: {
            click: function($event) {
              _vm.dialogRecall = true
            }
          }
        },
        [_vm._v("\r\n        " + _vm._s(_vm.$t("recall")) + "\r\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "1100px", scrollable: "", persistent: "" },
          model: {
            value: _vm.dialogRecall,
            callback: function($$v) {
              _vm.dialogRecall = $$v
            },
            expression: "dialogRecall"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                {
                  attrs: {
                    flat: "",
                    dark: "",
                    color: "teal darken-4",
                    dense: ""
                  }
                },
                [
                  _c("v-toolbar-title", [_vm._v(_vm._s(_vm.$t("recall")))]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.dialogRecall = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "5" } },
                        [
                          _c("v-text-field", {
                            staticClass: "mt-n4",
                            attrs: {
                              label: _vm.$t("itemName"),
                              outlined: "",
                              dense: ""
                            },
                            model: {
                              value: _vm.search.ItemName,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "ItemName", $$v)
                              },
                              expression: "search.ItemName"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "5" } },
                        [
                          _c("v-text-field", {
                            staticClass: "mt-n4",
                            attrs: {
                              label: _vm.$t("vendorName"),
                              outlined: "",
                              dense: ""
                            },
                            model: {
                              value: _vm.search.VendorName,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "VendorName", $$v)
                              },
                              expression: "search.VendorName"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "2" } },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "mt-n4",
                              attrs: { width: "100%" },
                              on: {
                                click: function($event) {
                                  return _vm.SearchApplicationItems()
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-magnify")])],
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
                    "v-simple-table",
                    {
                      staticStyle: { border: "1px solid black" },
                      attrs: { "fixed-header": "", height: "30vh", dense: "" }
                    },
                    [
                      _c("thead", [
                        _c("tr", { staticStyle: { height: "30px" } }, [
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "min-width": "100px",
                                "background-color": "#004D40",
                                color: "white"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("itemId")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "min-width": "200px",
                                "background-color": "#004D40",
                                color: "white"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("itemNameEn")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "min-width": "200px",
                                "background-color": "#004D40",
                                color: "white"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("itemNameJp")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "min-width": "200px",
                                "background-color": "#004D40",
                                color: "white"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("vendorNameEn")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "min-width": "200px",
                                "background-color": "#004D40",
                                color: "white"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("vendorNameJp")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "min-width": "50px",
                                "background-color": "#004D40",
                                color: "white"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("action")))]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.ApplicationList, function(rec, index) {
                          return _c("tr", { key: index }, [
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { border: "1px solid black" }
                              },
                              [_vm._v(_vm._s(rec.MpaNo))]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { border: "1px solid black" }
                              },
                              [_vm._v(_vm._s(rec.ItemNameEng))]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { border: "1px solid black" }
                              },
                              [_vm._v(_vm._s(rec.ItemNameJap))]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { border: "1px solid black" }
                              },
                              [_vm._v(_vm._s(rec.VendorNameEng))]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { border: "1px solid black" }
                              },
                              [_vm._v(_vm._s(rec.VendorNameJap))]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { border: "1px solid black" }
                              },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      fab: "",
                                      dark: "",
                                      color: "teal",
                                      icon: "",
                                      small: ""
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.UseRecall(rec.MpaNo),
                                          (_vm.dialogRecall = false)
                                      }
                                    }
                                  },
                                  [
                                    _c("v-icon", { attrs: { small: "" } }, [
                                      _vm._v("mdi-pencil")
                                    ])
                                  ],
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
              _c("v-divider")
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "justify-center" },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "10", sm: "12" } },
            [
              _c(
                "v-simple-table",
                {
                  staticClass: "blackFont",
                  staticStyle: { border: "1px solid gray" },
                  attrs: { dense: "" }
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            border: "1px solid gray",
                            "min-width": "120px"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("applicant")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        { staticStyle: { border: "1px solid gray" } },
                        [
                          _c("v-text-field", {
                            staticClass: "mt-2 mb-n4",
                            staticStyle: {
                              "font-size": "15px",
                              "min-width": "170px"
                            },
                            attrs: {
                              value: _vm.applicantName,
                              outlined: "",
                              dense: "",
                              readonly: ""
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            border: "1px solid gray",
                            "min-width": "80px"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("date")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        { staticStyle: { border: "1px solid gray" } },
                        [
                          _c("v-text-field", {
                            staticClass: "mt-2 mb-n4",
                            staticStyle: {
                              "font-size": "15px",
                              "min-width": "170px"
                            },
                            attrs: { outlined: "", dense: "", readonly: "" },
                            model: {
                              value: _vm.general.Date,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "Date", $$v)
                              },
                              expression: "general.Date"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "text-nowrap",
                          staticStyle: {
                            border: "1px solid gray",
                            "font-size": "15px"
                          },
                          attrs: { rowspan: "3" }
                        },
                        [
                          _vm._v(
                            "\r\n                            " +
                              _vm._s(_vm.$t("vendorName")) +
                              "\r\n                            "
                          ),
                          _c("br"),
                          _vm._v(
                            "\r\n                            " +
                              _vm._s(_vm.$t("viaNihonSangyou")) +
                              "?\r\n                            "
                          ),
                          _c("v-checkbox", {
                            attrs: {
                              dense: "",
                              "hide-details": "",
                              label: _vm.$t("yes")
                            },
                            on: {
                              click: function($event) {
                                return _vm.isChekedNihonSangyou(
                                  _vm.general.NihonSangyou
                                )
                              }
                            },
                            model: {
                              value: _vm.general.NihonSangyou,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "NihonSangyou", $$v)
                              },
                              expression: "general.NihonSangyou"
                            }
                          }),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _vm.general.NihonSangyou
                            ? [
                                _vm._v(
                                  "\r\n                                    " +
                                    _vm._s(_vm.$t("quotedPrice"))
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "v-radio-group",
                                  {
                                    model: {
                                      value: _vm.general.QuotedPrice,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.general,
                                          "QuotedPrice",
                                          $$v
                                        )
                                      },
                                      expression: "general.QuotedPrice"
                                    }
                                  },
                                  [
                                    _c("v-radio", {
                                      attrs: {
                                        dense: "",
                                        label: _vm.$t("nihonSangyou"),
                                        color: "teal",
                                        value: "nihonsangyou"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-radio", {
                                      attrs: {
                                        dense: "",
                                        label: _vm.$t("maker"),
                                        color: "teal",
                                        value: "maker"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticStyle: { border: "1px solid gray" },
                          attrs: { colspan: "3" }
                        },
                        [
                          _c("v-text-field", {
                            staticClass: "mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              error: !_vm.general.VendorNameJap,
                              placeholder: _vm.$t("japanese"),
                              outlined: "",
                              dense: ""
                            },
                            model: {
                              value: _vm.general.VendorNameJap,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "VendorNameJap", $$v)
                              },
                              expression: "general.VendorNameJap"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticStyle: { border: "1px solid gray" },
                          attrs: { colspan: "3" }
                        },
                        [
                          _c("v-text-field", {
                            staticClass: "mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              error: !_vm.general.VendorNameEng,
                              placeholder: _vm.$t("english"),
                              outlined: "",
                              dense: ""
                            },
                            model: {
                              value: _vm.general.VendorNameEng,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "VendorNameEng", $$v)
                              },
                              expression: "general.VendorNameEng"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "tr",
                      { staticStyle: { "background-color": "#fce492" } },
                      [
                        _c("th", { attrs: { colspan: "3" } }, [
                          _c("br"),
                          _vm._v(" "),
                          _c("ul", [
                            _c("li", [_vm._v(_vm._s(_vm.$t("notes[0]")))]),
                            _vm._v(" "),
                            _c("li", [_vm._v(_vm._s(_vm.$t("notes[1]")))])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticStyle: {
                            border: "1px solid gray",
                            "font-size": "14px"
                          },
                          attrs: { rowspan: "2" }
                        },
                        [
                          _vm._v(
                            "\r\n                            " +
                              _vm._s(_vm.$t("payerCompanyName"))
                          ),
                          _c("br"),
                          _vm._v(
                            "\r\n                            " +
                              _vm._s(_vm.$t("hrdSingapore")) +
                              "\r\n                            "
                          ),
                          _c("v-checkbox", {
                            attrs: {
                              dense: "",
                              "hide-details": "",
                              label: _vm.$t("yes")
                            },
                            model: {
                              value: _vm.general.HrdSingapore,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "HrdSingapore", $$v)
                              },
                              expression: "general.HrdSingapore"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticStyle: { border: "1px solid gray" },
                          attrs: { colspan: "3" }
                        },
                        [
                          _vm.payers.length > 0
                            ? _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: { "font-size": "15px" },
                                attrs: {
                                  error: !_vm.general.PayerCompanyCode,
                                  items: _vm.payers,
                                  "item-text": "payer_name",
                                  "item-value": "payer_code",
                                  readonly: _vm.general.nihonSangyou
                                    ? true
                                    : false,
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.general.PayerCompanyCode,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.general,
                                      "PayerCompanyCode",
                                      $$v
                                    )
                                  },
                                  expression: "general.PayerCompanyCode"
                                }
                              })
                            : _c("v-progress-linear", {
                                attrs: { indeterminate: "", color: "teal" }
                              })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticStyle: { "background-color": "#fce492" },
                          attrs: { colspan: "3" }
                        },
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("ul", [
                            _c("li", [_vm._v(_vm._s(_vm.$t("notes[4]")))])
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            border: "1px solid gray",
                            "font-size": "15px"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("dept")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticStyle: { border: "1px solid gray" },
                          attrs: { colspan: "3" }
                        },
                        [
                          _c("v-autocomplete", {
                            staticClass: "mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              error: !_vm.general.DepartmentCode,
                              items: _vm.departmentFilter,
                              "item-text":
                                _vm.$store.state.language == "english"
                                  ? "DepartmentNameEng"
                                  : "DepartmentNameJap",
                              "item-value": "id",
                              outlined: "",
                              dense: ""
                            },
                            on: {
                              change: function($event) {
                                return _vm.setItemDepartments()
                              }
                            },
                            model: {
                              value: _vm.general.DepartmentCode,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "DepartmentCode", $$v)
                              },
                              expression: "general.DepartmentCode"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            border: "1px solid gray",
                            "font-size": "15px"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("purpose")) + " ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticStyle: { border: "1px solid gray" },
                          attrs: { colspan: "3" }
                        },
                        [
                          _c("v-textarea", {
                            staticClass: "mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              error: !_vm.general.Purpose,
                              outlined: "",
                              rows: "1",
                              "auto-grow": "",
                              name: "input-7-4"
                            },
                            model: {
                              value: _vm.general.Purpose,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "Purpose", $$v)
                              },
                              expression: "general.Purpose"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            border: "1px solid gray",
                            "font-size": "15px",
                            height: "180px"
                          },
                          attrs: { rowspan: "3" }
                        },
                        [_vm._v(_vm._s(_vm.$t("attachment")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticStyle: { border: "1px solid gray" },
                          attrs: { colspan: "3" }
                        },
                        [
                          _c(
                            "form",
                            {
                              ref: "attachmentForm",
                              attrs: {
                                action: "",
                                enctype: "multipart/form-data"
                              }
                            },
                            [
                              _c("v-file-input", {
                                ref: "attachment",
                                attrs: {
                                  multiple: "",
                                  id: "AttachmentFiles",
                                  name: "AttachmentFiles[]",
                                  enctype: "multipart/form-data",
                                  rules: _vm.rules,
                                  accept: "application/pdf",
                                  chips: "",
                                  "show-size": "",
                                  "prepend-icon": "mdi-file-pdf",
                                  label: "Attachment(PDF)"
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticStyle: { "background-color": "#fce492" },
                          attrs: { colspan: "3" }
                        },
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("ul", [
                            _c("li", [_vm._v(_vm._s(_vm.$t("notes[5]")))]),
                            _vm._v(" "),
                            _c("li", [_vm._v(_vm._s(_vm.$t("notes[6]")))])
                          ])
                        ]
                      )
                    ])
                  ])
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
        "v-row",
        { staticClass: "justify-center" },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "10", sm: "12" } },
            [
              _c("br"),
              _vm._v(" "),
              _c("h5", [_vm._v(_vm._s(_vm.$t("item")))]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticStyle: { "background-color": "teal", color: "white" },
                  attrs: { block: "" },
                  on: {
                    click: function($event) {
                      return _vm.addItem()
                    }
                  }
                },
                [_c("strong", [_vm._v(_vm._s(_vm.$t("addItem")))])]
              ),
              _vm._v(" "),
              _vm._l(_vm.items, function(item, i) {
                return _c(
                  "v-simple-table",
                  {
                    key: i,
                    staticClass: "blackFont",
                    staticStyle: {
                      border: "1px solid black",
                      color: "black !important"
                    },
                    attrs: { dense: "" }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c(
                          "th",
                          {
                            staticStyle: { border: "1px solid black" },
                            attrs: { rowspan: "5" }
                          },
                          [_vm._v(_vm._s(i + 1))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "text-center",
                            staticStyle: { border: "1px solid black" },
                            attrs: { rowspan: "2", colspan: "2" }
                          },
                          [_vm._v(_vm._s(_vm.$t("itemName")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          { attrs: { colspan: "9" } },
                          [
                            _c("v-text-field", {
                              staticClass: "thead mt-2 mb-n4",
                              staticStyle: {
                                "font-size": "15px",
                                width: "100%"
                              },
                              attrs: {
                                error: !item.ItemNameJap,
                                placeholder: _vm.$t("japanese"),
                                outlined: "",
                                dense: ""
                              },
                              model: {
                                value: item.ItemNameJap,
                                callback: function($$v) {
                                  _vm.$set(item, "ItemNameJap", $$v)
                                },
                                expression: "item.ItemNameJap"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c(
                          "th",
                          {
                            staticStyle: { "border-bottom": "1px solid black" },
                            attrs: { colspan: "9" }
                          },
                          [
                            _c("v-text-field", {
                              staticClass: "thead mt-n3 mb-n3",
                              staticStyle: {
                                "font-size": "15px",
                                width: "100%"
                              },
                              attrs: {
                                error: !item.ItemNameEng,
                                placeholder: _vm.$t("english"),
                                outlined: "",
                                dense: ""
                              },
                              model: {
                                value: item.ItemNameEng,
                                callback: function($$v) {
                                  _vm.$set(item, "ItemNameEng", $$v)
                                },
                                expression: "item.ItemNameEng"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c(
                          "th",
                          {
                            staticClass: "text-center",
                            staticStyle: { border: "1px solid black" },
                            attrs: { colspan: "2" }
                          },
                          [_vm._v(_vm._s(_vm.$t("dept")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          { attrs: { colspan: "9" } },
                          [
                            _c("v-select", {
                              staticClass: "thead mt-3 mb-n3",
                              staticStyle: {
                                "font-size": "15px",
                                width: "100%"
                              },
                              attrs: {
                                error: !item.DepartmentCode,
                                items: _vm.departmentFilter,
                                "item-text":
                                  _vm.$store.state.language == "english"
                                    ? "DepartmentNameEng"
                                    : "DepartmentNameJap",
                                "item-value": "id",
                                outlined: "",
                                dense: ""
                              },
                              model: {
                                value: item.DepartmentCode,
                                callback: function($$v) {
                                  _vm.$set(item, "DepartmentCode", $$v)
                                },
                                expression: "item.DepartmentCode"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c(
                          "th",
                          {
                            staticClass: "text-center",
                            staticStyle: {
                              border: "1px solid black",
                              "min-width": "150px"
                            },
                            attrs: { colspan: "2" }
                          },
                          [_vm._v(_vm._s(_vm.$t("itemId")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "text-center",
                            staticStyle: { border: "1px solid black" },
                            attrs: { colspan: "2" }
                          },
                          [_vm._v(_vm._s(_vm.$t("unitPrice")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "text-center text-nowrap",
                            staticStyle: { border: "1px solid black" },
                            attrs: { colspan: "2" }
                          },
                          [_vm._v(_vm._s(_vm.$t("nihonSangyouUnitPrice")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "text-center",
                            staticStyle: {
                              border: "1px solid black",
                              width: "50px"
                            },
                            attrs: { colspan: "2" }
                          },
                          [_vm._v(_vm._s(_vm.$t("qty")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "text-center",
                            staticStyle: {
                              border: "1px solid black",
                              width: "100px"
                            },
                            attrs: { colspan: "2" }
                          },
                          [_vm._v(_vm._s(_vm.$t("currency")))]
                        ),
                        _vm._v(" "),
                        _c("th", {
                          staticClass: "text-center",
                          staticStyle: {
                            border: "1px solid black",
                            width: "50px"
                          },
                          attrs: { colspan: "1" }
                        })
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c(
                          "th",
                          {
                            staticStyle: { border: "1px solid black" },
                            attrs: { colspan: "2" }
                          },
                          [
                            _c("v-text-field", {
                              staticClass: "mt-2 mb-n4",
                              staticStyle: { width: "130:font-size:15px" },
                              attrs: { outlined: "", dense: "" },
                              model: {
                                value: item.ItemID,
                                callback: function($$v) {
                                  _vm.$set(item, "ItemID", $$v)
                                },
                                expression: "item.ItemID"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "twidth1",
                            staticStyle: { border: "1px solid black" },
                            attrs: { colspan: "2" }
                          },
                          [
                            _c("v-text-field", {
                              staticClass: "mt-2 mb-n4",
                              staticStyle: {
                                width: "130px",
                                "font-size": "15px"
                              },
                              attrs: {
                                error: !item.UnitPrice,
                                outlined: "",
                                dense: ""
                              },
                              on: {
                                keypress: function($event) {
                                  return _vm.onlyNumber($event)
                                },
                                keyup: function($event) {
                                  _vm.numberWithComma(i, "UnitPrice"),
                                    _vm.computeTotalPerCurrency()
                                }
                              },
                              model: {
                                value: item.UnitPrice,
                                callback: function($$v) {
                                  _vm.$set(item, "UnitPrice", $$v)
                                },
                                expression: "item.UnitPrice"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "twidth1",
                            staticStyle: { border: "1px solid black" },
                            attrs: { colspan: "2" }
                          },
                          [
                            _vm.general.QuotedPrice === "maker" &&
                            _vm.general.QuotedPrice !== undefined
                              ? [
                                  _vm._v(
                                    "\r\n                                " +
                                      _vm._s(
                                        parseFloat(
                                          item.UnitPrice.toString()
                                            .split(",")
                                            .join("") * 1.02,
                                          2
                                        )
                                          .toFixed(2)
                                          .toString()
                                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                      ) +
                                      "\r\n                            "
                                  )
                                ]
                              : [
                                  _vm._v(
                                    "\r\n                                N/A\r\n                            "
                                  )
                                ]
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: { border: "1px solid black" },
                            attrs: { colspan: "2" }
                          },
                          [
                            _c("v-text-field", {
                              staticClass: "mt-2 mb-n4",
                              staticStyle: {
                                width: "60px",
                                "font-size": "15px"
                              },
                              attrs: {
                                error: !item.Quantity,
                                outlined: "",
                                dense: ""
                              },
                              on: {
                                keypress: function($event) {
                                  return _vm.onlyNumber($event)
                                },
                                keyup: function($event) {
                                  _vm.numberWithComma(i, "Quantity"),
                                    _vm.computeTotalPerCurrency()
                                }
                              },
                              model: {
                                value: item.Quantity,
                                callback: function($$v) {
                                  _vm.$set(item, "Quantity", $$v)
                                },
                                expression: "item.Quantity"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: { border: "1px solid black" },
                            attrs: { colspan: "2" }
                          },
                          [
                            _c("v-select", {
                              staticClass: "mt-2 mb-n4",
                              staticStyle: { "font-size": "15px" },
                              attrs: {
                                error: !item.Currency,
                                items: _vm.currencies,
                                "item-text": "currency_code",
                                "item-value": "currency_code",
                                outlined: "",
                                dense: ""
                              },
                              on: {
                                change: function($event) {
                                  return _vm.computeTotalPerCurrency()
                                }
                              },
                              model: {
                                value: item.Currency,
                                callback: function($$v) {
                                  _vm.$set(item, "Currency", $$v)
                                },
                                expression: "item.Currency"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticStyle: { border: "1px solid black" },
                            attrs: { colspan: "1" }
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "mx-2",
                                attrs: {
                                  fab: "",
                                  color: "red",
                                  small: "",
                                  dark: ""
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteItem(i)
                                  }
                                }
                              },
                              [_c("v-icon", [_vm._v("mdi-delete")])],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h5", [_vm._v(_vm._s(_vm.$t("purchasePrice")))]),
              _vm._v(" "),
              _c(
                "v-simple-table",
                {
                  staticStyle: { border: "1px solid black" },
                  attrs: { dense: "" }
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            border: "1px solid black",
                            width: "180px",
                            "background-color": "#3b4863",
                            color: "white"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("terms")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            border: "1px solid black",
                            "background-color": "#3b4863",
                            color: "white"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("currency")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            border: "1px solid black",
                            "background-color": "#3b4863",
                            color: "white"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("totalPrice")))]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.TotalPerCurrency, function(val, i) {
                      return _c("tr", { key: i }, [
                        i == 0
                          ? _c(
                              "td",
                              {
                                staticClass: "text-center",
                                staticStyle: { border: "1px solid black" },
                                attrs: { rowspan: _vm.TotalPerCurrency.length }
                              },
                              [
                                _c("v-select", {
                                  staticClass: "mt-2",
                                  staticStyle: {
                                    width: "180px",
                                    "font-size": "15px"
                                  },
                                  attrs: {
                                    error: !_vm.general.TradeTermCode,
                                    outlined: "",
                                    dense: "",
                                    items: _vm.trade_terms,
                                    "item-value": "id",
                                    "item-text": "trade_code"
                                  },
                                  model: {
                                    value: _vm.general.TradeTermCode,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.general,
                                        "TradeTermCode",
                                        $$v
                                      )
                                    },
                                    expression: "general.TradeTermCode"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            staticStyle: {
                              border: "1px solid black",
                              "font-size": "15px"
                            },
                            attrs: { dense: "" }
                          },
                          [_vm._v(_vm._s(val.currency_code))]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "text-center",
                            staticStyle: {
                              border: "1px solid black",
                              "font-size": "15px"
                            },
                            attrs: { dense: "" }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.numberWithComma(
                                  _vm.general.QuotedPrice == "maker"
                                    ? (val.Total * 1.02).toFixed(2)
                                    : val.Total,
                                  ""
                                )
                              )
                            )
                          ]
                        )
                      ])
                    }),
                    0
                  )
                ]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("ul", { staticStyle: { "background-color": "#fce492" } }, [
                _c("br"),
                _vm._v(" "),
                _c("li", [_vm._v(_vm._s(_vm.$t("notes[3]")))]),
                _vm._v(" "),
                _c("li", [_vm._v(_vm._s(_vm.$t("notes[8]")))]),
                _vm._v(" "),
                _c("li", [_vm._v(_vm._s(_vm.$t("notes[9]")))]),
                _vm._v(" "),
                _c("li", [_vm._v(_vm._s(_vm.$t("notes[18]")))]),
                _vm._v(" "),
                _c("br")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h5", [_vm._v(_vm._s(_vm.$t("others")))]),
              _vm._v(" "),
              _c(
                "v-simple-table",
                {
                  staticStyle: { border: "1px solid black" },
                  attrs: { dense: "" }
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", {
                        staticStyle: {
                          "background-color": "#3b4863",
                          color: "white",
                          border: "1px solid black",
                          "min-width": "120px"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            "background-color": "#3b4863",
                            color: "white",
                            border: "1px solid black"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("status")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            "background-color": "#3b4863",
                            color: "white",
                            border: "1px solid black"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("currency")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-center",
                          staticStyle: {
                            "background-color": "#3b4863",
                            color: "white",
                            border: "1px solid black"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("amount")))]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(_vm.$t("packingExpense")))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              items: _vm.quotation_statuses,
                              "item-text":
                                _vm.$store.state.language == "english"
                                  ? "status_en"
                                  : "status_jp",
                              "item-value": "status_code",
                              dense: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.otherCost.PackingExpenseStatus,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "PackingExpenseStatus",
                                  $$v
                                )
                              },
                              expression: "otherCost.PackingExpenseStatus"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              items: _vm.currencies,
                              "item-text": "currency_code",
                              "item-value": "currency_code",
                              dense: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.otherCost.PackingExpenseCurrency,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "PackingExpenseCurrency",
                                  $$v
                                )
                              },
                              expression: "otherCost.PackingExpenseCurrency"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-text-field", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: { outlined: "", dense: "" },
                            on: {
                              keypress: function($event) {
                                return _vm.onlyNumber($event)
                              },
                              keyup: function($event) {
                                return _vm.numberWithComma(
                                  "otherCost.PackingExpenseAmount",
                                  ""
                                )
                              }
                            },
                            model: {
                              value: _vm.otherCost.PackingExpenseAmount,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "PackingExpenseAmount",
                                  $$v
                                )
                              },
                              expression: "otherCost.PackingExpenseAmount"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(_vm.$t("distributionExpense")))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              items: _vm.quotation_statuses,
                              "item-text":
                                _vm.$store.state.language == "english"
                                  ? "status_en"
                                  : "status_jp",
                              "item-value": "status_code",
                              dense: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.otherCost.DistributionExpenseStatus,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "DistributionExpenseStatus",
                                  $$v
                                )
                              },
                              expression: "otherCost.DistributionExpenseStatus"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              items: _vm.currencies,
                              "item-text": "currency_code",
                              "item-value": "currency_code",
                              dense: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.otherCost.DistributionExpenseCurrency,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "DistributionExpenseCurrency",
                                  $$v
                                )
                              },
                              expression:
                                "otherCost.DistributionExpenseCurrency"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-text-field", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: { outlined: "", dense: "" },
                            on: {
                              keypress: function($event) {
                                return _vm.onlyNumber($event)
                              },
                              keyup: function($event) {
                                return _vm.numberWithComma(
                                  "otherCost.DistributionExpenseAmount",
                                  ""
                                )
                              }
                            },
                            model: {
                              value: _vm.otherCost.DistributionExpenseAmount,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "DistributionExpenseAmount",
                                  $$v
                                )
                              },
                              expression: "otherCost.DistributionExpenseAmount"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(_vm.$t("installationExpense")))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              items: _vm.quotation_statuses,
                              "item-text":
                                _vm.$store.state.language == "english"
                                  ? "status_en"
                                  : "status_jp",
                              "item-value": "status_code",
                              dense: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.otherCost.InstallationExpenseStatus,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "InstallationExpenseStatus",
                                  $$v
                                )
                              },
                              expression: "otherCost.InstallationExpenseStatus"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              items: _vm.currencies,
                              "item-text": "currency_code",
                              "item-value": "currency_code",
                              dense: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.otherCost.InstallationExpenseCurrency,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "InstallationExpenseCurrency",
                                  $$v
                                )
                              },
                              expression:
                                "otherCost.InstallationExpenseCurrency"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-text-field", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: { outlined: "", dense: "" },
                            on: {
                              keypress: function($event) {
                                return _vm.onlyNumber($event)
                              },
                              keyup: function($event) {
                                return _vm.numberWithComma(
                                  "otherCost.InstallationExpenseAmount",
                                  ""
                                )
                              }
                            },
                            model: {
                              value: _vm.otherCost.InstallationExpenseAmount,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "InstallationExpenseAmount",
                                  $$v
                                )
                              },
                              expression: "otherCost.InstallationExpenseAmount"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(_vm.$t("otherExpense")))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              items: _vm.quotation_statuses,
                              "item-text":
                                _vm.$store.state.language == "english"
                                  ? "status_en"
                                  : "status_jp",
                              "item-value": "status_code",
                              dense: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.otherCost.OtherExpenseStatus,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "OtherExpenseStatus",
                                  $$v
                                )
                              },
                              expression: "otherCost.OtherExpenseStatus"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-select", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: {
                              items: _vm.currencies,
                              "item-text": "currency_code",
                              "item-value": "currency_code",
                              dense: "",
                              outlined: ""
                            },
                            model: {
                              value: _vm.otherCost.OtherExpenseCurrency,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "OtherExpenseCurrency",
                                  $$v
                                )
                              },
                              expression: "otherCost.OtherExpenseCurrency"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c("v-text-field", {
                            staticClass: "tbody mt-2 mb-n4",
                            staticStyle: { "font-size": "15px" },
                            attrs: { outlined: "", dense: "" },
                            on: {
                              keypress: function($event) {
                                return _vm.onlyNumber($event)
                              },
                              keyup: function($event) {
                                return _vm.numberWithComma(
                                  "otherCost.OtherExpenseAmount",
                                  ""
                                )
                              }
                            },
                            model: {
                              value: _vm.otherCost.OtherExpenseAmount,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.otherCost,
                                  "OtherExpenseAmount",
                                  $$v
                                )
                              },
                              expression: "otherCost.OtherExpenseAmount"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("ul", { staticStyle: { "background-color": "#fce492" } }, [
                _c("br"),
                _vm._v(" "),
                _c("li", [_vm._v(_vm._s(_vm.$t("notes[10]")))]),
                _vm._v(" "),
                _c("li", [_vm._v(_vm._s(_vm.$t("notes[11]")))]),
                _vm._v(" "),
                _c("li", [_vm._v(_vm._s(_vm.$t("notes[12]")))]),
                _vm._v(" "),
                _c("br")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h5", [_vm._v(_vm._s(_vm.$t("submissionMatters")))]),
              _vm._v(" "),
              _c("v-textarea", {
                staticClass: "mt-2 mb-n4",
                staticStyle: { "font-size": "15px" },
                attrs: {
                  outlined: "",
                  dense: "",
                  rows: "2",
                  "auto-grow": "",
                  name: "input-7-4"
                },
                model: {
                  value: _vm.general.SubmissionMatters,
                  callback: function($$v) {
                    _vm.$set(_vm.general, "SubmissionMatters", $$v)
                  },
                  expression: "general.SubmissionMatters"
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("ul", { staticStyle: { "background-color": "#fce492" } }, [
                _c("br"),
                _vm._v(" "),
                _c("li", [_vm._v(_vm._s(_vm.$t("fillPRS")))]),
                _vm._v(" "),
                _c("br")
              ]),
              _vm._v(" "),
              _c("h5", [_vm._v(_vm._s(_vm.$t("paymentSchedule")))]),
              _vm._v(" "),
              _c(
                "v-simple-table",
                {
                  staticClass: "blackFont",
                  staticStyle: { border: "1px solid black" },
                  attrs: { dense: "" }
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", {
                        staticStyle: {
                          width: "150px",
                          border: "1px solid black",
                          "background-color": "#3b4863",
                          color: "white"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticStyle: {
                            width: "115px",
                            "border-top": "1px solid black",
                            "border-bottom": "1px solid black",
                            "background-color": "#3b4863",
                            color: "white"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("scheduleDate")))]
                      ),
                      _vm._v(" "),
                      _c("th", {
                        staticStyle: {
                          width: "115px",
                          "border-top": "1px solid black",
                          "border-bottom": "1px solid black",
                          "background-color": "#3b4863",
                          color: "white"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticStyle: {
                            width: "80px",
                            border: "1px solid black",
                            "background-color": "#3b4863",
                            color: "white"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("ratio")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticStyle: {
                            width: "250px",
                            border: "1px solid black",
                            "background-color": "#3b4863",
                            color: "white"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("paymentDueDate")))]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  !_vm.general.NihonSangyou
                    ? _c("tbody", [
                        _c("tr", [
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                border: "1px solid black"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("uponIssuingPo")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                "border-bottom": "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: {
                                  width: "115px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Po",
                                    "PoMonth"
                                  ),
                                  disabled: _vm.checkDisabled("PoRatio"),
                                  items: _vm.months,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "month_name_en"
                                      : "month_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.PoMonth,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "PoMonth",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.PoMonth"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                "border-bottom": "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: {
                                  width: "115px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Po",
                                    "PoSchedule"
                                  ),
                                  disabled: _vm.checkDisabled("PoRatio"),
                                  items: _vm.schedules,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "payment_schedule_name_en"
                                      : "payment_schedule_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.PoSchedule,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "PoSchedule",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.PoSchedule"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                border: "1px solid black"
                              }
                            },
                            [
                              _c("v-text-field", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: {
                                  width: "80px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Po",
                                    "PoRatio"
                                  ),
                                  disabled: _vm.checkDisabled("PoRatio"),
                                  outlined: "",
                                  dense: ""
                                },
                                on: {
                                  keypress: function($event) {
                                    return _vm.onlyNumber($event)
                                  },
                                  keyup: function($event) {
                                    return _vm.checkRatio(1)
                                  }
                                },
                                model: {
                                  value: _vm.paymentSchedule.PoRatio,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "PoRatio",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.PoRatio"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "160px",
                                border: "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: { "font-size": "12px" },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Po",
                                    "PoDue"
                                  ),
                                  disabled: _vm.checkDisabled("PoRatio"),
                                  items: _vm.payment_dues,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "due_name_en"
                                      : "due_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.PoDue,
                                  callback: function($$v) {
                                    _vm.$set(_vm.paymentSchedule, "PoDue", $$v)
                                  },
                                  expression: "paymentSchedule.PoDue"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                border: "1px solid black"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("uponRecievingBl")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                "border-bottom": "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: {
                                  width: "115px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "RecievingBl",
                                    "RecievingBlMonth"
                                  ),
                                  disabled: _vm.checkDisabled(
                                    "RecievingBlRatio"
                                  ),
                                  items: _vm.months,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "month_name_en"
                                      : "month_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.RecievingBlMonth,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "RecievingBlMonth",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.RecievingBlMonth"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                "border-bottom": "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: {
                                  width: "115px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "RecievingBl",
                                    "RecievingBlSchedule"
                                  ),
                                  disabled: _vm.checkDisabled(
                                    "RecievingBlRatio"
                                  ),
                                  items: _vm.schedules,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "payment_schedule_name_en"
                                      : "payment_schedule_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value:
                                    _vm.paymentSchedule.RecievingBlSchedule,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "RecievingBlSchedule",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "paymentSchedule.RecievingBlSchedule"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                border: "1px solid black"
                              }
                            },
                            [
                              _c("v-text-field", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: {
                                  width: "80px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "RecievingBl",
                                    "RecievingBlRatio"
                                  ),
                                  disabled: _vm.checkDisabled(
                                    "RecievingBlRatio"
                                  ),
                                  outlined: "",
                                  dense: ""
                                },
                                on: {
                                  keypress: function($event) {
                                    return _vm.onlyNumber($event)
                                  },
                                  keyup: function($event) {
                                    return _vm.checkRatio(2)
                                  }
                                },
                                model: {
                                  value: _vm.paymentSchedule.RecievingBlRatio,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "RecievingBlRatio",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.RecievingBlRatio"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "160px",
                                border: "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: { "font-size": "12px" },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "RecievingBl",
                                    "RecievingBlDue"
                                  ),
                                  disabled: _vm.checkDisabled(
                                    "RecievingBlRatio"
                                  ),
                                  items: _vm.payment_dues,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "due_name_en"
                                      : "due_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.RecievingBlDue,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "RecievingBlDue",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.RecievingBlDue"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                border: "1px solid black"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("uponInspection")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                "border-bottom": "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: {
                                  width: "115px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Inspection",
                                    "InspectionMonth"
                                  ),
                                  disabled: _vm.checkDisabled(
                                    "InspectionRatio"
                                  ),
                                  items: _vm.months,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "month_name_en"
                                      : "month_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.InspectionMonth,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "InspectionMonth",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.InspectionMonth"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                "border-bottom": "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: {
                                  width: "115px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Inspection",
                                    "InspectionSchedule"
                                  ),
                                  disabled: _vm.checkDisabled(
                                    "InspectionRatio"
                                  ),
                                  items: _vm.schedules,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "payment_schedule_name_en"
                                      : "payment_schedule_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.InspectionSchedule,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "InspectionSchedule",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "paymentSchedule.InspectionSchedule"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                border: "1px solid black"
                              }
                            },
                            [
                              _c("v-text-field", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: {
                                  width: "80px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Inspection",
                                    "InspectionRatio"
                                  ),
                                  disabled: _vm.checkDisabled(
                                    "InspectionRatio"
                                  ),
                                  outlined: "",
                                  dense: ""
                                },
                                on: {
                                  keypress: function($event) {
                                    return _vm.onlyNumber($event)
                                  },
                                  keyup: function($event) {
                                    return _vm.checkRatio(3)
                                  }
                                },
                                model: {
                                  value: _vm.paymentSchedule.InspectionRatio,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "InspectionRatio",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.InspectionRatio"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "160px",
                                border: "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: { "font-size": "12px" },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Inspection",
                                    "InspectionDue"
                                  ),
                                  disabled: _vm.checkDisabled(
                                    "InspectionRatio"
                                  ),
                                  items: _vm.payment_dues,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "due_name_en"
                                      : "due_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.InspectionDue,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "InspectionDue",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.InspectionDue"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "105px",
                                border: "1px solid black"
                              }
                            },
                            [
                              _vm._v(
                                "\r\n                            " +
                                  _vm._s(_vm.$t("others")) +
                                  "\r\n                            "
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-2 mb-n4",
                                staticStyle: {
                                  width: "105px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Others",
                                    "OthersTitle"
                                  ),
                                  disabled: _vm.checkDisabled("OthersRatio"),
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.OthersTitle,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "OthersTitle",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.OthersTitle"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                "border-bottom": "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-7 mb-n4",
                                staticStyle: {
                                  width: "115px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Others",
                                    "OthersMonth"
                                  ),
                                  disabled: _vm.checkDisabled("OthersRatio"),
                                  items: _vm.months,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "month_name_en"
                                      : "month_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.OthersMonth,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "OthersMonth",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.OthersMonth"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                "border-bottom": "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-7 mb-n4",
                                staticStyle: {
                                  width: "115px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Others",
                                    "OthersSchedule"
                                  ),
                                  disabled: _vm.checkDisabled("OthersRatio"),
                                  items: _vm.schedules,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "payment_schedule_name_en"
                                      : "payment_schedule_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.OthersSchedule,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "OthersSchedule",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.OthersSchedule"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "120px",
                                border: "1px solid black"
                              }
                            },
                            [
                              _c("v-text-field", {
                                staticClass: "mt-7 mb-n4",
                                staticStyle: {
                                  width: "80px",
                                  "font-size": "15px"
                                },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Others",
                                    "OthersRatio"
                                  ),
                                  disabled: _vm.checkDisabled("OthersRatio"),
                                  outlined: "",
                                  dense: ""
                                },
                                on: {
                                  keypress: function($event) {
                                    return _vm.onlyNumber($event)
                                  },
                                  keyup: function($event) {
                                    return _vm.checkRatio(4)
                                  }
                                },
                                model: {
                                  value: _vm.paymentSchedule.OthersRatio,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "OthersRatio",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.OthersRatio"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "160px",
                                border: "1px solid black"
                              }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-7 mb-n4",
                                staticStyle: { "font-size": "12px" },
                                attrs: {
                                  error: _vm.paymentScheduleRowChecker(
                                    "Others",
                                    "OthersDue"
                                  ),
                                  disabled: _vm.checkDisabled("OthersRatio"),
                                  items: _vm.payment_dues,
                                  "item-text":
                                    _vm.$store.state.language == "english"
                                      ? "due_name_en"
                                      : "due_name_jp",
                                  "item-value": "id",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.paymentSchedule.OthersDue,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.paymentSchedule,
                                      "OthersDue",
                                      $$v
                                    )
                                  },
                                  expression: "paymentSchedule.OthersDue"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    : _c("tbody", [
                        _c("tr", [
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "150px",
                                border: "1px solid black"
                              }
                            },
                            [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.$t("viaNihonSangyou")))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                "border-bottom": "1px solid black",
                                width: "115px"
                              }
                            },
                            [_c("strong", [_vm._v("N/A")])]
                          ),
                          _vm._v(" "),
                          _c("td", {
                            staticStyle: {
                              "border-bottom": "1px solid black",
                              width: "115px"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticStyle: {
                                width: "80px",
                                border: "1px solid black"
                              }
                            },
                            [_c("strong", [_vm._v("100")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                width: "250px"
                              }
                            },
                            [_c("strong", [_vm._v("N/A")])]
                          )
                        ])
                      ]),
                  _vm._v(" "),
                  _c("thead", [
                    _c("tr", [
                      _c("th", { staticStyle: { border: "1px solid black" } }),
                      _vm._v(" "),
                      _c("th", {
                        staticStyle: {
                          "border-bottom": "1px solid black",
                          "border-top": "1px solid black"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          staticClass: "text-right",
                          staticStyle: {
                            "border-bottom": "1px solid black",
                            "border-top": "1px solid black",
                            "font-size": "20px"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("total")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "th",
                        {
                          class:
                            !_vm.general.NihonSangyou && _vm.totalPercent != 100
                              ? "error--text"
                              : "",
                          staticStyle: {
                            border: "1px solid black",
                            "font-size": "20px"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.general.NihonSangyou ? 100 : _vm.totalPercent
                            ) + "%"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("th", { staticStyle: { border: "1px solid black" } })
                    ])
                  ])
                ]
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "justify-center" },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "10", sm: "12" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [_c("v-card-actions", [_c("v-spacer")], 1)],
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
          attrs: { width: "500", persistent: "" },
          model: {
            value: _vm.saveDraftDialog,
            callback: function($$v) {
              _vm.saveDraftDialog = $$v
            },
            expression: "saveDraftDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                {
                  attrs: {
                    flat: "",
                    dark: "",
                    dense: "",
                    color: "teal darken-4"
                  }
                },
                [
                  _c("v-toolbar-title", [
                    _vm._v(_vm._s(_vm.$t("saveAsDraft")))
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.saveDraftDialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { height: "45px" } },
                [
                  _c("v-text-field", {
                    staticClass: "mt-5",
                    attrs: {
                      placeholder: _vm.$t("saveAsDraft"),
                      outlined: "",
                      dense: ""
                    },
                    model: {
                      value: _vm.draftName,
                      callback: function($$v) {
                        _vm.draftName = $$v
                      },
                      expression: "draftName"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticStyle: { height: "50px" } },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mb-4",
                      attrs: { width: "80px" },
                      on: {
                        click: function($event) {
                          return _vm.SaveDraft()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                    " +
                          _vm._s(_vm.$t("save")) +
                          "\r\n                "
                      )
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
          attrs: { width: "800px", persistent: "" },
          model: {
            value: _vm.draftsDialog,
            callback: function($$v) {
              _vm.draftsDialog = $$v
            },
            expression: "draftsDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                {
                  staticClass: "headline",
                  staticStyle: { "background-color": "teal", color: "white" },
                  attrs: { "primary-title": "" }
                },
                [_c("strong", [_vm._v(_vm._s(_vm.$t("drafts")))])]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-simple-table",
                    {
                      staticClass: "mt-4",
                      staticStyle: { border: "1px solid black" },
                      attrs: { "fixed-header": "", height: "370", dense: "" }
                    },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "background-color": "#3b4863",
                                color: "white"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("nameOfDraft")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "background-color": "#3b4863",
                                color: "white"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("selectRecord")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "background-color": "#3b4863",
                                color: "white"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("delete")))]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.drafts, function(draft, i) {
                          return _c("tr", { key: i }, [
                            _c(
                              "td",
                              {
                                staticStyle: {
                                  border: "1px solid black",
                                  width: "780"
                                }
                              },
                              [_vm._v(_vm._s(_vm.drafts.draft_name))]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticStyle: {
                                  border: "1px solid black",
                                  width: "10px"
                                }
                              },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mx-2 mt-2 mb-2",
                                    attrs: {
                                      fab: "",
                                      color: "blue",
                                      "x-small": "",
                                      dark: ""
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.useDraft()
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-pencil")])],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticStyle: {
                                  border: "1px solid black",
                                  width: "10px"
                                }
                              },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mx-2 mt-2 mb-2",
                                    attrs: {
                                      fab: "",
                                      color: "red",
                                      "x-small": "",
                                      dark: ""
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.deleteDraftConfirm = true
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-delete")])],
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
              _c("v-divider", { staticClass: "mt-n1" })
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
          attrs: { width: "300", persistent: "" },
          model: {
            value: _vm.deleteDraftConfirm,
            callback: function($$v) {
              _vm.deleteDraftConfirm = $$v
            },
            expression: "deleteDraftConfirm"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                {
                  staticClass: "headline",
                  staticStyle: { "background-color": "teal", color: "white" },
                  attrs: { "primary-title": "" }
                },
                [_c("strong", [_vm._v(_vm._s(_vm.$t("confirmation")))])]
              ),
              _vm._v(" "),
              _c("v-card-text", { staticStyle: { height: "45px" } }, [
                _c("h5", { staticClass: "mt-2 mb-2 text-center" }, [
                  _c("strong", [
                    _vm._v(_vm._s(_vm.$t("confirmationForDelete")))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mt-4",
                  attrs: { tile: "", width: "50%", color: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.deleteDraft()
                    }
                  }
                },
                [_c("strong", [_vm._v(_vm._s(_vm.$t("yes")))])]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mt-4 ml-n1",
                  staticStyle: { color: "white" },
                  attrs: { tile: "", width: "50%", color: "teal" },
                  on: {
                    click: function($event) {
                      _vm.deleteDraftConfirm = false
                    }
                  }
                },
                [_c("strong", [_vm._v(_vm._s(_vm.$t("no")))])]
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
          attrs: { scrollable: "", "max-width": "700px" },
          model: {
            value: _vm.DraftListDialog,
            callback: function($$v) {
              _vm.DraftListDialog = $$v
            },
            expression: "DraftListDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                {
                  attrs: {
                    flat: "",
                    dark: "",
                    color: "teal darken-4",
                    dense: ""
                  }
                },
                [
                  _c("v-toolbar-title", [_vm._v(_vm._s(_vm.$t("drafts")))]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.DraftListDialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { height: "400px" } },
                [
                  _c("v-simple-table", {
                    staticClass: "mt-3",
                    attrs: { "fixed-header": "", dense: "" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function() {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c(
                                  "th",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: {
                                      width: "70%",
                                      "background-color": "#004D40",
                                      color: "white"
                                    }
                                  },
                                  [_vm._v("Title")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: {
                                      width: "20%",
                                      "background-color": "#004D40",
                                      color: "white"
                                    }
                                  },
                                  [_vm._v("Date Created")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "th",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: {
                                      width: "10%",
                                      "background-color": "#004D40",
                                      color: "white"
                                    }
                                  },
                                  [_vm._v("Action")]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.drafts, function(draft, ind) {
                                return _c("tr", { key: ind }, [
                                  _c("td", [_vm._v(_vm._s(draft.Title))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(draft.created_at.split("T")[0])
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                color: "green",
                                                small: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.UseDraft(draft)
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { small: "" } },
                                                [_vm._v("mdi-pencil")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                icon: "",
                                                color: "red",
                                                small: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.DeleteDraft(draft)
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { small: "" } },
                                                [_vm._v("mdi-delete")]
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
                                ])
                              }),
                              0
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Application.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/Application.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Application_vue_vue_type_template_id_2b4eb62a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application.vue?vue&type=template&id=2b4eb62a& */ "./resources/js/components/pages/Application.vue?vue&type=template&id=2b4eb62a&");
/* harmony import */ var _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Application.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Application.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Application_vue_vue_type_template_id_2b4eb62a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Application_vue_vue_type_template_id_2b4eb62a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Application.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Application.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/Application.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Application.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Application.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Application.vue?vue&type=template&id=2b4eb62a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/Application.vue?vue&type=template&id=2b4eb62a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_2b4eb62a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Application.vue?vue&type=template&id=2b4eb62a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Application.vue?vue&type=template&id=2b4eb62a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_2b4eb62a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_2b4eb62a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ApplicationList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/ApplicationList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _methods;

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: {
    SelectedApplications: function SelectedApplications() {
      return this.ApplicationList.filter(function (rec) {
        return rec.Selected == true;
      }).map(function (rec) {
        return rec.MpaNo;
      });
    },
    isAvailable: function isAvailable() {
      if (this.MpaDetails.general_informations.Status !== undefined) {
        if (this.MpaDetails.general_informations.Status == 1) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    },
    ReadOnly: function ReadOnly() {
      if (!this.isAdmin && this.MpaDetails.general_informations.Status !== undefined) {
        return false;
      } else {
        if (this.MpaDetails.general_informations.Status == 0 && this.MpaDetails.general_informations.Applicant == this.$store.state.user.EmployeeID) {
          return false;
        } else {
          return true;
        }
      }
    },
    isAdmin: function isAdmin() {
      return this.$store.state.user.AccessLevel == 1 && this.$store.state.user.Department != '経理';
    },
    totalRatio: function totalRatio() {
      var totalRatio = 100;

      if (this.MpaDetails.payment_schedules.PoRatio != '' && this.MpaDetails.payment_schedules.PoRatio != null) {
        totalRatio -= parseInt(this.MpaDetails.payment_schedules.PoRatio);
      }

      if (this.MpaDetails.payment_schedules.RecievingBlRatio != '' && this.MpaDetails.payment_schedules.RecievingBlRatio != null) {
        totalRatio -= parseInt(this.MpaDetails.payment_schedules.RecievingBlRatio);
      }

      if (this.MpaDetails.payment_schedules.InspectionRatio != '' && this.MpaDetails.payment_schedules.InspectionRatio != null) {
        totalRatio -= parseInt(this.MpaDetails.payment_schedules.InspectionRatio);
      }

      if (this.MpaDetails.payment_schedules.OthersRatio != '' && this.MpaDetails.payment_schedules.OthersRatio != null) {
        totalRatio -= parseInt(this.MpaDetails.payment_schedules.OthersRatio);
      }

      return totalRatio;
    },
    totalPercent: function totalPercent() {
      var totalPercent = 0;

      if (this.MpaDetails.payment_schedules.PoRatio != '' && this.MpaDetails.payment_schedules.PoRatio != null) {
        totalPercent += parseInt(this.MpaDetails.payment_schedules.PoRatio);
      }

      if (this.MpaDetails.payment_schedules.RecievingBlRatio != '' && this.MpaDetails.payment_schedules.RecievingBlRatio != null) {
        totalPercent += parseInt(this.MpaDetails.payment_schedules.RecievingBlRatio);
      }

      if (this.MpaDetails.payment_schedules.InspectionRatio != '' && this.MpaDetails.payment_schedules.InspectionRatio != null) {
        totalPercent += parseInt(this.MpaDetails.payment_schedules.InspectionRatio);
      }

      if (this.MpaDetails.payment_schedules.OthersRatio != '' && this.MpaDetails.payment_schedules.OthersRatio != null) {
        totalPercent += parseInt(this.MpaDetails.payment_schedules.OthersRatio);
      }

      return totalPercent;
    },
    LanguageCheck: function LanguageCheck() {
      return this.$store.state.language == 'english';
    },
    TotalPerCurrency: function TotalPerCurrency() {
      return this.currencies.filter(function (rec) {
        return rec.Total > 0;
      });
    },
    departmentFilter: function departmentFilter() {
      var _this = this;

      return this.departments.filter(function (rec) {
        if (_this.MpaDetails.general_informations.PayerCompanyCode == 'HS') {
          return rec;
        } else {
          return rec.PayerCode == _this.MpaDetails.general_informations.PayerCompanyCode;
        }
      });
    }
  },
  data: function data() {
    return {
      ForUploadPo: [],
      ForUploadBl: [],
      ForUploadInvoice: [],
      search: {},
      tableOptions: {
        currentPage: 1,
        skip: 0,
        count: 0,
        length: 0,
        visible: 6
      },
      overlay: true,
      filter: {
        "boolean": false
      },
      approver: 1,
      dialog1: false,
      ViewMpaDetailsDialog: false,
      ConfirmUpdateDialog: false,
      CancelApplicationDialog: false,
      ReasonForDisapprovalDialog: false,
      ReasonForMultipleDisapprovalDialog: false,
      ConfirmDoneInspectionDialog: false,
      AttachmentDialog: false,
      PoUploadDialog: false,
      InvoiceUploadDialog: false,
      BlUploadDialog: false,
      ReasonForDisapproval: '',
      ReasonForUpdate: '',
      check: false,
      updateReason: null,
      cancelApplicationReason: '',
      general: {},
      disapprovedReason: null,
      available: 0,
      nihon: null,
      payerValue: [],
      departmentValue: [],
      itemValue: [],
      purchaseValue: [],
      statusCost: null,
      otherCost: [{}],
      statusValue: [],
      curremcy: [{}],
      scheduleMonth: [],
      disablePayment: [],
      scheduleMonthValue: [],
      scheduleStatus: [],
      scheduleStatusValue: [],
      status: [],
      totalPayment: 0,
      ApplicationList: [],
      MpaDetails: {
        general_informations: {},
        items: [],
        other_informations: {},
        payment_schedules: {}
      },
      //masterlists
      approvers: [],
      currencies: [],
      departments: [],
      months: [],
      payers: [],
      payment_dues: [],
      schedules: [],
      quotation_statuses: [],
      trade_terms: [],
      doneInspectionMpaNo: '',
      AttachmentDialogData: {},
      PoAttachmentDetails: {},
      InvoiceAttachmentDetails: {},
      BlAttachmentDetails: {}
    };
  },
  created: function created() {
    this.getApplications();
    this.getMasterLists();

    if (this.$router.history.current.fullPath.includes('?')) {
      var params = this.$router.history.current.fullPath.split('?')[1].split('=');

      if (params[0] == 'MpaNo' && params[1].length == 10) {
        this.overlay = true;
        this.ViewMpaDetailsDialog = true;
        this.getMpaDetails(params[1]);
      }
    }

    if (this.$store.state.path != "") {
      this.$store.commit('REMOVE_PATH');
    }
  },
  methods: (_methods = {
    InvoiceFileUpload: function InvoiceFileUpload(val) {
      var _this2 = this;

      this.$swal.fire({
        title: 'Do you want to Upload Invoice Attachment?',
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm" // denyButtonText: `Don't save`,

      }).then(function (result) {
        if (result.isConfirmed) {
          var headers = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          };
          var formData = new FormData();
          formData.append('files[]', val);
          formData.append('MpaNo', _this2.InvoiceAttachmentDetails.MpaNo);
          axios({
            method: 'post',
            url: '/api/UploadInvoice',
            data: formData,
            headers: headers
          }).then(function (res) {
            // this.AfterUploadActions()
            // alert('uploaded')
            // $('.PoUpload').eq(i).val("")
            _this2.overlay = true;

            _this2.AfterUploadActions();
          })["catch"](function (err) {
            _this2.overlay = false;
          });
        }
      });
    },
    BlFileUpload: function BlFileUpload(val) {
      var _this3 = this;

      // console.log(val)
      this.$swal.fire({
        title: 'Do you want to Upload BL Attachment?',
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm" // denyButtonText: `Don't save`,

      }).then(function (result) {
        if (result.isConfirmed) {
          var headers = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          };
          var formData = new FormData();
          formData.append('files[]', val);
          formData.append('MpaNo', _this3.BlAttachmentDetails.MpaNo);
          axios({
            method: 'post',
            url: '/api/UploadBl',
            data: formData,
            headers: headers
          }).then(function (res) {
            // this.AfterUploadActions()
            // alert('uploaded')
            // $('.PoUpload').eq(i).val("")
            _this3.overlay = true;

            _this3.AfterUploadActions();
          })["catch"](function (err) {
            _this3.overlay = false;
          });
        }
      });
    },
    AttachmentLink: function AttachmentLink(rec, field) {
      return "".concat(window.location.origin, "/Attachment/").concat(rec.MpaNo, "/").concat(rec[field]);
    },
    DeleteInvoiceAttachment: function DeleteInvoiceAttachment(i) {
      var _this4 = this;

      this.$swal.fire({
        title: 'Do you want to Delete Invoice Attachment?',
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm" // denyButtonText: `Don't save`,

      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post('/api/DeleteInvoiceAttachment', _this4.ApplicationList[i]).then(function (res) {
            _this4.overlay = true;

            _this4.getApplications();

            _this4.$swal.fire('Success!', 'Attachment Deleted Successfully!', 'success');
          })["catch"](function (err) {
            console.log(err);
          });
        }
      });
    },
    DeleteBlAttachment: function DeleteBlAttachment(i) {
      var _this5 = this;

      this.$swal.fire({
        title: 'Do you want to Delete BL Attachment?',
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm" // denyButtonText: `Don't save`,

      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post('/api/DeleteBlAttachment', _this5.ApplicationList[i]).then(function (res) {
            _this5.overlay = true;

            _this5.getApplications();

            _this5.$swal.fire('Success!', 'Attachment Deleted Successfully!', 'success');
          })["catch"](function (err) {
            console.log(err);
          });
        }
      });
    },
    DeletePoAttachment: function DeletePoAttachment(i) {
      var _this6 = this;

      this.$swal.fire({
        title: 'Do you want to Delete Po Attachment?',
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm" // denyButtonText: `Don't save`,

      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post('/api/DeletePoAttachment', _this6.ApplicationList[i]).then(function (res) {
            _this6.overlay = true;

            _this6.getApplications();

            _this6.$swal.fire('Success!', 'Attachment Deleted Successfully!', 'success');
          })["catch"](function (err) {
            console.log(err);
          });
        }
      });
    },
    PoFileUpload: function PoFileUpload(i) {
      var _this7 = this;

      this.$swal.fire({
        title: 'Do you want to Upload Po Attachment?',
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm" // denyButtonText: `Don't save`,

      }).then(function (result) {
        if (result.isConfirmed) {
          var headers = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          };
          var formData = new FormData();
          formData.append('files[]', i);
          formData.append('MpaNo', _this7.PoAttachmentDetails.MpaNo);
          axios({
            method: 'post',
            url: '/api/UploadPo',
            data: formData,
            headers: headers
          }).then(function (res) {
            // this.AfterUploadActions()
            // alert('uploaded')
            // $('.PoUpload').eq(i).val("")
            _this7.overlay = true;

            _this7.AfterUploadActions();
          })["catch"](function (err) {
            _this7.overlay = false;
          });
        }
      });
    },
    PoFileInputTrigger: function PoFileInputTrigger(i) {
      // console.log(i)
      $('.PoUpload').eq(i).click();
    },
    AfterUploadActions: function AfterUploadActions() {
      this.getApplications();
      this.AttachmentDialogData = {};
      this.AttachmentDialog = false;
      this.overlay = false;
      this.ForUploadInvoice = [];
      this.ForUploadBl = [];
      this.PoUploadDialog = false;
      this.ForUploadPo = [];
      this.InvoiceUploadDialog = false;
      this.ForUploadInvoice = [];
      this.BlUploadDialog = false;
      this.ForUploadBl = [];
      this.$swal.fire('Success!', 'Attachment Uploaded Successfully!', 'success');
    },
    deleteAttachment: function deleteAttachment(val, type) {
      var _this8 = this;

      this.$swal.fire({
        title: 'Do you want to Delete Attachment?',
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm" // denyButtonText: `Don't save`,

      }).then(function (result) {
        if (result.isConfirmed) {
          axios.post('/api/DeleteAttachment', {
            type: type,
            id: val.id
          }).then(function (res) {
            // console.log(res.data)
            _this8.getApplications();

            _this8.AttachmentDialog = false;

            _this8.$swal.fire('Deleted!', '', 'info');
          });
        }
      });
    },
    UploadInvoice: function UploadInvoice(val) {
      var _this9 = this;

      this.$swal.fire({
        title: 'Do you want to Upload Attachment?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirm" // denyButtonText: `Don't save`,

      }).then(function (result) {
        if (result.isConfirmed) {
          _this9.overlay = true;
          var headers = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          };
          var formData = new FormData();

          for (var x = 0; x < val.length; x++) {
            formData.append('files[]', val[x]);
          }

          formData.append('MpaNo', _this9.AttachmentDialogData.MpaNo);
          axios({
            method: 'post',
            url: '/api/UploadInvoice',
            data: formData,
            headers: headers
          }).then(function (res) {
            _this9.AfterUploadActions();
          })["catch"](function (err) {
            _this9.overlay = false;
          });
        }
      });
    },
    UploadBl: function UploadBl(val) {
      var _this10 = this;

      this.overlay = true;
      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      var formData = new FormData();

      for (var x = 0; x < val.length; x++) {
        formData.append('files[]', val[x]);
      }

      formData.append('MpaNo', this.AttachmentDialogData.MpaNo);
      axios({
        method: 'post',
        url: '/api/UploadBl',
        data: formData,
        headers: headers
      }).then(function (res) {
        _this10.AfterUploadActions(); // this.$swal.fire(
        // 'Success!',
        // 'Application Successfully Registered!',
        // 'success'
        // )

      })["catch"](function (err) {
        _this10.overlay = false;
      });
    },
    blAttachment: function blAttachment(rec) {
      this.AttachmentDialogData = rec;
      this.AttachmentDialog = true;
    },
    invoiceAttachment: function invoiceAttachment(rec) {
      this.AttachmentDialogData = rec;
      this.AttachmentDialog = true;
    },
    doneInspectionConfirmation: function doneInspectionConfirmation(rec) {
      this.ConfirmDoneInspectionDialog = true;
      this.doneInspectionMpaNo = rec.MpaNo;
    },
    confirmDoneInspection: function confirmDoneInspection() {
      var _this11 = this;

      this.overlay = true;
      axios.post('/api/ConfirmDoneInspection', {
        MpaNo: this.doneInspectionMpaNo,
        EmployeeID: this.$store.state.user.EmployeeID
      }).then(function (res) {
        _this11.Notify(_this11.doneInspectionMpaNo, 'Done Inspection Confirmed!', 'success');

        _this11.AfterApprovalFunctions();
      })["catch"](function (err) {
        _this11.overlay = false;
      });
    },
    withRevision: function withRevision() {
      if (!!this.MpaDetails.general_informations.RevisedFieldItems) {
        if (this.MpaDetails.general_informations.RevisedFieldItems.includes('UnitPrice') || this.MpaDetails.general_informations.RevisedFieldItems.includes('Quantity')) {
          return 6;
        } else {
          return 12;
        }
      } else {
        return 12;
      }
    },
    clear: function clear() {
      this.overlay = true;
      this.search = {};
      this.getApplications();
    },
    SearchApplications: function SearchApplications() {
      this.overlay = true;
      this.getApplications();
    },
    GenerateMpaSlip: function GenerateMpaSlip(MpaNo) {
      window.open("".concat(window.location.origin, "/MpaSlip?q=").concat(md5(MpaNo)));
    },
    confirmCancelApplication: function confirmCancelApplication() {
      var _this12 = this;

      this.overlay = true;
      axios.post('api/CancelApplication', {
        MpaNo: this.MpaDetails.general_informations.MpaNo,
        reason: this.cancelApplicationReason
      }).then(function (res) {
        _this12.AfterApprovalFunctions();

        _this12.Notify(_this12.MpaDetails.general_informations.MpaNo, _this12.$t('cancelled'), 'success');
      });
    },
    UpdateApplication: function UpdateApplication() {
      var _this13 = this;

      this.overlay = true;
      var MpaDetails = this.MpaDetails;
      MpaDetails.Reason = this.ReasonForUpdate;
      axios.post('api/UpdateApplication', MpaDetails).then(function (res) {
        _this13.Notify(_this13.MpaDetails.general_informations.MpaNo, _this13.$t('modified'), 'success');

        _this13.AfterApprovalFunctions();
      });
    },
    AfterApprovalFunctions: function AfterApprovalFunctions() {
      this.$EventBus.$emit('GET_NOTIFICATIONS');
      this.getApplications();
      this.ViewMpaDetailsDialog = false;
      this.ReasonForDisapprovalDialog = false;
      this.ReasonForMultipleDisapprovalDialog = false;
      this.CancelApplicationDialog = false;
      this.ConfirmUpdateDialog = false;
      this.ReasonForDisapproval = '';
      this.cancelApplicationReason = '';
      this.overlay = false;
      this.ConfirmDoneInspectionDialog = false;
      this.doneInspectionMpaNo = "";
      this.MpaDetails = {
        general_informations: {},
        items: [],
        other_informations: {},
        payment_schedules: {}
      };
    },
    MultipleDisapproveApplication: function MultipleDisapproveApplication() {
      var _this14 = this;

      this.overlay = true;
      axios.post('api/MultipleDisapproveApplication', {
        MpaNos: this.SelectedApplications,
        ReasonForDisapproval: this.ReasonForDisapproval
      }).then(function (res) {
        var msg_text = "";

        if (_this14.$store.state.language == 'english') {
          if (_this14.SelectedApplications.length > 1) {
            msg_text = 'were Successfully Disapproved!';
          } else {
            msg_text = 'was Successfully Disapproved!';
          }
        } else {
          msg_text = "承認を拒否しました";
        }

        _this14.Notify(_this14.SelectedApplications.join(', '), msg_text, 'warning');

        _this14.AfterApprovalFunctions();
      });
    },
    MultipleApproveApplication: function MultipleApproveApplication() {
      var _this15 = this;

      this.overlay = true;
      axios.post('api/MultipleApproveApplication', {
        MpaNos: this.SelectedApplications
      }).then(function (res) {
        var msg_text = '';

        if (_this15.$store.state.language == 'english') {
          if (_this15.SelectedApplications.length > 1) {
            msg_text = 'were Successfully Approved!';
          } else {
            msg_text = 'was Successfully Approved!';
          }
        } else {
          msg_text = "申請完了";
        }

        _this15.Notify(_this15.SelectedApplications.join(', '), msg_text, 'success');

        _this15.AfterApprovalFunctions();
      });
    },
    MultipleApproval: function MultipleApproval(val) {
      if (val == 1) {
        this.MultipleApproveApplication();
      } else {
        this.MultipleDisapproveApplication();
      }
    },
    Notify: function Notify(MpaNos, msg, type) {
      this.$swal.fire(MpaNos, msg, type);
    },
    DisapproveApplication: function DisapproveApplication() {
      var _this16 = this;

      this.overlay = true;
      axios.post('api/DisapproveApplication', {
        MpaNo: this.MpaDetails.general_informations.MpaNo,
        ReasonForDisapproval: this.ReasonForDisapproval
      }).then(function (res) {
        _this16.Notify(_this16.MpaDetails.general_informations.MpaNo, 'was Successfully Dispproved!', 'warning');

        _this16.AfterApprovalFunctions();
      });
    },
    ApproveApplication: function ApproveApplication() {
      var _this17 = this;

      this.overlay = true;
      axios.post('api/ApproveApplication', {
        MpaNo: this.MpaDetails.general_informations.MpaNo
      }).then(function (res) {
        _this17.Notify(_this17.MpaDetails.general_informations.MpaNo, 'was Successfully Approved!', 'success');

        _this17.AfterApprovalFunctions();
      });
    },
    Approval: function Approval(val) {
      if (val == 1) {
        this.ApproveApplication();
      } else {
        this.DisapproveApplication();
      }
    },
    changePage: function changePage() {
      this.tableOptions.skip = (this.tableOptions.currentPage - 1) * 15;
      this.overlay = true;
      this.getApplications();
    },
    paymentScheduleRowChecker: function paymentScheduleRowChecker(row, field) {
      return !(this.MpaDetails.payment_schedules[row + 'ratio'] > 0) && !this.MpaDetails.general_informations.NihonSangyou && this.totalPercent <= 100 && !this.MpaDetails.payment_schedules[field];
    },
    checkDisabled: function checkDisabled(field) {
      return this.totalRatio <= 0 && this.MpaDetails.payment_schedules[field] <= 0;
    },
    onlyNumber: function onlyNumber(evt) {
      var charCode = evt.which ? evt.which : evt.keyCode;

      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      }
    },
    checkRatio: function checkRatio(i) {
      var fields = ['PoRatio', 'RecievingBlRatio', 'InspectionRatio', 'OthersRatio'];

      if (this.totalRatio < 0) {
        this.MpaDetails.payment_schedules[fields[i - 1]] = 0;
        this.MpaDetails.payment_schedules[fields[i - 1]] = this.totalRatio;
      }
    },
    openPdf: function openPdf(file) {
      window.open("/Attachment/".concat(file.split('.')[0], "/").concat(file));
    },
    numberWithComma: function numberWithComma(i, field1, field2) {
      if (field1 === undefined && field2 === undefined) {
        if (i.toString().includes('.')) {
          var fields = i.toString().split('.');

          if (this.MpaDetails[fields[1]][fields[2]] != "") {
            this.MpaDetails[fields[1]][fields[2]] = parseInt(this.MpaDetails[fields[1]][fields[2]].split(',').join('')).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } else {
            this.MpaDetails[fields[1]][fields[2]] = 0;
          }
        } else {
          return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      } else {
        this.MpaDetails[field1][i][field2] = this.MpaDetails[field1][i][field2].split(',').join('').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
    computeTotalPerCurrency: function computeTotalPerCurrency() {
      var _this18 = this;

      var totals = [0, 0, 0, 0, 0];
      this.MpaDetails.items.forEach(function (rec) {
        if (rec.UnitPrice != '' && rec.Quantity != '' && rec.Currency != '') {
          var index = _this18.currencies.findIndex(function (res) {
            return res.currency_code == rec.Currency;
          });

          var UP = rec.UnitPrice.includes(',') ? parseFloat(rec.UnitPrice.split(',').join('')) : parseFloat(rec.UnitPrice);
          var QTY = rec.Quantity.includes(',') ? parseFloat(rec.Quantity.split(',').join('')) : parseFloat(rec.Quantity);
          totals[index] += UP * QTY;
        }
      });

      for (var x = 0; x < totals.length; x++) {
        this.$set(this.currencies[x], 'Total', totals[x]);
      }
    },
    getMasterLists: function getMasterLists() {
      var _this19 = this;

      axios.get('api/getMasterLists').then(function (res) {
        _this19.approvers = res.data.approvers;
        _this19.currencies = res.data.currencies;
        _this19.departments = res.data.departments;
        _this19.months = res.data.months;
        _this19.payers = res.data.payers;
        _this19.payment_dues = res.data.payment_dues;
        _this19.schedules = res.data.schedules;
        _this19.quotation_statuses = res.data.quotation_statuses;
        _this19.trade_terms = res.data.trade_terms, _this19.status = res.data.status;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    dateSubstring: function dateSubstring(date) {
      return date === undefined ? null : date.substring(0, 10);
    },
    returValuesToOriginal: function returValuesToOriginal() {
      var _this20 = this;

      this.MpaDetails.general_informations.NihonSangyou = this.MpaDetails.general_informations.NihonSangyou == 1 ? true : false;
      this.MpaDetails.general_informations.TradeTermCode = parseInt(this.MpaDetails.general_informations.TradeTermCode);
      this.MpaDetails.items.forEach(function (rec, i) {
        rec.DepartmentCode = parseInt(rec.DepartmentCode);
        rec.UnitPrice = rec.UnitPrice.toString().includes(',') ? parseInt(rec.UnitPrice) : _this20.numberWithComma(rec.UnitPrice);
        rec.Quantity = rec.Quantity.toString().includes(',') ? parseInt(rec.Quantity) : _this20.numberWithComma(rec.Quantity);
      });
      this.MpaDetails.other_informations.PackingExpenseStatus = this.MpaDetails.other_informations.PackingExpenseStatus.toString();
      this.MpaDetails.other_informations.PackingExpenseAmount = this.numberWithComma(this.MpaDetails.other_informations.PackingExpenseAmount);
      this.MpaDetails.other_informations.DistributionExpenseStatus = this.MpaDetails.other_informations.DistributionExpenseStatus.toString();
      this.MpaDetails.other_informations.DistributionExpenseAmount = this.numberWithComma(this.MpaDetails.other_informations.DistributionExpenseAmount);
      this.MpaDetails.other_informations.InstallationExpenseStatus = this.MpaDetails.other_informations.InstallationExpenseStatus.toString();
      this.MpaDetails.other_informations.InstallationExpenseAmount = this.numberWithComma(this.MpaDetails.other_informations.InstallationExpenseAmount);
      this.MpaDetails.other_informations.OtherExpenseStatus = this.MpaDetails.other_informations.OtherExpenseStatus.toString();
      this.MpaDetails.other_informations.OtherExpenseAmount = this.numberWithComma(this.MpaDetails.other_informations.OtherExpenseAmount);

      if (this.MpaDetails.payment_schedules == null) {
        this.MpaDetails.payment_schedules = {};
        this.$set(this.MpaDetails.payment_schedules, 'PoRatio', 0);
        this.$set(this.MpaDetails.payment_schedules, 'RecievingBlRatio', 0);
        this.$set(this.MpaDetails.payment_schedules, 'InspectionRatio', 0);
        this.$set(this.MpaDetails.payment_schedules, 'OthersRatio', 0);
      }

      if (this.MpaDetails.history != null) {
        this.MpaDetails.history.GeneralInformations = JSON.parse(this.MpaDetails.history.GeneralInformations);
        this.MpaDetails.history.Items = JSON.parse(this.MpaDetails.history.Items);
        this.MpaDetails.history.OtherInformations = JSON.parse(this.MpaDetails.history.OtherInformations);
        this.MpaDetails.history.PaymentSchedules = JSON.parse(this.MpaDetails.history.PaymentSchedules);
        this.MpaDetails.history.Items.forEach(function (rec) {
          rec.UnitPrice = rec.UnitPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        });
      }
    },
    getMpaDetails: function getMpaDetails(MpaNo) {
      var _this21 = this;

      axios.post('api/getMpaDetails', {
        MpaNo: MpaNo
      }).then(function (res) {
        _this21.MpaDetails = res.data;

        _this21.returValuesToOriginal();

        _this21.computeTotalPerCurrency();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getApplications: function getApplications() {
      var _this22 = this;

      var values = {
        skip: this.tableOptions.skip,
        user: this.$store.state.user.EmployeeID,
        search: this.search
      };
      console.log(!!this.search.MpaNo);

      if (this.$store.state.user.AccessLevel == 1) {
        this.$set(values, 'approver', this.$store.state.user.EmployeeID);
      }

      axios.post('api/GetApplications', values).then(function (res) {
        _this22.ApplicationList = res.data.ApplicationList;
        _this22.tableOptions.count = res.data.ApplicationCount;
        var pagerCount = res.data.ApplicationCount / 15;
        _this22.tableOptions.length = pagerCount.toString().includes('.') ? parseInt(pagerCount.toString().split('.')[0]) + 1 : pagerCount;
        _this22.overlay = false;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, _defineProperty(_methods, "onlyNumber", function onlyNumber(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
    }
  }), _defineProperty(_methods, "checkAll", function checkAll() {
    return false;
  }), _methods)
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ApplicationList.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/ApplicationList.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.table--custom th {\r\n    background-color: #004D40 !important;\r\n    color: white !important;\r\n    font-size: 18px !important;\r\n    font-weight: normal !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ApplicationList.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/ApplicationList.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplicationList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ApplicationList.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ApplicationList.vue?vue&type=template&id=558632e8&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/ApplicationList.vue?vue&type=template&id=558632e8& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "app" } },
    [
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
            { staticClass: "ml-5", staticStyle: { "font-size": "18px" } },
            [_vm._v(_vm._s(_vm.$t("listOfPurchaseApplication")))]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-overlay",
        { staticStyle: { "z-index": "999" }, attrs: { value: _vm.overlay } },
        [
          _c("v-progress-circular", {
            staticStyle: { "z-index": "999" },
            attrs: { indeterminate: "", size: "64", color: "black", width: "1" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "ml-1", attrs: { "no-gutters": "" } },
        [
          _c(
            "v-tooltip",
            {
              attrs: { right: "" },
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
                              staticClass: "mt-2 searchTrigger",
                              attrs: { icon: "", large: "", readOnly: "" }
                            },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _c("v-icon", { attrs: { large: "" } }, [
                            _vm._v(" mdi-filter")
                          ])
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
              _c("span", [
                _vm._v(_vm._s(_vm.filter.boolean ? "Remove Filter" : "Filter"))
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "transition",
            { attrs: { name: "fade" } },
            [
              _c(
                "v-row",
                {
                  staticClass: "ml-5",
                  staticStyle: { width: "90%" },
                  attrs: { cols: "11", "no-gutters": "" }
                },
                [
                  _c(
                    "v-row",
                    { attrs: { cols: "12", md: "12", sm: "12" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "2", sm: "2" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              "hide-details": "",
                              clearable: "",
                              dense: "",
                              outlined: "",
                              label: _vm.$t("status"),
                              items: _vm.status,
                              "item-text": _vm.LanguageCheck
                                ? "status_name_en"
                                : "status_name_jp",
                              "item-value": "status_id"
                            },
                            model: {
                              value: _vm.search.Status,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "Status", $$v)
                              },
                              expression: "search.Status"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "2", sm: "2" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              "hide-details": "",
                              clearable: "",
                              dense: "",
                              outlined: "",
                              label: _vm.$t("company"),
                              items: _vm.payers,
                              "item-text": "payer_name",
                              "item-value": "payer_code"
                            },
                            model: {
                              value: _vm.search.PayerCompanyCode,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "PayerCompanyCode", $$v)
                              },
                              expression: "search.PayerCompanyCode"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "2", sm: "2" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "hide-details": "",
                              dense: "",
                              outlined: "",
                              label: "MpaNo",
                              "prepend-inner-icon": "mdi-magnify"
                            },
                            model: {
                              value: _vm.search.MpaNo,
                              callback: function($$v) {
                                _vm.$set(_vm.search, "MpaNo", $$v)
                              },
                              expression: "search.MpaNo"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "3", sm: "3" } },
                        [
                          _c(
                            "v-menu",
                            {
                              ref: "menu",
                              attrs: {
                                "close-on-content-click": false,
                                "return-value": _vm.search.dates,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "290px"
                              },
                              on: {
                                "update:returnValue": function($event) {
                                  return _vm.$set(_vm.search, "dates", $event)
                                },
                                "update:return-value": function($event) {
                                  return _vm.$set(_vm.search, "dates", $event)
                                }
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-combobox",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                dense: "",
                                                multiple: "",
                                                chips: "",
                                                "small-chips": "",
                                                label: "Applied Date Range",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                "hide-details": "",
                                                clearable: ""
                                              },
                                              model: {
                                                value: _vm.search.dates,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.search,
                                                    "dates",
                                                    $$v
                                                  )
                                                },
                                                expression: "search.dates"
                                              }
                                            },
                                            "v-combobox",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      )
                                    ]
                                  }
                                }
                              ]),
                              model: {
                                value: _vm.search.menu,
                                callback: function($$v) {
                                  _vm.$set(_vm.search, "menu", $$v)
                                },
                                expression: "search.menu"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-date-picker",
                                {
                                  attrs: { range: "" },
                                  model: {
                                    value: _vm.search.dates,
                                    callback: function($$v) {
                                      _vm.$set(_vm.search, "dates", $$v)
                                    },
                                    expression: "search.dates"
                                  }
                                },
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { text: "", color: "primary" },
                                      on: {
                                        click: function($event) {
                                          _vm.menu = false
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                    Cancel\r\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { text: "", color: "primary" },
                                      on: {
                                        click: function($event) {
                                          return _vm.$refs.menu.save(
                                            _vm.search.dates
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                    OK\r\n                                "
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
                        "v-col",
                        { attrs: { cols: "6", md: "1", sm: "1" } },
                        [
                          _c(
                            "v-btn",
                            {
                              staticStyle: { width: "100%" },
                              attrs: { color: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.SearchApplications()
                                }
                              }
                            },
                            [_c("strong", [_vm._v(_vm._s(_vm.$t("search")))])]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6", md: "1", sm: "1" } },
                        [
                          _c(
                            "v-btn",
                            {
                              staticStyle: { width: "100%" },
                              attrs: { color: "grey" },
                              on: {
                                click: function($event) {
                                  return _vm.clear()
                                }
                              }
                            },
                            [_c("strong", [_vm._v(_vm._s(_vm.$t("clear")))])]
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
        "v-card",
        { staticClass: "mx-5" },
        [
          _c(
            "v-simple-table",
            {
              staticClass: "table--custom main--table",
              attrs: { "fixed-header": "", dense: "", height: "65vh" }
            },
            [
              _c("thead", [
                _c("tr", [
                  _vm.isAdmin
                    ? _c("th", { staticClass: "text-center text-nowrap" })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticClass: "text-center text-nowrap",
                      staticStyle: { border: "1 solid black !important" }
                    },
                    [_vm._v(_vm._s(_vm.$t("status")))]
                  ),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("applicationDate")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("applicant")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("itemName")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("mpaNo")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("details")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("reportPrint")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("approver")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("quotation")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("orderBy")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("PO")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("invoice")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("bl")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "text-center text-nowrap" }, [
                    _vm._v(_vm._s(_vm.$t("inspection")))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.ApplicationList, function(record, i) {
                  return _c("tr", { key: i }, [
                    _vm.isAdmin
                      ? _c(
                          "td",
                          [
                            record.Status == 0 &&
                            record.ApproverF == _vm.$store.state.user.EmployeeID
                              ? _c("v-checkbox", {
                                  staticClass: "mr-4",
                                  staticStyle: { width: "2px" },
                                  model: {
                                    value: record.Selected,
                                    callback: function($$v) {
                                      _vm.$set(record, "Selected", $$v)
                                    },
                                    expression: "record.Selected"
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "v-chip",
                          {
                            staticClass: "ma-2",
                            attrs: {
                              color:
                                record.Status == 1
                                  ? "green lighten-2"
                                  : "grey lighten-2",
                              small: ""
                            }
                          },
                          [
                            record.Status == 1
                              ? _c("span", { staticClass: "pa-2" }, [
                                  _vm._v(_vm._s(_vm.$t("approved")))
                                ])
                              : _c("span", { staticClass: "pa-2" }, [
                                  _vm._v(_vm._s(_vm.$t("pending")))
                                ])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.dateSubstring(record.created_at)))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-nowrap" }, [
                      _vm._v(
                        _vm._s(
                          _vm.LanguageCheck
                            ? record.ApplicantFullNameEng
                            : record.ApplicantFullNameJap
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-nowrap" }, [
                      _vm._v(
                        _vm._s(
                          _vm.LanguageCheck
                            ? record.ItemNameEng
                            : record.ItemNameJap
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(record.MpaNo))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { fab: "", "x-small": "" },
                            on: {
                              click: function($event) {
                                _vm.getMpaDetails(record.MpaNo),
                                  (_vm.ViewMpaDetailsDialog = true)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-chevron-double-right")])],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { icon: "", small: "" },
                            on: {
                              click: function($event) {
                                return _vm.GenerateMpaSlip(record.MpaNo)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-printer")])],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-nowrap" }, [
                      _vm._v(
                        _vm._s(
                          _vm.LanguageCheck
                            ? record.ApproverFullNameEng
                            : record.ApproverFullNameJap
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { small: "", icon: "" },
                            on: {
                              click: function($event) {
                                return _vm.openPdf(record.Attachment)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-file-pdf")])],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(record.order_by))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-nowrap" },
                      [
                        !record.PoAttachment
                          ? [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "", small: "", color: "teal" },
                                  on: {
                                    click: function($event) {
                                      ;(_vm.PoUploadDialog = true),
                                        (_vm.PoAttachmentDetails = record)
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("mdi-attachment")])],
                                1
                              )
                            ]
                          : [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.AttachmentLink(
                                      record,
                                      "PoAttachment"
                                    ),
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(record.PoAttachment))]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ml-2",
                                  attrs: {
                                    icon: "",
                                    color: "red",
                                    "x-small": ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.DeletePoAttachment(i)
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("mdi-close")])],
                                1
                              )
                            ]
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-nowrap" },
                      [
                        !record.InAttachment
                          ? [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    icon: "",
                                    small: "",
                                    color: "teal darken-2"
                                  },
                                  on: {
                                    click: function($event) {
                                      ;(_vm.InvoiceUploadDialog = true),
                                        (_vm.InvoiceAttachmentDetails = record)
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("mdi-attachment")])],
                                1
                              )
                            ]
                          : [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.AttachmentLink(
                                      record,
                                      "InAttachment"
                                    ),
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(record.InAttachment))]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ml-2",
                                  attrs: {
                                    icon: "",
                                    color: "red",
                                    "x-small": ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.DeleteInvoiceAttachment(i)
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("mdi-close")])],
                                1
                              )
                            ]
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-nowrap" },
                      [
                        !record.BlAttachment
                          ? [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    icon: "",
                                    small: "",
                                    color: "teal darken-4"
                                  },
                                  on: {
                                    click: function($event) {
                                      ;(_vm.BlUploadDialog = true),
                                        (_vm.BlAttachmentDetails = record)
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("mdi-attachment")])],
                                1
                              )
                            ]
                          : [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.AttachmentLink(
                                      record,
                                      "BlAttachment"
                                    ),
                                    target: "_blank"
                                  }
                                },
                                [_vm._v(_vm._s(record.BlAttachment))]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ml-2",
                                  attrs: {
                                    icon: "",
                                    color: "red",
                                    "x-small": ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.DeleteBlAttachment(i)
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("mdi-close")])],
                                1
                              )
                            ]
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        record.ForInspection == 0 &&
                        _vm.$store.state.user.EmployeeID == record.Applicant
                          ? _c(
                              "v-btn",
                              {
                                attrs: { icon: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.doneInspectionConfirmation(
                                      record
                                    )
                                  }
                                }
                              },
                              [
                                _c("v-icon", { attrs: { color: "green" } }, [
                                  _vm._v("mdi-check")
                                ])
                              ],
                              1
                            )
                          : record.ForInspection == 0 &&
                            _vm.$store.state.user.EmployeeID != record.Applicant
                          ? _c("span", { staticClass: "pa-2 text-nowrap" }, [
                              _vm._v(_vm._s(_vm.$t("forInspection")))
                            ])
                          : record.ForInspection == 1
                          ? _c("span", { staticClass: "pa-2 text-nowrap" }, [
                              _vm._v(_vm._s(_vm.$t("doneInspectionConfirmed")))
                            ])
                          : _c("span", { staticClass: "pa-2" }, [
                              _vm._v(_vm._s(_vm.$t("notApplicable")))
                            ])
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
      [
        _c(
          "v-row",
          [
            _vm.isAdmin
              ? [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "2" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "ma-2",
                          staticStyle: { color: "white", width: "100%" },
                          attrs: {
                            disabled: _vm.SelectedApplications == 0,
                            color: "teal"
                          },
                          on: {
                            click: function($event) {
                              return _vm.MultipleApproval(1)
                            }
                          }
                        },
                        [_c("strong", [_vm._v(_vm._s(_vm.$t("approve")))])]
                      )
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
                          staticClass: "ma-2",
                          staticStyle: { color: "white", width: "100%" },
                          attrs: {
                            disabled: _vm.SelectedApplications == 0,
                            color: "red"
                          },
                          on: {
                            click: function($event) {
                              _vm.ReasonForMultipleDisapprovalDialog = true
                            }
                          }
                        },
                        [_c("strong", [_vm._v(_vm._s(_vm.$t("disapprove")))])]
                      )
                    ],
                    1
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("v-spacer"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center mr-2" },
              [
                _c("v-pagination", {
                  staticClass: "my-4",
                  attrs: {
                    length: _vm.tableOptions.length,
                    "total-visible": _vm.tableOptions.visible
                  },
                  on: {
                    input: function($event) {
                      return _vm.changePage()
                    }
                  },
                  model: {
                    value: _vm.tableOptions.currentPage,
                    callback: function($$v) {
                      _vm.$set(_vm.tableOptions, "currentPage", $$v)
                    },
                    expression: "tableOptions.currentPage"
                  }
                })
              ],
              1
            )
          ],
          2
        )
      ],
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          staticStyle: { "z-index": "999" },
          attrs: { fullscreen: "", persistent: "", scrollable: "" },
          model: {
            value: _vm.ViewMpaDetailsDialog,
            callback: function($$v) {
              _vm.ViewMpaDetailsDialog = $$v
            },
            expression: "ViewMpaDetailsDialog"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { tile: "" } },
            [
              _c(
                "v-toolbar",
                {
                  staticStyle: { color: "white", "z-index": "999" },
                  attrs: {
                    flat: "",
                    dark: "",
                    dense: "",
                    color: "teal darken-3"
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "", medium: "" },
                      on: {
                        click: function($event) {
                          _vm.ViewMpaDetailsDialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [
                    _vm._v(
                      _vm._s(
                        _vm.MpaDetails.general_informations.MpaNo +
                          " " +
                          _vm.$t("details")
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "#0D47A1" },
                          on: {
                            click: function($event) {
                              return _vm.openPdf(
                                _vm.MpaDetails.general_informations.Attachment
                              )
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                        " +
                              _vm._s(_vm.$t("quotation")) +
                              "\r\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.isAdmin &&
                      _vm.MpaDetails.general_informations.ApproverF ==
                        _vm.$store.state.user.EmployeeID
                        ? [
                            _vm.isAvailable
                              ? _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      text: "",
                                      color: "green lighten-1"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.Approval(1)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                            " +
                                        _vm._s(_vm.$t("approve")) +
                                        "\r\n                        "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.isAvailable
                              ? _c(
                                  "v-btn",
                                  {
                                    attrs: { text: "", color: "red lighten-1" },
                                    on: {
                                      click: function($event) {
                                        _vm.ReasonForDisapprovalDialog = true
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                            " +
                                        _vm._s(_vm.$t("disapprove")) +
                                        "\r\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.MpaDetails.general_informations.Applicant ==
                      _vm.$store.state.user.EmployeeID
                        ? [
                            _vm.MpaDetails.general_informations.Status == 1
                              ? _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      dark: "",
                                      text: "",
                                      color: "green lighten-1"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.ConfirmUpdateDialog = true
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\r\n                            " +
                                        _vm._s(_vm.$t("save")) +
                                        "\r\n                        "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  dark: "",
                                  text: "",
                                  color: "red lighten-1"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.CancelApplicationDialog = true
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\r\n                            " +
                                    _vm._s(_vm.$t("cancelApplication")) +
                                    "\r\n                        "
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-simple-table",
                    {
                      staticClass: "mt-1",
                      staticStyle: { border: "1px solid black" }
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
                                width: "130px"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("mpaNo")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "background-color": "teal",
                                color: "white"
                              }
                            },
                            [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(
                                    _vm.MpaDetails.general_informations.MpaNo
                                  )
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: { border: "1px solid black" }
                            },
                            [_vm._v(_vm._s(_vm.$t("applicant")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "background-color": "teal",
                                color: "white"
                              }
                            },
                            [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(
                                    _vm.LanguageCheck
                                      ? _vm.MpaDetails.general_informations
                                          .ApplicantFullNameEng
                                      : _vm.MpaDetails.general_informations
                                          .ApplicantFullNameJap
                                  )
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: { border: "1px solid black" }
                            },
                            [_vm._v(_vm._s(_vm.$t("date")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: {
                                border: "1px solid black",
                                "background-color": "teal",
                                color: "white"
                              }
                            },
                            [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(
                                    _vm.dateSubstring(
                                      _vm.MpaDetails.general_informations
                                        .created_at
                                    )
                                  )
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c(
                            "th",
                            { staticStyle: { border: "1px solid black" } },
                            [
                              _vm._v(_vm._s(_vm.$t("vendorName")) + " "),
                              _c("br"),
                              _vm._v(
                                "\r\n                                " +
                                  _vm._s(_vm.$t("viaNihonSangyou")) +
                                  "\r\n                                "
                              ),
                              _c("v-checkbox", {
                                attrs: { readonly: _vm.ReadOnly },
                                model: {
                                  value:
                                    _vm.MpaDetails.general_informations
                                      .NihonSangyou,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.general_informations,
                                      "NihonSangyou",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.general_informations.NihonSangyou"
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
                              attrs: { colspan: "5" }
                            },
                            [
                              _c("v-text-field", {
                                staticClass: "mt-2 mb-n4",
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  error: !_vm.MpaDetails.general_informations
                                    .VendorNameJap,
                                  placeholder: _vm.$t("japanese"),
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.general_informations
                                      .VendorNameJap,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.general_informations,
                                      "VendorNameJap",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.general_informations.VendorNameJap"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-2 mb-n4",
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  error: !_vm.MpaDetails.general_informations
                                    .VendorNameEng,
                                  placeholder: _vm.$t("english"),
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.general_informations
                                      .VendorNameEng,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.general_informations,
                                      "VendorNameEng",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.general_informations.VendorNameEng"
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
                            { staticStyle: { border: "1px solid black" } },
                            [_vm._v(_vm._s(_vm.$t("payerCompanyName")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticStyle: { border: "1px solid black" },
                              attrs: { colspan: "5" }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  items: _vm.payers,
                                  "item-text": "payer_name",
                                  "item-value": "payer_code",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.general_informations
                                      .PayerCompanyCode,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.general_informations,
                                      "PayerCompanyCode",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.general_informations.PayerCompanyCode"
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
                            { staticStyle: { border: "1px solid black" } },
                            [_vm._v(_vm._s(_vm.$t("dept")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticStyle: { border: "1px solid black" },
                              attrs: { colspan: "5" }
                            },
                            [
                              _c("v-select", {
                                staticClass: "mt-2 mb-n4",
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  error: !_vm.MpaDetails.general_informations
                                    .DepartmentCode,
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
                                  value:
                                    _vm.MpaDetails.general_informations
                                      .DepartmentCode,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.general_informations,
                                      "DepartmentCode",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.general_informations.DepartmentCode"
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
                            { staticStyle: { border: "1px solid black" } },
                            [_vm._v(_vm._s(_vm.$t("purpose")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticStyle: { border: "1px solid black" },
                              attrs: { colspan: "5" }
                            },
                            [
                              _c("v-textarea", {
                                staticClass: "mt-2 mb-n4",
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  rows: "1",
                                  error: !_vm.MpaDetails.general_informations
                                    .Purpose,
                                  "auto-grow": "",
                                  outlined: "",
                                  name: "input-7-4"
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.general_informations.Purpose,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.general_informations,
                                      "Purpose",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.general_informations.Purpose"
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
                  _c("br"),
                  _vm._v(" "),
                  _c("h5", [
                    _c("strong", [
                      _vm._v(
                        "\r\n                        " +
                          _vm._s(_vm.$t("item")) +
                          "\r\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.MpaDetails.items, function(rec, i) {
                    return _c(
                      "v-simple-table",
                      {
                        key: i,
                        staticStyle: { border: "1px solid black" },
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
                                staticStyle: {
                                  border: "1px solid black",
                                  "min-width": "150px"
                                },
                                attrs: { rowspan: "2", colspan: "2" }
                              },
                              [_vm._v(_vm._s(_vm.$t("itemName")))]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticStyle: { "min-width": "700px" },
                                attrs: { colspan: "7" }
                              },
                              [
                                _c("v-text-field", {
                                  staticClass: "thead mt-2 mb-n4",
                                  attrs: {
                                    readonly: _vm.ReadOnly,
                                    error: !rec.ItemNameJap,
                                    placeholder: _vm.$t("japanese"),
                                    outlined: "",
                                    dense: "",
                                    block: ""
                                  },
                                  model: {
                                    value: rec.ItemNameJap,
                                    callback: function($$v) {
                                      _vm.$set(rec, "ItemNameJap", $$v)
                                    },
                                    expression: "rec.ItemNameJap"
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
                                staticStyle: {
                                  "border-bottom": "1px solid black"
                                },
                                attrs: { colspan: "7" }
                              },
                              [
                                _c("v-text-field", {
                                  staticClass: "thead mt-n3 mb-n3",
                                  attrs: {
                                    readonly: _vm.ReadOnly,
                                    error: !rec.ItemNameEng,
                                    placeholder: _vm.$t("english"),
                                    outlined: "",
                                    dense: "",
                                    block: ""
                                  },
                                  model: {
                                    value: rec.ItemNameEng,
                                    callback: function($$v) {
                                      _vm.$set(rec, "ItemNameEng", $$v)
                                    },
                                    expression: "rec.ItemNameEng"
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
                              { attrs: { colspan: "7" } },
                              [
                                _c("v-select", {
                                  staticClass: "thead mt-3 mb-n3",
                                  attrs: {
                                    readonly: _vm.ReadOnly,
                                    error: !rec.DepartmentCode,
                                    items: _vm.departmentFilter,
                                    "item-text":
                                      _vm.$store.state.language == "english"
                                        ? "DepartmentNameEng"
                                        : "DepartmentNameJap",
                                    "item-value": "id",
                                    outlined: "",
                                    dense: "",
                                    block: ""
                                  },
                                  model: {
                                    value: rec.DepartmentCode,
                                    callback: function($$v) {
                                      _vm.$set(rec, "DepartmentCode", $$v)
                                    },
                                    expression: "rec.DepartmentCode"
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
                                staticClass: "text-center",
                                staticStyle: { border: "1px solid black" },
                                attrs: { colspan: "2" }
                              },
                              [_vm._v(_vm._s(_vm.$t("qty")))]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticClass: "text-center",
                                staticStyle: { border: "1px solid black" },
                                attrs: { colspan: "2" }
                              },
                              [_vm._v(_vm._s(_vm.$t("currency")))]
                            )
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
                                  attrs: {
                                    readonly: _vm.ReadOnly,
                                    block: "",
                                    outlined: "",
                                    dense: ""
                                  },
                                  model: {
                                    value: rec.ItemID,
                                    callback: function($$v) {
                                      _vm.$set(rec, "ItemID", $$v)
                                    },
                                    expression: "rec.ItemID"
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
                                _c(
                                  "v-row",
                                  [
                                    !!_vm.MpaDetails.history
                                      ? _c(
                                          "v-col",
                                          { attrs: { cols: "6" } },
                                          [
                                            _vm.MpaDetails.history.RevisedFieldItems.includes(
                                              "UnitPrice"
                                            ) ||
                                            _vm.MpaDetails.history.RevisedFieldItems.includes(
                                              "Quantity"
                                            )
                                              ? _c("v-text-field", {
                                                  staticClass:
                                                    "mt-2 mb-n4 before",
                                                  attrs: {
                                                    readonly: "",
                                                    label: "Before",
                                                    "background-color":
                                                      "#FFF59D",
                                                    outlined: "",
                                                    dense: "",
                                                    block: ""
                                                  },
                                                  on: {
                                                    keypress: function($event) {
                                                      return _vm.onlyNumber(
                                                        $event
                                                      )
                                                    },
                                                    keyup: function($event) {
                                                      _vm.numberWithComma(
                                                        i,
                                                        "items",
                                                        "UnitPrice"
                                                      ),
                                                        _vm.computeTotalPerCurrency()
                                                    }
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.MpaDetails.history
                                                        .Items[i].UnitPrice,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.MpaDetails.history
                                                          .Items[i],
                                                        "UnitPrice",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "MpaDetails.history.Items[i].UnitPrice"
                                                  }
                                                })
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: _vm.withRevision() } },
                                      [
                                        _c("v-text-field", {
                                          staticClass: "mt-2 mb-n4",
                                          attrs: {
                                            readonly: _vm.ReadOnly,
                                            error: !rec.UnitPrice,
                                            label:
                                              _vm.withRevision() == 12
                                                ? ""
                                                : "After",
                                            outlined: "",
                                            dense: "",
                                            block: ""
                                          },
                                          on: {
                                            keypress: function($event) {
                                              return _vm.onlyNumber($event)
                                            },
                                            keyup: function($event) {
                                              _vm.numberWithComma(
                                                i,
                                                "items",
                                                "UnitPrice"
                                              ),
                                                _vm.computeTotalPerCurrency()
                                            }
                                          },
                                          model: {
                                            value: rec.UnitPrice,
                                            callback: function($$v) {
                                              _vm.$set(rec, "UnitPrice", $$v)
                                            },
                                            expression: "rec.UnitPrice"
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
                                  attrs: {
                                    readonly: _vm.ReadOnly,
                                    error: !rec.Quantity,
                                    outlined: "",
                                    dense: "",
                                    block: ""
                                  },
                                  on: {
                                    keypress: function($event) {
                                      return _vm.onlyNumber($event)
                                    },
                                    keyup: function($event) {
                                      return _vm.numberWithComma(
                                        i,
                                        "items",
                                        "Quantity"
                                      )
                                    }
                                  },
                                  model: {
                                    value: rec.Quantity,
                                    callback: function($$v) {
                                      _vm.$set(rec, "Quantity", $$v)
                                    },
                                    expression: "rec.Quantity"
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
                                _c("v-select", {
                                  staticClass: "mt-2 mb-n4",
                                  staticStyle: {
                                    width: "width:100%",
                                    "font-size": "15px"
                                  },
                                  attrs: {
                                    readonly: _vm.ReadOnly,
                                    error: !rec.Currency,
                                    items: _vm.currencies,
                                    "item-text": "currency_code",
                                    "item-value": "currency_code",
                                    outlined: "",
                                    dense: "",
                                    block: ""
                                  },
                                  model: {
                                    value: rec.Currency,
                                    callback: function($$v) {
                                      _vm.$set(rec, "Currency", $$v)
                                    },
                                    expression: "rec.Currency"
                                  }
                                })
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
                  _c("br"),
                  _vm._v(" "),
                  _c("h5", [
                    _c("strong", [_vm._v(_vm._s(_vm.$t("purchasePrice")))])
                  ]),
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
                        _vm._l(_vm.TotalPerCurrency, function(rec, i) {
                          return _c("tr", { key: i }, [
                            i == 0
                              ? _c(
                                  "th",
                                  {
                                    staticClass: "text-center",
                                    staticStyle: { border: "1px solid black" },
                                    attrs: {
                                      rowspan: _vm.TotalPerCurrency.length
                                    }
                                  },
                                  [
                                    _c("v-select", {
                                      staticClass: "mt-2",
                                      attrs: {
                                        readonly: _vm.ReadOnly,
                                        error: !_vm.MpaDetails
                                          .general_informations.TradeTermCode,
                                        block: "",
                                        outlined: "",
                                        dense: "",
                                        items: _vm.trade_terms,
                                        "item-value": "id",
                                        "item-text": "trade_code"
                                      },
                                      model: {
                                        value:
                                          _vm.MpaDetails.general_informations
                                            .TradeTermCode,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.MpaDetails.general_informations,
                                            "TradeTermCode",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "MpaDetails.general_informations.TradeTermCode"
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticClass: "text-center",
                                staticStyle: {
                                  border: "1px solid black",
                                  "font-size": "15px"
                                },
                                attrs: { dense: "" }
                              },
                              [_vm._v(_vm._s(rec.currency_code))]
                            ),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticClass: "text-center",
                                staticStyle: {
                                  border: "1px solid black",
                                  "font-size": "15px"
                                },
                                attrs: { dense: "" }
                              },
                              [_vm._v(_vm._s(_vm.numberWithComma(rec.Total)))]
                            )
                          ])
                        }),
                        0
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c("h5", [
                    _c("strong", [_vm._v(_vm._s(_vm.$t("otherExpense")))])
                  ]),
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
                              border: "1px solid black",
                              width: "180px",
                              "background-color": "#3b4863",
                              color: "white"
                            }
                          }),
                          _vm._v(" "),
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
                            [_vm._v(_vm._s(_vm.$t("status")))]
                          ),
                          _vm._v(" "),
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
                            [_vm._v(_vm._s(_vm.$t("currency")))]
                          ),
                          _vm._v(" "),
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
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  items: _vm.quotation_statuses,
                                  "item-text": _vm.LanguageCheck
                                    ? "status_en"
                                    : "status_jp",
                                  "item-value": "status_code",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .PackingExpenseStatus,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "PackingExpenseStatus",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.PackingExpenseStatus"
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
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  items: _vm.currencies,
                                  "item-text": "currency_code",
                                  "item-value": "currency_code",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .PackingExpenseCurrency,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "PackingExpenseCurrency",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.PackingExpenseCurrency"
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
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  outlined: "",
                                  dense: ""
                                },
                                on: {
                                  keypress: function($event) {
                                    return _vm.onlyNumber($event)
                                  },
                                  keyup: function($event) {
                                    return _vm.numberWithComma(
                                      "MpaDetails.other_informations.PackingExpenseAmount"
                                    )
                                  }
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .PackingExpenseAmount,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "PackingExpenseAmount",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.PackingExpenseAmount"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [
                            _vm._v(_vm._s(_vm.$t("distributionExpense")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("v-select", {
                                staticClass: "tbody mt-2 mb-n4",
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  items: _vm.quotation_statuses,
                                  "item-text": _vm.LanguageCheck
                                    ? "status_en"
                                    : "status_jp",
                                  "item-value": "status_code",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .DistributionExpenseStatus,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "DistributionExpenseStatus",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.DistributionExpenseStatus"
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
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  items: _vm.currencies,
                                  "item-text": "currency_code",
                                  "item-value": "currency_code",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .DistributionExpenseCurrency,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "DistributionExpenseCurrency",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.DistributionExpenseCurrency"
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
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  outlined: "",
                                  dense: ""
                                },
                                on: {
                                  keypress: function($event) {
                                    return _vm.onlyNumber($event)
                                  },
                                  keyup: function($event) {
                                    return _vm.numberWithComma(
                                      "MpaDetails.other_informations.DistributionExpenseAmount"
                                    )
                                  }
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .DistributionExpenseAmount,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "DistributionExpenseAmount",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.DistributionExpenseAmount"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [
                            _vm._v(_vm._s(_vm.$t("installationExpense")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("v-select", {
                                staticClass: "tbody mt-2 mb-n4",
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  items: _vm.quotation_statuses,
                                  "item-text": _vm.LanguageCheck
                                    ? "status_en"
                                    : "status_jp",
                                  "item-value": "status_code",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .InstallationExpenseStatus,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "InstallationExpenseStatus",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.InstallationExpenseStatus"
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
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  items: _vm.currencies,
                                  "item-text": "currency_code",
                                  "item-value": "currency_code",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .InstallationExpenseCurrency,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "InstallationExpenseCurrency",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.InstallationExpenseCurrency"
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
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  outlined: "",
                                  dense: ""
                                },
                                on: {
                                  keypress: function($event) {
                                    return _vm.onlyNumber($event)
                                  },
                                  keyup: function($event) {
                                    return _vm.numberWithComma(
                                      "MpaDetails.other_informations.InstallationExpenseAmount"
                                    )
                                  }
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .InstallationExpenseAmount,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "InstallationExpenseAmount",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.InstallationExpenseAmount"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(_vm.$t("others")))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("v-select", {
                                staticClass: "tbody mt-2 mb-n4",
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  items: _vm.quotation_statuses,
                                  "item-text": _vm.LanguageCheck
                                    ? "status_en"
                                    : "status_jp",
                                  "item-value": "status_code",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .OtherExpenseStatus,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "OtherExpenseStatus",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.OtherExpenseStatus"
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
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  items: _vm.currencies,
                                  "item-text": "currency_code",
                                  "item-value": "currency_code",
                                  dense: "",
                                  outlined: ""
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .OtherExpenseCurrency,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "OtherExpenseCurrency",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.OtherExpenseCurrency"
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
                                attrs: {
                                  readonly: _vm.ReadOnly,
                                  outlined: "",
                                  dense: ""
                                },
                                on: {
                                  keypress: function($event) {
                                    return _vm.onlyNumber($event)
                                  },
                                  keyup: function($event) {
                                    return _vm.numberWithComma(
                                      "MpaDetails.other_informations.OtherExpenseAmount"
                                    )
                                  }
                                },
                                model: {
                                  value:
                                    _vm.MpaDetails.other_informations
                                      .OtherExpenseAmount,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.MpaDetails.other_informations,
                                      "OtherExpenseAmount",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "MpaDetails.other_informations.OtherExpenseAmount"
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
                  _c("br"),
                  _vm._v(" "),
                  _c("h5", [
                    _c("strong", [_vm._v(_vm._s(_vm.$t("submissionMatters")))])
                  ]),
                  _vm._v(" "),
                  _c("v-textarea", {
                    staticClass: "mt-2 mb-n4",
                    attrs: {
                      readonly: _vm.ReadOnly,
                      rows: "1",
                      "auto-grow": "",
                      outlined: "",
                      name: "input-7-4"
                    },
                    model: {
                      value:
                        _vm.MpaDetails.general_informations.SubmissionMatters,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.MpaDetails.general_informations,
                          "SubmissionMatters",
                          $$v
                        )
                      },
                      expression:
                        "MpaDetails.general_informations.SubmissionMatters"
                    }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _c("br"),
                  _vm._v(" "),
                  _c("h5", [
                    _c("strong", [_vm._v(_vm._s(_vm.$t("paymentSchedule")))])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-simple-table",
                    {
                      staticClass: "mb-2",
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
                      !_vm.MpaDetails.general_informations.NihonSangyou
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Po",
                                        "PoMonth"
                                      ),
                                      disabled: _vm.checkDisabled("PoRatio"),
                                      items: _vm.months,
                                      "item-text": _vm.LanguageCheck
                                        ? "month_name_en"
                                        : "month_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .PoMonth,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "PoMonth",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.PoMonth"
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Po",
                                        "PoSchedule"
                                      ),
                                      disabled: _vm.checkDisabled("PoRatio"),
                                      items: _vm.schedules,
                                      "item-text": _vm.LanguageCheck
                                        ? "payment_schedule_name_en"
                                        : "payment_schedule_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .PoSchedule,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "PoSchedule",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.PoSchedule"
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
                                    attrs: {
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Po",
                                        "PoRatio"
                                      ),
                                      disabled: _vm.checkDisabled("PoRatio")
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
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .PoRatio,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "PoRatio",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.PoRatio"
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Po",
                                        "PoDue"
                                      ),
                                      disabled: _vm.checkDisabled("PoRatio"),
                                      items: _vm.payment_dues,
                                      "item-text": _vm.LanguageCheck
                                        ? "due_name_en"
                                        : "due_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules.PoDue,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "PoDue",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.PoDue"
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "RecievingBl",
                                        "RecievingBlMonth"
                                      ),
                                      disabled: _vm.checkDisabled(
                                        "RecievingBlRatio"
                                      ),
                                      items: _vm.months,
                                      "item-text": _vm.LanguageCheck
                                        ? "month_name_en"
                                        : "month_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .RecievingBlMonth,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "RecievingBlMonth",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.RecievingBlMonth"
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "RecievingBl",
                                        "RecievingBlSchedule"
                                      ),
                                      disabled: _vm.checkDisabled(
                                        "RecievingBlRatio"
                                      ),
                                      items: _vm.schedules,
                                      "item-text": _vm.LanguageCheck
                                        ? "payment_schedule_name_en"
                                        : "payment_schedule_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .RecievingBlSchedule,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "RecievingBlSchedule",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.RecievingBlSchedule"
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
                                    attrs: {
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "RecievingBl",
                                        "RecievingBlRatio"
                                      ),
                                      disabled: _vm.checkDisabled(
                                        "RecievingBlRatio"
                                      )
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
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .RecievingBlRatio,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "RecievingBlRatio",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.RecievingBlRatio"
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "RecievingBl",
                                        "RecievingBlDue"
                                      ),
                                      disabled: _vm.checkDisabled(
                                        "RecievingBlRatio"
                                      ),
                                      items: _vm.payment_dues,
                                      "item-text": _vm.LanguageCheck
                                        ? "due_name_en"
                                        : "due_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .RecievingBlDue,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "RecievingBlDue",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.RecievingBlDue"
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Inspection",
                                        "InspectionMonth"
                                      ),
                                      disabled: _vm.checkDisabled(
                                        "InspectionRatio"
                                      ),
                                      items: _vm.months,
                                      "item-text": _vm.LanguageCheck
                                        ? "month_name_en"
                                        : "month_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .InspectionMonth,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "InspectionMonth",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.InspectionMonth"
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Inspection",
                                        "InspectionSchedule"
                                      ),
                                      disabled: _vm.checkDisabled(
                                        "InspectionRatio"
                                      ),
                                      items: _vm.schedules,
                                      "item-text": _vm.LanguageCheck
                                        ? "payment_schedule_name_en"
                                        : "payment_schedule_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .InspectionSchedule,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "InspectionSchedule",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.InspectionSchedule"
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
                                    attrs: {
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Inspection",
                                        "InspectionRatio"
                                      ),
                                      disabled: _vm.checkDisabled(
                                        "InspectionRatio"
                                      )
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
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .InspectionRatio,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "InspectionRatio",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.InspectionRatio"
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Inspection",
                                        "InspectionDue"
                                      ),
                                      disabled: _vm.checkDisabled(
                                        "InspectionRatio"
                                      ),
                                      items: _vm.payment_dues,
                                      "item-text": _vm.LanguageCheck
                                        ? "due_name_en"
                                        : "due_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .InspectionDue,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "InspectionDue",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.InspectionDue"
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
                                    "\r\n                                " +
                                      _vm._s(_vm.$t("others")) +
                                      "\r\n                                "
                                  ),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    staticClass: "mt-2 mb-n4",
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Others",
                                        "OthersTitle"
                                      ),
                                      disabled: _vm.checkDisabled("OthersRatio")
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .OthersTitle,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "OthersTitle",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.OthersTitle"
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Others",
                                        "OthersMonth"
                                      ),
                                      disabled: _vm.checkDisabled(
                                        "OthersRatio"
                                      ),
                                      items: _vm.months,
                                      "item-text": _vm.LanguageCheck
                                        ? "month_name_en"
                                        : "month_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .OthersMonth,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "OthersMonth",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.OthersMonth"
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Others",
                                        "OthersSchedule"
                                      ),
                                      disabled: _vm.checkDisabled(
                                        "OthersRatio"
                                      ),
                                      items: _vm.schedules,
                                      "item-text": _vm.LanguageCheck
                                        ? "payment_schedule_name_en"
                                        : "payment_schedule_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .OthersSchedule,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "OthersSchedule",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.OthersSchedule"
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
                                    attrs: {
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Others",
                                        "OthersRatio"
                                      ),
                                      disabled: _vm.checkDisabled("OthersRatio")
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
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .OthersRatio,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "OthersRatio",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.OthersRatio"
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
                                    attrs: {
                                      clearable: "",
                                      readonly: _vm.ReadOnly,
                                      outlined: "",
                                      dense: "",
                                      error: _vm.paymentScheduleRowChecker(
                                        "Others",
                                        "OthersDue"
                                      ),
                                      disabled: _vm.checkDisabled(
                                        "OthersRatio"
                                      ),
                                      items: _vm.payment_dues,
                                      "item-text": _vm.LanguageCheck
                                        ? "due_name_en"
                                        : "due_name_jp",
                                      "item-value": "id"
                                    },
                                    model: {
                                      value:
                                        _vm.MpaDetails.payment_schedules
                                          .OthersDue,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.MpaDetails.payment_schedules,
                                          "OthersDue",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "MpaDetails.payment_schedules.OthersDue"
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
                                  staticClass: "text-center",
                                  staticStyle: {
                                    "border-bottom": "1px solid black",
                                    "min-width": "120px"
                                  },
                                  attrs: { colspan: "2" }
                                },
                                [_c("strong", [_vm._v("N/A")])]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticStyle: {
                                    width: "80px",
                                    border: "1px solid black"
                                  }
                                },
                                [_c("strong", [_vm._v("100%")])]
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
                          _c("th", {
                            staticStyle: { border: "1px solid black" }
                          }),
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
                              staticStyle: {
                                border: "1px solid black",
                                "font-size": "20px"
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.MpaDetails.general_informations
                                    .NihonSangyou
                                    ? 100
                                    : _vm.totalPercent
                                ) + "%"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("th", {
                            staticStyle: { border: "1px solid black" }
                          })
                        ])
                      ])
                    ]
                  )
                ],
                2
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
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.ConfirmUpdateDialog,
            callback: function($$v) {
              _vm.ConfirmUpdateDialog = $$v
            },
            expression: "ConfirmUpdateDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v("\r\n                Update Application\r\n            ")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { label: "Reason" },
                    model: {
                      value: _vm.ReasonForUpdate,
                      callback: function($$v) {
                        _vm.ReasonForUpdate = $$v
                      },
                      expression: "ReasonForUpdate"
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
                        color: "success",
                        text: "",
                        disabled: _vm.ReasonForUpdate == ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.UpdateApplication()
                        }
                      }
                    },
                    [_vm._v("\r\n                    Save\r\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red", text: "" },
                      on: {
                        click: function($event) {
                          ;(_vm.ConfirmUpdateDialog = false),
                            (_vm.ReasonForUpdate = "")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                    Close\r\n                "
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
          attrs: { "max-width": "50%" },
          model: {
            value: _vm.CancelApplicationDialog,
            callback: function($$v) {
              _vm.CancelApplicationDialog = $$v
            },
            expression: "CancelApplicationDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v(
                  "\r\n                " +
                    _vm._s(_vm.$t("cancelApplicationHeader")) +
                    "\r\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { label: "Reason For Cancellation" },
                    model: {
                      value: _vm.cancelApplicationReason,
                      callback: function($$v) {
                        _vm.cancelApplicationReason = $$v
                      },
                      expression: "cancelApplicationReason"
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
                        color: "green darken-1",
                        text: "",
                        disabled: _vm.cancelApplicationReason == ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.confirmCancelApplication()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                    " +
                          _vm._s(_vm.$t("confirmation")) +
                          "\r\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red darken-1", text: "" },
                      on: {
                        click: function($event) {
                          ;(_vm.CancelApplicationDialog = false),
                            (_vm.cancelApplicationReason = "")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                    " +
                          _vm._s(_vm.$t("cancel")) +
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
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.ReasonForDisapprovalDialog,
            callback: function($$v) {
              _vm.ReasonForDisapprovalDialog = $$v
            },
            expression: "ReasonForDisapprovalDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v(
                  "\r\n                Disapprove Application\r\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { label: "Reason" },
                    model: {
                      value: _vm.ReasonForDisapproval,
                      callback: function($$v) {
                        _vm.ReasonForDisapproval = $$v
                      },
                      expression: "ReasonForDisapproval"
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
                  _vm.ReasonForDisapprovalDialog
                    ? _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "success",
                            text: "",
                            disabled: _vm.ReasonForDisapproval == ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.Approval(2)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                    Disapprove\r\n                "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red", text: "" },
                      on: {
                        click: function($event) {
                          ;(_vm.ReasonForDisapprovalDialog = false),
                            (_vm.ReasonForDisapproval = "")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                    Close\r\n                "
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
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.ReasonForMultipleDisapprovalDialog,
            callback: function($$v) {
              _vm.ReasonForMultipleDisapprovalDialog = $$v
            },
            expression: "ReasonForMultipleDisapprovalDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v(
                  "\r\n                Disapprove Application\r\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { label: "Reason" },
                    model: {
                      value: _vm.ReasonForDisapproval,
                      callback: function($$v) {
                        _vm.ReasonForDisapproval = $$v
                      },
                      expression: "ReasonForDisapproval"
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
                        color: "success",
                        text: "",
                        disabled: _vm.ReasonForDisapproval == ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.MultipleDisapproveApplication()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                    Disapprove\r\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red", text: "" },
                      on: {
                        click: function($event) {
                          ;(_vm.ReasonForMultipleDisapprovalDialog = false),
                            (_vm.ReasonForDisapproval = "")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                    Close\r\n                "
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
          attrs: { "max-width": "500px", persistent: "" },
          model: {
            value: _vm.ConfirmDoneInspectionDialog,
            callback: function($$v) {
              _vm.ConfirmDoneInspectionDialog = $$v
            },
            expression: "ConfirmDoneInspectionDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v("\r\n                Confirm Inspection on   "),
                _c("b", [_vm._v(_vm._s(_vm.doneInspectionMpaNo))]),
                _vm._v(" ?\r\n            ")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6", sm: "6" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "success", block: "" },
                              on: {
                                click: function($event) {
                                  return _vm.confirmDoneInspection()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\r\n                            Confirm\r\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6", sm: "6" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "red", dark: "", block: "" },
                              on: {
                                click: function($event) {
                                  ;(_vm.ConfirmDoneInspectionDialog = false),
                                    (_vm.doneInspectionMpaNo = "")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\r\n                            Cancel\r\n                        "
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
          attrs: { scrollable: "", "max-width": "750px" },
          model: {
            value: _vm.AttachmentDialog,
            callback: function($$v) {
              _vm.AttachmentDialog = $$v
            },
            expression: "AttachmentDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v(_vm._s(_vm.AttachmentDialogData.MpaNo) + " Attachments")
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { height: "500px", width: "98%" } },
                [
                  _c(
                    "v-row",
                    { staticStyle: { width: "98%" } },
                    [
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("h4", [_vm._v("Invoice")])
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "6" } }, [
                        _c("h4", [_vm._v("BL")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("v-file-input", {
                            attrs: {
                              multiple: "",
                              dense: "",
                              "hide-details": "",
                              "prepend-inner-icon": "mdi-file-pdf",
                              "prepend-icon": "",
                              label: "Invoice Attachment"
                            },
                            model: {
                              value: _vm.ForUploadInvoice,
                              callback: function($$v) {
                                _vm.ForUploadInvoice = $$v
                              },
                              expression: "ForUploadInvoice"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "my-2",
                              attrs: {
                                block: "",
                                small: "",
                                disabled: _vm.ForUploadInvoice.length < 1
                              },
                              on: {
                                click: function($event) {
                                  return _vm.UploadInvoice(_vm.ForUploadInvoice)
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-upload")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("v-file-input", {
                            attrs: {
                              multiple: "",
                              dense: "",
                              "hide-details": "",
                              "prepend-inner-icon": "mdi-file-pdf",
                              "prepend-icon": "",
                              label: "BL Attachment"
                            },
                            model: {
                              value: _vm.ForUploadBl,
                              callback: function($$v) {
                                _vm.ForUploadBl = $$v
                              },
                              expression: "ForUploadBl"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "my-2",
                              attrs: {
                                block: "",
                                small: "",
                                disabled: _vm.ForUploadBl.length < 1
                              },
                              on: {
                                click: function($event) {
                                  return _vm.UploadBl(_vm.ForUploadBl)
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-upload")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.AttachmentDialogData.Invoice
                        ? _c("v-col", { attrs: { cols: "6" } }, [
                            _c(
                              "ul",
                              _vm._l(_vm.AttachmentDialogData.Invoice, function(
                                file,
                                index
                              ) {
                                return _c(
                                  "li",
                                  { key: index },
                                  [
                                    _c(
                                      "a",
                                      {
                                        attrs: {
                                          href:
                                            "/Attachment/" +
                                            file.MpaNo +
                                            "/" +
                                            file.Path,
                                          target: "_blank"
                                        }
                                      },
                                      [_vm._v(_vm._s(file.Path))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          "x-small": "",
                                          icon: "",
                                          color: "red"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteAttachment(
                                              file,
                                              "invoice"
                                            )
                                          }
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-close")])],
                                      1
                                    )
                                  ],
                                  1
                                )
                              }),
                              0
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.AttachmentDialogData.Bl
                        ? _c("v-col", { attrs: { cols: "6" } }, [
                            _c(
                              "ul",
                              _vm._l(_vm.AttachmentDialogData.Bl, function(
                                file,
                                index
                              ) {
                                return _c(
                                  "li",
                                  { key: index },
                                  [
                                    _c(
                                      "a",
                                      {
                                        attrs: {
                                          href:
                                            "/Attachment/" +
                                            file.MpaNo +
                                            "/" +
                                            file.Path,
                                          target: "_blank"
                                        }
                                      },
                                      [_vm._v(_vm._s(file.Path))]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          "x-small": "",
                                          icon: "",
                                          color: "red"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteAttachment(
                                              file,
                                              "bl"
                                            )
                                          }
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-close")])],
                                      1
                                    )
                                  ],
                                  1
                                )
                              }),
                              0
                            )
                          ])
                        : _vm._e()
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
                "v-card-actions",
                [
                  _c(
                    "v-row",
                    { staticStyle: { width: "95%" } },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-3",
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              _vm.AttachmentDialog = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                        Close\r\n                    "
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { scrollable: "", "max-width": "500px" },
          model: {
            value: _vm.PoUploadDialog,
            callback: function($$v) {
              _vm.PoUploadDialog = $$v
            },
            expression: "PoUploadDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("PO Upload")]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { height: "150px" } },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-file-input", {
                            attrs: {
                              "small-chips": "",
                              dense: "",
                              "hide-details": "",
                              "prepend-inner-icon": "mdi-file-pdf",
                              "prepend-icon": "",
                              label: "PO Attachment"
                            },
                            model: {
                              value: _vm.ForUploadPo,
                              callback: function($$v) {
                                _vm.ForUploadPo = $$v
                              },
                              expression: "ForUploadPo"
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
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                block: "",
                                disabled: _vm.ForUploadPo.length == 0
                              },
                              on: {
                                click: function($event) {
                                  return _vm.PoFileUpload(_vm.ForUploadPo)
                                }
                              }
                            },
                            [
                              _c("v-icon", [
                                _vm._v(
                                  "\r\n                            mdi-upload\r\n                        "
                                )
                              ])
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
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-row",
                    { attrs: { "no-gutters": "" } },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              ;(_vm.PoUploadDialog = false),
                                (_vm.ForUploadPo = [])
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                    Close\r\n                "
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { scrollable: "", "max-width": "500px" },
          model: {
            value: _vm.InvoiceUploadDialog,
            callback: function($$v) {
              _vm.InvoiceUploadDialog = $$v
            },
            expression: "InvoiceUploadDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Invoice Upload")]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { height: "150px" } },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-file-input", {
                            attrs: {
                              "small-chips": "",
                              dense: "",
                              "hide-details": "",
                              "prepend-inner-icon": "mdi-file-pdf",
                              "prepend-icon": "",
                              label: "Invoice Attachment"
                            },
                            model: {
                              value: _vm.ForUploadInvoice,
                              callback: function($$v) {
                                _vm.ForUploadInvoice = $$v
                              },
                              expression: "ForUploadInvoice"
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
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                block: "",
                                disabled: _vm.ForUploadInvoice.length == 0
                              },
                              on: {
                                click: function($event) {
                                  return _vm.InvoiceFileUpload(
                                    _vm.ForUploadInvoice
                                  )
                                }
                              }
                            },
                            [
                              _c("v-icon", [
                                _vm._v(
                                  "\r\n                            mdi-upload\r\n                        "
                                )
                              ])
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
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-row",
                    { attrs: { "no-gutters": "" } },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              ;(_vm.InvoiceUploadDialog = false),
                                (_vm.ForUploadInvoice = [])
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                    Close\r\n                "
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { scrollable: "", "max-width": "500px" },
          model: {
            value: _vm.BlUploadDialog,
            callback: function($$v) {
              _vm.BlUploadDialog = $$v
            },
            expression: "BlUploadDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("BL Upload")]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { height: "150px" } },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-file-input", {
                            attrs: {
                              "small-chips": "",
                              dense: "",
                              "hide-details": "",
                              "prepend-inner-icon": "mdi-file-pdf",
                              "prepend-icon": "",
                              label: "BL Attachment"
                            },
                            model: {
                              value: _vm.ForUploadBl,
                              callback: function($$v) {
                                _vm.ForUploadBl = $$v
                              },
                              expression: "ForUploadBl"
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
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                block: "",
                                disabled: _vm.ForUploadBl.length == 0
                              },
                              on: {
                                click: function($event) {
                                  return _vm.BlFileUpload(_vm.ForUploadBl)
                                }
                              }
                            },
                            [
                              _c("v-icon", [
                                _vm._v(
                                  "\r\n                            mdi-upload\r\n                        "
                                )
                              ])
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
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-row",
                    { attrs: { "no-gutters": "" } },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              ;(_vm.BlUploadDialog = false),
                                (_vm.ForUploadBl = [])
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\r\n                    Close\r\n                "
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
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/ApplicationList.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/pages/ApplicationList.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApplicationList_vue_vue_type_template_id_558632e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationList.vue?vue&type=template&id=558632e8& */ "./resources/js/components/pages/ApplicationList.vue?vue&type=template&id=558632e8&");
/* harmony import */ var _ApplicationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApplicationList.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/ApplicationList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ApplicationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApplicationList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/pages/ApplicationList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ApplicationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApplicationList_vue_vue_type_template_id_558632e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApplicationList_vue_vue_type_template_id_558632e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/ApplicationList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/ApplicationList.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pages/ApplicationList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplicationList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ApplicationList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/ApplicationList.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/ApplicationList.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplicationList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ApplicationList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pages/ApplicationList.vue?vue&type=template&id=558632e8&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/pages/ApplicationList.vue?vue&type=template&id=558632e8& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationList_vue_vue_type_template_id_558632e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApplicationList.vue?vue&type=template&id=558632e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ApplicationList.vue?vue&type=template&id=558632e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationList_vue_vue_type_template_id_558632e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationList_vue_vue_type_template_id_558632e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
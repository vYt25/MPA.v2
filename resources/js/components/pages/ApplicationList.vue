<template>
<div id="app">
    <v-alert text color="teal" border="left" class="mx-5 my-1" prominent dense>
        <span style="font-size:18px" class="ml-5">{{$t('listOfPurchaseApplication')}}</span>
    </v-alert>
    <v-overlay :value="overlay" style="z-index: 999">
        <v-progress-circular indeterminate size="64" color="black" width="1" style="z-index: 999"></v-progress-circular>
    </v-overlay>
    <v-row class="ml-1" no-gutters>
        <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon large class="mt-2 searchTrigger" readOnly v-bind="attrs" v-on="on">
                    <v-icon large> mdi-filter</v-icon>
                </v-btn>
            </template>
            <span>{{filter.boolean ? 'Remove Filter' : 'Filter'}}</span>
        </v-tooltip>
        <transition name="fade">
            <v-row cols="11" class="ml-5" style="width: 90%" no-gutters>
                <v-row cols="12" md="12" sm="12">
                    <v-col cols="12" md="2" sm='2'>
                        <v-autocomplete hide-details clearable dense outlined :label="$t('status')" :items="status" :item-text="LanguageCheck ? 'status_name_en' : 'status_name_jp'" item-value="status_id" v-model="search.Status"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="2" sm='2'>
                        <v-autocomplete hide-details clearable dense outlined :label="$t('company')" :items="payers" item-text="payer_name" item-value="payer_code" v-model="search.PayerCompanyCode"></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="2" sm='2'>
                        <v-text-field hide-details dense outlined label="MpaNo" prepend-inner-icon="mdi-magnify" v-model="search.MpaNo"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" sm='3'>
                        <v-menu ref="menu" v-model="search.menu" :close-on-content-click="false" :return-value.sync="search.dates" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-combobox v-model="search.dates" dense multiple chips small-chips label="Applied Date Range" prepend-inner-icon="mdi-calendar" readonly outlined hide-details clearable v-bind="attrs" v-on="on"></v-combobox>
                            </template>
                            <v-date-picker v-model="search.dates" range>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu = false">
                                    Cancel
                                </v-btn>
                                <v-btn text color="primary" @click="$refs.menu.save(search.dates)">
                                    OK
                                </v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6" md="1" sm='1'>
                        <v-btn @click="SearchApplications()" color="primary" style="width: 100%">
                            <strong>{{$t('search')}}</strong>
                        </v-btn>
                    </v-col>
                    <v-col cols="6" md="1" sm='1'>
                        <v-btn @click="clear()" color="grey" style="width: 100%">
                            <strong>{{$t('clear')}}</strong>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-row>
        </transition>
    </v-row>
    <v-card class="mx-5">
        <v-simple-table fixed-header dense height="65vh" class="table--custom main--table">
            <thead>
                <tr>
                    <th v-if="isAdmin" class="text-center text-nowrap"> </th>
                    <th class="text-center text-nowrap" style="border: 1 solid black !important">{{$t('status')}}</th>
                    <th class="text-center text-nowrap">{{$t('applicationDate')}}</th>
                    <th class="text-center text-nowrap">{{$t('applicant')}}</th>
                    <th class="text-center text-nowrap">{{$t('itemName')}}</th>
                    <th class="text-center text-nowrap">{{$t('mpaNo')}}</th>
                    <th class="text-center text-nowrap">{{$t('details')}}</th>
                    <th class="text-center text-nowrap">{{$t('reportPrint')}}</th>
                    <th class="text-center text-nowrap">{{$t('approver')}}</th>
                    <th class="text-center text-nowrap">{{$t('quotation')}}</th>
                    <th class="text-center text-nowrap">{{$t('orderBy')}}</th>
                    <th class="text-center text-nowrap">{{$t('PO')}}</th>
                    <th class="text-center text-nowrap">{{$t('invoice')}}</th>
                    <th class="text-center text-nowrap">{{$t('bl')}}</th>
                    <th class="text-center text-nowrap">{{$t('inspection')}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(record,i) in ApplicationList" :key="i">
                    <td v-if="isAdmin">
                        <v-checkbox style="width:2px;" v-if="(record.Status == 0) && record.ApproverF == $store.state.user.EmployeeID" v-model="record.Selected" class="mr-4"></v-checkbox>
                    </td>
                    <td class="text-center">
                        <v-chip class="ma-2" :color="record.Status == 1 ? 'green lighten-2' : 'grey lighten-2'" small>
                            <span v-if="(record.Status == 1)" class="pa-2">{{$t('approved')}}</span>
                            <span v-else class="pa-2">{{$t('pending')}}</span>
                        </v-chip>
                    </td>
                    <td>{{ dateSubstring(record.created_at) }}</td>
                    <td class="text-nowrap">{{ LanguageCheck ?  record.ApplicantFullNameEng :  record.ApplicantFullNameJap }}</td>
                    <td class="text-nowrap">{{ LanguageCheck ? record.ItemNameEng : record.ItemNameJap }}</td>
                    <td>{{ record.MpaNo }}</td>
                    <td class="text-center">
                        <v-btn @click="getMpaDetails(record.MpaNo),ViewMpaDetailsDialog = true" fab x-small>
                            <v-icon>mdi-chevron-double-right</v-icon>
                        </v-btn>
                    </td>
                    <td class="text-center">
                        <v-btn icon small @click="GenerateMpaSlip(record.MpaNo)">
                            <v-icon>mdi-printer</v-icon>
                        </v-btn>
                    </td>
                    <td class="text-nowrap">{{ LanguageCheck ? record.ApproverFullNameEng : record.ApproverFullNameJap}}</td>
                    <td class="text-center">
                        <v-btn @click="openPdf(record.Attachment)" small icon>
                            <v-icon>mdi-file-pdf</v-icon>
                        </v-btn>
                    </td>
                    <td>{{ record.order_by }}</td>
                    <td class="text-nowrap">
                        <template v-if="!record.PoAttachment">   
                            <v-btn icon small color="teal" @click="PoUploadDialog = true,PoAttachmentDetails = record">
                                <v-icon>mdi-attachment</v-icon>    
                            </v-btn>
                        </template>
                        <template v-else>
                            <a :href="AttachmentLink(record,'PoAttachment')"  target="_blank" >{{record.PoAttachment}}</a>
                            <v-btn icon color="red" x-small class="ml-2" @click="DeletePoAttachment(i)">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </template>
                    </td>
                    <td class="text-nowrap">
                        <template v-if="!record.InAttachment">
                        <v-btn icon small color="teal darken-2" @click="InvoiceUploadDialog = true, InvoiceAttachmentDetails = record">
                            <v-icon>mdi-attachment</v-icon>
                        </v-btn>
                        </template>
                        <template v-else>
                            <a :href="AttachmentLink(record,'InAttachment')"  target="_blank" >{{record.InAttachment}}</a>
                            <v-btn icon color="red" x-small class="ml-2" @click="DeleteInvoiceAttachment(i)">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </template>
                    </td>
                    <td class="text-nowrap">
                        <template v-if="!record.BlAttachment">
                            <v-btn icon small color="teal darken-4" @click="BlUploadDialog = true, BlAttachmentDetails = record">
                                <v-icon>mdi-attachment</v-icon>
                            </v-btn>
                        </template>
                        <template v-else>
                            <a :href="AttachmentLink(record,'BlAttachment')"  target="_blank" >{{record.BlAttachment}}</a>
                            <v-btn icon color="red" x-small class="ml-2" @click="DeleteBlAttachment(i)">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </template>
                    </td>
                    <td class="text-center">
                        <v-btn v-if="record.ForInspection == 0 && $store.state.user.EmployeeID == record.Applicant" icon @click="doneInspectionConfirmation(record)">
                            <v-icon color="green">mdi-check</v-icon>
                        </v-btn>

                        <span v-else-if="record.ForInspection == 0 && $store.state.user.EmployeeID != record.Applicant" class="pa-2 text-nowrap">{{$t('forInspection')}}</span>

                        <span v-else-if="record.ForInspection == 1" class="pa-2 text-nowrap">{{$t('doneInspectionConfirmed')}}</span>
                        <span v-else class="pa-2">{{$t('notApplicable')}}</span>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-card>
    <template>
        <v-row>
            <template v-if="isAdmin">
                <v-col cols="12" md="2">
                    <v-btn @click="MultipleApproval(1)" class="ma-2" :disabled="SelectedApplications == 0" style="color:white;width:100%" color="teal"><strong>{{$t('approve')}}</strong></v-btn>
                </v-col>
                <v-col cols="12" md="2">
                    <v-btn @click="ReasonForMultipleDisapprovalDialog = true" :disabled="SelectedApplications == 0" class="ma-2" style="color:white;width:100%" color="red"><strong>{{$t('disapprove')}}</strong></v-btn>
                </v-col>
            </template>
            <v-spacer></v-spacer>
            <div class="text-center mr-2">
                <v-pagination v-model="tableOptions.currentPage" :length="tableOptions.length" :total-visible="tableOptions.visible" class="my-4" @input="changePage()"></v-pagination>
            </div>
        </v-row>
    </template>
    <v-dialog v-model="ViewMpaDetailsDialog" fullscreen persistent scrollable style="z-index: 999">
        <v-card tile>
            <v-toolbar flat dark dense color="teal darken-3" style="color: white; z-index: 999">
                <v-btn icon dark medium @click="ViewMpaDetailsDialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>{{MpaDetails.general_informations.MpaNo+' '+ $t('details')}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn color="#0D47A1" @click="openPdf(MpaDetails.general_informations.Attachment)">
                        {{$t('quotation')}}
                    </v-btn>
                    <template v-if="isAdmin && MpaDetails.general_informations.ApproverF == $store.state.user.EmployeeID">
                        <v-btn v-if="isAvailable" text color="green lighten-1" @click="Approval(1)">
                            {{$t('approve')}}
                        </v-btn>
                        <v-btn v-if="isAvailable" text color="red lighten-1" @click="ReasonForDisapprovalDialog = true">
                            {{$t('disapprove')}}
                        </v-btn>
                    </template>

                    <template v-if="MpaDetails.general_informations.Applicant == $store.state.user.EmployeeID">
                        <v-btn dark text color="green lighten-1" @click="ConfirmUpdateDialog = true" v-if="MpaDetails.general_informations.Status == 1">
                            {{$t('save')}}
                        </v-btn>
                        <v-btn dark text color="red lighten-1" @click="CancelApplicationDialog = true">
                            {{$t('cancelApplication')}}
                        </v-btn>
                    </template>
                </v-toolbar-items>
            </v-toolbar>
            <v-card-text>
                <v-simple-table class="mt-1" style="border:1px solid black">
                    <thead>
                        <tr>
                            <th class="text-center" style="border:1px solid black;width:130px">{{$t('mpaNo')}}</th>
                            <th class="text-center" style="border:1px solid black;background-color:teal;color:white"><strong>{{MpaDetails.general_informations.MpaNo}}</strong></th>
                            <th class="text-center" style="border:1px solid black">{{$t('applicant')}}</th>
                            <th class="text-center" style="border:1px solid black;background-color:teal;color:white"><strong>{{LanguageCheck ? MpaDetails.general_informations.ApplicantFullNameEng : MpaDetails.general_informations.ApplicantFullNameJap}}</strong></th>
                            <th class="text-center" style="border:1px solid black">{{$t('date')}}</th>
                            <th class="text-center" style="border:1px solid black;background-color:teal;color:white"><strong>{{dateSubstring(MpaDetails.general_informations.created_at)}}</strong></th>
                        </tr>
                        <tr>
                            <th style="border:1px solid black">{{$t('vendorName')}} <br>
                                {{$t('viaNihonSangyou')}}
                                <v-checkbox :readonly="ReadOnly" v-model="MpaDetails.general_informations.NihonSangyou"></v-checkbox>
                            </th>
                            <th style="border:1px solid black" colspan="5">
                                <v-text-field :readonly="ReadOnly" :error="!MpaDetails.general_informations.VendorNameJap" v-model="MpaDetails.general_informations.VendorNameJap" class="mt-2 mb-n4" :placeholder="$t('japanese')" outlined dense></v-text-field>
                                <v-text-field :readonly="ReadOnly" :error="!MpaDetails.general_informations.VendorNameEng" v-model="MpaDetails.general_informations.VendorNameEng" class="mt-2 mb-n4" :placeholder="$t('english')" outlined dense></v-text-field>
                            </th>
                        </tr>
                        <tr>
                            <th style="border:1px solid black">{{$t('payerCompanyName')}}</th>
                            <th style="border:1px solid black" colspan="5">
                                <v-select :readonly="ReadOnly" class="mt-2 mb-n4" v-model="MpaDetails.general_informations.PayerCompanyCode" :items="payers" item-text="payer_name" item-value="payer_code" outlined dense></v-select>
                            </th>
                        </tr>
                        <tr>
                            <th style="border:1px solid black">{{$t('dept')}}</th>
                            <th style="border:1px solid black" colspan="5">
                                <v-select :readonly="ReadOnly" :error="!MpaDetails.general_informations.DepartmentCode" v-model="MpaDetails.general_informations.DepartmentCode" :items="departmentFilter" :item-text="$store.state.language == 'english' ? 'DepartmentNameEng': 'DepartmentNameJap'" item-value="id" class="mt-2 mb-n4" outlined dense></v-select>
                            </th>
                        </tr>
                        <tr>
                            <th style="border:1px solid black">{{$t('purpose')}}</th>
                            <th style="border:1px solid black" colspan="5">
                                <v-textarea :readonly="ReadOnly" rows="1" :error="!MpaDetails.general_informations.Purpose" auto-grow v-model="MpaDetails.general_informations.Purpose" outlined class="mt-2 mb-n4" name="input-7-4"></v-textarea>
                            </th>
                        </tr>
                    </thead>
                </v-simple-table>
                <br /><br />
                <h5>
                    <strong>
                        {{$t('item')}}
                    </strong>
                </h5>
                <v-simple-table v-for="(rec,i) in MpaDetails.items" :key="i" style="border:1px solid black" dense>
                    <thead>
                        <tr>
                            <th style="border:1px solid black" rowspan="5">{{i + 1}}</th>
                            <th style="border:1px solid black;min-width:150px" class="text-center" rowspan="2" colspan="2">{{$t('itemName')}}</th>
                            <th colspan="7" style="min-width:700px">
                                <v-text-field :readonly="ReadOnly" :error="!rec.ItemNameJap" v-model="rec.ItemNameJap" :placeholder="$t('japanese')" class="thead mt-2 mb-n4" outlined dense block></v-text-field>
                            </th>
                        </tr>
                        <tr>
                            <th colspan="7" style="border-bottom:1px solid black">
                                <v-text-field :readonly="ReadOnly" :error="!rec.ItemNameEng" v-model="rec.ItemNameEng" :placeholder="$t('english')" class="thead mt-n3 mb-n3" outlined dense block></v-text-field>
                            </th>
                        </tr>
                        <tr>
                            <th colspan="2" class="text-center" style="border:1px solid black">{{$t('dept')}}</th>
                            <th colspan="7">
                                <v-select :readonly="ReadOnly" :error="!rec.DepartmentCode" v-model="rec.DepartmentCode" :items="departmentFilter" :item-text="$store.state.language == 'english' ? 'DepartmentNameEng': 'DepartmentNameJap'" item-value="id" class="thead mt-3 mb-n3" outlined dense block></v-select>
                            </th>
                        </tr>
                        <tr>
                            <th colspan="2" style="border:1px solid black" class="text-center">{{$t('itemId')}}</th>
                            <th colspan="2" style="border:1px solid black" class="text-center">{{$t('unitPrice')}}</th>
                            <th colspan="2" style="border:1px solid black" class="text-center">{{$t('qty')}}</th>
                            <th colspan="2" style="border:1px solid black" class="text-center">{{$t('currency')}}</th>
                        </tr>
                        <tr>
                            <th colspan="2" style="border:1px solid black">
                                <v-text-field :readonly="ReadOnly" v-model="rec.ItemID" block class="mt-2 mb-n4" outlined dense></v-text-field>
                            </th>
                            <th colspan="2" class="twidth1" style="border:1px solid black">
                                <v-row>
                                    <v-col v-if="!!MpaDetails.history" cols=6>
                                        <v-text-field v-if="MpaDetails.history.RevisedFieldItems.includes('UnitPrice') || MpaDetails.history.RevisedFieldItems.includes('Quantity')" readonly label="Before" background-color="#FFF59D" v-model="MpaDetails.history.Items[i].UnitPrice" @keypress="onlyNumber($event)" @keyup="numberWithComma(i,'items','UnitPrice'),computeTotalPerCurrency()" class="mt-2 mb-n4 before" outlined dense block></v-text-field>
                                    </v-col>
                                    <v-col :cols="withRevision()">
                                        <v-text-field :readonly="ReadOnly" :error="!rec.UnitPrice" :label="withRevision() == 12 ? '' : 'After' " v-model="rec.UnitPrice" @keypress="onlyNumber($event)" @keyup="numberWithComma(i,'items','UnitPrice'),computeTotalPerCurrency()" class="mt-2 mb-n4" outlined dense block></v-text-field>
                                    </v-col>
                                </v-row>
                            </th>
                            <th colspan="2" class="twidth1" style="border:1px solid black">
                                <v-text-field :readonly="ReadOnly" :error="!rec.Quantity" v-model="rec.Quantity" @keypress="onlyNumber($event)" @keyup="numberWithComma(i,'items','Quantity')" class="mt-2 mb-n4" outlined dense block></v-text-field>
                            </th>
                            <th colspan="2" class="twidth1" style="border:1px solid black">
                                <v-select :readonly="ReadOnly" :error="!rec.Currency" v-model="rec.Currency" style="width:width:100%;font-size:15px" :items="currencies" item-text="currency_code" item-value="currency_code" class="mt-2 mb-n4" outlined dense block></v-select>
                            </th>
                        </tr>
                    </thead>
                </v-simple-table>
                <br><br>
                <h5><strong>{{$t('purchasePrice')}}</strong></h5>
                <v-simple-table style="border:1px solid black" dense>
                    <thead>
                        <tr>
                            <th style="border:1px solid black;width:180px;background-color:#3b4863;color:white" class="text-center">{{$t('terms')}}</th>
                            <th style="border:1px solid black;background-color:#3b4863;color:white" class="text-center">{{$t('currency')}}</th>
                            <th style="border:1px solid black;background-color:#3b4863;color:white" class="text-center">{{$t('totalPrice')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(rec,i) in TotalPerCurrency" :key="i">
                            <th v-if="i == 0" :rowspan="TotalPerCurrency.length" style="border:1px solid black" class="text-center">
                                <v-select class="mt-2" :readonly="ReadOnly" :error="!MpaDetails.general_informations.TradeTermCode" v-model="MpaDetails.general_informations.TradeTermCode" block outlined dense :items="trade_terms" item-value="id" item-text="trade_code"></v-select>
                            </th>
                            <th style="border:1px solid black;font-size:15px" class="text-center" dense>{{rec.currency_code}}</th>
                            <th style="border:1px solid black;font-size:15px" class="text-center" dense>{{numberWithComma(rec.Total)}}</th>
                        </tr>
                    </tbody>
                </v-simple-table>
                <br><br>
                <h5><strong>{{$t('otherExpense')}}</strong></h5>
                <v-simple-table style="border:1px solid black" dense>
                    <thead>
                        <tr>
                            <th style="border:1px solid black;width:180px;background-color:#3b4863;color:white"></th>
                            <th class="text-center" style="border:1px solid black;width:180px;background-color:#3b4863;color:white">{{$t('status')}}</th>
                            <th class="text-center" style="border:1px solid black;width:180px;background-color:#3b4863;color:white">{{$t('currency')}}</th>
                            <th class="text-center" style="border:1px solid black;width:180px;background-color:#3b4863;color:white">{{$t('amount')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{$t('packingExpense')}}</td>
                            <td>
                                <v-select :readonly="ReadOnly" v-model="MpaDetails.other_informations.PackingExpenseStatus" :items="quotation_statuses" :item-text="LanguageCheck ? 'status_en': 'status_jp'" item-value="status_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                            </td>
                            <td>
                                <v-select :readonly="ReadOnly" v-model="MpaDetails.other_informations.PackingExpenseCurrency" :items="currencies" item-text="currency_code" item-value="currency_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                            </td>
                            <td>
                                <v-text-field :readonly="ReadOnly" v-model="MpaDetails.other_informations.PackingExpenseAmount" @keypress="onlyNumber($event)" @keyup="numberWithComma('MpaDetails.other_informations.PackingExpenseAmount')" class="tbody mt-2 mb-n4" outlined dense></v-text-field>
                            </td>
                        </tr>
                        <tr>
                            <td>{{$t('distributionExpense')}}</td>
                            <td>
                                <v-select :readonly="ReadOnly" v-model="MpaDetails.other_informations.DistributionExpenseStatus" :items="quotation_statuses" :item-text="LanguageCheck ? 'status_en': 'status_jp'" item-value="status_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                            </td>
                            <td>
                                <v-select :readonly="ReadOnly" v-model="MpaDetails.other_informations.DistributionExpenseCurrency" :items="currencies" item-text="currency_code" item-value="currency_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                            </td>
                            <td>
                                <v-text-field :readonly="ReadOnly" v-model="MpaDetails.other_informations.DistributionExpenseAmount" @keypress="onlyNumber($event)" @keyup="numberWithComma('MpaDetails.other_informations.DistributionExpenseAmount')" class="tbody mt-2 mb-n4" outlined dense></v-text-field>
                            </td>
                        </tr>
                        <tr>
                            <td>{{$t('installationExpense')}}</td>
                            <td>
                                <v-select :readonly="ReadOnly" v-model="MpaDetails.other_informations.InstallationExpenseStatus" :items="quotation_statuses" :item-text="LanguageCheck ? 'status_en': 'status_jp'" item-value="status_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                            </td>
                            <td>
                                <v-select :readonly="ReadOnly" v-model="MpaDetails.other_informations.InstallationExpenseCurrency" :items="currencies" item-text="currency_code" item-value="currency_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                            </td>
                            <td>
                                <v-text-field :readonly="ReadOnly" v-model="MpaDetails.other_informations.InstallationExpenseAmount" @keypress="onlyNumber($event)" @keyup="numberWithComma('MpaDetails.other_informations.InstallationExpenseAmount')" class="tbody mt-2 mb-n4" outlined dense></v-text-field>
                            </td>
                        </tr>
                        <tr>
                            <td>{{$t('others')}}</td>
                            <td>
                                <v-select :readonly="ReadOnly" v-model="MpaDetails.other_informations.OtherExpenseStatus" :items="quotation_statuses" :item-text="LanguageCheck ? 'status_en': 'status_jp'" item-value="status_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                            </td>
                            <td>
                                <v-select :readonly="ReadOnly" v-model="MpaDetails.other_informations.OtherExpenseCurrency" :items="currencies" item-text="currency_code" item-value="currency_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                            </td>
                            <td>
                                <v-text-field :readonly="ReadOnly" v-model="MpaDetails.other_informations.OtherExpenseAmount" @keypress="onlyNumber($event)" @keyup="numberWithComma('MpaDetails.other_informations.OtherExpenseAmount')" class="tbody mt-2 mb-n4" outlined dense></v-text-field>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
                <br><br>
                <h5><strong>{{$t('submissionMatters')}}</strong></h5>
                <v-textarea :readonly="ReadOnly" v-model="MpaDetails.general_informations.SubmissionMatters" rows="1" auto-grow outlined class="mt-2 mb-n4" name="input-7-4"></v-textarea>
                <br><br>
                <h5><strong>{{$t('paymentSchedule')}}</strong></h5>
                <v-simple-table style="border:1px solid black" class="mb-2" dense>
                    <thead>
                        <tr>
                            <th style="width:150px;border:1px solid black;background-color:#3b4863;color:white"></th>
                            <th style="width:115px;border-top:1px solid black;border-bottom:1px solid black;background-color:#3b4863;color:white">{{$t('scheduleDate')}}</th>
                            <th style="width:115px;border-top:1px solid black;border-bottom:1px solid black;background-color:#3b4863;color:white"></th>
                            <th style="width:80px;border:1px solid black;background-color:#3b4863;color:white">{{$t('ratio')}}</th>
                            <th style="width:250px;border:1px solid black;background-color:#3b4863;color:white">{{$t('paymentDueDate')}}</th>
                        </tr>
                    </thead>
                    <tbody v-if="(!MpaDetails.general_informations.NihonSangyou)">
                        <tr>
                            <td style="width:120px;border:1px solid black">{{$t('uponIssuingPo')}}</td>
                            <td style="border-bottom:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Po','PoMonth')" v-model="MpaDetails.payment_schedules.PoMonth" :disabled="checkDisabled('PoRatio')" :items="months" :item-text="LanguageCheck ? 'month_name_en' : 'month_name_jp'" item-value="id" class="mt-2 mb-n4"></v-select>
                            </td>
                            <td style="border-bottom:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Po','PoSchedule')" v-model="MpaDetails.payment_schedules.PoSchedule" :disabled="checkDisabled('PoRatio')" :items="schedules" :item-text="LanguageCheck ? 'payment_schedule_name_en': 'payment_schedule_name_jp'" item-value="id" class="mt-2 mb-n4"></v-select>
                            </td>
                            <td style="width:120px;border:1px solid black">
                                <v-text-field :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Po','PoRatio')" v-model="MpaDetails.payment_schedules.PoRatio" :disabled="checkDisabled('PoRatio')" @keypress="onlyNumber($event)" @keyup="checkRatio(1)" class="mt-2 mb-n4"></v-text-field>
                            </td>
                            <td style="width:160px;border:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Po','PoDue')" v-model="MpaDetails.payment_schedules.PoDue" :disabled="checkDisabled('PoRatio')" :items="payment_dues" :item-text="LanguageCheck ? 'due_name_en' : 'due_name_jp'" item-value="id" class="mt-2 mb-n4"></v-select>
                            </td>
                        </tr>
                        <tr>
                            <td style="width:120px;border:1px solid black">{{$t('uponRecievingBl')}}</td>
                            <td style="border-bottom:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('RecievingBl','RecievingBlMonth')" v-model="MpaDetails.payment_schedules.RecievingBlMonth" :disabled="checkDisabled('RecievingBlRatio')" :items="months" :item-text="LanguageCheck ? 'month_name_en' : 'month_name_jp'" item-value="id" class="mt-2 mb-n4"></v-select>
                            </td>
                            <td style="border-bottom:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('RecievingBl','RecievingBlSchedule')" v-model="MpaDetails.payment_schedules.RecievingBlSchedule" :disabled="checkDisabled('RecievingBlRatio')" :items="schedules" :item-text="LanguageCheck ? 'payment_schedule_name_en': 'payment_schedule_name_jp'" item-value="id" class="mt-2 mb-n4"></v-select>
                            </td>
                            <td style="width:120px;border:1px solid black">
                                <v-text-field :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('RecievingBl','RecievingBlRatio')" v-model="MpaDetails.payment_schedules.RecievingBlRatio" :disabled="checkDisabled('RecievingBlRatio')" @keypress="onlyNumber($event)" @keyup="checkRatio(2)" class="mt-2 mb-n4"></v-text-field>
                            </td>
                            <td style="width:160px;border:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('RecievingBl','RecievingBlDue')" v-model="MpaDetails.payment_schedules.RecievingBlDue" :disabled="checkDisabled('RecievingBlRatio')" :items="payment_dues" :item-text="LanguageCheck ? 'due_name_en' : 'due_name_jp'" item-value="id" class="mt-2 mb-n4"></v-select>
                            </td>
                        </tr>
                        <tr>
                            <td style="width:120px;border:1px solid black">{{$t('uponInspection')}}</td>
                            <td style="border-bottom:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Inspection','InspectionMonth')" v-model="MpaDetails.payment_schedules.InspectionMonth" :disabled="checkDisabled('InspectionRatio')" :items="months" :item-text="LanguageCheck ? 'month_name_en' : 'month_name_jp'" item-value="id" class="mt-2 mb-n4"></v-select>
                            </td>
                            <td style="border-bottom:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Inspection','InspectionSchedule')" v-model="MpaDetails.payment_schedules.InspectionSchedule" :disabled="checkDisabled('InspectionRatio')" :items="schedules" :item-text="LanguageCheck ? 'payment_schedule_name_en': 'payment_schedule_name_jp'" item-value="id" class="mt-2 mb-n4"></v-select>
                            </td>
                            <td style="width:120px;border:1px solid black">
                                <v-text-field :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Inspection','InspectionRatio')" v-model="MpaDetails.payment_schedules.InspectionRatio" :disabled="checkDisabled('InspectionRatio')" @keypress="onlyNumber($event)" @keyup="checkRatio(3)" class="mt-2 mb-n4"></v-text-field>
                            </td>
                            <td style="width:160px;border:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Inspection','InspectionDue')" v-model="MpaDetails.payment_schedules.InspectionDue" :disabled="checkDisabled('InspectionRatio')" :items="payment_dues" :item-text="LanguageCheck ? 'due_name_en' : 'due_name_jp'" item-value="id" class="mt-2 mb-n4"></v-select>
                            </td>
                        </tr>
                        <tr>
                            <td style="width:105px;border:1px solid black">
                                {{$t('others')}}
                                <br />
                                <v-text-field clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Others','OthersTitle')" v-model="MpaDetails.payment_schedules.OthersTitle" :disabled="checkDisabled('OthersRatio')" class="mt-2 mb-n4"></v-text-field>
                            </td>
                            <td style="border-bottom:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Others','OthersMonth')" v-model="MpaDetails.payment_schedules.OthersMonth" :disabled="checkDisabled('OthersRatio')" :items="months" :item-text="LanguageCheck ? 'month_name_en' : 'month_name_jp'" item-value="id" class="mt-7 mb-n4"></v-select>
                            </td>
                            <td style="border-bottom:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Others','OthersSchedule')" v-model="MpaDetails.payment_schedules.OthersSchedule" :disabled="checkDisabled('OthersRatio')" :items="schedules" :item-text="LanguageCheck ? 'payment_schedule_name_en': 'payment_schedule_name_jp'" item-value="id" class="mt-7 mb-n4"></v-select>
                            </td>
                            <td style="width:120px;border:1px solid black">
                                <v-text-field :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Others','OthersRatio')" v-model="MpaDetails.payment_schedules.OthersRatio" :disabled="checkDisabled('OthersRatio')" @keypress="onlyNumber($event)" @keyup="checkRatio(4)" class="mt-7 mb-n4"></v-text-field>
                            </td>
                            <td style="width:160px;border:1px solid black">
                                <v-select clearable :readonly="ReadOnly" outlined dense :error="paymentScheduleRowChecker('Others','OthersDue')" v-model="MpaDetails.payment_schedules.OthersDue" :disabled="checkDisabled('OthersRatio')" :items="payment_dues" :item-text="LanguageCheck ? 'due_name_en' : 'due_name_jp'" item-value="id" class="mt-7 mb-n4"></v-select>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td style="width:150px;border:1px solid black">
                                <strong>{{$t('viaNihonSangyou')}}</strong>
                            </td>
                            <td style="border-bottom:1px solid black;min-width:120px;" class="text-center" colspan="2"><strong>N/A</strong></td>
                            <td style="width:80px;border:1px solid black;"><strong>100%</strong></td>
                            <td class="text-center" style="border:1px solid black;width:250px"><strong>N/A</strong></td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th style="border:1px solid black"></th>
                            <th style="border-bottom:1px solid black;border-top:1px solid black"></th>
                            <th class="text-right" style="border-bottom:1px solid black;border-top:1px solid black;font-size:20px">{{$t('total')}}</th>
                            <th style="border:1px solid black;font-size:20px">{{MpaDetails.general_informations.NihonSangyou ? 100 : totalPercent}}%</th>
                            <th style="border:1px solid black"></th>
                        </tr>
                    </thead>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog v-model="ConfirmUpdateDialog" max-width="500px">
        <v-card>
            <v-card-title>
                Update Application
            </v-card-title>
            <v-card-text>
                <v-text-field label="Reason" v-model="ReasonForUpdate"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" text :disabled="ReasonForUpdate == ''" @click="UpdateApplication()">
                    Save
                </v-btn>
                <v-btn color="red" text @click="ConfirmUpdateDialog = false,ReasonForUpdate = ''">
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="CancelApplicationDialog" max-width="50%">
        <v-card>
            <v-card-title class="headline">
                {{$t('cancelApplicationHeader')}}
            </v-card-title>

            <v-card-text>
                <v-text-field label="Reason For Cancellation" v-model="cancelApplicationReason"></v-text-field>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text :disabled="cancelApplicationReason == ''" @click="confirmCancelApplication()">
                    {{$t('confirmation')}}
                </v-btn>
                <v-btn color="red darken-1" text @click="CancelApplicationDialog = false,cancelApplicationReason = ''">
                    {{$t('cancel')}}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="ReasonForDisapprovalDialog" max-width="500px">
        <v-card>
            <v-card-title>
                Disapprove Application
            </v-card-title>
            <v-card-text>
                <v-text-field label="Reason" v-model="ReasonForDisapproval"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" text :disabled="ReasonForDisapproval == ''" @click="Approval(2)" v-if="ReasonForDisapprovalDialog">
                    Disapprove
                </v-btn>
                <v-btn color="red" text @click="ReasonForDisapprovalDialog = false,ReasonForDisapproval = ''">
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="ReasonForMultipleDisapprovalDialog" max-width="500px">
        <v-card>
            <v-card-title>
                Disapprove Application
            </v-card-title>
            <v-card-text>
                <v-text-field label="Reason" v-model="ReasonForDisapproval"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" text :disabled="ReasonForDisapproval == ''" @click="MultipleDisapproveApplication()">
                    Disapprove
                </v-btn>
                <v-btn color="red" text @click="ReasonForMultipleDisapprovalDialog = false,ReasonForDisapproval = ''">
                    Close
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="ConfirmDoneInspectionDialog" max-width="500px" persistent>
        <v-card>
            <v-card-title>
                Confirm Inspection on &nbsp; <b>{{doneInspectionMpaNo}}</b> ?
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="6" sm="6">
                        <v-btn color="success" @click="confirmDoneInspection()" block>
                            Confirm
                        </v-btn>
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
                        <v-btn color="red" dark @click="ConfirmDoneInspectionDialog = false,doneInspectionMpaNo = ''" block>
                            Cancel
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog v-model="AttachmentDialog" scrollable max-width="750px">
        <v-card>
            <v-card-title>{{AttachmentDialogData.MpaNo}} Attachments</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 500px; width: 98%">
                <v-row style="width:98%">
                    <v-col cols=6>
                        <h4>Invoice</h4>
                    </v-col>
                    <v-col cols=6>
                        <h4>BL</h4>
                    </v-col>                    
                    <v-col cols=6>
                        <v-file-input multiple dense hide-details prepend-inner-icon="mdi-file-pdf" prepend-icon="" label="Invoice Attachment" v-model="ForUploadInvoice"></v-file-input>
                        <v-btn class="my-2" block small @click="UploadInvoice(ForUploadInvoice)" :disabled="ForUploadInvoice.length < 1">
                            <v-icon>mdi-upload</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols=6>
                        <v-file-input multiple dense hide-details prepend-inner-icon="mdi-file-pdf" prepend-icon="" label="BL Attachment" v-model="ForUploadBl"></v-file-input>
                        <v-btn class="my-2" block small @click="UploadBl(ForUploadBl)" :disabled="ForUploadBl.length < 1"> 
                            <v-icon>mdi-upload</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols=6 v-if="AttachmentDialogData.Invoice">
                        <ul>
                            <li v-for="(file,index) in AttachmentDialogData.Invoice" :key="index">
                                <a :href="'/Attachment/'+file.MpaNo+'/'+file.Path" target="_blank">{{file.Path}}</a>
                                <v-btn x-small icon color="red" @click="deleteAttachment(file,'invoice')">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </li>
                        </ul>
                    </v-col>
                    <v-col cols=6 v-if="AttachmentDialogData.Bl">
                        <ul>
                            <li v-for="(file,index) in AttachmentDialogData.Bl" :key="index">
                                <a :href="'/Attachment/'+file.MpaNo+'/'+file.Path" target="_blank">{{file.Path}}</a>
                                <v-btn x-small icon color="red" @click="deleteAttachment(file,'bl')">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </li>
                        </ul>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-row style="width:95%">
                    <v-spacer></v-spacer>  
                    <v-btn color="blue darken-1" class="mr-3" text @click="AttachmentDialog = false">
                        Close
                    </v-btn>
                </v-row>
                
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog
      v-model="PoUploadDialog"
      scrollable
      max-width="500px"
    >
      <v-card>
        <v-card-title>PO Upload</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 150px;">
            <v-row align="center">
                <v-col cols="12">
                    <v-file-input small-chips dense hide-details prepend-inner-icon="mdi-file-pdf" prepend-icon="" label="PO Attachment" v-model="ForUploadPo"></v-file-input>
                </v-col>
                <v-col cols="12">
                    <v-btn block :disabled="ForUploadPo.length == 0" @click="PoFileUpload(ForUploadPo)">
                        <v-icon>
                            mdi-upload
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-row no-gutters>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="PoUploadDialog = false,ForUploadPo = []"
                >
                    Close
                </v-btn>
            </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="InvoiceUploadDialog"
      scrollable
      max-width="500px"
    >
      <v-card>
        <v-card-title>Invoice Upload</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 150px;">
            <v-row align="center">
                <v-col cols="12">
                    <v-file-input small-chips dense hide-details prepend-inner-icon="mdi-file-pdf" prepend-icon="" label="Invoice Attachment" v-model="ForUploadInvoice"></v-file-input>
                </v-col>
                <v-col cols="12">
                    <v-btn block :disabled="ForUploadInvoice.length == 0" @click="InvoiceFileUpload(ForUploadInvoice)">
                        <v-icon>
                            mdi-upload
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-row no-gutters>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="InvoiceUploadDialog = false,ForUploadInvoice = []"
                >
                    Close
                </v-btn>
            </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="BlUploadDialog"
      scrollable
      max-width="500px"
    >
      <v-card>
        <v-card-title>BL Upload</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 150px;">
            <v-row align="center">
                <v-col cols="12">
                    <v-file-input small-chips dense hide-details prepend-inner-icon="mdi-file-pdf" prepend-icon="" label="BL Attachment" v-model="ForUploadBl"></v-file-input>
                </v-col>
                <v-col cols="12">
                    <v-btn block :disabled="ForUploadBl.length == 0" @click="BlFileUpload(ForUploadBl)">
                        <v-icon>
                            mdi-upload
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-row no-gutters>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="BlUploadDialog = false,ForUploadBl = []"
                >
                    Close
                </v-btn>
            </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    computed: {
        SelectedApplications() {
            return this.ApplicationList.filter(rec => {
                return rec.Selected == true
            }).map(rec => {
                return rec.MpaNo
            })
        },
        isAvailable() {
            if (this.MpaDetails.general_informations.Status !== undefined) {
                if (this.MpaDetails.general_informations.Status == 1) {
                    return false
                } else {
                    return true
                }
            } else {
                return false
            }
        },
        ReadOnly() {
            if (!this.isAdmin && this.MpaDetails.general_informations.Status !== undefined) {
                return false
            } else {
                if (this.MpaDetails.general_informations.Status == 0 && this.MpaDetails.general_informations.Applicant == this.$store.state.user.EmployeeID) {
                    return false
                } else {
                    return true
                }
            }
        },
        isAdmin() {
            return this.$store.state.user.AccessLevel == 1 && this.$store.state.user.Department != '経理'
        },
        totalRatio() {
            var totalRatio = 100

            if (this.MpaDetails.payment_schedules.PoRatio != '' && this.MpaDetails.payment_schedules.PoRatio != null) {
                totalRatio -= parseInt(this.MpaDetails.payment_schedules.PoRatio)
            }

            if (this.MpaDetails.payment_schedules.RecievingBlRatio != '' && this.MpaDetails.payment_schedules.RecievingBlRatio != null) {
                totalRatio -= parseInt(this.MpaDetails.payment_schedules.RecievingBlRatio)
            }

            if (this.MpaDetails.payment_schedules.InspectionRatio != '' && this.MpaDetails.payment_schedules.InspectionRatio != null) {
                totalRatio -= parseInt(this.MpaDetails.payment_schedules.InspectionRatio)
            }

            if (this.MpaDetails.payment_schedules.OthersRatio != '' && this.MpaDetails.payment_schedules.OthersRatio != null) {
                totalRatio -= parseInt(this.MpaDetails.payment_schedules.OthersRatio)
            }
            return totalRatio
        },
        totalPercent() {
            var totalPercent = 0

            if (this.MpaDetails.payment_schedules.PoRatio != '' && this.MpaDetails.payment_schedules.PoRatio != null) {
                totalPercent += parseInt(this.MpaDetails.payment_schedules.PoRatio)
            }

            if (this.MpaDetails.payment_schedules.RecievingBlRatio != '' && this.MpaDetails.payment_schedules.RecievingBlRatio != null) {
                totalPercent += parseInt(this.MpaDetails.payment_schedules.RecievingBlRatio)
            }

            if (this.MpaDetails.payment_schedules.InspectionRatio != '' && this.MpaDetails.payment_schedules.InspectionRatio != null) {
                totalPercent += parseInt(this.MpaDetails.payment_schedules.InspectionRatio)
            }

            if (this.MpaDetails.payment_schedules.OthersRatio != '' && this.MpaDetails.payment_schedules.OthersRatio != null) {
                totalPercent += parseInt(this.MpaDetails.payment_schedules.OthersRatio)
            }

            return totalPercent

        },
        LanguageCheck() {
            return this.$store.state.language == 'english'
        },
        TotalPerCurrency() {
            return this.currencies.filter(rec => {
                return rec.Total > 0
            })
        },
        departmentFilter() {
            return this.departments.filter(rec => {
                if (this.MpaDetails.general_informations.PayerCompanyCode == 'HS') {
                    return rec
                } else {
                    return rec.PayerCode == this.MpaDetails.general_informations.PayerCompanyCode
                }
            })
        }
    },
    data() {
        return {
            ForUploadPo:[],
            ForUploadBl: [],
            ForUploadInvoice: [],
            search: {},

            tableOptions: {
                currentPage: 1,
                skip: 0,
                count: 0,
                length: 0,
                visible: 6,
            },
            overlay: true,
            filter: {
                boolean: false,
            },

            approver: 1,
            dialog1: false,
            ViewMpaDetailsDialog: false,
            ConfirmUpdateDialog: false,
            CancelApplicationDialog: false,
            ReasonForDisapprovalDialog: false,
            ReasonForMultipleDisapprovalDialog: false,
            ConfirmDoneInspectionDialog: false,
            AttachmentDialog:false,
            PoUploadDialog: false,
            InvoiceUploadDialog:false,
            BlUploadDialog:false,

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
            AttachmentDialogData:{},
            PoAttachmentDetails:{},
            InvoiceAttachmentDetails:{},
            BlAttachmentDetails:{}

        };
    },
    created() {
        this.getApplications()
        this.getMasterLists()
        if (this.$router.history.current.fullPath.includes('?')) {
            var params = this.$router.history.current.fullPath.split('?')[1].split('=')
            if (params[0] == 'MpaNo' && params[1].length == 10) {
                this.overlay = true
                this.ViewMpaDetailsDialog = true
                this.getMpaDetails(params[1])
            }
        }
        if (this.$store.state.path != "") {
            this.$store.commit('REMOVE_PATH')
        }
    },
    methods: {
        InvoiceFileUpload(val){
            this.$swal.fire({
                title: 'Do you want to Upload Invoice Attachment?',
                // showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Confirm`,
                // denyButtonText: `Don't save`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        var headers = {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }

                        var formData = new FormData 
                        formData.append('files[]',val)
                        

                        formData.append('MpaNo', this.InvoiceAttachmentDetails.MpaNo)

                        axios({
                                method: 'post',
                                url: '/api/UploadInvoice',
                                data: formData,
                                headers: headers
                            })
                            .then(res => {
                                // this.AfterUploadActions()
                                // alert('uploaded')
                                // $('.PoUpload').eq(i).val("")
                                this.overlay = true
                                this.AfterUploadActions()

                                
                            })
                            .catch(err => {
                                this.overlay = false
                            });
                        }
                })
        },
        BlFileUpload(val){
            // console.log(val)
            this.$swal.fire({
                title: 'Do you want to Upload BL Attachment?',
                // showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Confirm`,
                // denyButtonText: `Don't save`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        var headers = {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }

                        var formData = new FormData 
                        formData.append('files[]',val)
                        

                        formData.append('MpaNo', this.BlAttachmentDetails.MpaNo)

                        axios({
                                method: 'post',
                                url: '/api/UploadBl',
                                data: formData,
                                headers: headers
                            })
                            .then(res => {
                                // this.AfterUploadActions()
                                // alert('uploaded')
                                // $('.PoUpload').eq(i).val("")
                                this.overlay = true
                                this.AfterUploadActions()

                                
                            })
                            .catch(err => {
                                this.overlay = false
                            });
                        }
                })
        },
        AttachmentLink(rec,field){
            return `${window.location.origin}/Attachment/${rec.MpaNo}/${rec[field]}`;
        },
        DeleteInvoiceAttachment(i){
            this.$swal.fire({
                title: 'Do you want to Delete Invoice Attachment?',
                // showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Confirm`,
                // denyButtonText: `Don't save`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.post('/api/DeleteInvoiceAttachment',this.ApplicationList[i])
                        .then(res=>{
                            this.overlay= true
                            this.getApplications()
                            this.$swal.fire(
                                'Success!',
                                'Attachment Deleted Successfully!',
                                'success'
                            )
                        }).catch(err=>{
                            console.log(err)
                        })
                    }
                })
        },
        DeleteBlAttachment(i){
            this.$swal.fire({
                title: 'Do you want to Delete BL Attachment?',
                // showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Confirm`,
                // denyButtonText: `Don't save`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.post('/api/DeleteBlAttachment',this.ApplicationList[i])
                        .then(res=>{
                            this.overlay= true
                            this.getApplications()
                            this.$swal.fire(
                                'Success!',
                                'Attachment Deleted Successfully!',
                                'success'
                            )
                        }).catch(err=>{
                            console.log(err)
                        })
                    }
                })
        },
        DeletePoAttachment(i){
            this.$swal.fire({
                title: 'Do you want to Delete Po Attachment?',
                // showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Confirm`,
                // denyButtonText: `Don't save`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.post('/api/DeletePoAttachment',this.ApplicationList[i])
                        .then(res=>{
                            this.overlay= true
                            this.getApplications()
                            this.$swal.fire(
                                'Success!',
                                'Attachment Deleted Successfully!',
                                'success'
                            )
                        }).catch(err=>{
                            console.log(err)
                        })
                    }
                })
        },
        PoFileUpload(i){
                this.$swal.fire({
                title: 'Do you want to Upload Po Attachment?',
                // showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Confirm`,
                // denyButtonText: `Don't save`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        var headers = {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }

                        var formData = new FormData 
                        formData.append('files[]',i)
                        

                        formData.append('MpaNo', this.PoAttachmentDetails.MpaNo)

                        axios({
                                method: 'post',
                                url: '/api/UploadPo',
                                data: formData,
                                headers: headers
                            })
                            .then(res => {
                                // this.AfterUploadActions()
                                // alert('uploaded')
                                // $('.PoUpload').eq(i).val("")
                                this.overlay = true
                                this.AfterUploadActions()

                                
                            })
                            .catch(err => {
                                this.overlay = false
                            });
                        }
                })
        },
        PoFileInputTrigger(i){
            // console.log(i)
            $('.PoUpload').eq(i).click()
        },
        AfterUploadActions(){
            this.getApplications()
            this.AttachmentDialogData = {}
            this.AttachmentDialog = false
            this.overlay = false
            this.ForUploadInvoice = []
            this.ForUploadBl = []
            this.PoUploadDialog = false
            this.ForUploadPo = []
            this.InvoiceUploadDialog = false
            this.ForUploadInvoice = []
            this.BlUploadDialog = false
            this.ForUploadBl = []
            this.$swal.fire(
                'Success!',
                'Attachment Uploaded Successfully!',
                'success'
            )
        },
        deleteAttachment(val,type){
            this.$swal.fire({
                title: 'Do you want to Delete Attachment?',
                // showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Confirm`,
                // denyButtonText: `Don't save`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.post('/api/DeleteAttachment',{
                            type: type,
                            id: val.id
                        }).then(res=>{
                            // console.log(res.data)
                            this.getApplications()
                            this.AttachmentDialog= false
                            this.$swal.fire('Deleted!', '', 'info')
                            
                        })
                    }
                })
            
        },
        UploadInvoice(val) {

            this.$swal.fire({
                title: 'Do you want to Upload Attachment?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Confirm`,
                // denyButtonText: `Don't save`,
                }).then((result) => {
                if (result.isConfirmed) {
                    this.overlay = true
                    var headers = {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    var formData = new FormData 
                    for(var x= 0; x<val.length; x++){
                        formData.append('files[]',val[x])
                    }

                    formData.append('MpaNo', this.AttachmentDialogData.MpaNo)

                    axios({
                            method: 'post',
                            url: '/api/UploadInvoice',
                            data: formData,
                            headers: headers
                        })
                        .then(res => {
                            this.AfterUploadActions()
                            
                        })
                        .catch(err => {
                            this.overlay = false
                        });

                } 
            })
        },
        UploadBl(val) {
            this.overlay = true
            var headers = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            var formData = new FormData 
            for(var x= 0; x<val.length; x++){
                formData.append('files[]',val[x])
            }
            formData.append('MpaNo', this.AttachmentDialogData.MpaNo)

            axios({
                method: 'post',
                url: '/api/UploadBl',
                data: formData,
                headers: headers
            })
            .then(res => {
                this.AfterUploadActions()
                // this.$swal.fire(
                // 'Success!',
                // 'Application Successfully Registered!',
                // 'success'
                // )
            })
            .catch(err => {
                this.overlay = false
            });
        },
        blAttachment(rec) {
            this.AttachmentDialogData = rec
            this.AttachmentDialog = true
        },
        invoiceAttachment(rec) {
            this.AttachmentDialogData = rec
            this.AttachmentDialog = true
        },
        doneInspectionConfirmation(rec) {
            this.ConfirmDoneInspectionDialog = true
            this.doneInspectionMpaNo = rec.MpaNo
        },
        confirmDoneInspection() {
            this.overlay = true
            axios.post('/api/ConfirmDoneInspection', {
                MpaNo: this.doneInspectionMpaNo,
                EmployeeID: this.$store.state.user.EmployeeID
            }).then(res => {
                this.Notify(this.doneInspectionMpaNo, 'Done Inspection Confirmed!', 'success')
                this.AfterApprovalFunctions()

            }).catch(err => {
                this.overlay = false
            })

        },
        withRevision() {
            if (!!this.MpaDetails.general_informations.RevisedFieldItems) {
                if (this.MpaDetails.general_informations.RevisedFieldItems.includes('UnitPrice') || this.MpaDetails.general_informations.RevisedFieldItems.includes('Quantity')) {
                    return 6
                } else {
                    return 12
                }
            } else {
                return 12
            }
        },
        clear() {
            this.overlay = true
            this.search = {}
            this.getApplications()
        },
        SearchApplications() {
            this.overlay = true
            this.getApplications()
        },
        GenerateMpaSlip(MpaNo) {

            window.open(`${window.location.origin}/MpaSlip?q=${md5(MpaNo)}`)
        },
        confirmCancelApplication() {
            this.overlay = true
            axios.post('api/CancelApplication', {
                    MpaNo: this.MpaDetails.general_informations.MpaNo,
                    reason: this.cancelApplicationReason
                })
                .then(res => {
                    this.AfterApprovalFunctions()
                    this.Notify(this.MpaDetails.general_informations.MpaNo, this.$t('cancelled'), 'success')
                })
        },
        UpdateApplication() {
            this.overlay = true
            var MpaDetails = this.MpaDetails
            MpaDetails.Reason = this.ReasonForUpdate

            axios.post('api/UpdateApplication', MpaDetails)
                .then(res => {
                    this.Notify(this.MpaDetails.general_informations.MpaNo, this.$t('modified'), 'success')
                    this.AfterApprovalFunctions()
                })
        },

        AfterApprovalFunctions() {
            this.$EventBus.$emit('GET_NOTIFICATIONS')
            this.getApplications()
            this.ViewMpaDetailsDialog = false
            this.ReasonForDisapprovalDialog = false
            this.ReasonForMultipleDisapprovalDialog = false
            this.CancelApplicationDialog = false
            this.ConfirmUpdateDialog = false
            this.ReasonForDisapproval = ''
            this.cancelApplicationReason = ''
            this.overlay = false
            this.ConfirmDoneInspectionDialog = false
            this.doneInspectionMpaNo = ""
            this.MpaDetails = {
                general_informations: {},
                items: [],
                other_informations: {},
                payment_schedules: {}
            }
        },
        MultipleDisapproveApplication() {
            this.overlay = true

            axios.post('api/MultipleDisapproveApplication', {
                    MpaNos: this.SelectedApplications,
                    ReasonForDisapproval: this.ReasonForDisapproval
                })
                .then(res => {

                    var msg_text = "";
                    if (this.$store.state.language == 'english') {
                        if (this.SelectedApplications.length > 1) {
                            msg_text = 'were Successfully Disapproved!';
                        } else {
                            msg_text = 'was Successfully Disapproved!';
                        }
                    } else {
                        msg_text = "承認を拒否しました"
                    }
                    this.Notify(this.SelectedApplications.join(', '), msg_text, 'warning')
                    this.AfterApprovalFunctions()

                })

        },
        MultipleApproveApplication() {
            this.overlay = true

            axios.post('api/MultipleApproveApplication', {
                    MpaNos: this.SelectedApplications
                })
                .then(res => {
                    var msg_text = '';
                    if (this.$store.state.language == 'english') {
                        if (this.SelectedApplications.length > 1) {
                            msg_text = 'were Successfully Approved!';
                        } else {
                            msg_text = 'was Successfully Approved!';
                        }
                    } else {
                        msg_text = "申請完了"
                    }
                    this.Notify(this.SelectedApplications.join(', '), msg_text, 'success')
                    this.AfterApprovalFunctions()

                })
        },
        MultipleApproval(val) {
            if (val == 1) {
                this.MultipleApproveApplication()
            } else {
                this.MultipleDisapproveApplication()
            }

        },

        Notify(MpaNos, msg, type) {
            this.$swal.fire(
                MpaNos,
                msg,
                type
            )
        },

        DisapproveApplication() {
            this.overlay = true

            axios.post('api/DisapproveApplication', {
                    MpaNo: this.MpaDetails.general_informations.MpaNo,
                    ReasonForDisapproval: this.ReasonForDisapproval
                })
                .then(res => {
                    this.Notify(this.MpaDetails.general_informations.MpaNo, 'was Successfully Dispproved!', 'warning')
                    this.AfterApprovalFunctions()
                })
        },
        ApproveApplication() {
            this.overlay = true

            axios.post('api/ApproveApplication', {
                    MpaNo: this.MpaDetails.general_informations.MpaNo
                })
                .then(res => {
                    this.Notify(this.MpaDetails.general_informations.MpaNo, 'was Successfully Approved!', 'success')
                    this.AfterApprovalFunctions()
                })
        },
        Approval(val) {
            if (val == 1) {
                this.ApproveApplication()
            } else {
                this.DisapproveApplication()
            }
        },
        changePage() {
            this.tableOptions.skip = (this.tableOptions.currentPage - 1) * 15
            this.overlay = true
            this.getApplications()
        },
        paymentScheduleRowChecker(row, field) {
            return (!(this.MpaDetails.payment_schedules[row + 'ratio'] > 0) && !this.MpaDetails.general_informations.NihonSangyou && this.totalPercent <= 100 && !this.MpaDetails.payment_schedules[field])
        },
        checkDisabled(field) {
            return this.totalRatio <= 0 && this.MpaDetails.payment_schedules[field] <= 0
        },
        onlyNumber(evt) {
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                evt.preventDefault()
            }
        },
        checkRatio(i) {
            var fields = ['PoRatio', 'RecievingBlRatio', 'InspectionRatio', 'OthersRatio']
            if (this.totalRatio < 0) {
                this.MpaDetails.payment_schedules[fields[i - 1]] = 0
                this.MpaDetails.payment_schedules[fields[i - 1]] = this.totalRatio
            }
        },
        openPdf(file) {
            window.open(`/Attachment/${file.split('.')[0]}/${file}`)
        },
        numberWithComma(i, field1, field2) {
            if (field1 === undefined && field2 === undefined) {
                if (i.toString().includes('.')) {
                    var fields = i.toString().split('.')
                    if (this.MpaDetails[fields[1]][fields[2]] != "") {
                        this.MpaDetails[fields[1]][fields[2]] = parseInt(this.MpaDetails[fields[1]][fields[2]].split(',').join('')).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

                    } else {
                        this.MpaDetails[fields[1]][fields[2]] = 0
                    }
                } else {
                    return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }

            } else {

                this.MpaDetails[field1][i][field2] = this.MpaDetails[field1][i][field2].split(',').join('').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
        },
        computeTotalPerCurrency() {
            var totals = [0, 0, 0, 0, 0];
            this.MpaDetails.items.forEach(rec => {
                if (rec.UnitPrice != '' && rec.Quantity != '' && rec.Currency != '') {
                    var index = this.currencies.findIndex(res => {
                        return res.currency_code == rec.Currency
                    })

                    var UP = rec.UnitPrice.includes(',') ? parseFloat(rec.UnitPrice.split(',').join('')) : parseFloat(rec.UnitPrice)
                    var QTY = rec.Quantity.includes(',') ? parseFloat(rec.Quantity.split(',').join('')) : parseFloat(rec.Quantity)

                    totals[index] += UP * QTY
                }

            })

            for (var x = 0; x < totals.length; x++) {
                this.$set(this.currencies[x], 'Total', totals[x])
            }

        },
        getMasterLists() {
            axios.get('api/getMasterLists')
                .then(res => {
                    this.approvers = res.data.approvers
                    this.currencies = res.data.currencies
                    this.departments = res.data.departments
                    this.months = res.data.months
                    this.payers = res.data.payers
                    this.payment_dues = res.data.payment_dues
                    this.schedules = res.data.schedules
                    this.quotation_statuses = res.data.quotation_statuses
                    this.trade_terms = res.data.trade_terms,
                        this.status = res.data.status
                }).catch(err => {
                    console.log(err)
                })
        },
        dateSubstring(date) {
            return date === undefined ? null : date.substring(0, 10)
        },
        returValuesToOriginal() {

            this.MpaDetails.general_informations.NihonSangyou = this.MpaDetails.general_informations.NihonSangyou == 1 ? true : false

            this.MpaDetails.general_informations.TradeTermCode = parseInt(this.MpaDetails.general_informations.TradeTermCode)

            this.MpaDetails.items.forEach((rec, i) => {
                rec.DepartmentCode = parseInt(rec.DepartmentCode)
                rec.UnitPrice = rec.UnitPrice.toString().includes(',') ? parseInt(rec.UnitPrice) : this.numberWithComma(rec.UnitPrice)
                rec.Quantity = rec.Quantity.toString().includes(',') ? parseInt(rec.Quantity) : this.numberWithComma(rec.Quantity)
            })

            this.MpaDetails.other_informations.PackingExpenseStatus = this.MpaDetails.other_informations.PackingExpenseStatus.toString()
            this.MpaDetails.other_informations.PackingExpenseAmount = this.numberWithComma(this.MpaDetails.other_informations.PackingExpenseAmount)

            this.MpaDetails.other_informations.DistributionExpenseStatus = this.MpaDetails.other_informations.DistributionExpenseStatus.toString()
            this.MpaDetails.other_informations.DistributionExpenseAmount = this.numberWithComma(this.MpaDetails.other_informations.DistributionExpenseAmount)

            this.MpaDetails.other_informations.InstallationExpenseStatus = this.MpaDetails.other_informations.InstallationExpenseStatus.toString()
            this.MpaDetails.other_informations.InstallationExpenseAmount = this.numberWithComma(this.MpaDetails.other_informations.InstallationExpenseAmount)

            this.MpaDetails.other_informations.OtherExpenseStatus = this.MpaDetails.other_informations.OtherExpenseStatus.toString()
            this.MpaDetails.other_informations.OtherExpenseAmount = this.numberWithComma(this.MpaDetails.other_informations.OtherExpenseAmount)

            if (this.MpaDetails.payment_schedules == null) {
                this.MpaDetails.payment_schedules = {}
                this.$set(this.MpaDetails.payment_schedules, 'PoRatio', 0)
                this.$set(this.MpaDetails.payment_schedules, 'RecievingBlRatio', 0)
                this.$set(this.MpaDetails.payment_schedules, 'InspectionRatio', 0)
                this.$set(this.MpaDetails.payment_schedules, 'OthersRatio', 0)
            }

            if (this.MpaDetails.history != null) {
                this.MpaDetails.history.GeneralInformations = JSON.parse(this.MpaDetails.history.GeneralInformations)
                this.MpaDetails.history.Items = JSON.parse(this.MpaDetails.history.Items)
                this.MpaDetails.history.OtherInformations = JSON.parse(this.MpaDetails.history.OtherInformations)
                this.MpaDetails.history.PaymentSchedules = JSON.parse(this.MpaDetails.history.PaymentSchedules)
                this.MpaDetails.history.Items.forEach(rec => {
                    rec.UnitPrice = rec.UnitPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                })
            }

        },
        getMpaDetails(MpaNo) {
            axios.post('api/getMpaDetails', {
                    MpaNo: MpaNo
                })
                .then(res => {
                    this.MpaDetails = res.data
                    this.returValuesToOriginal()
                    this.computeTotalPerCurrency()
                }).catch(err => {
                    console.log(err)
                })
        },
        getApplications() {
            var values = {
                skip: this.tableOptions.skip,
                user: this.$store.state.user.EmployeeID,
                search: this.search
            };
            console.log(!!this.search.MpaNo)
            if (this.$store.state.user.AccessLevel == 1) {
                this.$set(values, 'approver', this.$store.state.user.EmployeeID)
            }

            axios.post('api/GetApplications', values)
                .then(res => {
                    this.ApplicationList = res.data.ApplicationList
                    this.tableOptions.count = res.data.ApplicationCount
                    var pagerCount = res.data.ApplicationCount / 15
                    this.tableOptions.length = pagerCount.toString().includes('.') ? (parseInt(pagerCount.toString().split('.')[0]) + 1) : pagerCount
                    this.overlay = false
                }).catch(err => {
                    console.log(err)
                })
        },
        onlyNumber(evt) {
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                evt.preventDefault()
            }
        },
        checkAll() {
            return false
        }
    },
};
</script>

<style>
.table--custom th {
    background-color: #004D40 !important;
    color: white !important;
    font-size: 18px !important;
    font-weight: normal !important;
}
</style>

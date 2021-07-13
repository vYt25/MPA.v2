<template>
<div>
    <v-btn  dark fixed bottom right :loading="loading" small color="green" :readonly="true" @click="checkRequiredFields()" style="bottom: 16px;">
        {{$t('apply')}}
    </v-btn>
    <v-btn  dark fixed bottom right small color="indigo" @click="saveDraftDialog=true" style="bottom: 60px; z-index:999;">
        {{$t('saveAsDraft')}}
    </v-btn>
    <v-btn dark fixed bottom right @click="DraftListDialog = true,getDrafts()" small color="red" style="bottom: 104px; z-index:999;">
        {{$t('drafts')}}
    </v-btn>
    <v-btn dark fixed bottom right @click="dialogRecall = true" small color="grey" style="bottom: 148px; z-index:999;">
        {{$t('recall')}}
    </v-btn>
    <!-- {{general}}{{general.QuotedPrice === undefined}} -->
    <v-dialog v-model="dialogRecall" width="1100px" scrollable persistent>
        <v-card>
            <v-toolbar flat dark color="teal darken-4" dense>
                <v-toolbar-title>{{$t('recall')}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark  @click="dialogRecall = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <br>
                <v-row>
                    <v-col cols="12" md="5">
                        <v-text-field class="mt-n4" v-model="search.ItemName" :label="$t('itemName')" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="12" md="5">
                        <v-text-field class="mt-n4" v-model="search.VendorName" :label="$t('vendorName')" outlined dense></v-text-field>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-btn @click="SearchApplicationItems()" width="100%" class="mt-n4">
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-simple-table fixed-header style="border:1px solid black" height="30vh" dense>
                    <thead>
                        <tr style="height:30px">
                            <th class="text-center" style="border:1px solid black;min-width:100px;background-color:#004D40;color:white">{{$t('itemId')}}</th>
                            <th class="text-center" style="border:1px solid black;min-width:200px;background-color:#004D40;color:white">{{$t('itemNameEn')}}</th>
                            <th class="text-center" style="border:1px solid black;min-width:200px;background-color:#004D40;color:white">{{$t('itemNameJp')}}</th>
                            <th class="text-center" style="border:1px solid black;min-width:200px;background-color:#004D40;color:white">{{$t('vendorNameEn')}}</th>
                            <th class="text-center" style="border:1px solid black;min-width:200px;background-color:#004D40;color:white">{{$t('vendorNameJp')}}</th>
                            <th class="text-center" style="border:1px solid black;min-width:50px;background-color:#004D40;color:white">{{$t('action')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(rec,index) in ApplicationList" :key="index">
                            <td style="border:1px solid black" class="text-center">{{rec.MpaNo}}</td>
                            <td style="border:1px solid black" class="text-center">{{rec.ItemNameEng}}</td>
                            <td style="border:1px solid black" class="text-center">{{rec.ItemNameJap}}</td>
                            <td style="border:1px solid black" class="text-center">{{rec.VendorNameEng}}</td>
                            <td style="border:1px solid black" class="text-center">{{rec.VendorNameJap}}</td>
                            <td style="border:1px solid black" class="text-center">
                                <v-btn @click="UseRecall(rec.MpaNo),dialogRecall = false" fab dark color="teal" icon small>
                                    <v-icon small>mdi-pencil</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card-text>
            <v-divider></v-divider>
        </v-card>
    </v-dialog>
    <v-row class="justify-center">
        <v-col cols="12" md="10" sm="12">
            <v-simple-table class="blackFont" style="border:1px solid gray;" dense>
                <thead>
                    <tr>
                        <th style="border:1px solid gray;min-width:120px" class="text-center">{{$t('applicant')}}</th>
                        <th style="border:1px solid gray">
                            <v-text-field :value="applicantName" style="font-size:15px;min-width:170px" class="mt-2 mb-n4" outlined dense readonly></v-text-field>
                        </th>
                        <th style="border:1px solid gray;min-width:80px" class="text-center">{{$t('date')}}</th>
                        <th style="border:1px solid gray">
                            <v-text-field v-model="general.Date" style="font-size:15px;min-width:170px" class="mt-2 mb-n4" outlined dense readonly></v-text-field>
                        </th>
                    </tr>
                    <tr>
                        <th rowspan="3" style="border:1px solid gray;font-size:15px" class="text-nowrap">
                            {{$t('vendorName')}}
                            <br/>
                            {{$t('viaNihonSangyou')}}?
                            <v-checkbox dense hide-details :label="$t('yes')" v-model="general.NihonSangyou" @click="isChekedNihonSangyou(general.NihonSangyou)"></v-checkbox>
                            <br/>
                            
                            <template v-if="general.NihonSangyou" >
                                    {{$t('quotedPrice')}}<br/>
                                    <v-radio-group v-model="general.QuotedPrice">
                                        <v-radio
                                            dense
                                            :label="$t('nihonSangyou')"
                                            color="teal"
                                            value="nihonsangyou"
                                        ></v-radio>
                                        <v-radio
                                            dense
                                            :label="$t('maker')"
                                            color="teal"
                                            value="maker"
                                        ></v-radio>
                                    </v-radio-group>
                            </template>
                        </th>
                        <th colspan="3" style="border:1px solid gray">
                            <v-text-field :error="!general.VendorNameJap" v-model="general.VendorNameJap"  style="font-size:15px;" class="mt-2 mb-n4" :placeholder="$t('japanese')" outlined dense></v-text-field>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3" style="border:1px solid gray">
                            <v-text-field :error="!general.VendorNameEng" v-model="general.VendorNameEng" style="font-size:15px" class="mt-2 mb-n4" :placeholder="$t('english')" outlined dense></v-text-field>
                        </th>
                    </tr>
                    <tr style="background-color:#fce492">
                        <th colspan="3">
                            <br />
                            <ul>
                                <li>{{$t('notes[0]')}}</li>
                                <li>{{$t('notes[1]')}}</li>
                                <!-- <li>{{$t('notes[17]')}}</li> -->

                            </ul>
                        </th>
                    </tr>
                    <tr>
                        <th rowspan="2" style="border:1px solid gray;font-size:14px" >
                            {{$t('payerCompanyName')}}<br/>
                            {{$t('hrdSingapore')}}
                            <v-checkbox dense hide-details :label="$t('yes')" v-model="general.HrdSingapore"></v-checkbox>

                        </th>
                        <th colspan="3" style="border:1px solid gray">
                            <v-select v-if="(payers.length > 0)" :error="!general.PayerCompanyCode" style="font-size:15px" class="mt-2 mb-n4" v-model="general.PayerCompanyCode" :items="payers" item-text="payer_name" item-value="payer_code" :readonly="general.nihonSangyou ? true: false" outlined dense></v-select>
                            <v-progress-linear v-else indeterminate color="teal"></v-progress-linear>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3" style="background-color:#fce492">
                            <br />
                            <ul>
                                <li>{{$t('notes[4]')}}</li>
                            </ul>
                        </th>
                    </tr>
                    <tr>
                        <th style="border:1px solid gray;font-size:15px" class="text-center">{{$t('dept')}}</th>
                        <th colspan="3" style="border:1px solid gray">
                            <v-autocomplete :error="!general.DepartmentCode" style="font-size:15px" v-model="general.DepartmentCode"  @change="setItemDepartments()" :items="departmentFilter" :item-text="$store.state.language == 'english' ? 'DepartmentNameEng' : 'DepartmentNameJap'" item-value="id" class="mt-2 mb-n4" outlined dense></v-autocomplete>
                        </th>
                    </tr>
                    <tr>
                        <th style="border:1px solid gray;font-size:15px" class="text-center">{{$t('purpose')}} </th>
                        <th style="border:1px solid gray" colspan="3">
                            <v-textarea style="font-size:15px" v-model="general.Purpose" :error="!general.Purpose" outlined rows="1" auto-grow class="mt-2 mb-n4" name="input-7-4"></v-textarea>
                        </th>
                    </tr>
                    <tr>
                        <th rowspan="3" style="border:1px solid gray;font-size:15px;height:180px" class="text-center">{{$t('attachment')}}</th>
                        <th style="border:1px solid gray" colspan="3">
                            <form action="" enctype="multipart/form-data" ref="attachmentForm">
                            <v-file-input multiple  ref="attachment" id="AttachmentFiles" name="AttachmentFiles[]" enctype="multipart/form-data" :rules="rules" accept="application/pdf" chips show-size prepend-icon="mdi-file-pdf" label="Attachment(PDF)"></v-file-input>
                            </form>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3" style="background-color:#fce492">
                            <br />
                            <ul>
                                <li>{{$t('notes[5]')}}</li>
                                <li>{{$t('notes[6]')}}</li>
                            </ul>
                        </th>
                    </tr>
                </thead>
            </v-simple-table>
        </v-col>
    </v-row>

    <v-row class="justify-center">

        <v-col cols="12" md="10" sm="12">
            <br />
            <h5>{{$t('item')}}</h5>
            <v-btn @click="addItem()" block style="background-color:teal;color:white">
                <strong>{{$t('addItem')}}</strong>
            </v-btn>
            <v-simple-table v-for="(item,i) in items" :key="i" style="border:1px solid black; color:black !important" class="blackFont" dense>
                <thead>
                    <tr>
                        <th style="border:1px solid black" rowspan="5">{{i + 1}}</th>
                        <th style="border:1px solid black" class="text-center" rowspan="2" colspan="2">{{$t('itemName')}}</th>
                        <th colspan="9">
                            <v-text-field :error="!item.ItemNameJap" style="font-size:15px; width: 100%" v-model="item.ItemNameJap" :placeholder="$t('japanese')" class="thead mt-2 mb-n4" outlined dense></v-text-field>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="9" style="border-bottom:1px solid black">
                            <v-text-field :error="!item.ItemNameEng" style="font-size:15px; width: 100%" v-model="item.ItemNameEng" :placeholder="$t('english')" class="thead mt-n3 mb-n3" outlined dense></v-text-field>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="2" class="text-center" style="border:1px solid black">{{$t('dept')}}</th>
                        <th colspan="9">
                            <v-select :error="!item.DepartmentCode" style="font-size:15px; width: 100%" :items="departmentFilter" :item-text="$store.state.language == 'english' ? 'DepartmentNameEng' : 'DepartmentNameJap' " item-value="id" v-model="item.DepartmentCode" class="thead mt-3 mb-n3" outlined dense></v-select>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="2" style="border:1px solid black;min-width:150px" class="text-center">{{$t('itemId')}}</th>
                        <th colspan="2" style="border:1px solid black" class="text-center">{{$t('unitPrice')}}</th>
                        <th colspan="2" style="border:1px solid black;" class="text-center text-nowrap">{{$t('nihonSangyouUnitPrice')}}</th>
                        <th colspan="2" style="border:1px solid black; width:50px " class="text-center">{{$t('qty')}}</th>
                        <th colspan="2" style="border:1px solid black; width:100px" class="text-center">{{$t('currency')}}</th>
                        <th colspan="1" style="border:1px solid black;width:50px" class="text-center"></th>
                    </tr>
                    <tr>
                        <th colspan="2" style="border:1px solid black">
                            <v-text-field style="width:130:font-size:15px" v-model="item.ItemID" class="mt-2 mb-n4" outlined dense></v-text-field>
                        </th>
                        <th colspan="2" class="twidth1" style="border:1px solid black">
                            <v-text-field :error="!item.UnitPrice" v-model="item.UnitPrice" @keypress="onlyNumber($event)" @keyup="numberWithComma(i,'UnitPrice'),computeTotalPerCurrency()" style="width:130px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-text-field>
                        </th>
                        <th colspan="2" class="twidth1" style="border:1px solid black">
                            <template v-if="general.QuotedPrice === 'maker' && general.QuotedPrice !== undefined">
                                {{parseFloat(item.UnitPrice.toString().split(',').join('')*1.02,2).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}
                            </template>
                            <template v-else>
                                N/A
                            </template>

                            <!-- {{(general.QuotedPrice !== undefined && general.QuotedPrice === 'maker')  ? 'N/A' : (item.UnitPrice.toString().split(',').join('')*1.02).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} -->
                        </th>
                        <th colspan="2" style="border:1px solid black">
                            <v-text-field :error="!item.Quantity" v-model="item.Quantity" @keypress="onlyNumber($event)" @keyup="numberWithComma(i,'Quantity'),computeTotalPerCurrency()" style="width:60px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-text-field>
                        </th>
                        <th colspan="2" style="border:1px solid black">
                            <v-select :error="!item.Currency" v-model="item.Currency" style="font-size:15px" @change="computeTotalPerCurrency()" :items="currencies" item-text="currency_code" item-value="currency_code" class="mt-2 mb-n4" outlined dense></v-select>
                        </th>
                        <th colspan="1" style="border:1px solid black">
                            <v-btn @click="deleteItem(i)" class="mx-2" fab color="red" small dark>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </th>
                    </tr>
                </thead>
            </v-simple-table>
            <br />
            <br />
            <h5>{{$t('purchasePrice')}}</h5>

            <v-simple-table style="border:1px solid black" dense>
                <thead>
                    <tr>
                        <th style="border:1px solid black;width:180px;;background-color:#3b4863;color:white" class="text-center">{{$t('terms')}}</th>
                        <th style="border:1px solid black;;background-color:#3b4863;color:white" class="text-center">{{$t('currency')}}</th>
                        <th style="border:1px solid black;;background-color:#3b4863;color:white" class="text-center">{{$t('totalPrice')}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(val,i) in TotalPerCurrency" :key="i">
                        <td v-if="i == 0" :rowspan="TotalPerCurrency.length" style="border:1px solid black" class="text-center">
                            <v-select class="mt-2" v-model="general.TradeTermCode" :error="!general.TradeTermCode" style="width:180px;font-size:15px" outlined dense :items="trade_terms"  item-value="id" item-text="trade_code"></v-select>
                        </td>
                        <td style="border:1px solid black;font-size:15px" class="text-center" dense>{{val.currency_code}}</td>
                        <td style="border:1px solid black;font-size:15px" class="text-center" dense>{{numberWithComma(general.QuotedPrice == 'maker' ? (val.Total*1.02).toFixed(2) : val.Total,'')}}</td>
                    </tr>
                </tbody>
            </v-simple-table>
            <br />
            <ul style="background-color:#fce492">
                <br />
                <!-- <li>{{$t('notes[7]')}}</li> -->
                <li>{{$t('notes[3]')}}</li>
                <li>{{$t('notes[8]')}}</li>
                <li>{{$t('notes[9]')}}</li>
                <li>{{$t('notes[18]')}}</li>
                <br />
            </ul>
            <br />
            <h5>{{$t('others')}}</h5>
            <v-simple-table style="border:1px solid black" dense>
                <thead>
                    <tr>
                        <th style="background-color:#3b4863;color:white;border:1px solid black;min-width:120px"></th>
                        <th style="background-color:#3b4863;color:white;border:1px solid black" class="text-center">{{$t('status')}}</th>
                        <th style="background-color:#3b4863;color:white;border:1px solid black" class="text-center">{{$t('currency')}}</th>
                        <th style="background-color:#3b4863;color:white;border:1px solid black" class="text-center">{{$t('amount')}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{$t('packingExpense')}}</td>
                        <td>
                            <v-select style="font-size:15px" v-model="otherCost.PackingExpenseStatus" :items="quotation_statuses" :item-text="$store.state.language == 'english' ? 'status_en': 'status_jp'" item-value="status_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                        </td>
                        <td>
                            <v-select style="font-size:15px" v-model="otherCost.PackingExpenseCurrency" :items="currencies" item-text="currency_code" item-value="currency_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                        </td>
                        <td>
                            <v-text-field style="font-size:15px" v-model="otherCost.PackingExpenseAmount" @keypress="onlyNumber($event)" @keyup="numberWithComma('otherCost.PackingExpenseAmount','')" class="tbody mt-2 mb-n4" outlined dense></v-text-field>
                        </td>
                    </tr>
                    <tr>
                        <td>{{$t('distributionExpense')}}</td>
                        <td>
                            <v-select style="font-size:15px" v-model="otherCost.DistributionExpenseStatus" :items="quotation_statuses" :item-text="$store.state.language == 'english' ? 'status_en': 'status_jp'" item-value="status_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                        </td>
                        <td>
                            <v-select style="font-size:15px" v-model="otherCost.DistributionExpenseCurrency" :items="currencies" item-text="currency_code" item-value="currency_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                        </td>
                        <td>
                            <v-text-field style="font-size:15px" v-model="otherCost.DistributionExpenseAmount" @keypress="onlyNumber($event)" @keyup="numberWithComma('otherCost.DistributionExpenseAmount','')" class="tbody mt-2 mb-n4" outlined dense></v-text-field>
                        </td>
                    </tr>
                    <tr>
                        <td>{{$t('installationExpense')}}</td>
                        <td>
                            <v-select style="font-size:15px" v-model="otherCost.InstallationExpenseStatus" :items="quotation_statuses" :item-text="$store.state.language == 'english' ? 'status_en': 'status_jp'" item-value="status_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                        </td>
                        <td>
                            <v-select style="font-size:15px" v-model="otherCost.InstallationExpenseCurrency" :items="currencies" item-text="currency_code" item-value="currency_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                        </td>
                        <td>
                            <v-text-field style="font-size:15px" v-model="otherCost.InstallationExpenseAmount" @keypress="onlyNumber($event)" @keyup="numberWithComma('otherCost.InstallationExpenseAmount','')" class="tbody mt-2 mb-n4" outlined dense></v-text-field>
                        </td>
                    </tr>
                    <tr>
                        <td>{{$t('otherExpense')}}</td>
                        <td>
                            <v-select style="font-size:15px" v-model="otherCost.OtherExpenseStatus" :items="quotation_statuses" :item-text="$store.state.language == 'english' ? 'status_en': 'status_jp'" item-value="status_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                        </td>
                        <td>
                            <v-select style="font-size:15px" v-model="otherCost.OtherExpenseCurrency" :items="currencies" item-text="currency_code" item-value="currency_code" class="tbody mt-2 mb-n4" dense outlined></v-select>
                        </td>
                        <td>
                            <v-text-field style="font-size:15px" v-model="otherCost.OtherExpenseAmount" @keypress="onlyNumber($event)" @keyup="numberWithComma('otherCost.OtherExpenseAmount','')" class="tbody mt-2 mb-n4" outlined dense></v-text-field>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
            <br />
            <ul style="background-color:#fce492">
                <br />
                <li>{{$t('notes[10]')}}</li>
                <li>{{$t('notes[11]')}}</li>
                <li>{{$t('notes[12]')}}</li>
                <br />
            </ul>
            <br />
            <h5>{{$t('submissionMatters')}}</h5>
            <v-textarea style="font-size:15px" v-model="general.SubmissionMatters" outlined dense rows="2" auto-grow class="mt-2 mb-n4" name="input-7-4"></v-textarea>
            <br />
            <ul style="background-color:#fce492">
                <br />
                <li>{{$t('fillPRS')}}</li>
                <br />
            </ul>
            <h5>{{$t('paymentSchedule')}}</h5>

            <v-simple-table style="border:1px solid black" dense class="blackFont">
                <thead>
                    <tr>
                        <th style="width:150px;border:1px solid black;background-color:#3b4863;color:white"></th>
                        <th style="width:115px;border-top:1px solid black;border-bottom:1px solid black;background-color:#3b4863;color:white">{{$t('scheduleDate')}}</th>
                        <th style="width:115px;border-top:1px solid black;border-bottom:1px solid black;background-color:#3b4863;color:white"></th>
                        <th style="width:80px;border:1px solid black;background-color:#3b4863;color:white">{{$t('ratio')}}</th>
                        <th style="width:250px;border:1px solid black;background-color:#3b4863;color:white">{{$t('paymentDueDate')}}</th>
                    </tr>
                </thead>
                <tbody v-if="(!general.NihonSangyou)">
                    <tr>
                        <td style="width:120px;border:1px solid black">{{$t('uponIssuingPo')}}</td>
                        <td style="border-bottom:1px solid black">
                            <v-select v-model="paymentSchedule.PoMonth" :error="paymentScheduleRowChecker('Po','PoMonth')"  :disabled="checkDisabled('PoRatio')" :items="months" :item-text="$store.state.language == 'english' ? 'month_name_en' : 'month_name_jp'" item-value="id" style="width:115px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-select>
                        </td>
                        <td style="border-bottom:1px solid black">
                            <v-select v-model="paymentSchedule.PoSchedule" :error="paymentScheduleRowChecker('Po','PoSchedule')" :disabled="checkDisabled('PoRatio')" :items="schedules" :item-text="$store.state.language == 'english' ? 'payment_schedule_name_en': 'payment_schedule_name_jp'" item-value="id" style="width:115px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-select>
                        </td>
                        <td style="width:120px;border:1px solid black">
                            <v-text-field v-model="paymentSchedule.PoRatio" :error="paymentScheduleRowChecker('Po','PoRatio')" :disabled="checkDisabled('PoRatio')" @keypress="onlyNumber($event)" @keyup="checkRatio(1)" style="width:80px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-text-field>
                        </td>
                        <td style="width:160px;border:1px solid black">
                            <v-select v-model="paymentSchedule.PoDue" :error="paymentScheduleRowChecker('Po','PoDue')" :disabled="checkDisabled('PoRatio')" :items="payment_dues" :item-text="$store.state.language == 'english' ? 'due_name_en' : 'due_name_jp'" item-value="id" style="font-size:12px" class="mt-2 mb-n4" outlined dense></v-select>
                        </td>
                    </tr>
                    <tr>
                        <td style="width:120px;border:1px solid black">{{$t('uponRecievingBl')}}</td>
                        <td style="border-bottom:1px solid black">
                            <v-select v-model="paymentSchedule.RecievingBlMonth" :error="paymentScheduleRowChecker('RecievingBl','RecievingBlMonth')" :disabled="checkDisabled('RecievingBlRatio')" :items="months" :item-text="$store.state.language == 'english' ? 'month_name_en' : 'month_name_jp'" item-value="id" style="width:115px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-select>
                        </td>
                        <td style="border-bottom:1px solid black">
                            <v-select v-model="paymentSchedule.RecievingBlSchedule" :error="paymentScheduleRowChecker('RecievingBl','RecievingBlSchedule')" :disabled="checkDisabled('RecievingBlRatio')" :items="schedules" :item-text="$store.state.language == 'english' ? 'payment_schedule_name_en': 'payment_schedule_name_jp'" item-value="id" style="width:115px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-select>
                        </td>
                        <td style="width:120px;border:1px solid black">
                            <v-text-field v-model="paymentSchedule.RecievingBlRatio" :error="paymentScheduleRowChecker('RecievingBl','RecievingBlRatio')" :disabled="checkDisabled('RecievingBlRatio')" @keypress="onlyNumber($event)" @keyup="checkRatio(2)" style="width:80px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-text-field>
                        </td>
                        <td style="width:160px;border:1px solid black">
                            <v-select v-model="paymentSchedule.RecievingBlDue" :error="paymentScheduleRowChecker('RecievingBl','RecievingBlDue')" :disabled="checkDisabled('RecievingBlRatio')" :items="payment_dues" :item-text="$store.state.language == 'english' ? 'due_name_en' : 'due_name_jp'" item-value="id" style="font-size:12px" class="mt-2 mb-n4" outlined dense></v-select>
                        </td>
                    </tr>
                    <tr>
                        <td style="width:120px;border:1px solid black">{{$t('uponInspection')}}</td>
                        <td style="border-bottom:1px solid black">
                            <v-select v-model="paymentSchedule.InspectionMonth" :error="paymentScheduleRowChecker('Inspection','InspectionMonth')" :disabled="checkDisabled('InspectionRatio')" :items="months" :item-text="$store.state.language == 'english' ? 'month_name_en' : 'month_name_jp'" item-value="id" style="width:115px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-select>
                        </td>
                        <td style="border-bottom:1px solid black">
                            <v-select v-model="paymentSchedule.InspectionSchedule" :error="paymentScheduleRowChecker('Inspection','InspectionSchedule')" :disabled="checkDisabled('InspectionRatio')" :items="schedules" :item-text="$store.state.language == 'english' ? 'payment_schedule_name_en': 'payment_schedule_name_jp'" item-value="id" style="width:115px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-select>
                        </td>
                        <td style="width:120px;border:1px solid black">
                            <v-text-field v-model="paymentSchedule.InspectionRatio" :error="paymentScheduleRowChecker('Inspection','InspectionRatio')" :disabled="checkDisabled('InspectionRatio')" @keypress="onlyNumber($event)" @keyup="checkRatio(3)" style="width:80px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-text-field>
                        </td>
                        <td style="width:160px;border:1px solid black">
                            <v-select v-model="paymentSchedule.InspectionDue" :error="paymentScheduleRowChecker('Inspection','InspectionDue')" :disabled="checkDisabled('InspectionRatio')" :items="payment_dues" :item-text="$store.state.language == 'english' ? 'due_name_en' : 'due_name_jp'" item-value="id" style="font-size:12px" class="mt-2 mb-n4" outlined dense></v-select>
                        </td>
                    </tr>
                    <tr>
                        <td style="width:105px;border:1px solid black">
                            {{$t('others')}}
                            <br />
                            <v-text-field v-model="paymentSchedule.OthersTitle" :error="paymentScheduleRowChecker('Others','OthersTitle')" :disabled="checkDisabled('OthersRatio')" style="width:105px;font-size:15px" class="mt-2 mb-n4" outlined dense></v-text-field>
                        </td>
                        <td style="border-bottom:1px solid black">
                            <v-select v-model="paymentSchedule.OthersMonth" :error="paymentScheduleRowChecker('Others','OthersMonth')" :disabled="checkDisabled('OthersRatio')" :items="months" :item-text="$store.state.language == 'english' ? 'month_name_en' : 'month_name_jp'" item-value="id" style="width:115px;font-size:15px" class="mt-7 mb-n4" outlined dense></v-select>
                        </td>
                        <td style="border-bottom:1px solid black">
                            <v-select v-model="paymentSchedule.OthersSchedule" :error="paymentScheduleRowChecker('Others','OthersSchedule')" :disabled="checkDisabled('OthersRatio')" :items="schedules" :item-text="$store.state.language == 'english' ? 'payment_schedule_name_en': 'payment_schedule_name_jp'" item-value="id" style="width:115px;font-size:15px" class="mt-7 mb-n4" outlined dense></v-select>
                        </td>
                        <td style="width:120px;border:1px solid black">
                            <v-text-field v-model="paymentSchedule.OthersRatio" :error="paymentScheduleRowChecker('Others','OthersRatio')" :disabled="checkDisabled('OthersRatio')" @keypress="onlyNumber($event)" @keyup="checkRatio(4)" style="width:80px;font-size:15px" class="mt-7 mb-n4" outlined dense></v-text-field>
                        </td>
                        <td style="width:160px;border:1px solid black">
                            <v-select v-model="paymentSchedule.OthersDue" :error="paymentScheduleRowChecker('Others','OthersDue')" :disabled="checkDisabled('OthersRatio')" :items="payment_dues" :item-text="$store.state.language == 'english' ? 'due_name_en' : 'due_name_jp'" item-value="id" style="font-size:12px" class="mt-7 mb-n4" outlined dense></v-select>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td style="width:150px;border:1px solid black">
                            <strong>{{$t('viaNihonSangyou')}}</strong>
                        </td>
                        <td style="border-bottom:1px solid black;width:115px;">
                            <strong>N/A</strong>
                        </td>
                        <td style="border-bottom:1px solid black;width:115px"></td>
                        <td style="width:80px;border:1px solid black">
                            <strong>100</strong>
                        </td>
                        <td class="text-center" style="border:1px solid black;width:250px">
                            <strong>N/A</strong>
                        </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th style="border:1px solid black"></th>
                        <th style="border-bottom:1px solid black;border-top:1px solid black"></th>
                        <th class="text-right" style="border-bottom:1px solid black;border-top:1px solid black;font-size:20px">{{$t('total')}}</th>
                        <th style="border:1px solid black;font-size:20px" :class="(!general.NihonSangyou && totalPercent != 100) ? 'error--text' : ''">{{general.NihonSangyou ? 100 : totalPercent}}%</th>
                        <th style="border:1px solid black"></th>
                    </tr>
                </thead>
            </v-simple-table>
        </v-col>
    </v-row>

    <v-row class="justify-center">
        <v-col cols="12" md="10" sm="12">
            <v-card flat>
                <v-card-actions>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <v-dialog v-model="saveDraftDialog" width="500" persistent>
        <v-card>
            <v-toolbar flat dark dense color="teal darken-4" >
                <v-toolbar-title>{{$t('saveAsDraft')}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark  @click="saveDraftDialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <v-card-text style="height:45px">
                <v-text-field v-model="draftName" :placeholder="$t('saveAsDraft')" class="mt-5" outlined dense></v-text-field>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions style="height:50px">
                <v-spacer></v-spacer>
                <v-btn  class="mb-4" width="80px" @click="SaveDraft()">
                    {{$t('save')}}
                </v-btn>
                <!-- <v-btn color="primary" @click="saveDraftDialog = false;draftName = null" class="mb-4" width="80px">
                    <strong>{{$t('cancel')}}</strong>
                </v-btn> -->

            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="draftsDialog" width="800px" persistent>
        <v-card>
            <v-card-title style="background-color:teal;color:white" class="headline" primary-title>
                <strong>{{$t('drafts')}}</strong>
            </v-card-title>
            

            <v-card-text>
                <v-simple-table class="mt-4" fixed-header style="border:1px solid black" height="370" dense>
                    <thead>
                        <tr>
                            <th style="border:1px solid black;background-color:#3b4863;color:white" class="text-center">{{$t('nameOfDraft')}}</th>
                            <th style="border:1px solid black;background-color:#3b4863;color:white" class="text-center">{{$t('selectRecord')}}</th>
                            <th style="border:1px solid black;background-color:#3b4863;color:white" class="text-center">{{$t('delete')}}</th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr v-for="(draft,i) in drafts" :key="i">
                            <td style="border:1px solid black;width:780">{{drafts.draft_name}}</td>
                            <td style="border:1px solid black;width:10px">
                                <v-btn @click="useDraft()" class="mx-2 mt-2 mb-2" fab color="blue" x-small dark>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </td>
                            <td style="border:1px solid black;width:10px">
                                <v-btn @click="deleteDraftConfirm = true" class="mx-2 mt-2 mb-2" fab color="red" x-small dark>
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card-text>
            <v-divider class="mt-n1"></v-divider>

            <!-- <v-card-actions style="height:50px">
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="draftsDialog = false" class="mb-4" width="80px">
                    <strong>{{$t('cancel')}}</strong>
                </v-btn>
            </v-card-actions> -->
        </v-card>
    </v-dialog>
    <!-- DIALOG MESSAGE -->
    <v-dialog v-model="deleteDraftConfirm" width="300" persistent>
        <v-card>
            <v-card-title class="headline" style="background-color:teal;color:white" primary-title>
                <strong>{{$t('confirmation')}}</strong>
            </v-card-title>

            <v-card-text style="height:45px">
                <h5 class="mt-2 mb-2 text-center"><strong>{{$t('confirmationForDelete')}}</strong></h5>
            </v-card-text>
            <v-btn @click="deleteDraft()" tile width="50%" color="primary" class="mt-4">
                <strong>{{$t('yes')}}</strong>
            </v-btn>
            <v-btn @click="deleteDraftConfirm = false" tile width="50%" color="teal" style="color:white" class="mt-4 ml-n1">
                <strong>{{$t('no')}}</strong>
            </v-btn>
        </v-card>
    </v-dialog>
    <v-dialog
      v-model="DraftListDialog"
      scrollable
      max-width="700px"
    >
      <v-card>
        <v-toolbar flat dark color="teal darken-4" dense>
            <v-toolbar-title>{{$t('drafts')}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark  @click="DraftListDialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card-text style="height: 400px;">
            <v-simple-table fixed-header dense class="mt-3">
                <template v-slot:default>
                <thead >
                    <tr>
                        <th class="text-left" style="width: 70%; background-color:#004D40; color: white;">Title</th>
                        <th class="text-left" style="width: 20%; background-color:#004D40; color: white;">Date Created</th>
                        <th class="text-left" style="width: 10%; background-color:#004D40; color: white;">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="(draft,ind) in drafts"
                    :key="ind"
                    
                    >
                    <td>{{ draft.Title }}</td>
                    <td>{{ draft.created_at.split('T')[0]}}</td>
                    <td>
                        <v-row>
                            <v-btn icon color="green" small @click="UseDraft(draft)">
                                <v-icon small>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon color="red" small @click="DeleteDraft(draft)">
                                <v-icon small>mdi-delete</v-icon>
                            </v-btn>
                        </v-row>
                    </td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-card-text>
        <!-- <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="DraftListDialog = false"
            >
                Close
            </v-btn>
          
        </v-card-actions> -->
      </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            loading:false,
            ApplicationList:[],
            search:{},
            DraftListDialog:false,
            drafts:[],
            fab: true,
            dialogRecall: false,
            noAttachment: false,
            saveDraftDialog: false,
            deleteDraftConfirm: false,
            draftsDialog: false,
            draftName: null,
            isClicked: false,
            fileInputError: false,
            rules: [
            v => !!v || 'File is required',
            v => (v && v.length > 0) || 'File is required',
            ],


            general: {},
            items: [],
            otherCost: {},
            paymentSchedule: {},


            recallData: null,
            recallItemName: null,
            recallVendorName: null,

            drafts: [],

            approvers: [],
            currencies: [],
            departments: [],
            months: [],
            payers: [],
            payment_dues: [],
            schedules: [],
            quotation_statuses: [],
            trade_terms: [],

            ratio: 0
        }
    },

    computed: {
        
        
        totalRatio() {
            return 100 - (parseInt(this.paymentSchedule.PoRatio == '' ? 0 : this.paymentSchedule.PoRatio) + parseInt(this.paymentSchedule.RecievingBlRatio == '' ? 0 : this.paymentSchedule.RecievingBlRatio) + parseInt(this.paymentSchedule.InspectionRatio == '' ? 0 : this.paymentSchedule.InspectionRatio) + parseInt(this.paymentSchedule.OthersRatio == '' ? 0 : this.paymentSchedule.OthersRatio))
        },
        TotalPerCurrency() {
            return this.currencies.filter(rec => {
                return rec.Total > 0
            })
        },
        departmentFilter() {
            return this.departments.filter(rec => {
                if (this.general.PayerCompanyCode == 'HS') {
                    return rec
                } else {
                    return rec.PayerCode == this.general.PayerCompanyCode
                }
            })
        },
        applicantName() {
            // return this.$store.state.user.FirstNameJap !== null || this.$store.state.user.LastNameJap !== null
            if (this.$store.state.language == 'english') {
                return `${this.$store.state.user.FirstNameEng} ${this.$store.state.user.LastNameEng}`
            } else {
                if (this.$store.state.user.FirstNameJap == null || this.$store.state.user.LastNameJap == null) {
                    return `${this.$store.state.user.FirstNameEng} ${this.$store.state.user.LastNameEng}`
                } else {
                    return `${this.$store.state.user.LastNameJap} ${this.$store.state.user.FirstNameJap} `
                }
            }
        },
        totalPercent() {
            return (parseInt(this.paymentSchedule.PoRatio == '' ? 0 : this.paymentSchedule.PoRatio) + parseInt(this.paymentSchedule.RecievingBlRatio == '' ? 0 : this.paymentSchedule.RecievingBlRatio) + parseInt(this.paymentSchedule.InspectionRatio == '' ? 0 : this.paymentSchedule.InspectionRatio) + parseInt(this.paymentSchedule.OthersRatio == '' ? 0 : this.paymentSchedule.OthersRatio))
        }
    },
    created() {
        this.addItem()
        this.getMasterLists()
        this.defaultSetters()
        this.getDate()
        
    },
    methods: {
        isChekedNihonSangyou(val){
            if(val){
                this.$set(this.general,'HrdSingapore',true)
            }
        },
        setItemDepartments(){
            this.items.forEach(rec=>{
                if(!rec.DepartmentCode){
                    rec.DepartmentCode = this.general.DepartmentCode
                }
            })
        },
        JapaneseNumberToInteger( val ){
            // return val
            var search = "０１２３４５６７８９";
            var replace = "0123456789";
            // Make the search string a regex.
            var regex = RegExp( '[' + search + ']', 'g' );
            var t = val.toString().replace( regex, chr=>{
                        // Get the position of the found character in the search string.
                        var ind = search.indexOf( chr );
                        // Get the corresponding character from the replace string.
                        var r = replace.charAt( ind );
                        return r;
                    } );
            return t;
        },
        reset(){
            this.$refs.attachment.reset()
            this.general = {}
            this.items = []
            this.otherCost = {}
            this.paymentSchedule = {}
            this.getDate()
            this.computeTotalPerCurrency()
            this.defaultSetters()
            this.addItem()
        },
        UseRecall(MpaNo){
            axios.post('api/GetApplicationDetails',{MpaNo: MpaNo})
            .then(res=>{
                this.getDate()
                this.general = res.data.general_informations
                this.items = res.data.items
                this.otherCost = res.data.other_informations
                this.paymentSchedule = res.data.payment_schedules
                this.computeTotalPerCurrency()
            })
        },
        SearchApplicationItems(){
            axios.post('api/SearchApplicationItems',this.search)
            .then(res=>{
                this.ApplicationList = res.data
            })
        },
        DeleteDraft(draft){
            axios.post('api/DeleteDraft',{DraftID: draft.id})
            .then(res=>{
                this.getDrafts()
            })

        },
        UseDraft(draft){
            this.DraftListDialog = false
            this.general =JSON.parse(draft.general_informations)
            this.items =JSON.parse(draft.items)
            this.otherCost =JSON.parse(draft.other_informations)
            this.paymentSchedule =JSON.parse(draft.payment_schedules)
            this.getDate()
            this.computeTotalPerCurrency()
        },
        getDrafts(){
                
            axios.post('api/GetDrafts',{EmployeeID: this.$store.state.user.EmployeeID})
            .then(res=>{
                this.drafts = res.data
            })
        },
        SaveDraft(){
            axios.post('api/SaveDraft',{
                draftName: this.draftName,
                general_informations: this.general,
                items: this.items,
                payment_schedule: this.paymentSchedule,
                other_informations: this.otherCost,
                EmployeeID: this.$store.state.user.EmployeeID
            })
            .then(res=>{
               this.saveDraftDialog = false
               alert('Draft Saved')
            })
        },
        RegisterApplication(){
            this.loading = true
            var formData = new FormData($('form')[0]);
            var values = {
                    general_informations: this.general,
                    items: this.items,
                    other_informations: this.otherCost,
                    payment_schedules: this.paymentSchedule
                }
            var headers = { headers: {'Content-Type': 'multipart/form-data' } }
            formData.append('values',JSON.stringify(values))

            axios({
            method: 'post',
            url: 'api/RegisterApplication',
            data: formData,
            headers: headers
            })
            .then(res=>  {
                //handle successa
                // console.log(res.data);
                this.$swal.fire(
                'Success!',
                'Application Successfully Registered!',
                'success'
                )
                this.loading = false
                this.reset()
            })
            .catch(err=> {
                //handle error
                console.log(err);
            });

        },
        paymentScheduleRowChecker(row,field){
            return (!(this.paymentSchedule[row+'ratio'] > 0) && !this.general.NihonSangyou && this.totalPercent <= 100 && !this.paymentSchedule[field])
        },
        deleteItem(i) {
            this.items.splice(i, 1)
            this.computeTotalPerCurrency()
        },
        checkRequiredFields() {
            var itemChecker = false;
            this.items.forEach(rec=>{
                var x = parseInt(rec.UnitPrice.split(',').join('')) * rec.Quantity;
                if(rec.Currency == 'JPY'){
                    if(x >= 200000){
                        itemChecker = true
                    }
                }

                if(rec.Currency == 'USD'){
                    if((x*100) >= 200000){
                        itemChecker = true
                    }
                }

                if(rec.Currency == 'EUR'){
                    if((x*133.333333333333) >= 200000){
                        itemChecker = true
                    }
                }

                if(rec.Currency == 'PHP'){
                    if((x*2) >= 200000){
                        itemChecker = true
                    }
                }

                if(rec.Currency == 'TWD'){
                    if((x*3.333333333333) >= 200000){
                        itemChecker = true
                    }
                }
            })

            
            
            var msg = []

            if(!itemChecker){
                msg.push('An Item must be Greater than or Equal to ¥200,000')
            }

            if(this.$refs.attachment.$refs.input.files.length == 0){
                msg.push('No Attached File')
            }

            if($('.error--text').length > 0){
                msg.push('Check Required Fields Marked as red')
            }

            

            if(msg.length > 0){
                alert(msg.join('\n'))
            }else{
                this.RegisterApplication()
            }



            
        
        },
        getDate() {
            axios.get('api/getDate')
                .then(res => {
                    this.$set(this.general, 'Date', res.data)
                })
        },
        checkDisabled(field) {
            return this.totalRatio <= 0 && this.paymentSchedule[field] <= 0
        },
        checkRatio(i) {
            var fields = ['PoRatio', 'RecievingBlRatio', 'InspectionRatio', 'OthersRatio']
            if (this.totalRatio < 0) {
                this.paymentSchedule[fields[i - 1]] = 0
                this.paymentSchedule[fields[i - 1]] = this.totalRatio
            }
        },
        defaultSetters() {

            this.$set(this.general, 'Applicant',this.$store.state.user.EmployeeID)
            // this.$set(this.general, 'QuotedPrice', "")
            
            this.$set(this.otherCost, 'PackingExpenseStatus', '1')
            this.$set(this.otherCost, 'DistributionExpenseStatus', '1')
            this.$set(this.otherCost, 'InstallationExpenseStatus', '1')
            this.$set(this.otherCost, 'OtherExpenseStatus', '1')

            this.$set(this.otherCost, 'PackingExpenseAmount', 0)
            this.$set(this.otherCost, 'DistributionExpenseAmount', 0)
            this.$set(this.otherCost, 'InstallationExpenseAmount', 0)
            this.$set(this.otherCost, 'OtherExpenseAmount', 0)

            this.$set(this.paymentSchedule, 'PoRatio', 0)
            this.$set(this.paymentSchedule, 'RecievingBlRatio', 0)
            this.$set(this.paymentSchedule, 'InspectionRatio', 0)
            this.$set(this.paymentSchedule, 'OthersRatio', 0)


        },
        addItem() {
            var dept = this.general.DepartmentCode == "" ? "" : this.general.DepartmentCode
            
            
            this.items.push({
                ItemNameJap: "",
                ItemNameEng: "",
                DepartmentCode: dept,
                ItemId: "",
                UnitPrice: "",
                Quantity: "",
                Currency: "",
            })
            
        },
        computeTotalPerCurrency() {
            var totals = [0, 0, 0, 0, 0];
            this.items.forEach(rec => {
                if (rec.UnitPrice != '' && rec.Quantity != '' && rec.Currency != '' && rec.UnitPrice !== null && rec.Quantity !== null && rec.Currency !== null) {
                    var index = this.currencies.findIndex(res => {
                        return res.currency_code == rec.Currency
                    })
                    var UP = 0;
                    var QTY = 0;
                    rec.unitprice = rec.UnitPrice.toString()
                    rec.Quantity = rec.Quantity.toString()
                    if(rec.UnitPrice != null && rec.Quantity!=null){                    
                        UP = rec.UnitPrice.includes(',') ? parseFloat(rec.UnitPrice.split(',').join('')) : parseFloat(rec.UnitPrice)
                        QTY = rec.Quantity.includes(',') ? parseFloat(rec.Quantity.split(',').join('')) : parseFloat(rec.Quantity)
                    }   
                    totals[index] += UP * QTY
                }

            })

            for (var x = 0; x < totals.length; x++) {
                this.$set(this.currencies[x], 'Total', totals[x])
            }

        },
        numberWithComma(i, field) {
            // console.log(this.items[i])
            // var regex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g; 
            // var input = this.items[i][field]; 
            // if(regex.test(input)) {
            //     // this.items[i][field]
            //     console.log(tr(input, "０１２３４５６７８９　", "0123456789 "))
            //     return false
            // }

            if (field != '') {
                if(this.items[i][field] != ""){
                    this.$set(this.items[i], field, parseInt(this.JapaneseNumberToInteger(this.items[i][field]).split(',').join('')).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                }else{
                    this.$set(this.items[i], field, 0)
                }
            } else if(field == '') {
                if(i.toString().includes('.') && this.general.QuotedPrice != 'maker'){
                    var fields= i.split('.')
                    if(this[fields[0]][fields[1]] != ""){
                        this.$set(this[fields[0]], fields[1], parseInt(this.JapaneseNumberToInteger(this[fields[0]][fields[1]]).toString().split(',').join('')).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    }else{
                        this.$set(this[fields[0]], fields[1], 0)
                    }
                }else if(this.general.QuotedPrice == 'maker'){
                    return parseFloat(i).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }else{
                    if(i != ''){
                        return parseInt(this.JapaneseNumberToInteger(i)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }else{
                        return 0
                    }
                    
                }
            }
            // if(i == "" ){
            //     this.$set(this.items[i], field, 0)
            // }
        },
        onlyNumber(evt) {
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                evt.preventDefault()
            }
        },
        checkIfPdf() {
            if (this.$refs.attachment.$refs.input.files[0].type != "application/pdf") {
                alert('Attachment must be PDF only')
                this.$refs.attachment.reset()
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
                    this.trade_terms = res.data.trade_terms
                }).catch(err => {
                    console.log(err)
                })
        }
    }

}
</script>


<template>
  <div class="mx-5 my-1">
    <v-card>
      <v-alert text color="teal" border="left" prominent dense>
        <span style="font-size:18px" class="ml-5">Data Extraction</span>
      </v-alert>
    </v-card>
    <v-card>
      <v-row no-gutters class="my-2">
        <v-col sm="5" md="5" cols="12" class="my-2">
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
        <v-col sm="5" md="5" cols="12" class="my-2">
          <v-select
            dense
            hide-details
            :items="Companies"
            item-text="payer_name"
            item-value="payer_code"
            outlined
            label="Company"
            v-model="search.Company"
            clearable
          > </v-select>
        </v-col>
        <v-col sm="1" md="1" cols="6" class="my-2" @click="GetForExtractData(search)">
          <v-btn block style="margin-top: 2px; margin-bottom:2px">
            <v-icon>
              mdi-magnify
            </v-icon>
          </v-btn>
        </v-col>
        <v-col sm="1" md="1" cols="6" class="my-2" @click="Export(ForExtract)">
          <v-btn block style="margin-top: 2px; margin-bottom:2px">
            <v-icon>
              mdi-file-export
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-simple-table fixed-header height="70vh">
      <thead>
        <tr>
          <th class="no-wrap">
            FA(MPA) No.
          </th>
          <th class="no-wrap">MAKER</th>
          <th class="no-wrap">SUPPLIER</th>
          <th class="no-wrap">DESCRIPTION</th>
          <th class="no-wrap">CURRENCY</th>
          <th class="no-wrap">AMOUNT</th>
          <th class="no-wrap">COMPANY</th>
          <th class="no-wrap">DEPARTMENT</th>
          <th class="no-wrap">ACQUISITION DATE</th>
          <th class="no-wrap">INVOICE No.</th>
          <th class="no-wrap">USEFUL LIFE</th>
          <th class="no-wrap">PHP AMT</th>
          <th class="no-wrap">JPY AMT</th>
          <th class="no-wrap">Monthly Depreciation PHP</th>
          <th class="no-wrap">Monthly Depreciation JPY</th>
          <th class="no-wrap">NBV in PHP</th>
          <th class="no-wrap">NBV in JPY</th>
          <th class="no-wrap">REMAINING LIFE</th>
          <th class="no-wrap">DEPRECIATION START DATE</th>
          <th class="no-wrap">PARENT FA No.</th>
          <th class="no-wrap">LOCATION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rec,index) in ForExtract" :key="index">
          <td>{{rec.MpaNoItems}}</td>
          <td>{{rec.VendorNameEng}}</td>
          <td>{{rec.Supplier}}</td>
          <td>{{rec.Description}}</td>
          <td>{{rec.Currency}}</td>
          <td>{{numberWithComma(rec.Amount)}}</td>
          <td>{{rec.PayerName}}</td>
          <td>{{rec.Department}}</td>
          <td>{{rec.AquisitionDate}}</td>
          <td>{{rec.InvoiceNo}}</td>
          <td>{{rec.UsefulLife}}</td>
          <td>{{rec.PhpAmount}}</td>
          <td>{{rec.JpyAmount}}</td>
          <td>{{rec.MonthlyDepreciationPhp}}</td>
          <td>{{rec.MonthlyDepreciationJpy}}</td>
          <td>{{rec.NvbJpy}}</td>
          <td>{{rec.NvbPhp}}</td>
          <td>{{rec.RemainingLife}}</td>
          <td>{{rec.DepreciationStartDate}}</td>
          <td>{{rec.ParentFaNo}}</td>
          <td>{{rec.Location}}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      ForExtract:[],
      search:{
        dates:[],
        Company: ""
      },
      Companies:[]
    }
  },
  created(){
    this.GetForExtractData(this.search)
    this.GetCompanies()
  },
  methods:{
    numberWithComma(val){

      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      
    },
    Export(ForExtract){
      
      var path = `/api/ExtractData${this.search.dates.length == 2 || !!this.search.Company ? '?': '?dates=null&company=null' }${this.search.dates.length == 2 ? 'dates='+JSON.stringify(this.search.dates): '' }${this.search.dates.length == 2 && !!this.search.Company ? '&': '' }${!!this.search.Company ? 'company='+this.search.Company: '' }`

      window.open(path)

    },
    GetCompanies(){

      axios.post('/api/GetCompanies')
      .then(res=>{
        this.Companies = res.data
      }).catch(err=>{
        console.log(err)
      })

    },

    GetForExtractData(search){

      axios.post('/api/ForExtract',search)
      .then(res=>{
        this.ForExtract = res.data
      }).catch(err=>{
        console.log(err)
      })

    }
  }

}
</script>

<style>
.v-application--is-ltr .v-data-table > .v-data-table__wrapper > table > tbody > tr > th, .v-application--is-ltr .v-data-table > .v-data-table__wrapper > table > tfoot > tr > th, .v-application--is-ltr .v-data-table > .v-data-table__wrapper > table > thead > tr > th{
  background-color: teal;
  color: white !important;
}
</style>
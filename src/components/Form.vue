<template>

      <b-form @submit="onSubmit" >


        <b-container class="d-flex flex-row flex-wrap ">

          <div class="form-container">
          <b-row class="" v-bind:key="index" v-for="(value,name,index) in form">
            <b-container><h5 class="display-12 np opacity-on-hover">{{ value.label }}</h5></b-container>
            <b-col>
              <b-form-group
                  :id="'input-amount-group-'+name"
                  label="Amount:"
                  :label-for="'input-amount-'+name"
              >
                <b-form-input
                    :disabled = "value.label === 'Container'"
                    :id="'input-amount-'+name"
                    v-model="form[name].amount"
                    type="number"
                    step="1"
                    required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                  :id="'input-length-group-'+name"
                  label="Length:"
                  :label-for="'input-length-'+name"
              >
                <b-form-input
                    :id="'input-length-'+name"
                    v-model="form[name].length"
                    type="number"
                    step="0.01"
                    required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                  :id="'input-width-group-'+name"
                  label="Width:"
                  :label-for="'input-amount-'+name"
              >
                <b-form-input
                    :id="'input-width-'+name"
                    v-model="form[name].width"
                    type="number"
                    step="0.01"
                    required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                  :id="'input-height-group-'+name"
                  label="Height:"
                  :label-for="'input-amount-'+name"
              >
                <b-form-input
                    :id="'input-height-'+name"
                    v-model="form[name].height"
                    type="number"
                    step="0.01"
                    required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <hr class="my-4">

          <b-button class="bg-dark text-light opacity-on-hover" type="submit" > Submit </b-button>
          </div>
          <div class="result">
            <b-overlay :show="isLoading" rounded="sm">
          <b-card class="mt-3" header="Result" v-show="show">
            <pre class="m-0">
              <span> Volume do Container = </span>{{ response.volume}} %
              <span> Qtd Box1 = </span>{{ response.count.box1}}
              <span> Qtd Box2 = </span>{{ response.count.box2}}
              <span> Qtd Box3 = </span>{{ response.count.box3}}
              <span> Posições Box1 = </span>{{ JSON.stringify(response.box1)}}
              <span> Posições Box2 = </span>{{ JSON.stringify(response.box2)}}
              <span> Posições Box3 = </span>{{ JSON.stringify(response.box3)}}
            </pre>
          </b-card>
            </b-overlay>
          </div>


        </b-container>


      </b-form>
</template>

<script>
import {app} from "../services/axios";
export default {
  data() {

    return {
      form: {
        box1: {label:'Box 1',amount:'15',length:'0.8',width:'0.45',height:'0.25'},
        box2: {label:'Box 2',amount:'20',length:'0.6',width:'0.7',height:'0.32'},
        box3: {label:'Box 3',amount:'15',length:'0.20',width:'0.6',height:'0.41'},
        container: {label:'Container',amount:'1',length:'2',width:'4',height:'1.5'},
      },
      response:{count:{}},
      show:false,
      isLoading: false
    }
  },
  methods: {
    async onSubmit(event) {
      this.show = this.isLoading = true;
      event.preventDefault()
      console.log(JSON.stringify((this.form)))
      app.post('sort-boxes',this.form).then(res =>{
        this.response = res.data
        this.isLoading =false;
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>
<style>
*{
  font-size: 9pt;
}
h5{
  padding: 5px;
  text-align: center;
  border-radius: 5px;
}
.opacity-on-hover:hover{
  opacity: 0.8;
  transition: opacity 30ms;
}
.result{
  width: 100% !important;
}
.form-container{
  width: 100% !important;
}
@media (min-width: 1000px) {
  .form-container{
    width: 50%;
  }
  .result{
    width: 50%;
  }
}
</style>
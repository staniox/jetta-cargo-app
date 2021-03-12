<template>

      <b-form @submit="onSubmit" >


        <b-container class="bv-example-row">


          <b-row v-bind:key="index" v-for="(value,name,index) in form">
            <b-container><h5 class="display-12 bg-dark text-light">{{ value.label }}</h5></b-container>
            <b-col>
              <b-form-group
                  :id="'input-amount-group-'+name"
                  label="Amount:"
                  :label-for="'input-amount-'+name"
              >
                <b-form-input
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

          <b-button class="bg-dark text-light" type="submit" > Submit </b-button>
          <div>
            <b-overlay :show="show" rounded="sm">
          <b-card class="mt-3" header="Form Data Result" v-show="show">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
            </b-overlay>
          </div>


        </b-container>


      </b-form>
</template>

<script>
export default {
  data() {

    return {
      form: {
        box1: {label:'Box 1',amount:'15',length:'0.8',width:'0.45',height:'0.25'},
        box2: {label:'Box 2',amount:'20',length:'0.6',width:'0.7',height:'0.32'},
        box3: {label:'Box 3',amount:'15',length:'0.20',width:'0.6',height:'0.41'},
        container: {label:'Container',amount:'1',length:'2',width:'4',height:'1.5'},
      },
      show:false
    }
  },
  methods: {
    async onSubmit(event) {
      this.show = true
      event.preventDefault()
      const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      await sleep(5000)
      this.show = false
    },
  }
}
</script>
<style>
h5{
  text-align: center;
  border-radius: 5px;
}
</style>
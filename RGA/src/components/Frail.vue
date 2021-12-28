<script>
import axios from 'axios'
export default {
  name:'frail',
  data(){
    return{
      form1:{
        fatigue:"",
        resistance:"",
        aerobic:"",
        illness:"",
        weight:""
      }
    }
  },
  methods: {
    toNext(){
      console.log("to next")
      let data = [
        {
          userId: 1,
          quesId: 1,
          answer: this.form1.fatigue,
          quesPid: 1
        },
        {
          userId: 1,
          quesId: 2,
          answer: this.form1.resistance,
          quesPid: 1
        },
        {
          userId: 1,
          quesId: 3,
          answer: this.form1.aerobic,
          quesPid: 1
        },
        {
          userId: 1,
          quesId: 4,
          answer: this.form1.illness,
          quesPid: 1
        },
        {
          userId: 1,
          quesId: 5,
          answer: this.form1.weight,
          quesPid: 1
        },
      ]
      // this.$router.push('/sarcf')
      axios.post('/api/main/ans/addAnswer',data,{}).then((response)=>{
        console.log(response)
        this.$router.push('/sarcf')
      })
    }
  }
}
</script>

<template>
  <el-container>
    <el-header class="title">
      The Simple “FRAIL” Questionnaire
    </el-header>
    <el-main>
      <el-form ref="form" :model="form1" label-position="top">
        <el-form-item label="1. Are you fatigued?">
          <el-radio-group v-model="form1.fatigue">
            <el-radio label=1>Yes</el-radio>
            <el-radio label=0>No</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="2. Cannot walk up one flight of stairs?">
          <el-radio-group v-model="form1.resistance">
            <el-radio label=1>Yes</el-radio>
            <el-radio label=0>No</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="3. Cannot walk one block?">
          <el-radio-group v-model="form1.aerobic">
            <el-radio label=1>Yes</el-radio>
            <el-radio label=0>No</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="4. Do you have more than 5 illnesses?">
          <el-radio-group v-model="form1.illness">
            <el-radio label=1>Yes</el-radio>
            <el-radio label=0>No</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="5. Have you lost more than 5% of your weight in the last 6 months?">
          <el-radio-group v-model="form1.weight">
            <el-radio label=1>Yes</el-radio>
            <el-radio label=0>No</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="toNext" >
            Next
          </el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<style scoped>
.title{
  font-weight: bold;
  flex-direction: row;
  justify-content: center;
}
</style>
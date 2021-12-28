<script>
import axios from 'axios'
export default {
  name:'snaq',
  data(){
    return{
      form2:{
        appetite:"",
        tastes:"",
        eat:"",
        meal:"",
      }
    }
  },
  methods: {
    onsubmit(){
      let data = [
        {
          userId: 1,
          quesId: 11,
          answer: this.form2.appetite,
          quesPid: 3
        },
        {
          userId: 1,
          quesId: 12,
          answer: this.form2.tastes,
          quesPid: 3
        },
        {
          userId: 1,
          quesId: 13,
          answer: this.form2.eat,
          quesPid: 3
        },
        {
          userId: 1,
          quesId: 14,
          answer: this.form2.meal,
          quesPid: 3
        }
      ]
      // axios.post('',data).then((response)=>{
      //   console.log(response)
      // })
      this.$router.push('q1')

    }
  }
}
</script>
<template>
    <el-container>
      <el-header class="title">
        Simplified Nutritional Assessment Questionnaire
      </el-header>
      <el-main>
        <el-form ref="form2" :model="form2" label-position="top">
          <el-form-item label="1. My appetite is">
            <el-radio-group v-model="form2.appetite">
              <el-radio label=1>Very poor</el-radio>
              <el-radio label=2>Poor</el-radio>
              <el-radio label=3>Average</el-radio>
              <el-radio label=4>Good</el-radio>
              <el-radio label=5>Very good</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="2. Food tastes">
            <el-radio-group v-model="form2.tastes">
              <el-radio label=1>Very bad</el-radio>
              <el-radio label=2>Bad</el-radio>
              <el-radio label=3>Average</el-radio>
              <el-radio label=4>Good</el-radio>
              <el-radio label=5>Very good</el-radio>
            </el-radio-group>
          </el-form-item>    
          <el-form-item label="3. When I eat">
            <el-radio-group v-model="form2.eat">
              <el-radio label=1>I feel full after eating only a few mouthfuls</el-radio>
              <el-radio label=2>I feel full after eating about a third of a meal</el-radio>
              <el-radio label=3>I feel full after eating over half a meal</el-radio>
              <el-radio label=4>I feel full after eating most of the meal</el-radio>
              <el-radio label=5>I hardly ever feel full</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="3. Normally I eat">
            <el-radio-group v-model="form2.meal">
              <el-radio label=1>Less than one meal a 3 day</el-radio>
              <el-radio label=2>One meal a day</el-radio>
              <el-radio label=3>Two meals a day</el-radio>
              <el-radio label=4>Three meals a day</el-radio>
              <el-radio label=5>More than three meals a day</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onsubmit" >
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
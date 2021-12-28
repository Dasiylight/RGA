<script>
import axios from 'axios'
export default {
  name:'sarcf',
  data(){
    return{
      form:{
        strength:"",
        walk:"",
        rise:"",
        climb:"",
        fall:""
      }
    }
  },
  methods: {
    onsubmit(){
      let data = [
        {
          userId: 1,
          quesId: 6,
          answer: this.form.strength,
          quesPid: 2
        },
        {
          userId: 1,
          quesId: 7,
          answer: this.form.walk,
          quesPid: 2
        },
        {
          userId: 1,
          quesId: 8,
          answer: this.form.rise,
          quesPid: 2
        },
        {
          userId: 1,
          quesId: 9,
          answer: this.form.climb,
          quesPid: 2
        },
        {
          userId: 1,
          quesId: 10,
          answer: this.form.fall,
          quesPid: 2
        }
      ]
      // this.$router.push('snaq')
      axios.post('/api/main/ans/addAnswer',data,{}).then((response)=>{
        this.$router.push('snaq')
      })      
    }
  }
}
</script>

<template>
  <el-container>
    <el-header class="title">
      Screen for Sarcopenia
    </el-header>
    <el-main>
      <el-form ref="form" :model="form" label-position="top">
        <el-form-item label="1.  How much difficulty do you have in lifting and carrying 10 pounds?">
          <el-radio-group v-model="form.strength">
            <el-radio label=0>None</el-radio>
            <el-radio label=1>Some</el-radio>
            <el-radio label=2>A lot, use aids or unable</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="2. How much difficulty do you have walking across a room?">
          <el-radio-group v-model="form.walk">
            <el-radio label=0>None</el-radio>
            <el-radio label=1>Some</el-radio>
            <el-radio label=2>A lot or unable without help</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="3. How much difficulty do you have transferring from a chair or bed?">
          <el-radio-group v-model="form.rise">
            <el-radio label=0>None</el-radio>
            <el-radio label=1>Some</el-radio>
            <el-radio label=2>A lot or unable</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="4.  How many times have you fallen in the last year?">
          <el-radio-group v-model="form.fall">
            <el-radio label=0>None</el-radio>
            <el-radio label=1>1-3 Falls</el-radio>
            <el-radio label=2>4 or more falls</el-radio>
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
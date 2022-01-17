<template>
  <div>
    <p id='title'>
      What were the five objects I asked you to remember in Q1 ?
    </p>
    <el-row :gutter='20' :justify='center' id='row'>
      <el-col :span=4>
        <el-input v-model="obj1" id='input'></el-input>
      </el-col>
      <el-col :span=4>
        <el-input v-model="obj2" id='input'></el-input>
      </el-col>
      <el-col :span=4>
        <el-input v-model="obj3" id='input'></el-input>
      </el-col>
      <el-col :span=4>
        <el-input v-model="obj4" id='input'></el-input>
      </el-col>
      <el-col :span=4>
        <el-input v-model="obj5" id='input'></el-input>
      </el-col>
    </el-row>
    <el-button type="primary" @click="onsubmit" id='button'>
      Next
    </el-button>
  </div>
</template>

<script>
export default{
  data(){
    return{
      obj1:'',
      obj2:'',
      obj3:'',
      obj4:'',
      obj5:''
    }
  },
  methods: {
    onsubmit(){
      this.$router.push('res')
    }
  }
}
</script>
<style>
#input{
  width: 13vw;
  height: 8vh;
  font-size: 2vw;
  text-align: center;
  padding-top: 1vh;
}
#row{
  margin-top: 8vh;
  display:flex;
  justify-content: center;
}
#title{
  font-size: 2vw;
}
#button{
  position: absolute;
  bottom:10vh
}
</style>>
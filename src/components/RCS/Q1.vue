<template>
  <div>
    <p id='title'>
      1.  Please remember these five objects. I will ask you what they are later.
    </p>
    <el-row :gutter='30' :justify='center' id='row'>
      <el-col :span=4.8>
        <el-tag id='tag'>Apple</el-tag>
      </el-col>
      <el-col :span=4.8>
        <el-tag type='info' id='tag'>Pen</el-tag>
      </el-col>
      <el-col :span=4.8>
        <el-tag type='success' id='tag'>Tie</el-tag>
      </el-col>
      <el-col :span=4.8>
        <el-tag type='warning' id='tag'>House</el-tag>
      </el-col>
      <el-col :span=4.8>
        <el-tag type='danger' id='tag'>Car</el-tag>
      </el-col>
    </el-row>
    <el-button type="primary" @click="onsubmit" id='button'>
      Next
    </el-button>
  </div>
</template>
<script>
export default{
  methods: {
    onsubmit(){
      this.$router.push('q2')
    }
  },

}
</script>
<style scoped>
#tag{
  width: 13vw;
  height: 8vh;
  font-size: 2vw;
  text-align: center;
  padding-top: 2vh;
}
#row{
  margin-top: 8vh;
  display:flex;
  justify-content: center;
}
#button{
  position: absolute;
  bottom:10vh
}

</style>
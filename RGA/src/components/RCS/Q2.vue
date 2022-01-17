<template>
  <div>
    <p id='title'>
        2. This is a clock face. Please put in the hour markers and the time at ten minutes to eleven o’clock
    </p>
    <div id='container'>
      <canvas 
        id='draw' 
        @touchstart="onStart($event)"
        @mousedown="onStart($event)"
        @touchmove='onMove($event)'
        @mousemove='onMove($event)'
        @touchend='onEnd($event)'
        @touchleave='onEnd($event)'
        @mouseup="onEnd($event)"
      >
      Sorry, your browser is too old for this demo.
      </canvas>
    </div>
    <div id='button'>
      <el-button id='undo' type="primary" v-on:click="undoDraw()">
        Undo
      </el-button>
      <el-button id='finish' type='success' @click="onSubmit()">
        Finish
      </el-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  let canvas
  let context
  let lineWidth = 15
  let isMousedown
  let points = []
  const strokeHistory = []

  // let $force 
  // let $touches

  export default{
    mounted(){
      this.init()
    },
    methods:{
      init(){
        canvas = document.getElementById('draw')
        context = canvas.getContext('2d')
        canvas.width = window.innerWidth * 2
        canvas.height = window.innerHeight * 2
        // console.log(window.innerHeight)
        context.lineWidth = 15
        context.beginPath();
        context.arc(window.innerWidth,window.innerHeight,window.innerHeight/1.6,0,2*Math.PI)
        // context.arc(window.innerHeight,window.innerHeight,window.innerHeight/1.6,0,2*Math.PI)
        context.stroke()
        // $force = document.querySelectorAll('#force')[0]
        // $touches = document.querySelectorAll('#touches')[0]
        isMousedown = false
      },

      // 画图
      drawOnCanvas:function(stroke){
        context.strokeStyle = 'black'
        context.lineCap = 'round'
        context.lineJoin = 'round'
        const l = stroke.length - 1
        if (stroke.length >= 3){
          const xc = (stroke[l].x + stroke[l - 1].x) / 2
          const yc = (stroke[l].y + stroke[l - 1].y) / 2
          // context.lineWidth = stroke[l - 1].lineWidth
          context.quadraticCurveTo(stroke[l - 1].x, stroke[l - 1].y, xc, yc)
          context.stroke()
          context.beginPath()
          context.moveTo(xc, yc)
        } else {
          const point = stroke[l];
          // context.lineWidth = point.lineWidth
          context.strokeStyle = point.color
          context.beginPath()
          context.moveTo(point.x, point.y)
          context.stroke()
        }
        console.log(context.lineWidth)
      },

      // 撤销
      undoDraw () {
        strokeHistory.pop()
        context.clearRect(0, 0, canvas.width, canvas.height)
        // console.log(strokeHistory)
        context.beginPath()
        context.arc(window.innerWidth,window.innerHeight,window.innerHeight/1.6,0,2*Math.PI)
        // ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        
        context.stroke()
        let that = this
        strokeHistory.map(function (stroke) {
          if (strokeHistory.length === 0) {
            return
          }
          context.beginPath()
          let strokePath = [];
          let these = that
          stroke.map(function (point) {
            // console.log(point)
            strokePath.push(point)
            these.drawOnCanvas(strokePath)
          })
        })
      },

      // 鼠标按下或开始触摸
      onStart:function(e){
        let pressure = 0.1;
        let x, y;
        if (e.touches && e.touches[0] && typeof e.touches[0]["force"] !== "undefined") {
          if (e.touches[0]["force"] > 0) {
            pressure = e.touches[0]["force"]
          }
          x = e.touches[0].pageX * 2
          y = e.touches[0].pageY * 2
        } else {
          pressure = 1.0
          x = e.pageX * 2
          y = e.pageY * 2
        }

        isMousedown = true

        // lineWidth = Math.log(pressure + 1) * 40
        // context.lineWidth = lineWidth// pressure * 50;

        points.push({ x, y, lineWidth })
        this.drawOnCanvas(points)
      },

      //鼠标或笔移动
      onMove:function(e){
        if (!isMousedown) return
        e.preventDefault()

        let pressure = 0.1
        let x, y
        if (e.touches && e.touches[0] && typeof e.touches[0]["force"] !== "undefined") {
          if (e.touches[0]["force"] > 0) {
            pressure = e.touches[0]["force"]
          }
          x = e.touches[0].pageX * 2
          y = e.touches[0].pageY * 2
        } else {
          pressure = 1.0
          x = e.pageX * 2
          y = e.pageY * 2
        }

        // smoothen line width
        // lineWidth = (Math.log(pressure + 1) * 40 * 0.2 + lineWidth * 0.8)
        points.push({ x, y, lineWidth })

        this.drawOnCanvas(points);

        // requestIdleCallback(() => {
        //   $force.textContent = 'force = ' + pressure

        //   const touch = e.touches ? e.touches[0] : null
        //   if (touch) {
        //     $touches.innerHTML = `
        //       touchType = ${touch.touchType} ${touch.touchType === 'direct' ? '👆' : '✍️'} <br/>
        //       radiusX = ${touch.radiusX} <br/>
        //       radiusY = ${touch.radiusY} <br/>
        //       rotationAngle = ${touch.rotationAngle} <br/>
        //       altitudeAngle = ${touch.altitudeAngle} <br/>
        //       azimuthAngle = ${touch.azimuthAngle} <br/>
        //     `
        //   }
        // })
      },

      // 结束触摸
      onEnd:function(e){
        let pressure = 0.1;
        let x, y;

        if (e.touches && e.touches[0] && typeof e.touches[0]["force"] !== "undefined") {
          if (e.touches[0]["force"] > 0) {
            pressure = e.touches[0]["force"]
          }
          x = e.touches[0].pageX * 2
          y = e.touches[0].pageY * 2
        } else {
          pressure = 1.0
          x = e.pageX * 2
          y = e.pageY * 2
        }

        isMousedown = false
        console.log(canvas.width)
        requestIdleCallback(function () { strokeHistory.push([...points]); points = []})
        lineWidth = 15
      },

      // 下载
      // todo: 提交到服务器上
      onSubmit(){
        let MIME_TYPE = "image/png";
        let imgURL = canvas.toDataURL(MIME_TYPE)
        // 压缩图片
        const image = new Image()
        image.src = imgURL;
        image.addEventListener('load', function(e){
          let radio = 4; //压缩比例
          let maxH = (image.naturalHeight / (radio * 1.6)) + 2*lineWidth
          let maxW = (image.naturalHeight / (radio * 1.6)) + 2*lineWidth
          const canvas2 = document.createElement('canvas')
          canvas2.height = maxH
          canvas2.width = maxW
          canvas2.setAttribute("id","_compres_")
          canvas2.style.visibility = 'hidden'
          document.body.appendChild(canvas2)

          const ctx2 = canvas2.getContext('2d')
          // canvas.clearRect() 方法清空给定矩形内的指定像素。(x1，y1，width,height)
          ctx2.clearRect(0, 0, maxW, maxH)
          // 只画时钟部分
          // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
          ctx2.drawImage(image,
           image.naturalWidth/2 - image.naturalHeight/3.2 - 0.5*lineWidth,
           0.1875*image.naturalHeight - 0.5*lineWidth,
           image.naturalHeight/1.6 + 1.5*lineWidth,
           image.naturalHeight/1.6 +  1.5*lineWidth,
           0,0,
           maxW, maxH)
          canvas2.toBlob((blob)=>{
            console.log(blob.size,"压缩后大小")
          })
          canvas2.toBlob((blob)=>{
            let formData = new FormData()
            formData.append('file',blob)
            formData.append('userid',1)
            formData.append('quesPid',4)
            formData.append('quesId',16)
            axios.post('/api/main/ans/addClock',formData,{}).then((response)=>{
              console.log(response)
              // this.$router.push('q1a')
              if(response.data.code == '500'){
                condole.log('empty data')
              }else if (response.data.code == '200'){
                this.$router.push('q1a')
              }
            })
          })
          canvas2.remove()
        })



        // let imgURL = canvas.toDataURL(MIME_TYPE)
        // let dlink = document.createElement('a')
        // dlink.download = 'pic'
        // dlink.href = imgURL
        // dlink.dataset.downloadurl = [MIME_TYPE, dlink.download, dlink.href].join(':');
        // document.body.appendChild(dlink);
        // dlink.click();
        // document.body.removeChild(dlink);

      }
    }
  }
</script>

<style scoped>
    canvas {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
    #button{
      position: absolute;
      bottom: 1em;
      left: 40%;
    }
    #title{
      font-size: 2vw;
    }
    #finish{
      position: relative;
      left: 4vw;
    }
</style>
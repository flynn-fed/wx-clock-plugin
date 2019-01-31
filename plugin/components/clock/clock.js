// plugin/components/clock/clock.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    hours: 0,
    minuts:0,
    seconds:0,
    times:''
  },
  attached() {
    // 在组件实例进入页面节点树时执行
    this.data.timer = setInterval(()=>{
      let date = new Date();
      this.setData({
        hours:date.getHours(),
        minuts:date.getMinutes(),
        seconds:date.getSeconds()
      })
    },1000)
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

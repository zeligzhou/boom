Vue.component('section1',{
  template:'<section><h2>{{title}}</h2><div>{{message}}</div></section>',
  data:function(){
    return {
      title:'示例1：独立组件',
      message:'data必须是function'
    }
  }
});
var app =  new Vue({
    el: '#app',
    data: {
      title:"Vue Demo",
      message:"Vue常用功能示例"
    }
  });
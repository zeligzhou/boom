Vue.component('section1',{
  template:'<section><h2>{{title}}</h2><div>{{message}}</div></section>',
  data:function(){
    return {
      title:'示例1：独立组件',
      message:'data必须是function'
    }
  }
});

Vue.component('section2',{
  template:'<section><h2>{{title}}</h2><div>{{message}}</div></section>',
  data:function(){
    return {
      title:'示例2：循环',
      message:'is属性可以将循环转移到模板内部'
    }
  }
});
Vue.component('card-item',{
  template:'<li>{{title}}</li>',
  props:['title']
});

Vue.component('section3',{
  template:'<section><h2>{{title}}</h2><div>{{message}}</div></section>',
  data:function(){
    return {
      title:'示例3：绑定事件',
      message:'VUE自带的绑定'
    }
  }
});
Vue.component('card-item2',{
  template:'<li v-on:click="hideText($event)">{{title}}</li>',
  props:['title'],
  methods:{
    hideText:function(e){
      e.target.style.display = "none";
    }
  }
});
var app =  new Vue({
    el: '#app',
    data: {
      title:"Vue Demo",
      message:"Vue常用功能示例",
      cards:[
        {text:'card1'},
        {text:'card2'},
        {text:'card3'}
      ]
    }
  });
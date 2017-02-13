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


Vue.component('section4',{
  template:'<section><h2>{{title}}</h2><div>{{message}}</div></section>',
  data:function(){
    return {
      title:'示例4：引用js插件',
      message:'引用jquery及其插件'
    }
  }
});
Vue.component('card-item3',{
  template:'<li>{{title}}</li>',
  props:['title']
});
Vue.component('card-item4',{
  template:'<li>{{title}}</li>',
  props:['title']
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
      ],
      varCards1:[
        {text:'1card1'},
        {text:'1card2'},
        {text:'1card3'},
        {text:'1card4'},
        {text:'1card5'},
        {text:'1card6'},
        {text:'1card7'},
        {text:'1card8'},
        {text:'1card9'},
        {text:'1card10'},
        {text:'1card11'},
        {text:'1card12'}
      ],
      varCards2:[
        {text:'2card1'},
        {text:'2card2'},
        {text:'2card3'},
        {text:'2card4'},
        {text:'2card5'},
        {text:'2card6'},
        {text:'2card7'},
        {text:'2card8'},
        {text:'2card9'},
        {text:'2card10'},
        {text:'2card11'},
        {text:'2card12'}
      ]
    },
    created:function(){
      console.log("文档生成后，目标li的数量为："+$("#list1 li").length);
    },
    mounted:function(){
      console.log("组件生成后，目标li的数量为："+$("#list1 li").length);
      $("#list1, #list2").dragsort({ dragSelector: "li", dragBetween: true, dragEnd: saveOrder  });
    
        function saveOrder() {
          console.log("调用拖动事件后，目标li的数量为："+$("#list1 li").length);
        };
    }
  });
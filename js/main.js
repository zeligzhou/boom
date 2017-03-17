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
      message:'VUE自带的绑定，点击事件'
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
      message:'引用jquery及其插件，拖拽方块'
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

Vue.component('section5',{
  template:'<section><h2>{{title}}</h2><div>{{message}}</div><div>当前天气：{{weather}}</div></section>',
  data:function(){
    return {
      title:'示例5：AJAX获取数据',
      message:'异步数据的展示'
    }
  },
  props:['weather']
});

Vue.component('section6',{
  template:'<section><h2>{{title}}</h2><div>{{message}}</div></section>',
  data:function(){
    return {
      title:'示例6：父子组件嵌套',
      message:''
    }
  }
});


var childComponent = Vue.extend({
        template: '#child'
    });
Vue.component("parent",{
    template: '<div><p>{{parente}}</p><child></child></div>',
    components: {
        'child': childComponent
    },
    props:['parente']
});
var app =  new Vue({
    el: '#app',
    data: {
      title:"Vue Demo",
      message:"Vue常用功能示例",
      cardsInBox:{
        "第一个父节点":["子节点1","子节点2"],
        "第二个父节点":["子节点3","子节点4"]
      },
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
      ],
      ajaxData:'000'
    },
    beforeCreate:function(){
      console.log("实例创建前，ajaxData为："+this.ajaxData);
      this.ajaxData='1'
    },
    created:function(){
      console.log("实例创建后，ajaxData为："+this.ajaxData);
      var self = this;
      $.ajax({
       url: "http://api.k780.com:88/?app=weather.today&weaid=1&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=?",
        dataType: "jsonp",
          type:"Post",
         jsonpCallback: "jsonpCallback",
        success: function (data) {
            self.ajaxData = data.result.temperature;
            console.log("请求完成后，ajaxData为："+self.ajaxData);
          }
        });
      console.log("实例创建后，目标li的数量为："+$("#list1 li").length);
    },
    mounted:function(){
      console.log("组件挂载后，目标li的数量为："+$("#list1 li").length);
      $("#list1, #list2").dragsort({ dragSelector: "li", dragBetween: true, dragEnd: saveOrder  });
    
        function saveOrder() {
          console.log("调用拖动事件后，目标li的数量为："+$("#list1 li").length);
        };
    }
  });
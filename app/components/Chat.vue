<template>
    <div class="chat hide">
        <div class="chat-close" v-on:click="hidePlayer"><i class="fa fa-compress" aria-hidden="true"></i></div>
        <div class="chat-wrap">
            <ul>
                <li class="chat-pop-friend flex-wrap">
                    <div class="chat-pop-ava"><img src="../images/avatar-0.jpg" alt=""></div>
                    <div class="chat-pop-con"><p>Hello Zelig!Hello Zelig!Hello Zelig!Hello Zelig!Hello Zelig!Hello Zelig!Hello Zelig!</p></div>
                </li>
                <li class="chat-pop-me flex-wrap">
                    <div class="chat-pop-ava"><img src="../images/avatar-1.jpg" alt=""></div>
                    <div class="chat-pop-con"><p>hello</p></div>
                </li>
            </ul>
        </div>
        <div class="chat-bar flex-wrap">
            <input class="flex-item" type="text" placeholder="请输入......">
            <button class="">发送</button>
        </div>
    </div>
</template>

<script>    
    export default {
        data () {
            return {
                msg: 'Hello Zelig!'
            }
        },
        methods:{
            
            hidePlayer(e){
                document.querySelector(".chat").setAttribute("class","chat hide");
                document.querySelector(".player-mini").setAttribute("class","player-mini active");
                document.querySelector(".swiper-box").setAttribute("class","swiper-box");
            }
        }
    }
</script>

<style>
    .chat{background: #fff; width: 100vw; height: 100vh; color: rgba(0,0,0,0.8); position: relative;}
    .chat-close{ position: absolute; right: 0rem; top: .6rem; width: 3.6rem; height: 3.6rem; font-size: 2.4rem;text-align: center;  color: rgba(0,0,0,0.5);}
    .chat-wrap{padding: 1rem;padding-bottom: 5rem;}
    .chat-bar{position:fixed; width: 100%;max-width: 768px; height: 5rem; border-top:1px solid #eee; background: #fff ; bottom: 0!important; left: auto!important; line-height: 5rem; padding: 1rem; box-sizing:border-box;}
    .chat-bar input{padding:0 0.4rem; border: 1px solid #ddd; outline: 0; border-radius: 4px}
    .chat-bar input:focus{ border: 1px solid #84cdc2;  }
    .chat-bar button{border: 0; background: #84cdc2; margin-left: 1rem; color: #fff; width: 4.8rem; border-radius: 4px}
    .chat-bar button.vain{ background: #ddd; }
    .chat-wrap li{list-style: none;width: 100%; font-size:1.4rem; margin-top: 1rem;}
    .chat-pop-ava{ width: 6rem; height: 6rem; }
    .chat-pop-ava img{width: 6rem; height: 6rem; border-radius: 3rem;}
    .chat-pop-me { flex-direction: row-reverse;}
    .chat-pop-con{max-width: 60%;}
    .chat-pop-con p{ padding: .6rem 1rem; background:#84cdc2; color: #fff; width: auto; margin: 1rem; border-radius: 4px;line-height: 2.4rem; border: 1px solid #fff; }
    .chat-pop-me .chat-pop-con p{text-align: right;background:#fff; color: #999;border: 1px solid #84cdc2; }
</style>
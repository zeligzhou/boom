<template>
    <div class="profile">
        <div class="profile-name">Zelig</div>
        <div class="profile-ava"><img src="../images/avatar-1.jpg" alt=""></div>
        <div class="setting">
            <div class="talk-to-robot" v-on:click="toChat"><i class="prime-color fa fa-superpowers" aria-hidden="true"></i>找小O</div>
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
            toChat(e){
                document.querySelector(".chat").setAttribute("class","chat");
                document.querySelector(".player-mini").setAttribute("class","player-mini hide");
                document.querySelector(".swiper-box").setAttribute("class","swiper-box hide");
            }
        }
    }
</script>

<style>
    .profile-name{ height: 4rem; line-height: 4rem; font-size: 1.8rem; text-align: center; margin-top: 2rem;}
    .profile-ava{ margin-top: 2rem; text-align: center;}
    .profile-ava img{ width: 10rem; height: 10rem; border-radius: 5rem }
    .setting{ margin: 3rem 1rem; font-size: 1.4rem;border-top: 1px solid #eee; }
    .setting>div{ height: 4rem; line-height: 4rem; border-bottom: 1px solid #eee; }
    .setting>div:active{background: #efefef;}
    .talk-to-robot i{padding:0 1rem;}
</style>
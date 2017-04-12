<template>
    <div class="player hide">
        <div class="player-info">
            <img src="../images/album.jpg" v-on:load="calRGB" alt="">
            <div class="player-close" v-on:click="hidePlayer"><i class="fa fa-compress" aria-hidden="true"></i></div>
        </div>
    </div>
</template>

<script>
    import '../js/rgbaster.min'
    
    export default {
        data () {
            return {
                msg: 'Hello Zelig!'
            }
        },
        methods:{
            calRGB(e){
                var img = e.target;
                RGBaster.colors(img, {
                  success: function(payload) {
                    // payload.dominant是主色，RGB形式表示
                    // payload.secondary是次色，RGB形式表示
                    // payload.palette是调色板，含多个主要颜色，数组
                    document.querySelector(".player").style.background = (payload.dominant).replace(/rgb/,'rgba').replace(/\)/,',0.8)');
                    
                  }
                }); 
            },
            hidePlayer(e){
                document.querySelector(".player").setAttribute("class","player hide");
                document.querySelector(".player-mini").setAttribute("class","player-mini active");
                document.querySelector(".swiper-box").setAttribute("class","swiper-box");
            }
        }
    }
</script>

<style>
    .player{background: #fefefe; width: 100vw; height: 100vh; color: #666}
    .player-info img{width: 100%; }
    .player-close{ position: absolute; right: 0rem; top: .6rem; width: 3.6rem; height: 3.6rem; font-size: 3rem}
</style>
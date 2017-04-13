<template>
    <div class="player hide">
        <div class="player-info">
            <img src="../images/album.jpg" v-on:load="calRGB" alt="">
            <div class="player-close" v-on:click="hidePlayer"><i class="fa fa-compress" aria-hidden="true"></i></div>
        </div>
        <div class="player-control">
            <div class="player-progress">
                <div class="player-timing">2:00</div>
                <div class="player-bar"><div class="player-float"></div></div>
                <div class="player-total">3:40</div>
            </div>
            <div class="player-btn">
                <div class="player-btn-pre"><i class="fa fa-fast-backward" aria-hidden="true"></i></div>
                <div class="player-btn-nowwrap"><div class="player-btn-now"><i class="fa fa-play" aria-hidden="true"></i></div></div>
                <div class="player-btn-next"><i class="fa fa-fast-forward" aria-hidden="true"></i></div>
            </div>
            <div class="player-album">
                <div class="player-album-head">
                    <div class="player-album-name">VENTURE</div>
                    <div class="player-album-info">
                        <div class="author">鹿晗</div>
                        <div class="year">2017</div>
                    </div>
                </div>
                <div class="player-album-list">
                    <ol>
                         <li class="cur">如果 What if I said</li>
                         <li>敢 Roleplay</li>
                     </ol>
                </div>
            </div>
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
                  exclude: [ 'rgb(255,255,255)' ],
                  success: function(payload) {
                    // payload.dominant是主色，RGB形式表示
                    // payload.secondary是次色，RGB形式表示
                    // payload.palette是调色板，含多个主要颜色，数组
                    document.querySelector(".player").style.background = (payload.dominant).replace(/rgb/,'rgba').replace(/\)/,',0.8)');
                    document.querySelector(".player-bar").style.background = (payload.secondary).replace(/rgb/,'rgba').replace(/\)/,',0.8)');
                    document.querySelector(".player-album").style.height = window.outerHeight- window.outerWidth - 160 + "px";
                    
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
    .player{background: #fff; width: 100vw; height: 100vh; color: rgba(255,255,255,0.8)}
    .player-info img{width: 100%; }
    .player-close{ position: absolute; right: 0rem; top: .6rem; width: 3.6rem; height: 3.6rem; font-size: 2.4rem;text-align: center; text-shadow:1px 1px 0 rgba(0,0,0,0.2);}
    .player-progress{display: flex; width: 90%; margin: 1rem auto; font-size: 1.2rem; height: 2rem; line-height: 2rem;}
    .player-bar{flex:1; margin: .6rem .4rem; background: #666; height: .8rem; border-radius: 2px; position: relative;}
    .player-float{position: absolute;width: 1rem; height: 2rem; background: #fff; border-radius: 2px;top: -0.6rem;left: 30%;}
    .player-btn{display: flex; width: 66%; margin: 2rem auto; font-size: 2rem; height: 6rem; line-height: 6rem;margin-top: 3rem; text-align: center; color: #666}
    .player-btn-pre, .player-btn-next{ width: 5rem; height: 5rem; background: #fff; border-radius: 3rem ; margin-top: .5rem; font-size: 1.5rem; line-height: 5rem;}
    .player-btn-nowwrap{ flex:1;  }
    .player-btn-now{width: 6rem; height: 6rem; background: #fff; border-radius: 3rem; margin: 0 auto}
    .player-album{ position: fixed; height: 10rem; width: 84%; left: 8%;bottom: 0; background: #fff; border-top-right-radius: 4px; border-top-left-radius: 4px; color:#666; }
    .player-album-head { border-bottom: 1px solid #ddd; padding: .4rem 1rem; }
    .player-album-name{ font-size: 1.6rem;  line-height: 3rem; font-weight: bold;}
    .player-album-info{  display: flex; line-height: 1.6rem; font-size: 1.2rem}
    .player-album-info .year:before{ content: "•" ; padding:0 .4rem;}
    .player-album-list {padding-left: 2.4rem; line-height: 3.6rem; font-size: 1.4rem; padding-top: .4rem;}
    .player-album-list li { border-bottom: 1px dotted #ddd;}
    .player-album-list .cur{ color: #84cdc2}
</style>
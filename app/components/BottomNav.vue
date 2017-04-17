<template>
    <div>
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-slide">
              <favlist></favlist>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <find></find>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <profile></profile>
            </swiper-slide>
            <div class="swiper-pagination bottom-nav" slot="pagination"></div>
        </swiper>
        <div class="player-mini active" v-on:click="transToPlayer"><i class="fa fa-music" aria-hidden="true"></i></div>
        <player></player>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Favlist from './Favlist'
    import Find from './Find'
    import Profile from './Profile'
    import Player from './Player'

    const TAB_NAME = ['fa-star','fa-magnet','fa-user']

    export default {
        components:{
            Favlist,
            Find,
            Profile,
            Player,
            swiper,
            swiperSlide
        },
        data () {
            return {
                swiperOption: {
                  pagination: '.swiper-pagination',
                  paginationClickable: true,
                  paginationBulletRender(swiper, index, className) {
                    return `<div class="bottom-grid ${className}"><i class="fa ${TAB_NAME[index]}" aria-hidden="true"></i></div>`
                  }
                }
            }
        },
        methods:{
            transToPlayer(e){
                document.querySelector(".player").setAttribute("class","player");
                document.querySelector(".player-mini").setAttribute("class","player-mini hide");
                document.querySelector(".swiper-box").setAttribute("class","swiper-box hide");
            }
        }
    }
</script>

<style>
    .swiper-box{ width: 100%; padding-bottom: 6rem; box-sizing:border-box; min-height: 100vh}
    .bottom-nav{ position:fixed; width: 100%;max-width: 768px; height: 6rem; border-top:1px solid #eee; background: #fff ; bottom: 0!important; left: auto!important}
    .bottom-grid{ width: 33.33%;height: 6rem; float: left;box-sizing:border-box; border-right:1px solid #eee; line-height: 6rem; text-align: center; font-size: 3rem ;color:#ddd;}
    .swiper-pagination-bullet-active.bottom-grid{color:#84cdc2; 
    -webkit-animation: 1s linear 0s move_eye;
     -moz-animation: 1s linear 0s move_eye;
       -o-animation: 1s linear 0s move_eye;
          animation: 1s linear 0s move_eye;}
    .bottom-grid:last-child{border-right: none}
    .swiper-pagination-bullet{border-radius: 0; opacity: 1; background: #fff}
    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{margin: 0;}
    .swiper-pagination-bullet-active {opacity: 1;background: #fff;}
    @-webkit-keyframes move_eye { from { color:#ddd;} to { color:#84cdc2;  }  }
    @-moz-keyframes move_eye { from { color:#ddd;} to { color:#84cdc2;  }  }
    @-o-keyframes move_eye { from { color:#ddd;} to { color:#84cdc2;  }  }
    @keyframes move_eye { from { color:#ddd;} to { color:#84cdc2;  }  }
</style>
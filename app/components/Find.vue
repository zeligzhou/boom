<template>
    <div class="fav-find">
        <div class="fav-find-icon"><i class="fa fa-heartbeat" aria-hidden="true"></i></div>
        <div class="fav-find-text">寻找您的所爱 •••</div>
        <div class="fav-find-table">
            <div class="fav-find-scene blue"><i class="fa fa-futbol-o" aria-hidden="true"></i><p>运动</p></div>
            <div class="fav-find-scene brown"><i class="fa fa-book" aria-hidden="true"></i><p>学习</p></div>
            <div class="fav-find-scene red"><i class="fa fa-bug" aria-hidden="true"></i><p>工作</p></div>
            <div class="fav-find-scene purple"><i class="fa fa-car" aria-hidden="true"></i><p>开车</p></div>
            <div class="fav-find-scene orange"><i class="fa fa-plane" aria-hidden="true"></i><p>旅行</p></div>
            <div class="fav-find-scene green"><i class="fa fa-bed" aria-hidden="true"></i><p>休憩</p></div>
            <div class="fav-find-scene cyan"><i class="fa fa-beer" aria-hidden="true"></i><p>聚会</p></div>
            <div class="fav-find-scene pink"><i class="fa fa-leaf" aria-hidden="true"></i><p>放松</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Explore!'
            }
        }
    }
</script>

<style>
    .fav-find-table{ clear: both; overflow: hidden; padding-top: 6rem; }
    .fav-find-scene{ float: left; width: 25%;font-size: 1.6rem; padding: 1.2rem 0; }
    .fav-find-scene:active{background: rgba(178, 235, 242, 0.3)}
    .fav-find-scene i{font-size: 2.4rem; display: block; padding-bottom: .6rem;}
</style>


<template>
    <div class="list">
        <i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
        {{msg}}
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello Zelig!'
            }
        }
    }
</script>

<style>
    .list{font-size:1.8rem}
</style>
<template>
    <div class="profile">
        <div class="profile-name">Zelig</div>
        <div class="profile-ava"><img src="../images/album.jpg" alt=""></div>
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
    .profile-name{ height: 4rem; line-height: 4rem; font-size: 1.8rem; text-align: center; margin-top: 2rem;}
    .profile-ava{ margin-top: 2rem; text-align: center;}
    .profile-ava img{ width: 10rem; height: 10rem; border-radius: 5rem }
</style>
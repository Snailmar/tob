<template>

    <div>
        <aplayer autoplay
  :music="{
    title: 'secret ',
    artist: 'Silent Siren',
    src: 'http://music.163.com/song/media/outer/url?id=317151.mp3',
    pic: 'http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg'
  }"
  :list='list'
/>
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
    export default {
        data() {
            return {
                list:[{
                    title: 'secret ',
    artist: 'Silent Siren',
    src: 'http://music.163.com/song/media/outer/url?id=317151.mp3',
    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
                }]
            }
        },
        components:{
            Aplayer
        }
    }
</script>

<style lang="scss" scoped>

</style>
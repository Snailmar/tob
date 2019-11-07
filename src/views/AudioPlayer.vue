<!--
 * @Author: vigorzhang
 * @Date: 2019-09-07 23:34:08
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-05 21:53:42
 * @Description: 音频播放页面
 -->
<template>
    <div class=" flex column audioplayer">
        <aplayer autoplay 
  :music="{
    title: 'secret ',
    artist: 'Silent Siren',
    src: 'http://music.163.com/song/media/outer/url?id=281951.mp3'}"
  :list='list'
  ref="player"
/>
<IntroduceMenu/>
    </div>
</template>

<script>
import HLS from 'hls.js'
import Aplayer from 'vue-aplayer'
import IntroduceMenu from '@/components/IntroduceMenu'
Aplayer.disableVersionBadge = true//禁掉打印版本信息
    export default {
        name:'audioplayer',
        data() {
            return {
                player:null,
                list:[]
            }
        },
        components:{
            Aplayer,IntroduceMenu
        },
    mounted() {
        this.player=this.$refs.player
        console.log(this.player)
        this.player.ended=function(){
            console.log('end')
        }
    },
        methods: {
            play(){
                Aplayer
            },
            handleClick(){
                this.$refs.player.play()
                
            },
            end(){
                console.log('12')
            }
        },
    }
</script>

<style lang="scss" scoped>
.audioplayer{
    height: 100%;
}
</style>
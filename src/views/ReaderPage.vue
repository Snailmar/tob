<!--
 * @Author: vigorzhang
 * @Date: 2019-09-11 08:35:06
 * @LastEditors: vigorzhang
 * @LastEditTime: 2019-11-05 21:57:10
 * @Description: 阅读页面
 -->
<template>
    <div class="view-readerPage">
        <div>上控制栏</div>
        <div>{{readerContent}}</div>
        <div>下控制栏</div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
    export default {
        data() {
            return {
                
            }
        },
        computed: {
            ...mapState(['readerContent'])
        },
        created() {
            this.$axios.get('/readercontent').then((result) => {
                
            }).catch((err) => {
                
            });
        },
    }
</script>

<style lang="scss" scoped>
.view-readerPage{
    
}
</style>

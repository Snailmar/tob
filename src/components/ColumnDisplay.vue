<template>
    <div class="com-column-display flex overflow-x">
<div class="ccd-wrap" v-for="(item,ind) in bookList" :key="ind">
<div class="img"><img src="../assets/banner/banner_xjn_4.png" alt=""></div>
<div class="bookname txt-hide2">我佛慈悲</div>
</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bookList:[1,2,3,4,5]
            }
        },
    }
</script>

<style lang="scss" scoped>
.com-column-display{
    flex-wrap: nowrap;
    margin-left: .16rem;
    .ccd-wrap{
        flex-shrink: 0;
        width: 1.8rem;
        
        margin-right: .1rem;
        .img{
            width: 100%;
            height: 2.4rem;
            img{
                width: 100%;
            height: 100%;
            }
        }
    }
}
</style>
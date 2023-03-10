<template>
    <div class="page-loading flex flex-col items-center justify-center">
        <div class=" text-5xl font-extrabold">蝶华春咲</div>
        <div class=" text-3xl font-medium mt-5">页面正在启动中</div>
        <div class="w-10 h-10 mt-5 text-3xl">
            <loading-outlined />
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { LoadingOutlined } from '@ant-design/icons-vue';
</script>
<style lang="scss">
    @import "../assets/scss/main.scss";
    .page-loading {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: $teamColor1;
        top: 0px;
        left: 0px;
        z-index: 99;

        >div {
            color: #FFFFFF;
        }
    }
</style>
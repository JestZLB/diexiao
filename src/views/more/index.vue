<template>
    <div class="more flex flex-col">
        <div class="w-full flex-1 flex items-center justify-center xl:text-9xl text-5xl font-black ">
            <text>功能正在开发中</text>
        </div>
        <Footer></Footer>
    </div>
</template>



<script lang="ts" setup>
import { useRoute } from 'vue-router';
import Footer from '@/components/Footer.vue';

const router = useRoute();
const title:string = '无'
document.title = typeof router?.meta?.title == 'string' ? router?.meta?.title : title;
</script>

<style lang="scss" src="./index.scss">
</style>


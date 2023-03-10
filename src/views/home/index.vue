<template>
    <div class="home flex flex-col items-center">
        <div class="title-chart flex justify-center" v-if="!appLoad">
            <TextChart
            :text="'蝶华春咲'"></TextChart>
        </div>
        <div class="text-block">
            <h1 class=" title text-4xl font-extrabold flex items-center justify-center mt-4">
                
            </h1>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import TextChart from '@/components/TextChart.vue';
const store = useAppStore();
const {appLoad} = storeToRefs(store);

const router = useRoute();
const title:string = '无'
document.title = typeof router?.meta?.title == 'string' ? router?.meta?.title : title;
</script>

<style lang="scss" src="./index.scss">

</style>
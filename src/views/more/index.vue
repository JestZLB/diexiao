<template>
    <div class="more">

    </div>
</template>



<script lang="ts" setup>
import { useRoute } from 'vue-router';

const router = useRoute();
const title:string = '无'
document.title = typeof router?.meta?.title == 'string' ? router?.meta?.title : title;
</script>

<style lang="scss" src="./index.scss">
</style>


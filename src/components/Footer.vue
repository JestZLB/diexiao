<template>
    <footer class="w-full xl:h-16 h-12 flex items-center justify-center xl:text-xl text-base xl:mt-6 mt-4">
        ©2023-{{year}}  by 姜理编
    </footer>
</template>
<script setup lang="ts">
import { ref } from 'vue';

    const year = ref<number>(new Date().getFullYear());
</script>
<style lang="scss" scoped>
    @import "../assets/scss/main.scss";
    footer {
        background-color: #33aaffa6;
        color: #ffff;
    }
</style>
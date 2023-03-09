<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
interface navItem {
  id : number,
  title : string
}
const navList = ref<Array<navItem>>(
  [
    {
      id : 1,
      title : '主页'
    },
    {
      id : 2,
      title : '功能'
    },
  ]
  )
const navActive = ref<number>(1);
//路由标签高亮
const getNavActive = (value:number)=>{
  navActive.value = value;
}
</script>

<template>
  <header>
    <div class="navpart flex items-center">
      <div class="nav-bg"></div>
      <div 
      v-for=" item in navList " 
      :key="item.id" 
      :class="` lg:text-xl font-bold   sm:text-base  lg:w-44 w-24 h-full flex items-center justify-center  nav-item ${item.id === navActive ? 'nav-active' : '' }`"
      >
        <text 
        class="cursor-pointer"
        @click="()=>getNavActive(item.id)"
        >{{item.title}}</text>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
  .navpart {
    width: 100%;
    height: 6vh;
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;

    .nav-bg {
      background-color: rgba(148, 148, 148, 0.8);
      filter: blur(2px);
      position: absolute;
      top: 0px;
      height: 0px;
      z-index: -1;
      width: 100%;
      height: 100%;
    }

    .nav-item {
      color: #D1ECFF;
      transition: color 0.2s linear;
    }

    .nav-active {
      color: #33AAFF;
    }
  }

</style>

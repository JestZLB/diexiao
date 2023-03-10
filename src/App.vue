<script setup lang="ts">
import PageLoading from './components/PageLoading.vue';
import { ref,watch, type Ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import imgSrc from '@/assets/home/home.png'
import { useAppStore } from './stores/counter';
import { storeToRefs } from 'pinia';
interface navItem {
  id : number,
  title : string
  path : string
}
//判断背景图片是否加载完成
const bgImg = new Image();
// const appLoad = ref<boolean>(true);
const store = useAppStore();
const {appLoad} = storeToRefs(store);
bgImg.src = imgSrc;
//背景样式
const bodyStyle:string = `
    background: url('${bgImg.src}'),#260623;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 0%;
    background-attachment : fixed;
`
let time:any = null
clearInterval(time)
time = setInterval(()=>{
  console.log(1)
  //当背景图片加载完成清空定时器，并把图片放入背景当中
  if(bgImg.complete) {
    clearInterval(time);
    document.querySelector('#bodyMain')?.setAttribute('style',bodyStyle);
    appLoad.value = false;
  }
},50)

//路由列表
const navList = ref<Array<navItem>>(
  [
    {
      id : 1,
      title : '主页',
      path : '/home'
    },
    {
      id : 2,
      title : '更多',
      path : '/more'
    },
  ]
)
</script>

<template>
  <header>
    <div class="navpart flex items-center fixed">
      <div class="nav-bg"></div>
      <div 
      v-for=" item in navList " 
      :key="item.id" 
      :class="` lg:text-xl font-bold   sm:text-base  lg:w-44 w-24 h-full flex items-center justify-center  nav-item`"
      >
        <div 
        class="cursor-pointer"
        >
          <RouterLink :to="item.path">{{item.title}}</RouterLink>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
  <PageLoading v-if="appLoad"></PageLoading>
  
</template>

<style lang="scss" scoped>
  .navpart {
    width: 100%;
    height: 6vh;
    z-index: 1;
    top: 0px;
    left: 0px;

    .nav-bg {
      position: absolute;
      background-color: rgba(148, 148, 148, 0.8);
      filter: blur(2px);
      top: 0px;
      height: 0px;
      z-index: -1;
      width: 100%;
      height: 100%;
    }

    .nav-item {
      color: #333;

      >div {
        position: relative;

        >a {
          transition: color 0.2s linear;
          &::after {
          content: '';
          width: 100%;
          position: absolute;
          bottom: -0.5rem;
          left: 0px;
          height: 0.3rem;
          border-radius: 9999999px;
          background-color: #33AAFF;
          transform: scale(0);
          transition: transform 0.2s linear;
        }
        &:hover {
        color: #D1ECFF;
        &::after {
          transform: scale(1);
        }
      }
        }

        .router-link-active {
          color: #D1ECFF;
          display: block;
          &::after {
            transform: scale(1);
          }
        }

      }
    }

  }

</style>

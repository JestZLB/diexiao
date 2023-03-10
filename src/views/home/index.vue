<template>
    <div class="home">
        <div class="title-chart flex justify-center" v-if="!appLoad">
            <TextChart
            :text="'蝶华春咲'"></TextChart>
        </div>
        <div class="text-block mx-auto">
            <h2 class=" title xl:text-5xl text-3xl font-black flex items-center justify-center xl:mb-8 mb-4">
                <text>蝶华春咲简介</text>
            </h2>
            <p class=" xl:text-3xl xl:text-center text-xl text-justify ">蝶咲最开始是作为国服第一期蝶团活的冲榜群转变过来，现在是蝶团日常吹水群。群号：1151457503，以下是群规：</p>
            <ul class=" text-list w-full xl:w-3/5 mx-auto">
                <li class="xl:text-2xl text-lg text-justify mt-4">1.网络不是法外之地，请自觉遵守法律，绿色上网，本群拒绝键政。</li>
                <li class="xl:text-2xl text-lg text-justify mt-4">2.群友之间和谐交流，禁止群内对线或引战，私人问题自己解决，对自己群内的一切言论负责。</li>
                <li class="xl:text-2xl text-lg text-justify mt-4">3.拒绝过渡发病、过渡男同、少玩烂梗。</li>
                <li class="xl:text-2xl text-lg text-justify mt-4">4.禁止发表淫秽，血腥，暴力，恶心等不良信息。尤其关于部分擦边内容(对他人发表人身攻击的内容、广告，阴阳怪气，无意义过度水群等无意义信息)若出现刷屏或者其他不良影响也将作为违规行为处理。</li>
                <li class="xl:text-2xl text-lg text-justify mt-4">5.禁止以任何形式窥探骚扰群友个人隐私，损害群友个人利益。拒绝开盒从我做起，当然线下面基等讨论不算。</li>
                <li class="xl:text-2xl text-lg text-justify mt-4">6.请各位群友注重个人利益。群内见到代肝，广告等涉及利益内容时慎重考虑；若有群友需要打广告请提前向群主报备，经同意才可发布，接代肝请自觉更改群名片。</li>
                <li class="xl:text-2xl text-lg text-justify mt-4">7.关于晒卡：发布的抽卡内容新4星卡请自觉发红包，不得转发其他玩家的抽卡记录，超得和吃井不受该群规限制（最低额度为3r）</li>
                <li class="xl:text-2xl text-lg text-justify mt-4">8.请勿将不良风气代入群内，并且请勿做出有损群内风气名声的事情。关于上述条例:违规者根据严重程度以及犯错次数予以撤回、禁言、飞机票处理。一切解释权归群管理层，若有任何疑问请联系管理员。</li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import TextChart from '@/components/TextChart.vue';
import Footer from '@/components/Footer.vue';
const store = useAppStore();
const {appLoad} = storeToRefs(store);

const router = useRoute();
const title:string = '无'
document.title = typeof router?.meta?.title == 'string' ? router?.meta?.title : title;
</script>

<style lang="scss" src="./index.scss">

</style>
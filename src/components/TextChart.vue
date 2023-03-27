<template>
    <div class="chart-part flex items-center justify-center">
        <div id="myChart"></div>
    </div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
interface defineProps {
    text: string;
}
const props = defineProps<defineProps>();
const initChart = () => {
    const dom = document.getElementById('myChart');
    if (dom) {
        let chart = echarts.init(dom);
        const option: any = {
            graphic: {
                elements: [
                    {
                        silent: true,
                        type: 'text',
                        left: 'center',
                        top: 'center',
                        style: {
                            text: props.text || '蝶华春咲',
                            fontSize: 80,
                            fontWeight: 'bold',
                            lineDash: [0, 200],
                            lineDashOffset: 0,
                            fill: 'transparent',
                            stroke: '#D1ECFF',
                            lineWidth: 1
                        },
                        keyframeAnimation: {
                            duration: 3000,
                            loop: false,
                            keyframes: [
                                {
                                    percent: 0.7,
                                    style: {
                                        fill: 'transparent',
                                        lineDashOffset: 200,
                                        lineDash: [200, 0]
                                    }
                                },
                                {
                                    // Stop for a while.
                                    percent: 0.8,
                                    style: {
                                        fill: 'transparent'
                                    }
                                },
                                {
                                    percent: 1,
                                    style: {
                                        fill: '#33AAFF'
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
        };
        window.onresize = function() {
        //自适应大小
        chart.resize();
      };

        chart.setOption(option)
    } else {
        return;
    }
}
onMounted(()=>{
    initChart();
})
</script>
<style lang="scss" scoped>
.chart-part {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#myChart {
   width: 100%;
   height: 100%; 
}
</style>
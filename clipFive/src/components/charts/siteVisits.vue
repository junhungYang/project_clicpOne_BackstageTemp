<template>
    <div class="site-visits" v-if="siteState.if">
        <v-panelHeading :title="'site visits'" :stateTool="siteShowManage" @loadingShow="loadingShow"></v-panelHeading>
        <div class="cont-wrap">
            <transition name="mod">
                <div v-show="siteState.show" class="chart-wrap">
                    <div class="myChart" :style="{width: '100%',height: '300px'}"></div>
                </div>
            </transition>
            <transition name="load">
                <v-loading v-show="loadShow"></v-loading>
            </transition>  
        </div>      
    </div>
</template>
<script>
import panelHeading from '../panelHeading/panelHeading'
import loading from '../loadingMask/loading'
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            loadShow: false,
            myChart: null
        }
    },
    mounted() {
        this.drawLine();
        window.addEventListener('resize', () => {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.myChart.resize()
            }, 250);
        })
    },
    computed: {
        ...mapState('dashboard', ['siteState']),
        ...mapState('nav', ['spread'])
    },
    components: {
        'v-panelHeading': panelHeading,
        'v-loading': loading
    },
    methods: {
        ...mapMutations('dashboard', ['siteShowManage']),
        loadingShow() {
            clearTimeout(this.timer)
            this.loadShow = true
            this.timer = setTimeout(() => {
                this.loadShow = false
            }, 1000);
        },
        drawLine() {
            this.myChart = this.$echarts.init(document.getElementsByClassName('myChart')[0])
            this.myChart.setOption({
                legend: {
                    data: ['Unique Visits', 'Page Views'],
                    top: '5%',
                    right: '5%',
                    orient: 'vertical',
                },
                tooltip: {
                    trigger: 'axis',
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                // backgroundColor: {
                //     type: 'linear',
                //     x: 0,
                //     y: 0,
                //     x2: 0,
                //     y2: 1,
                //     colorStops: [{
                //         offset: 0,
                //         color: '#fff' // 0% 处的颜色
                //     }, {
                //         offset: 1,
                //         color: '#f5f5f5' // 100% 处的颜色
                //     }],
                //     globalCoord: false // 缺省为 false  
                // },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false
                    },
                    data: ['', '2', '', '4', '', '6', '', '8', '', '10', '', '12', '', '14', '', '16', '', '18', '',
                        '20', '', '22', '', '24', '', '26', '', '28', '', '30'
                    ]
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false
                    },
                },
                series: [{
                    name: 'Unique Visits',
                    type: 'line',
                    stack: '总量',
                    data: [24, 23, 34, 27, 26, 48, 61, 59, 53, 74, 77, 75, 84, 42, 45, 41, 39, 35, 54, 39, 57,
                        55, 48, 41, 50, 55, 47, 65, 51, 61
                    ]
                },
                {
                    name: 'Page Views',
                    type: 'line',
                    stack: '总量',
                    data: [38, 39, 24, 38, 38, 43, 53, 43, 60, 54, 57, 62, 50, 52, 79, 76, 92, 90, 119, 115,
                        101, 103, 109, 105, 85, 113, 117, 108, 116, 120
                    ]
                }]
            })
        }
    },
    watch: {
        spread() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.myChart.resize()
            }, 500);
        }
    }
}
</script>
<style lang="less" scoped>
.site-visits {
  overflow: hidden;
  padding: 0 !important;
  margin-top: 20px;
  .cont-wrap {
    width: 100%;
    position: relative;
    overflow: hidden;
    .myChart {
      border: 1px solid #ddd;
      border-top: 0;
      background: linear-gradient(top, #fff, #f5f5f5);
    }
  }
}
</style>


<template>
    <div class="acquisition" v-if="acqiState.if">
        <v-panelHeading @changeOverflow="changeOverflow" :title="'acquisition'" :stateTool="acqiShowManage" @loadingShow="loadingShow"></v-panelHeading>
        <div class="cont-wrap"
            :style="overflow === true ? 'overflow:hidden' :'overflow:visable'">    
            <transition name="mod">
                <div v-show="acqiState.show">
                    <div class="myChart1" style="width:100%;height:300px"></div>
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
            myChart: null,
            overflow: false,
        }
    },
    mounted() {
        this.drawLine();
        window.addEventListener('resize', () => {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.myChart.resize()
            }, 500);
        })
    },
    components: {
        'v-panelHeading': panelHeading,
        'v-loading': loading
    },
    computed: {
        ...mapState('dashboard', ['acqiState']),
        ...mapState('nav', ['spread'])
    },
    methods: {
        ...mapMutations('dashboard', ['acqiShowManage']),
        loadingShow() {
            clearTimeout(this.timer)
            this.loadShow = true
            this.timer = setTimeout(() => {
                this.loadShow = false
            }, 1000);
        },
        drawLine() {
            this.myChart = this.$echarts.init(document.getElementsByClassName('myChart1')[0])
            this.myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [{
                    name: 'Acquisition',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [{
                        value: 340,
                        name: 'other'
                    },
                    {
                        value: 440,
                        name: 'series1'
                    },
                    {
                        value: 280,
                        name: 'series2'
                    },
                    {
                        value: 200,
                        name: 'series4'
                    },
                    {
                        value: 320,
                        name: 'series6'
                    }, {
                        value: 400,
                        name: 'series7'
                    }
                    ].sort(function (a, b) {
                        return a.value - b.value;
                    }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#777'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#ccc'
                            },

                            length: 10,
                            length2: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgb(165, 222, 255)',
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }]
            })
        },
        changeOverflow(payload) {
            console.log(123456)
            this.overflow = !this.overflow
        }
    },
    watch: {
        spread() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.myChart.resize()
            }, 250);
        }
    }
}
</script>
<style lang="less" scoped>
.acquisition {
  padding: 0 !important;
  margin-top: 20px;
  //   overflow: hidden;
  .cont-wrap {
    width: 100%;
    position: relative;
    .myChart1 {
      border: 1px solid #ddd;
      border-top: 0;
    }
  }
}
</style>

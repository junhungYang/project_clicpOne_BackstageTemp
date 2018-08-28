<template>
    <div class="style-selector" :class="[hideClass,orienClass]">
        <div  class="showManange" @click.stop="hide = !hide">
            <span class="glyphicon glyphicon-cog"></span>
        </div>
        <div class="selector-wrap">
            <div class="header">
                Style Selector
            </div>
            <div class="configure">
                <ul>
                    <li class="structure">
                        <div class="title">Choose Your Layout Style</div>
                        <select @change="layoutChange($event.target.value)">
                            <option value="wide" :selected="layoutStyle === 'wide' ? 'selected' : ''">Wide</option>
                            <option value="boxed" :selected="layoutStyle === 'boxed' ? 'selected' : ''">Boxed</option>
                        </select>
                    </li>
                    <li class="structure">
                        <div class="title">Choose Your Orientation</div>
                        <select @change="orienChange($event.target.value)">
                            <option value="default" :selected="orientation === 'default' ? 'selected' : ''">Default</option>
                            <option value="rtl" :selected="orientation === 'rtl' ? 'selected' : ''">RTL</option>
                        </select>
                    </li>
                    <li class="structure">
                        <div class="title">Choose Your Header Style</div>
                        <select @change="headerChange($event.target.value)">
                            <option value="fixed" :selected="headerStyle === 'fixed' ? 'selected' : ''">Fixed</option>
                            <option value="default" :selected="headerStyle === 'default' ? 'selected' : ''">default</option>
                        </select>
                    </li>
                    <li class="structure">
                        <div class="title">Choose Your Footer Style</div>
                        <select  @change="footerChange($event.target.value)">
                            <option value="default" :selected="footerStyle === 'default' ? 'selected' : ''">default</option>
                            <option value="fixed"  :selected="footerStyle === 'fixed' ? 'selected' : ''">Fixed</option>
                        </select>                            
                    </li>
                    <li class="color-style">
                        <div class="title">Backgrounds for Boxed Version</div>
                        <ul>
                            <li class="version" v-for="item,index in versionBg" :key="item" @click="bgColorChange(index)">
                                <img :src="item" alt="">
                            </li>
                        </ul>
                    </li>
                    <li class="color-style">
                        <div class="title">5 Predefined Color Schemes</div>
                        <ul>
                            <li class="schemes" v-for="item,index in schemesBg" :key="item" @click="navColorChange(index)">
                                <img :src="item" alt="">
                            </li>
                        </ul>
                    </li>                        
                </ul>
            </div>
            <div class="clear-save">
                <a @click.stop="hide = !hide">Clear Styles</a>
                <a @click.stop="setStorage">save Styles</a>
            </div>
        </div>
        <v-loading v-show="loadMask"></v-loading>
    </div>
</template>
<script>
import loading from './loadingMask/loading'
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            hide: true,
            loadMask: false,
            versionBg: [
                "/static/img/bg1.png",
                "/static/img/bg2.png",
                "/static/img/bg3.png",
                "/static/img/bg4.png",
                "/static/img/bg5.png"
            ],
            schemesBg: [
                "/static/img/bg9.png",
                "/static/img/bg7.png",
                "/static/img/bg6.png",
                "/static/img/bg10.png",
                "/static/img/bg8.png"
            ]
        }
    },
    mounted() {

    },
    computed: {
        ...mapState('styleSelector', ['orientation', 'layoutStyle', 'headerStyle', 'footerStyle', 'bgColor', 'navColor']),
        hideClass() {
            if (this.hide === true) {
                if (this.orientation === 'default') {
                    return 'hide1'
                } else {
                    return 'hide2'
                }
            } else {
                return ''
            }
        },
        orienClass() {
            return this.orientation === "default" ? '' : 'onRight'
        }
    },
    components: {
        'v-loading': loading
    },
    methods: {
        ...mapMutations('styleSelector', ['layoutChange', 'orienChange', 'headerChange', 'footerChange', 'bgColorChange', 'navColorChange']),
        loadShow() {
            if (this.loadMask === false) {
                this.loadMask = true
                setTimeout(() => {
                    this.loadMask = false
                }, 700);
            }
        },
        setStorage() {
            this.loadShow()
            let styleSetting = this.$store.state.styleSelector
            localStorage.setItem('styleSetting', encodeURIComponent(JSON.stringify(styleSetting)))
        }
    }
}
</script>

<style lang="less" scoped>
.style-selector {
  width: 200px;
  position: fixed;
  right: 0;
  top: 120px;
  background: #fff;
  box-shadow: 0px 0px 15px #888888;
  z-index: 10;
  transition: all 0.2s linear;
  .showManange {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #fff;
    left: -40px;
    top: 40px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    text-align: center;
    line-height: 40px;
    border: 1px solid #ccc;
    border-right: 0;
    color: #007aff;
    cursor: pointer;
    .glyphicon {
      animation: rotate 3s linear infinite;
    }
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .selector-wrap {
    .header {
      height: 40px;
      background: #ddd;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
    }
    .configure {
      ul {
        margin: 0;
        .title {
          text-align: center;
          height: 30px;
          line-height: 30px;
          color: rgb(95, 95, 95);
        }
        .structure {
          height: 60px;
          border-bottom: 1px solid #ddd;
          select {
            width: 120px;
            margin-left: 40px;
            background: rgb(241, 241, 241);
            option {
              border: 0 !important;
            }
          }
        }
        .color-style {
          height: 60px;
          border-bottom: 1px solid #ddd;
          ul {
            margin-left: 25px;
            .version,
            .schemes {
              display: inline-block;
              font-size: 0;
              width: 20px;
              height: 20px;
              margin: 0 5px;
              border-radius: 50%;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .color:first-of-type {
        }
      }
    }
  }
  .clear-save {
    display: flex;
    color: #337ab7;
    margin: 5px 0;
    a {
      flex: 1;
      text-align: center;
      cursor: pointer;
    }
  }
}
.onRight {
  left: 0;
  box-shadow: 0px 0px 15px #888888;
  transition: all 0.2s linear;
  .showManange {
    left: 200px;
    transform: rotate(180deg);
  }
}
.hide1 {
  right: -200px;
  box-shadow: 0 0 0 transparent;
}
.hide2 {
  left: -200px;
  box-shadow: 0 0 0 transparent;
}
</style>


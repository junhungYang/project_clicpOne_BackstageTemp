<template>
  <div id="app" :class="bgColor" class="container-fluid">
    <div v-if="mainRender" class="main-wrap" :class="layoutStyle === 'wide' ? 'container-fluid' : 'container'">
      <v-header v-show="true"></v-header>
      <v-withFriends v-show="showState"></v-withFriends>
      <v-styleSelector></v-styleSelector>
      <div v-if="orientation === 'default'" class="cont" :style="contMargin">
        <v-nav></v-nav>
        <router-view></router-view>
      </div>
      <div v-else class="cont" :style="contMargin">
        <router-view></router-view>
        <v-nav></v-nav>
      </div>
      <v-footer></v-footer>
      <div class="modal-mask">
        <v-config></v-config>
      </div>
      <!-- <v-login v-show="false"></v-login> -->
      
    </div>
    <router-view name="login"></router-view>
  </div>
</template>

<script>
import header from './components/header'
import withFriends from './components/withFriends'
import nav from './components/nav'
import dashboard from './components/dashboard'
import config from './components/modalMask/Configuration'
import login from './components/login'
import styleSelector from './components/styleSelector'
import footer from './components/footer'
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      contMargin: ''
    }
  },
  computed: {
    ...mapState('styleSelector', ['layoutStyle', 'orientation', 'headerStyle', 'bgColor']),
    ...mapState('withFriends', ['showState']),
    ...mapState(['mainRender'])
  },
  created() {
    this.getStorage()
    this.contMarginInit()
    window.addEventListener('resize', () => {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.contMarginInit()
      }, 250);
    })
  },
  methods: {
    ...mapMutations('styleSelector', ['styleInit']),
    getStorage() {
      let styleStorage = localStorage.getItem('styleSetting')
      if (styleStorage) {
        let styleObj = JSON.parse(decodeURIComponent(styleStorage))
        this.styleInit(styleObj)
      }
    },
    contMarginInit() {
      if (this.headerStyle === 'fixed') {
        console.log(111)
        if (window.innerWidth < 768) {
          this.contMargin = 'margin-top: 100px'
        } else {
          this.contMargin = 'margin-top: 50px'
        }
      } else {
        this.contMargin = ''
      }
    }
  },
  watch: {
    headerStyle() {
      this.contMarginInit()
    }
  },
  components: {
    'v-header': header,
    'v-withFriends': withFriends,
    'v-nav': nav,
    'v-dashboard': dashboard,
    'v-config': config,
    'v-login': login,
    'v-styleSelector': styleSelector,
    'v-footer': footer
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  position: absolute;
  left: 0;
  right: 0;
  // top: 0;
  // overflow: hidden;
  .main-wrap {
    padding: 0;
    .cont {
      display: flex;
    }
  }
}
.bgColor0 {
  background: rgba(49, 49, 49, 0.9);
}
.bgColor1 {
  background: #fff;
}
.bgColor2 {
  background: #ddd;
}
.bgColor3 {
  background: rgba(22, 22, 22, 0.9);
}
.bgColor4 {
  background: #ccc;
}
</style>


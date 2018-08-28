<template>
  <div class="footer" :class="[layout,fixed,navColor]">
      <div class="theme">2018 © clip-five by xxxxxxxx.</div>
      <div class="glyphicon glyphicon-menu-up" @click="toTop"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState('styleSelector', ['layoutStyle', 'footerStyle', 'navColor']),
    layout() {
      return this.layoutStyle === 'wide' ? 'container-fluid' : 'container'
    },
    fixed() {
      return this.footerStyle === 'default' ? '' : 'fixed'
    }
  },
  methods: {
    toTop() {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (pageYOffset !== 0) {
          scrollBy(0, -20)
        } else {
          clearInterval(this.timer)
        }
      }, 10)

    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  height: 40px;
  //   border-top: 1px solid #ddd;
  background: #f5f5f5;
  display: flex;
  .theme {
    line-height: 40px;
    flex: 1;
  }
  .glyphicon {
    // position: absolute;
    margin-top: 5px;
    width: 30px;
    height: 30px;
    // border: 1px solid red;
    line-height: 20px;
    text-align: center;
    background: rgba(204, 204, 204, 0.178);
    cursor: pointer;
    color: rgb(32, 32, 32);
  }
}
.fixed {
  position: fixed;
  bottom: 0;
  border: 1px solid #ccc;
  z-index: 99;
}
.container-fluid {
  width: 100%;
}
.navColor0 {
  background: #f5f5f5;
}
.navColor1 {
  background: rgb(36, 36, 36);
  border-color: #222222 !important;
  .theme {
    color: #ccc !important;
  }
}
.navColor2 {
  background: #f5f5f5;
  border-color: #ccc !important;
}
.navColor3 {
  background: linear-gradient(to bottom, #466078 0, #334c68 100%);
  border-color: #2d446191 !important;
  .theme {
    color: #ccc !important;
  }
}
.navColor4 {
  background: rgb(57, 73, 34);
  border-color: rgba(20, 27, 9, 0.356) !important;
  .theme {
    color: #ccc !important;
  }
}
</style>

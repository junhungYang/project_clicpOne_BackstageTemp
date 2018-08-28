<template>
  <div class="navInHeader" ref="scrollWrap">
      <ul class="nav-list">
        <li v-for="item in nav" @click="item.childShowState = !item.childShowState">
          <router-link :to="item.to" style="text-decoration: none">
            <div class="nav-item">
              <span class="front-icon" :class="item.icon"></span>
              <span class="nav-name">{{item.name}}</span>
              <span v-if="item.itemList" 
                :class="item.childShowState ? 'glyphicon glyphicon-menu-left' : 'glyphicon glyphicon-menu-down'"
                class="childState-icon"
              ></span>
            </div>
          </router-link>
          <ul v-if="item.itemList" v-show="item.childShowState" class="item-list">
            <li v-for="item1 in item.itemList">
              <span>{{item1.name}}</span>
              <span class="new" v-if="item1.hasNew">new</span>
            </li>
          </ul>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
import Vue from 'vue'
export default {
  data() {
    return {
      itemListState: false,
    }
  },
  mounted() {
    this.scroller = new BScroll(this.$refs.scrollWrap, {
      click: true
    })
  },
  computed: {
    ...mapState('nav', ['nav']),
    ...mapState('header', ['navInHeaderState']),
  },
  watch: {
    navInHeaderState() {
      Vue.nextTick(() => {
        this.scroller.refresh()
        //假如数据非 v-if="false"或 v-show="false"且非网络请求回来的数据的话
        //BScroll对象无需重新refresh,其会自动检测到数据的更新并对scrollerHeight属性作出更新
      })
    }
  }
}
</script>
<style lang="less" scoped>
.navInHeader {
  position: absolute;
  top: 100px;
  width: 100%;
  z-index: 1;
  height: 450px;
  overflow: hidden;
  // border: 1px solid red;
  background: #f5f5f5;
  border-bottom: 1px solid #ccc;
  ul {
    li {
      .nav-item {
        height: 40px;
        border-bottom: 1px solid #ccc;
        display: flex;
        .front-icon {
          width: 40px;
          line-height: 40px;
          text-align: center;
          color: #007aff;
        }
        .nav-name {
          line-height: 40px;
          flex: 1;
        }
        .childState-icon {
          width: 40px;
          line-height: 40px;
          font-size: 12px;
          transform: scale(0.8);
        }
      }
      .item-list {
        li {
          height: 30px;
          line-height: 30px;
          margin-left: 40px;
          position: relative;
          .new {
            position: absolute;
            right: 10px;
            background: #007aff;
            height: 20px;
            line-height: 20px;
            padding: 0 5px;
            border-radius: 10px;
            font-size: 12px;
            transform: scale(0.7);
            color: #fff;
          }
        }
        border-bottom: 1px solid #ccc;
      }
    }
    li:last-of-type .nav-item {
      border: 0;
    }
  }
}
</style>

<template>
  <div class="favorites" :class="favListState" ref="scrollWrap">
    <div class="favorite-list">
      <p class="title">FAVORITES</p>
      <div class="scrollWrap">
        <ul>
          <li v-for="item in favoriteList" @click.stop="moveToChatWin">
              <img :src="item.proPic" alt="">
              <div class="friendMsg">
                  <p class="name">{{item.name}}</p>
                  <p class="job">{{item.job}}</p>
              </div>
              <div>
                  <span class="label label-success"
                    v-if="item.newMsg">{{item.newMsg}}</span>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'
export default {
  data() {
    return {
      favoriteList: []
    }
  },
  computed: {
    ...mapState('withFriends', ['favListState', 'contMod'])
  },
  created() {
    axios.get('/clipfive/favourite').then(res => {
      if (res.data.code === 0) {
        this.favoriteList = res.data.data
        this.scroller = new BScroll(this.$refs.scrollWrap, {
          click: true
        })
        console.log(this.scroller)
      }
    })
  },
  methods: {
    ...mapMutations('withFriends', ['moveToChatWin'])
  },
  watch: {
    contMod() {
      if (this.contMod === 1) {
        Vue.nextTick(() => {
          this.scroller.refresh()
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.favorites {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  background: rgb(245, 245, 245);
  overflow: hidden;
  transform: translateX(-100%);
  transition: all 0.2s ease-out;
  .favorite-list {
    .title {
      height: 30px;
      line-height: 30px;
      margin-left: 7px;
      color: rgb(100, 100, 100);
    }
    ul {
      li {
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 5px 7px 5px 7px;
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .friendMsg {
          flex: 1;
          margin-left: 8px;
          .name {
            font-size: 14px;
          }
          .job {
            color: #bbb;
          }
        }
        div:last-of-type {
          line-height: 40px;
          .online {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #5cb85c;
          }
        }
      }
    }
  }
}
.active {
  transform: translateX(0%);
}
</style>


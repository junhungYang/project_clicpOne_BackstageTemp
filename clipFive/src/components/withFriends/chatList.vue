<template>
  <div class="chat" :class="chatListState" ref="scrollWrap">
      <div class="scroller">
          <div class="online-list">
              <p class="title">ON-LINE</p>
              <ul>
                  <li v-for="item in onLine " @click.stop="moveToChatWin">
                      <img :src="item.proPic" alt="">
                      <div class="friendMsg">
                          <p class="name">{{item.name}}</p>
                          <p class="job">{{item.job}}</p>
                      </div>
                      <div>
                          <span class="label label-success"
                            v-if="item.newMsg">{{item.newMsg}}</span>
                          <span class="online"></span>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="offline-list">
              <p class="title">OFF-LINE</p>
                <ul>
                  <li v-for="item in offLine" @click.stop="moveToChatWin">
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
            onLine: [],
            offLine: []
        }
    },
    computed: {
        ...mapState('withFriends', ['chatListState'])
    },
    created() {
        axios.get('/clipfive/chatList').then(res => {
            if (res.data.code === 0) {
                this.onLine = res.data.data.onLine;
                this.offLine = res.data.data.offLine
            }
        })
    },
    mounted() {
        this.scroller = new BScroll(this.$refs.scrollWrap, {
            click: true
        })
    },
    methods: {
        ...mapMutations('withFriends', ['moveToChatWin'])
    }
}
</script>
<style lang="less" scoped>
.chat {
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: all 0.25s ease-out;
  .scroller {
    .online-list,
    .offline-list {
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
    .offline-list {
      li {
        padding-right: 18px !important;
      }
    }
  }
}
.active {
  transform: translateX(0%);
}
</style>

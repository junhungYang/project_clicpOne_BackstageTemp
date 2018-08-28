<template>
    <div class="chatWindow">
            <div class="back" @click.stop="backToChatList">
                <span class="glyphicon glyphicon-menu-left"></span>
                <span>BACK</span>
            </div>
            <div class="input-box">
                <input type="text" v-model="value" @keyup.enter="sendMsg">
                <button class="btn btn-success" @click.stop="sendMsg">
                    <span class="glyphicon glyphicon-menu-right"></span>
                </button>
            </div>
            <div class="chat-wrap" ref="scrollWrap">
                <ul>
                    <li v-for="item in chatHistory" :class="item.sender === 'friend' ? 'friendChat' : 'myChat'">
                      <div class="chat-box">
                        <template v-if="item.sender === 'friend'">
                          <img :src="item.propic" alt="">
                          <div class="chat-cont">
                            {{item.cont}}
                            <div class="time" v-if="item.date">{{item.date}}</div>
                          </div>                        
                        </template>
                        <template v-else> 
                          <img :src="myProPic" alt=""> 
                          <div class="chat-cont">
                            {{item.cont}}
                            <div class="time" v-if="item.date">{{item.date}}</div>
                          </div>
                                                
                        </template>
                      </div>
                    </li>
                </ul>
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
      chatHistory: [],
      value: 'Type a message here...',
      myProPic: '/static/img/11.jpg'
    }
  },
  computed: {
    ...mapState('withFriends', ['inChat', 'inFav'])
  },
  created() {
    this.chatHistory = JSON.parse(decodeURIComponent(localStorage.getItem('chatHistory')))
  },
  mounted() {
    this.scroller = new BScroll(this.$refs.scrollWrap, {
      click: true
    })
    this.scroller.scrollTo(0, this.scroller.wrapperHeight - this.scroller.scrollerHeight, 0)
  },
  methods: {
    ...mapMutations('withFriends', ['backToChatList']),
    sendMsg() {
      let value = this.value
      let item = {
        sender: 'me',
        date: false,
        cont: value
      }
      this.chatHistory.push(item)
      localStorage.setItem("chatHistory", encodeURIComponent(JSON.stringify(this.chatHistory)));
      this.value = ''
    },
    scrollRefresh() {
      Vue.nextTick(() => {
        this.scroller.refresh()
        this.scroller.scrollTo(0, this.scroller.wrapperHeight - this.scroller.scrollerHeight, 250)
      })
    }
  },
  watch: {
    chatHistory() {
      this.scrollRefresh()
    },
    inChat() {
      if (this.inChat === "active") {
        //因用户会点击不同的friend,所以当chatWinState状态为active时,应从新获取storage
        //由于这里使用的是模拟storage,暂不作处理。
        console.log(123465)
        this.scrollRefresh()
      }
    },
    inFav() {
      if (this.inFav === "active") {
        //因用户会点击不同的friend,所以当chatWinState状态为active时,应从新获取storage
        //由于这里使用的是模拟storage,暂不作处理。
        console.log(123465)
        this.scrollRefresh()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.chatWindow {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  background: rgb(245, 245, 245);
  padding: 0 5%;
  overflow: hidden;
  .back {
    height: 30px;
    line-height: 30px;
    color: #999;
    cursor: pointer;
    .glyphicon {
      transform: scale(0.7);
    }
  }
  .back:hover {
    color: rgb(39, 39, 39);
  }
  .input-box {
    display: flex;
    padding: 10px 0 20px 0;
    input {
      flex: 1;
      padding: 0 5px;
    }
    .btn {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }
  }
  .chat-wrap {
    position: absolute;
    top: 94px;
    bottom: 0;
    width: 90%;
    overflow: hidden;
    ul {
      overflow: hidden;
      .friendChat,
      .myChat {
        padding: 8px 0;
        min-height: 50px;
        .chat-box {
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
          .chat-cont {
            // flex: 1;
            max-width: 170px;
            display: inline-block;
            padding: 10px;
            margin-top: 10px;
            position: relative;
            border-radius: 4px;
          }
          .chat-cont::after {
            content: "";
            position: absolute;
            display: block;
            width: 20px;
            height: 20px;
            border-right: 10px solid transparent;
            border-left: 10px solid transparent;
          }
          .time {
            font-family: myriad-It;
            text-align: right;
          }
        }
      }
      .friendChat {
        .chat-box {
          overflow: hidden;
          img {
            margin-right: 20px;
            float: left;
          }
          .chat-cont {
            background: #e5e5ea;
            float: left;
          }
          .chat-cont::after {
            left: -10px;
            top: 0;
            border-top: 10px solid #e5e5ea;
          }
        }
      }
      .myChat {
        .chat-box {
          overflow: hidden;
          img {
            margin-left: 20px;
            float: right;
          }
          .chat-cont {
            background: #33ca22;
            color: #fff;
            float: right;
          }
          .chat-cont::after {
            right: -10px;
            top: 0;
            border-top: 10px solid #33ca22;
          }
        }
      }
    }
  }
}
</style>


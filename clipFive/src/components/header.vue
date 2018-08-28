<template>
<div :class="[fixed,layout,navColor,fuild]">
    <div class="header row">
    <div class="brand col-xs-12 col-sm-4">
        <span class="brand-name">CLIP-FIVE</span>
        <span class="navInHeader-btn glyphicon glyphicon-th-large" 
          @click="navInHeaderShow"  ></span>
    </div>
    <div class="navInHeader" v-show="navInHeaderState">
        <v-navInHeader></v-navInHeader>
    </div>
    <div class="header-nav col-xs-12 col-sm-8">
        <ul class="remind" v-show="remindShow">
            <li  @mouseover.stop=" penddingTaskShow" @mouseout.stop="penddingTaskClose" @click.stop="penddingTaskClick">
                <i class="glyphicon glyphicon-th-list"></i>
                <span class="quantity">{{quantity.tasks}}</span>
                <div class="pendding-task" v-show="penddingTaskState">
                    <v-penddingTask></v-penddingTask>
                </div>
            </li>
            <li  @mouseover.stop="notificationsShow" @mouseout.stop="notificationsClose" @click.stop="notificationsClick">
                <i class="glyphicon glyphicon-exclamation-sign"></i>
                <span class="quantity">{{quantity.notifications}}</span>
                <div  class="notifications" v-show="notificationsState">
                    <v-notifications></v-notifications>
                </div>
            </li>
            <li @mouseover.stop="messagesShow" @mouseout.stop="messagesClose" @click.stop="messagesClick">
                <i class="glyphicon glyphicon-comment"></i>
                <span class="quantity">{{quantity.messages}}</span>
                <div class="messages" v-show="messagesState">
                    <v-messages></v-messages>   
                </div>
            </li>  
        </ul>
        <div class="my-msg" @mouseover.stop="aboutMeShow" @mouseout.stop="aboutMeClose" @click.stop="aboutMeClick">
            <div class="name-propic">
                <img src="/static/img/1.jpg" alt="">
                <span>peter Clark</span>
                <i class="glyphicon glyphicon-menu-down"></i>
            </div>
            <div class="aboutMe" v-show="aboutMeState">
                <v-aboutme></v-aboutme>
            </div>
        </div>
        <div class="chat-btn glyphicon glyphicon-tasks" @click.stop="showStateChange"></div>
    </div>
  </div>
</div>

</template>

<script>
import penddingTask from './header/penddingTask'
import notifications from './header/notifications'
import messages from './header/messages'
import aboutMe from './header/aboutMe'
import navInHeader from './header/navInHeader'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      fuild: '',
      remindShow: true,
      mouseFlag: true
    }
  },
  created() {
    this.fuildInit()
    this.resizeInit()
  },
  components: {
    'v-penddingTask': penddingTask,
    'v-notifications': notifications,
    'v-messages': messages,
    'v-aboutme': aboutMe,
    'v-navInHeader': navInHeader
  },
  computed: {
    ...mapState('header', [
      'navInHeaderState',
      'penddingTaskState',
      'notificationsState',
      'messagesState',
      'aboutMeState',
      'quantity'
    ]),
    ...mapState('styleSelector', ['headerStyle', 'layoutStyle', 'navColor']),
    fixed() {
      return this.headerStyle === 'fixed' ? 'fixed' : ''
    },
    layout() {
      return this.layoutStyle === 'wide' ? 'container-fluid' : 'container'
    }
  },
  methods: {
    ...mapMutations('header', [
      'navInHeaderShow',
      'penddingTaskShow',
      'penddingTaskClose',
      'penddingTaskClick',
      'notificationsShow',
      'notificationsClose',
      'notificationsClick',
      'messagesShow',
      'messagesClose',
      'messagesClick',
      'aboutMeShow',
      'aboutMeClose',
      'aboutMeClick',
    ]),
    ...mapMutations('withFriends', ['showStateChange']),
    fuildInit() {
      if (window.innerWidth <= 768) {
        this.fuild = 'container-fluid'
      } else {
        this.fuild = ''
      }
    },
    resizeInit() {
      if (innerWidth < 350) {
        this.remindShow = false
      }
      window.addEventListener('resize', () => {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.fuildInit()
          if (innerWidth > 768 && this.navInHeaderState === true) {
            this.navInHeaderShow()
          }
        }, 250);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header {
  .header-nav {
    height: 51px;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #ccc;
    margin: 0 !important;
    z-index: 10;
    .remind,
    .my-msg,
    .chat-btn {
      color: #979797;
    }
    .remind {
      .pendding-task,
      .notifications,
      .messages {
        box-shadow: 0px 0px 7px rgba(83, 83, 83, 0.404);
      }
      li {
        padding: 0 15px;
        font-size: 16px;
        position: relative;
        display: inline-block;
        cursor: pointer;
        i {
          line-height: 50px;
        }
        span {
          position: absolute;
          left: 0px;
          top: 10px;
          // background: #007aff;
          width: 23px;
          height: 15px;
          border-radius: 7px;
          text-align: center;
          line-height: 15px;
          color: #fff;
          font-size: 12px;
        }
      }
      li:hover {
        background: rgba(204, 204, 204, 0.459);
        .glyphicon {
          color: rgb(29, 29, 29);
        }
        // .pendding-task,
        // .notifications,
        // .messages {
        //   display: block !important;
        // }
      }
    }
    .my-msg {
      line-height: 50px;
      cursor: pointer;
      padding-left: 10px;
      padding-right: 10px;
      margin-right: 30px;
      .aboutMe {
        box-shadow: 0px 0px 7px rgba(83, 83, 83, 0.404);
      }
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
      span {
        margin-left: 5px;
        color: rgb(121, 121, 121);
        font-family: Arial;
      }
      i {
        font-size: 12px;
        transform: scale(0.7);
        color: #ccc;
      }
    }
    .chat-btn {
      line-height: 50px;
      width: 50px;
      text-align: center;
      position: absolute;
      right: 0;
      cursor: pointer;
      &:hover {
        background: rgba(255, 255, 255, 0.199);
      }
    }
  }
  .brand {
    height: 51px;
    border-bottom: 1px solid #ccc;
    position: relative;
    .brand-name {
      font-size: 30px;
      line-height: 50px;
      color: #666;
      width: 100%;
      font-family: myriad-Thin;
    }
    .navInHeader-btn {
      position: absolute;
      right: 0;
      height: 50px;
      width: 50px;
      line-height: 50px;
      color: #979797;
      display: none;
      text-align: center;
    }
  }
  @media screen and (max-width: 767px) {
    .header-nav {
      background: #f5f5f5;
    }
    .brand {
      .navInHeader-btn {
        display: inline-block;
      }
    }
  }
}
.fixed {
  // width: 100%;
  position: fixed;
  top: 0;
  z-index: 20;
}
.container-fluid {
  width: 100%;
}
.navColor0 {
  background: rgba(255, 255, 255, 0.952);
  .quantity {
    background: #007aff;
  }
}
.navColor1 {
  background: rgba(17, 17, 17, 0.9);
  .quantity {
    background: #d9534f;
  }
  .brand,
  .header-nav {
    border-color: #ccc !important;
  }
}
.navColor2 {
  background: rgba(35, 35, 35, 0.9);
  .quantity {
    background: #000;
  }
}
.navColor3 {
  background: linear-gradient(to bottom, #466078 0, #334c68 100%);
  .brand,
  .header-nav {
    border-color: #ccc !important;
  }
  .quantity {
    background: #d9534f;
  }
}
.navColor4 {
  background: rgba(38, 53, 17, 0.9);
  .quantity {
    background: #e6674a;
  }
  .brand,
  .header-nav {
    border-color: #ccc !important;
  }
}
.navColor1,
.navColor2,
.navColor3,
.navColor4 {
  .brand-name {
    color: #ddd !important;
  }
  .my-msg:hover {
    background: rgba(255, 255, 255, 0.199) !important;
  }
  .remind li:hover {
    background: rgba(255, 255, 255, 0.199) !important;
  }
}
</style>

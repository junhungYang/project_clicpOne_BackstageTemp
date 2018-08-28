<template>
  <transition name="friends">
      <div class="withFriends" v-show="false">
      <ul class="nav nav-tabs">
        <li v-for="item,index in nav" 
        :class="index === active ? 'active' : ''"
        @click.stop="changeActive(index)">
          <a href="javascript:void()">{{item.name}}</a>
        </li>
      </ul>
      <div class="cont">
        <div class="chatMod" v-show="contMod === 0">
            <v-chatList></v-chatList>
            <div class="inChat" :class="inChat">
              <v-chatWindow></v-chatWindow>
            </div>
        </div>
        <div class="favouriteMod"  v-show="contMod === 1">
          <v-favorites></v-favorites>
          <div class="inFav" :class="inFav">
            <v-chatWindow></v-chatWindow>
          </div>
        </div>
          <v-setting  v-show="contMod === 2"></v-setting>
      </div>
    </div>
  </transition>
</template>

<script>
import chatList from './withFriends/chatList'
import chatWindow from './withFriends/chatWindow'
import settings from './withFriends/settings'
import favorites from './withFriends/favorites'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      nav: [{
        name: 'Home'
      }, {
        name: 'Profile'
      }, {
        name: 'Message'
      }],
      active: 0,
    }
  },
  computed: {
    ...mapState('withFriends', ['contMod', 'inChat', 'inFav'])
  },
  components: {
    'v-chatList': chatList,
    'v-chatWindow': chatWindow,
    'v-setting': settings,
    'v-favorites': favorites
  },
  methods: {
    ...mapMutations('withFriends', ['changeMod']),
    changeActive(index) {
      this.changeMod(index)
      this.active = index
    }
  }
}
</script>
<style lang="less" scoped>
.withFriends {
  position: fixed;
  top: 51px;
  bottom: 0;
  width: 270px;
  right: 0;
  z-index: 99;
  // border-left: 1px solid #ddd;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.26);
  .cont {
    background: rgb(245, 245, 245);
    position: absolute;
    width: 100%;
    top: 39px;
    bottom: 0;
    border-left: 1px solid #ddd;
    overflow: hidden;
    .chatMod {
      .inChat {
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        transform: translateX(100%);
        transition: all 0.25s ease-out;
      }
      .active {
        transform: translateX(0%);
      }
    }
    .favouriteMod {
      .inFav {
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        transform: translateX(100%);
        transition: all 0.2s ease-out;
      }
      .active {
        transform: translateX(0%);
      }
    }
  }
  .nav {
    background: rgb(236, 236, 236);
    .active {
      a {
        background: rgb(245, 245, 245) !important;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .withFriends {
    top: 50px;
  }
}
@media screen and (max-width: 450px) {
  .withFriends {
    top: 100px;
  }
}
</style>

const state = {
  navInHeaderState: false,
  penddingTaskState: false,
  notificationsState: false,
  messagesState: false,
  aboutMeState: false,
  taskList: [],
  navRender: false,
  quantity: {
    tasks: 0,
    notifications: 0,
    messages: 0
  }
}

const getters = {

}

const mutations = {
  navInHeaderShow(state) {
    state.navInHeaderState = !state.navInHeaderState
  },
  penddingTaskShow(state) {
    if (innerWidth < 769) {
      return
    }
    state.penddingTaskState = true
  },
  penddingTaskClose(state) {
    if (innerWidth < 769) {
      return
    }
    state.penddingTaskState = false
  },
  penddingTaskClick(state) {
    if (innerWidth >= 769) {
      return
    }
    state.penddingTaskState = !state.penddingTaskState
  },
  notificationsShow(state) {
    if (innerWidth < 769) {
      return
    }
    state.notificationsState = true
  },
  notificationsClose(state) {
    if (innerWidth < 769) {
      return
    }
    state.notificationsState = false
  },
  notificationsClick(state) {
    if (innerWidth >= 769) {
      return
    }
    state.notificationsState = !state.notificationsState
  },
  messagesShow(state) {
    if (innerWidth < 769) {
      return
    }
    state.messagesState = true
  },
  messagesClose(state) {
    if (innerWidth < 769) {
      return
    }
    state.messagesState = false
  },
  messagesClick(state) {
    if (innerWidth >= 769) {
      return
    }
    state.messagesState = !state.messagesState
  },
  aboutMeShow(state) {
    if (innerWidth < 769) {
      return
    }
    state.aboutMeState = true
  },
  aboutMeClose(state) {
    if (innerWidth < 769) {
      return
    }
    state.aboutMeState = false
  },
  aboutMeClick(state) {
    if (innerWidth >= 769) {
      return
    }
    state.aboutMeState = !state.aboutMeState
    console.log(state.aboutMeState)
  },
  taskListInit(state, payload) {
    state.taskList = payload
  },
  quantityInit(state, payload) {
    switch (payload.kind) {
      case 'tasks':
        state.quantity.tasks = payload.quantity
        break;
      case 'notifications':
        state.quantity.notifications = payload.quantity
        break;
      case 'messages':
        state.quantity.messages = payload.quantity
    }
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

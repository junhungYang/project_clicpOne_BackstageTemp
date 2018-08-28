const state = {
  spread: false,
  nav: [{
      name: "Dashboard",
      icon: "glyphicon glyphicon-home",
      to: 'dashboard'
    }, {
      name: "Login",
      icon: "glyphicon glyphicon-user",
      childShowState: false,
      to: 'login',
      itemList: [{
          name: "Login Form Example 1",
          new: false
        },
        {
          name: "Login Form Example 2",
          new: false
        }
      ]
    }, {
      name: "Layouts",
      icon: "glyphicon glyphicon-stats",
      to: '',
      childShowState: false,
      itemList: [{
          name: "Horizontal Menu",
          hasNew: true
        },
        {
          name: "Sidebar closed",
          hasNew: false
        },
        {
          name: "Boxed Layout",
          hasNew: false
        },
        {
          name: "Footer Fixed",
          hasNew: false
        },
        {
          name: "RTL Version",
          hasNew: false
        }
      ]
    },
    {
      name: "Frontend Theme",
      icon: "glyphicon glyphicon-share-alt",
      to: 'theme'
    },
    {
      name: "UI Lab",
      icon: "glyphicon glyphicon-asterisk",
      childShowState: false,
      to: 'UI_Lab',
      itemList: [{
          name: "Elements",
          hasNew: false
        },
        {
          name: "Button & icons",
          hasNew: false
        },
        {
          name: "CSS3 Animation",
          hasNew: true
        },
        {
          name: "Extended Modals",
          hasNew: false
        },
        {
          name: "Tabs & Accordions",
          hasNew: false
        },
        {
          name: "Sliders",
          hasNew: false
        },
        {
          name: "Treeview",
          hasNew: false
        },
        {
          name: "Nestable List",
          hasNew: false
        },
        {
          name: "Typography",
          hasNew: false
        }
      ]
    },
    {
      name: "Tables",
      icon: "glyphicon glyphicon-th",
      childShowState: false,
      to: 'tables',
      itemList: [{
          name: "staic Tables",
          new: false
        },
        {
          name: "Responsive Tables",
          new: false
        },
        {
          name: "Data Tables",
          new: false
        },
        {
          name: "Table Export",
          new: false
        }
      ]
    },
    {
      name: "Forms",
      icon: "glyphicon glyphicon-pencil",
      childShowState: false,
      to: 'forms',
      itemList: [{
          name: "Form Elements",
          new: false
        },
        {
          name: "Form Wizard",
          new: false
        },
        {
          name: "Form validation",
          new: false
        },
        {
          name: "Inline Editor",
          new: false
        },
        {
          name: "Form X-editable",
          new: false
        },
        {
          name: "Image Cropping",
          new: false
        },
        {
          name: "Image Cropping",
          new: false
        },
        {
          name: "Multiple File Upload",
          new: false
        },
        {
          name: "Dropzone File Upload",
          new: false
        }
      ]
    }, {
      name: "Pages",
      icon: "glyphicon glyphicon-list-alt",
      childShowState: false,
      to: 'pages',
      itemList: [{
          name: "User Profile",
          new: false
        },
        {
          name: "Invoice",
          new: true
        },
        {
          name: "Gallery",
          new: false
        },
        {
          name: "Timeline",
          new: false
        },
        {
          name: "calendar",
          new: false
        },
        {
          name: "Messages",
          new: false
        },
        {
          name: "Blank Page",
          new: false
        }
      ]
    },
    {
      name: "Utility",
      icon: "glyphicon glyphicon-paperclip",
      childShowState: false,
      to: 'utility',
      itemList: [{
          name: "Faq",
          new: false
        },
        {
          name: "search Results",
          new: true
        },
        {
          name: "Lock Screen",
          new: false
        },
        {
          name: "Error 404 Example 1",
          new: false
        },
        {
          name: "Error 404 Example 2",
          new: false
        },
        {
          name: "Error 404 Example 3",
          new: false
        },
        {
          name: "Error 500 Example 1",
          new: false
        },
        {
          name: "Error 500 Example 2",
          new: false
        },
        {
          name: "Pricing Table",
          new: false
        },
        {
          name: "Cooming Soon",
          new: false
        }
      ]
    },
    {
      name: "3 Level Menu",
      icon: "glyphicon glyphicon-folder-open",
      childShowState: false,
      to: '3levelMenu',
      itemList: [{
          name: "Item1",
          new: false
        },
        {
          name: "Item2",
          new: true
        },
        {
          name: "Item3",
          new: false
        }
      ]
    },
    {
      name: "4 Level Menu",
      icon: "glyphicon glyphicon-folder-open",
      childShowState: false,
      to: '4levelMenu',
      itemList: [{
          name: "Item1",
          new: false
        },
        {
          name: "Item2",
          new: true
        },
        {
          name: "Item3",
          new: false
        }
      ]
    },
    {
      name: "Maps",
      icon: "glyphicon glyphicon-map-marker",
      to: 'maps'
    },
    {
      name: "Charts",
      icon: "glyphicon glyphicon-object-align-bottom",
      to: 'charts'
    }
  ]
}

const getters = {

}

const mutations = {
  spreadOperate(state, payload) {
    if (typeof payload === 'boolean') {
      state.spread = payload
    } else {
      state.spread = !state.spread
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

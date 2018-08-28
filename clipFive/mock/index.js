import Mock from 'mockjs'
import data from '../data.json'

Mock.mock('/clipfive/penddingTask', {
  code: 0,
  codeMsg: '成功',
  data: data.header.penddingTask
})
Mock.mock('/clipfive/notifications', {
  code: 0,
  codeMsg: '成功',
  data: data.header.notifications
})
Mock.mock('/clipfive/messages', {
  code: 0,
  codeMsg: '成功',
  data: data.header.messages
})
Mock.mock('/clipfive/chatList', {
  code: 0,
  codeMsg: '成功',
  data: data.withFriends.chatList
})
Mock.mock('/clipfive/favourite', {
  code: 0,
  codeMsg: '成功',
  data: data.withFriends.favourite
})
Mock.mock('/clipfive/login', {
  code: 0,
  codeMsg: '成功',
  data: data.login
})

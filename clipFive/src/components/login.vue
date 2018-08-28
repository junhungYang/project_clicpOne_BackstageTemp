<template>
    <div class="login container">
        <div class="row">
            <header>CLIP-FIVE</header>
            <div class="login-box col-sm-6">
                <div class="title">Sign in to your account</div>
                <div class="desc">Please enter your name and password to log in.</div>
                <div class="bg-danger loginError" v-show="loginError">You have some form errors. Please check below.</div>
                <form onsubmit="return false">
                    <div class="username has-error">
                        <label class="control-label glyphicon glyphicon-user" for="username"></label>
                        <input type="text" class="form-control" id="username" placeholder="id is 393607191@qq.com" v-model="username">
                    </div>
                    <div class="error" v-show="usernameError">please input a E-mail</div>
                    <div class="password has-error">
                        <label class="control-label glyphicon glyphicon-lock" for="ps"></label>
                        <input type="password" class="form-control" id="ps" placeholder="password" v-model="ps">
                    </div>
                    <div class="error" v-show="psError">Passwords need at least 8 digits.</div>
                    <div class="login-btn">
                        <div class="keep">
                            <input type="checkbox">
                            <label for="">Keep me signed in</label>
                        </div>
                        <div class="">
                            <div class="btn btn-danger" @click="login">login</div>
                        </div>
                    </div>
                </form>
                <div class="create">
                    Don't have an account yet? 
                    <a href="#">Create an account</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            username: '',
            usernameReg: /@(\w+\.\w+)/,
            usernameError: false,
            psReg: /\w{8,}/,
            psError: false,
            ps: '',
            loginError: false,
            hasID: false
        }
    },
    mounted() {
        this.noRender()
    },
    methods: {
        ...mapMutations(['noRender']),
        login() {
            // let username=this.username
            // let ps = this.ps
            // axios.post('/clipfive/login',{username:username,ps:ps}).then(res => {
            //     if (res.data.code === 0) {
            //         //localstorage存取返回的用户信息用于渲染头像昵称等
            //         location.reload()
            //         //重新加载文档，把后端返回的cookie作为data发送ajax,获取个性化信息
            //     } else {
            //         //this.loginError = true
            //     }
            // })

            if (this.username === '393607191@qq.com' && this.ps.length >= 8) {
                location.assign('http://localhost:8080')
            } else {
                this.loginError = true
            }
        }
    },
    watch: {
        username() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                if (this.usernameReg.test(this.username) || this.username === '') {
                    this.usernameError = false
                } else {
                    this.usernameError = true
                }
            }, 300);
        },
        ps() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                if (this.psReg.test(this.ps) || this.ps === '') {
                    this.psError = false
                } else {
                    this.psError = true
                }
            }, 300);
        }
    }
}
</script>
<style lang="less" scoped>
@media screen and (min-width: 650px) {
  .login {
    width: 100%;
    min-height: 100vh;
    background: rgb(65, 65, 65);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    .row {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
    }
    header {
      color: #ccc;
      font-size: 40px;
      font-family: myriad-Thin;
      text-align: center;
    }
    .login-box {
      background: #fff;
      border-radius: 10px;
      width: 100%;
      .title {
        font-size: 22px;
        color: rgb(78, 78, 78);
        padding-top: 20px;
      }
      .desc {
        margin-top: 10px;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .login {
    width: 100%;
    min-height: 100vh;
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    header {
      color: rgb(107, 107, 107);
      font-size: 25px;
      font-family: myriad-Thin;
      margin-top: 120px;
      text-align: center;
    }
    .login-box {
      margin: 0 15px;
      .title {
        font-size: 16px;
        color: rgb(78, 78, 78);
        padding-top: 15px;
        text-align: center;
      }
      .desc {
        margin-top: 10px;
        text-align: center;
      }
    }
  }
}
.login-box {
  .loginError {
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
  }
  form {
    .username,
    .password {
      margin-top: 15px;
      width: 100%;
      height: 30px;
      padding: 2px 0;
      // border: 1px solid #a94442;
      // display: flex;
      position: relative;
      label {
        color: rgb(59, 59, 59);
        position: absolute;
        left: 10px;
        top: 12px;
      }
      input {
        text-indent: 2em;
      }
    }
    .error {
      margin: 15px 0 0 15px;
      color: #a94442;
    }
  }
  .login-btn {
    margin-top: 20px;
    display: flex;
    .keep {
      flex: 1;
      line-height: 32px;
      input {
        margin: 0;
        vertical-align: middle;
        height: 16px;
        width: 16px;
      }
      label {
        margin: 0;
        vertical-align: middle;
        font-size: 14px;
        font-family: Arial;
        font-weight: 400;
        color: rgb(131, 131, 131);
        margin-left: 5px;
      }
    }
  }
  .create {
    padding: 15px 0;
  }
}
</style>




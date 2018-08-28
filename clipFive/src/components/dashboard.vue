<template>
    <div class="dashboard">
       <v-contHeader :headerText="headerText"></v-contHeader>
       <div class="main">
           <div class="overview">
                <header>
                    <span>Dashboard</span>
                    <span>overview &amp; stats</span>
                </header>   
                <v-overview></v-overview>
           </div>
           <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-8">
                        <v-siteVisits></v-siteVisits>
                    </div>
                    <div class="col-sm-4">
                        <v-acquisition></v-acquisition>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-8">
                        <v-usersList></v-usersList>
                    </div>
                    <div class="col-sm-4">
                        <v-taskList></v-taskList>
                    </div>
                </div>
           </div>
       </div>
    </div>
</template>
<script>
import contHeader from './contHeader/contHeader'
import overview from './dashboard/overview'
import siteVisits from './charts/siteVisits'
import acquisition from './charts/acquisition'
import usersList from './dashboard/users'
import taskList from './dashboard/taskIndashboard'
export default {
    data() {
        return {
            headerText: {
                icon: "glyphicon glyphicon-home",
                main: 'Home',
                sur: 'Dashboard',
            }
        }
    },
    components: {
        'v-contHeader': contHeader,
        'v-overview': overview,
        'v-siteVisits': siteVisits,
        'v-acquisition': acquisition,
        'v-usersList': usersList,
        'v-taskList': taskList
    }
}
</script>
<style lang="less" scoped>
.dashboard {
  flex: 1;
  width: 100%;
  padding-bottom: 50px;
  border-bottom: 1px solid #ccc;
  background: #fff;
  .main {
    margin: 0 10px;
    .overview {
      header {
        height: 80px;
        border-bottom: 1px solid rgb(235, 235, 235);
        color: #777;
        span:first-of-type {
          display: inline-block;
          height: 100%;
          font-size: 36px;
          font-family: myriad-Thin;
          line-height: 80px;
        }
        span:last-of-type {
          font-family: myriad-Thin;
          font-size: 16px;
        }
      }
    }
  }
}
</style>



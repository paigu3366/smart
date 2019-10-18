<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/" class="infor"><img src="./assets/information.png" alt=""></router-link>
      <router-link to="/about" class="set"><img src="./assets/add.png" alt=""></router-link>
    </div> -->
    <router-view/>

    <footer class="footer">
      <div class="first">
            <img src="./assets/firsth.png" alt="">
            <span>首页</span>
        </div>
     <div class="plan">
            <img src="./assets/planh.png" alt="">
            <span>计划</span>
        </div>
        <div class="trends" @click="trends">
            <img src="./assets/trendsy.png" alt="">
            <span>动态</span>
        </div>
       <div class="myself" @click="myself">
            <img src="./assets/myselfh.png" alt="">
            <span>我的</span>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  methods:{
    myself(){
      this.$router.push({
        path:'/Myself'
      })
    },
    trends(){
      this.$router.push({
        path:'/'
      })
    }
  }
}
</script>

<style lang="scss">
*{margin: 0;padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
    position: absolute;
    width: 100%;
    /* padding: 1vw; */
    height: 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }


    .infor,
    .set{
       width: 50%;
       height: 15vw;
       display: flex;
       align-items: center;
       padding: 4vw;
    }
    .infor img{
         width: 6vw;
    }
    .set{
        display: flex;
        flex-direction: row-reverse;        
    }
    .set img{
        width: 6vw;
        margin-right: 1vw;
        }
}

/* footer */
footer{
    width: 100%;
    height: 15vw;
    border: 1px RGB(236,236,236) solid;
    background-color: RGB(254,254,254) ;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img{
        width: 6vw;
    }
    span{
        font-size: 3vw;
    }
    .first,
    .plan,
    .trends,
    .myself{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>

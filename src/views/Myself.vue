<template>
    <div id="Myself">
        <header>
        <div class="infor">
            <img src="../assets/information.png" alt="">
        </div>
        <div class="set">
            <img src="../assets/set.png" alt="">
        </div>
        </header>
        <div class="top">
            <div class="head">
                <img :src="imgURL" alt="">
            </div>
            <span><img src="../assets/v1.png" alt="">  {{username}}</span>
        </div>
        <div class="body">
            <div class="collect-followers">
                
                <div class="attention">
                    <img src="../assets/attention.png" alt="">
                    <span>关注</span>
                </div>
                <div class="fans">
                    <img src="../assets/fans.png" alt="">
                    <span>粉丝</span>
                </div>
            </div>
            <div class="servel">
                <div class="servel-top">
                    <div class="small">
                        <img src="../assets/bans.png" alt="">
                        <span>我的钱包</span>
                    </div>
                    <div class="small">
                        <img src="../assets/vip.png" alt="">
                        <span>会员服务</span>
                    </div>
                    <div class="small">
                        <img src="../assets/order.png" alt="">
                        <span>我的订单</span>
                    </div>
                    <div class="small">
                        <img src="../assets/collect.png" alt="">
                        <span>我的收藏</span>
                    </div>
                </div>
                <div class="servel-bottom">
                    <div class="small">
                        <img src="../assets/bans.png" alt="">
                        <span>我的钱包</span>
                    </div>
                    <div class="small">
                        <img src="" alt="">
                        <span></span>
                    </div>
                    <div class="small">
                        <img src="" alt="">
                        <span></span>
                    </div>
                    <div class="small">
                        <img src="" alt="">
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="tripFoot">
                <button @click="href"><img src="../assets/foot.png" alt=""> 我的足迹 </button>
            </div>
            
            
        </div>
    <!-- <HelloWorld> -->
    </div>
</template>

<script>


export default {
  methods:{
      href(){
         this.$router.push({
            path:'./Href'
         })
      }
  }
}
</script>

<style lang="scss">
header{
    width: 100%;
    /* padding: 1vw; */
    height: 10vw;
    background-color: RGB(84,181,247);
    display: flex;
    justify-content: space-between;
    align-items: center;

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

/* head */
.top{
    width: 100%;
    height: 45vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: RGB(84,181,247);

    span{
        margin-bottom: 10vw;
        font-size: 4vw;
        color: red;
        font-family: 楷体;
    }
    span img{
        width: 4vw;
    }
    .head{
        width: 20vw;
        height: 20vw;
        border: 1px #ccc solid;
        border-radius: 50%;
        margin-bottom: 2vw;
    }
    .head img{
        width: 20vw;
        border-radius: 50%;
    }

}

/* body */

.body{
    width: 100%;
    height: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    .collect-followers{
        width: 90%;
        height: 10vw;
        top: 50vw;
        border-radius: 2vw;
        position: absolute;
        background-color: RGB(254,254,254);
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .collect-followers .attention,
    .collect-followers .fans{
        width: 15vw;
        display: flex;
        justify-content: space-around;
    }
        .collect-followers img{width: 5vw;}
        .collect-followers span{font-size: 3vw;}
        .collect-followers div{display: flex;align-items: center;justify-content: center;}
        
        .servel{
        width: 90%;
        height: 35vw;
        background-color: RGB(254,254,254);
        margin-top: 10vw;
        border-radius: 2vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .servel .servel-top{
        display: flex;
        align-items: center;
        width: 88%;
        height: 15vw;
    }
    .servel .small{
        width: 25%;
        height: 15vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .small img{ width: 8vw;}
    .small span{ font-size: 2vw;}

    .servel .servel-bottom{
        width: 88%;
        height: 15vw;
    }


    .tripFoot button{
        width: 40vw;
        height: 10vw;
        border-radius: 5vw;
        border: none;
        background-color: RGB(84,181,247);
        font-size: 3vw;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
    }
    .tripFoot img{
        width: 4vw;
        margin-right: 1vw;
    }
    .tripFoot{
        width: 90%;
        height: 25vw;
        border-radius: 2vw;
        background-color: RGB(254,254,254);
        margin-top: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
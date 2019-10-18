<template>
  <div class="home">
    <div id="nav">
      <router-link to="/" class="infor"><img src="../assets/information.png" alt=""></router-link>
      <router-link to="/about" class="set"><img src="../assets/add.png" alt=""></router-link>
    </div>
    <router-view/>
   
   <!-- 轮播图 -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" onclick="location.href='index.html'">
                        <img src="image/DT.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="image/DT1.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="image/DT2.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="image/DT3.jpg" alt="">
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <!-- <div class="swiper-pagination"></div> -->
                
                <!-- 如果需要导航按钮 -->
                <!-- <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div> -->
                
                <!-- 如果需要滚动条 -->
                <div class="swiper-scrollbar"></div>
            </div>                        
  </div>
</template>

    <script>
        var mySwiper = new Swiper ('.swiper-container',{
            direction: 'horizontal', //横向切换选项
            loop: true, //循环模式选项

            //分页器
            pagination: {
                el: '.swiper-pagination',
            },

            //滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },

            //自动切换
            autoplay:true,

            ClicksPropagation: true,


        })
    </script>

<style lang="scss">

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

/* 轮播图 */

.swiper-container {
    width: 100%;
    height: 58vw;
    padding-top: 15vw !important;
}
.swiper-container img{
    width: 100%;
    height: 58vw;
}


/* body */
.body{
    width: 100%;
    border: 1px solid rgb(248,248,248);
    border-top-left-radius: 5vw;
    border-top-right-radius: 5vw;
    background-color: #fff; 
    padding-bottom: 15vw;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
}
    .body .trend{
        width: 90%;
        height: 23vw;
        margin-top: 1vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .trend img{
        width: 22%;
        box-shadow: 2px 2px 5px #888888;
        border-top-left-radius: 2vw;
        border-bottom-left-radius: 2vw;
    }
    .trend .right{
        width: 78%;
        height: 20vw;
        box-shadow: 2px 2px 5px #888888;;
        background-color: RGB(254,254,254);
        margin-left: 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-top-right-radius: 2vw;
        border-bottom-right-radius: 2vw;
    }
        .right .uname{
            color: #000;
            font-size: 5vw;
            font-weight: 2vw;
            font-family: 华文行楷;
            margin-left: 2vw;
            margin-bottom: 2vw;
        }
        .right .txt{
            color: #000;
            font-size: 3vw;
            margin-left: 2vw;
            margin-bottom: 2vw;
        }
</style>

<template>
  <div class="home-page">
    <Swiper class="swiper" :slides-per-view="'auto'">
      <swiper-slide id="first-slide" class="width-550px display-table">
        <div class="text-apple-white width-400px height-250px vertical-middle horizontal-middle">
          <div id="info" style="margin:0 auto;width: 350px">
            <div class="font-google-belanosima title-extra-large">Hello,</div>
            <div class="font-weight-300 margin-bottom10 font-google-belanosima text-extra-large">I'm Vicavier</div>
            <p class="text-small width-90 font-weight-300">
              Southern University of Science and Technology (SUSTech).
            </p>
            <p class="text-small width-90 font-weight-300 margin-bottom25">Nanshan, Shenzhen, China</p>
            <img src="../resources/image/signiture.png" class="width-20"/>
          </div>
        </div>
      </swiper-slide >

      <swiper-slide id="second-slide" class="display-table" @click="toCV()">
        <div class="text-apple-white vertical-middle">
          <img src="../resources/image/Me.png" class="height-450px"/>
          <p class="bottom-text width-100 text-medium text-apple-white font-weight-700 text-uppercase text-center">see more information</p>
          <div class="hover-title-box padding-55px-lr width-200px">
            <div class="separator bg-black margin-lr-auto"></div>
            <div><a class="text-apple-white title-large font-weight-700 font-google-belanosima text-white-hover" href="">Personal CV
            </a></div>
          </div>
        </div>

      </swiper-slide>

      <swiper-slide id="third-slide" class="display-table" @click="toVideo()">
        <div class="text-apple-white vertical-middle">
          <img src="../resources/image/ying.png" class="height-450px"/>
          <p class="bottom-text width-100 text-medium text-apple-white font-weight-700 text-uppercase text-center">my works</p>
          <div class="hover-title-box padding-55px-lr width-200px">
            <div class="separator bg-black margin-lr-auto"></div>
            <div><a class="text-apple-white title-large font-weight-700 font-google-belanosima text-white-hover" href="">Videos Projects</a></div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide id="forth-slide" class="display-table" >
        <div class="text-apple-white vertical-middle">
          <img src="../resources/image/logger.jpg" class="height-450px"/>
          <p class="bottom-text width-100 text-medium text-apple-white font-weight-700 text-uppercase text-center">some skills while developing</p>
          <div class="hover-title-box padding-55px-lr width-200px">
            <div class="separator bg-black margin-lr-auto"></div>
            <div><a class="text-apple-white title-large font-weight-700 font-google-belanosima text-white-hover" href="">Develop Tools</a></div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>前方正在施工</div>
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/swiper.css'
import router from "@/router";

export default {
  components:{ Swiper, SwiperSlide },
  setup(){

    function toCV(){
      router.push("/CV")
    }

    function toVideo(){
      router.push("/video")
    }
    return{
      toCV,
      toVideo
    }
  }
}
</script>
<style scoped>
@import "@/resources/css/basicCSS.css";

.home-page{
  height: 100vh;
  width: 100%;
  background-color: rgb(0,0,0);
}

.bottom-text {
  position: absolute;
  bottom: 150px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
}

#second-slide img,#third-slide img,#forth-slide img{
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  opacity: .8;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
  -moz-filter: grayscale(1);
  -o-filter: grayscale(1);
}

#second-slide img:hover, #third-slide img:hover, #forth-slide img:hover{
  opacity: 1;
  -webkit-filter: grayscale(0);
  -moz-filter: grayscale(0);
  -o-filter: grayscale(0);
  filter: grayscale(0);
  filter: contrast(130%);
  -webkit-filter:contrast(130%);
  -moz-filter: contrast(130%);
  -o-filter: contrast(130%);
  height: 500px;
  cursor:url("@/resources/cursor/white/pointer.cur"),pointer;
}
.swiper-slide :hover .bottom-text {
  opacity: .7;
  letter-spacing: 5px;
  left: 4px;
}


.hover-title-box {
  visibility: hidden;
}

.swiper-slide :hover .hover-title-box {
  right:-160px;
  opacity: 1;
  visibility: visible;
  z-index: 99;
}

.hover-title-box {
  position: absolute;
  right: -100px;
  opacity: 1;
  top: 50%;
  transform: translateY(-80px);
  -webkit-transform: translateY(-80px);
  -moz-transform: translateY(-80px);
  -ms-transform: translateY(-80px);
  -o-transform: translateY(-80px);
  z-index: 99;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
}


.hover-title-box .separator {
  height: 1px;
  content: "";
  position: absolute;
  left:-10px;
  top: 30px;
}
</style>
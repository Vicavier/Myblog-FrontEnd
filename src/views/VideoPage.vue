<template>
  <div id="video-page">

  </div>
  <div id="back" class="position-fixed float-left div-top height-100 display-table" @click="toHomePage">
    <div id="back-icon" class="vertical-middle">
      <svg t="1687876107090" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8021" width="64" height="64"><path d="M624.64 740.693333c10.24 10.24 10.24 27.306667 0 35.84-10.24 10.24-25.6 10.24-35.84 0l-150.186667-150.186666c-30.72-30.72-47.786667-73.386667-47.786666-114.346667 0-40.96 15.36-81.92 47.786666-114.346667l150.186667-150.186666c10.24-10.24 25.6-10.24 35.84 0 10.24 10.24 10.24 25.6 0 35.84l-150.186667 150.186666c-20.48 22.186667-32.426667 49.493333-32.426666 78.506667 0 29.013333 11.946667 56.32 32.426666 78.506667l150.186667 150.186666z" fill="#e6e6e6" p-id="8022"></path></svg>
    </div>
  </div>
</template>

<script>
import {toHomePage} from "@/hooks/toHomePage";

export default {
  setup(){
    return{
      toHomePage
    }
  }
}
</script>
<style scoped>
@import "@/resources/css/basicCSS.css";
#video-page {
  height: 100vh;
}
</style>
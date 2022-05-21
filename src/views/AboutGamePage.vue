<template>
  <app-header
    :title="headerTitle"
  />
  <the-video-bg/>
 <div class="about-game">
   <div class="container">
     <div class="content-blk">
       <h1 style="text-align: center">Game</h1>
     </div>
     <!-- /.center-block -->
   </div>
   <!-- /.container -->
 </div>
 <!-- /.about-game -->
</template>

<script>
import AppHeader from "@/components/app-modules/AppHeader";
import TheVideoBg from "@/components/the-blocks/TheVideoBg";
export default {
  name: "AboutGamePage",
  components: {TheVideoBg, AppHeader},
  data(){
    return {
      headerTitle: 'game'
    }
  }
}
</script>

<template>
  <app-header
    :title="headerTitle"
  />
  <the-video-bg/>
  <div class="media-page">
    <div class="container">
      <div class="content-blk">
        <h1 style="text-align: center">Media</h1>
      </div>
      <!-- /.center-block -->
    </div>
  </div>
  <!-- /.media-page -->
</template>

<script>
import AppHeader from "@/components/app-modules/AppHeader";
import TheVideoBg from "@/components/the-blocks/TheVideoBg";
export default {
  name: "MediaPage",
  components: {TheVideoBg, AppHeader},
  data(){
    return {
      headerTitle: 'media'
    }
  }
}
</script>

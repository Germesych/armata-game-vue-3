<template>
  <app-header
    :title="headerTitle"
  />
  <the-video-bg/>
  <div class="community-page">
    <div class="container">
      <div class="content-blk">
        <h1 style="text-align: center">Community</h1>
      </div>
      <!-- /.center-block -->
    </div>
  </div>
  <!-- /.community-page -->
</template>

<script>
import AppHeader from "@/components/app-modules/AppHeader";
import TheVideoBg from "@/components/the-blocks/TheVideoBg";
export default {
  name: "CommunityPage",
  components: {TheVideoBg, AppHeader},
  data(){
    return {
      headerTitle: 'community'
    }
  }
}
</script>

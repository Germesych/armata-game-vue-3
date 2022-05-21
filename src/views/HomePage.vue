<template>
  <div class="home">
    <the-home-header/>
    <the-home-news/>
    <the-home-media/>
    <the-home-streamers/>
    <the-home-description/>
  </div>
</template>

<script>

import TheHomeHeader from "@/components/the-home-page/TheHomeHeader";
import TheHomeNews from "@/components/the-home-page/TheHomeNews";
import TheHomeMedia from "@/components/the-home-page/TheHomeMedia";
import TheHomeStreamers from "@/components/the-home-page/TheHomeStreamers";
import TheHomeDescription from "@/components/the-home-page/TheHomeDescription";
export default {
  name: 'Home',
  components: {
    TheHomeDescription,
    TheHomeStreamers,
    TheHomeMedia,
    TheHomeNews,
    TheHomeHeader
  }
}
</script>

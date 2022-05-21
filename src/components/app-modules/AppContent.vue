<template>
  <div class="content-block">
    <div class="row" v-if="content.length" v-for="items in content" :key="content.id">
      <div class="content__img-block">
        <span class="category">{{items.category}}</span>
        <img :src="items.img" :alt="items.imgAlt">
      </div>
      <!-- /.content__img-block -->
      <div class="row-content">
        <div class="date">{{items.date}}</div>
        <!-- /.date -->
        <div class="title">{{items.title}}</div>
        <!-- /.title -->
        <div class="text row-3" v-html="items.text"></div>
        <!-- /.text -->
      </div>
      <!-- /.content -->
    </div>
    <!-- /.row-->
    <div class="row-error" v-else>
      Not content...
    </div>
  </div>
  <!-- /.content-block -->
</template>

<script>
export default {
  name: "AppContent",
  props: ['content']
}
</script>

<template>
  <header class="header-block">
    <div class="container">
      <div class="content">
        <h1 class="title">{{title}}</h1>
      </div>
      <!-- /.content -->
    </div>
    <!-- /.container -->
  </header>
  <!-- /.header -->
</template>

<script>
export default {
  name: "AppHeader",
  props: ['title']
}
</script>

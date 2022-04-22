<template>
  <div class="content">
    <div>My header navigation bar here</div>
    <Nuxt />
    <div>My footer navigation bar here</div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  max-width: $md;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
</style>

<template>
  <div class="div-div">vc esta no video {{ idParams }}</div>
  <VideoDetalhes />
  <VideoControlePlayer />
</template>

<script setup>
definePageMeta({
  layout: "exibicao",
  middleware: ["video", "auth"]
});
const route = useRoute();

const idParams = computed(() => route.params.id);
</script>

<style scoped>
.div-div {
  color: red;
  padding: 5px;
  background: #000;
}
</style>
<script setup lang="ts">
const { diasPassados, diferencaEmDias } = useFormatacao();

const dataVideo = new Date(2023, 10, 2);

diasPassados(dataVideo);
</script>

<template>
  <h1>Componentes - Nuxt.js</h1>
  <p>Autor: Leonardo Maceira Santos</p>
  <p>{{ diferencaEmDias }} dias atras</p>
</template>
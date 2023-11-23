
<template>
  <h1 class="text-4xl text-center">{{ $t("tituloFavorito") }}</h1>
  <div class="videos">
    <div
      class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"
    >
      <UCard v-for="video in favoritos" :key="video.id">
        <template #header>
          {{ video.descricao }}
          <p v-data-hora="'dd/mm/yyyy'">{{ video.data_postagem }}</p>
        </template>
        <iframe
          width="h-48 w-full"
          height="400"
          :src="video.url"
          title="Video YouTube"
          frameborder="0"
        />
        <template #footer>
          <div class="flex justify-between">
            <UButton @click="removerFavorito(video.id)" color="red" variant="solid">
              Remover Favorito
            </UButton>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
//import { useFavoritos } from "~/composables/states";
import { useVideoStore } from "~/store/video";

//const favoritos = useFavoritos();
const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);
const { $toast } = useNuxtApp();

const removerFavorito = (id: number) => {
  videoStore.deleteFavorito(id);
  $toast.error("removido com sucesso");
};

const converteDataBrasil = (dataAtual: string) => {
  return new Date(dataAtual).toLocaleDateString("pt-br");
};
</script>
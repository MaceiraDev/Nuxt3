<template>
  <h1 class="text-4xl text-center">{{ $t("titulo") }}</h1>
  <div
    class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"
  >
    <UCard v-for="video in videos" :key="video.id">
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
          <UButton @click="favoritar(video)" color="lime" variant="solid">
            Adicionar Favoritos
          </UButton>
          <NuxtLink :to="{
              name: 'videos-id',
              params: { id: video.id.toString()},
            }"
          >
            <UButton label="Ver Video" color="gray">
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right-20-solid" />
              </template> </UButton
          ></NuxtLink>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
//import { useFavoritos } from "~/composables/states";
import { useVideoStore } from "~/store/video";

interface Video {
  id: number;
  descricao: string;
  url: string;
  data_postagem: string;
}
const { $toast } = useNuxtApp();

//const favoritos = useFavoritos();
const { adicionarFavorito } = useVideoStore();

const videos: Video[] = [
  {
    id: 1,
    descricao: "Jubileu vc gosta de pipoca",
    url: "https://www.youtube.com/watch?v=zcOYM2Ygnag&pp=ygUNcGljYSBwYXUgbWVtZQ%3D%3D",
    data_postagem: "2023-10-10",
  },
  {
    id: 2,
    descricao: "Oi meu chapa",
    url: "https://www.youtube.com/watch?v=42P3foe0VxE&pp=ygUNcGljYSBwYXUgbWVtZQ%3D%3D",
    data_postagem: "2023-10-10",
  },
  {
    id: 3,
    descricao: "MABEL!!!",
    url: "https://www.youtube.com/watch?v=MxDk8JZ5lvE&pp=ygUNcGljYSBwYXUgbWVtZQ%3D%3D",
    data_postagem: "2023-10-10",
  },
];

const favoritar = (video: Video) => {
  adicionarFavorito(video);
  $toast.success("Add aos favoritos");
};
</script>
interface Video {
    id: number;
    descricao: string;
    url: string;
    data_postagem: string;
}
export const useVideoStore = defineStore("videos",
    () => {
        const favoritos = ref<Video[]>([]);

        const adicionarFavorito = (video: Video) => {
            const favoritosFiltrados = favoritos.value.some((v) => v.id === video.id);
            if (!favoritosFiltrados) {
                favoritos.value.push(video)
            }
        };

        const deleteFavorito = (id: Number) => {
            const favoritosFiltrados = favoritos.value.filter((v) => v.id !== id);
            favoritos.value = favoritosFiltrados;
        };

        return {
            adicionarFavorito, deleteFavorito, favoritos
        };
    },
    {
        persist: {
            storage: persistedState.sessionStorage,
        },
    }
);
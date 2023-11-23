interface Video {
    id: number;
    descricao: string;
    url: string;
    data_postagem: string;
}

export const useFavoritos = () => useState<Video[]>("favoritos", () => []);


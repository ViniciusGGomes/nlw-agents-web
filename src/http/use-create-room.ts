import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateRoomRequest } from "./types/create-room-request";
import type { CreateRoomResponse } from "./types/create-room-response";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch("http://localhost:3333/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: CreateRoomResponse = await response.json();

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-rooms"] });
    },
    //Quero disparar uma função quando a criação de uma sala der sucesso.
    // O invalidateQueries vai refazer automaticamente todas as queries que tem a chave "get-rooms"
  });
}

// Quando queremos fazer uma requisição que vai salvar dados ao em vez de simplesmente listar dados a gente usa uma Mutation.
// Mutation -> (criação, edição ou remoção)
// Query -> (Listagem)

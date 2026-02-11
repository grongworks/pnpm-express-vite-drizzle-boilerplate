import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";
import { ChangeMeIfNeeded } from "@shared/types";
import { itemsAPI } from "../../lib/api";
import { ITEMS_QUERY_KEY } from "../queries/useItems";

export const useCreateItem = (): UseMutationResult<ChangeMeIfNeeded, Error, void> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => itemsAPI.create(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ITEMS_QUERY_KEY });
    },
  });
};

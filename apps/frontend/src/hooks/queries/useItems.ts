import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ChangeMeIfNeeded } from "@shared/types";
import { itemsAPI } from "../../lib/api";

export const ITEMS_QUERY_KEY = ["items"] as const;

export const useItems = (): UseQueryResult<ChangeMeIfNeeded[], Error> => {
  return useQuery({
    queryKey: ITEMS_QUERY_KEY,
    queryFn: () => itemsAPI.getAll(),
  });
};

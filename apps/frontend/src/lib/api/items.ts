import { ChangeMeIfNeeded } from "@shared/types";
import apiClient from "./client";

export const itemsAPI = {
  /**
   * Ruft alle Items ab
   */
  getAll: async (): Promise<ChangeMeIfNeeded[]> => {
    const response = await apiClient.get<ChangeMeIfNeeded[]>("/items");
    return response.data;
  },

  /**
   * Erstellt einen neuen Item
   */
  create: async (): Promise<ChangeMeIfNeeded> => {
    const response = await apiClient.post<ChangeMeIfNeeded>("/items");
    return response.data;
  },
};

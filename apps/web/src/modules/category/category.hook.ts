import { useQuery } from "@tanstack/react-query";
import { createCategoriesQuery } from "./category.query";

export function useCategories() {
  return useQuery(createCategoriesQuery());
}

export function useCategory(){
  
}
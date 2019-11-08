export interface Recipe {
  id: string;
  title: string;
  image: string;
  category: string | RecipeCategory;
  shortInfo: RecipeShortInfo;
  ingredients: string[];
  instructions: string[];
}

export type RecipeCategory =
  | 'MAIN_DISH'
  | 'DESSERT'
  | 'PASTA'
  | 'SOUP'
  | 'SALAD'
  | 'BREAKFAST'
  | 'HEALTHY';

export type RecipeLevel = 'EASY' | 'AVERAGE' | 'HARD';

export type RecipeShortInfo = {
  timeInMinutes: number;
  level: string | RecipeLevel;
  people: number;
};

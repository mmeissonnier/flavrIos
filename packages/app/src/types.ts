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
  | 'HEALTHY'
  | 'BEVERAGE';

export type RecipeLevel = 'EASY' | 'AVERAGE' | 'HARD';

export type RecipeShortInfo = {
  timeInMinutes: number;
  level: string | RecipeLevel;
  people: number;
};

export type Store = {
  recipes: Recipe[];
  favorites: string[];
  categories: {[key: string]: string} | null;
};

export type Action = {
  type: string;
  payload?: any;
};
export interface StoreInterface {
  state: Store;
  dispatch: (action: Action) => void;
}

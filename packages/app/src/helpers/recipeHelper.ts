import {RecipeShortInfo, RecipeCategory} from 'src/types';

const recipeCategoryMap = {
  SOUP: 'Soup',
  MAIN_DISH: 'Main dish',
  PASTA: 'Pasta',
  SALAD: 'Salad',
  HEALTHY: 'Healthy',
  BREAKFAST: 'Breakfast & Brunch',
  DESSERT: 'Dessert',
};

export const getCategory = (category: RecipeCategory) =>
  recipeCategoryMap[category];

export const formatRecipeShortInfo = (info: RecipeShortInfo) => [
  {icon: 'md-time', label: `${info.timeInMinutes} minutes`},
  {icon: 'md-options', label: info.level},
  {icon: 'md-people', label: `${info.people} people`},
];

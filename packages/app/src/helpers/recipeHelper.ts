import {RecipeShortInfo} from 'src/types';

export const formatRecipeShortInfo = (info: RecipeShortInfo) => [
  {icon: 'md-time', label: `${info.timeInMinutes} minutes`},
  {icon: 'md-options', label: info.level},
  {icon: 'md-people', label: `${info.people} people`},
];

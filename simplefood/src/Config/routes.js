import { Home, NutriotionAnalyze } from "../Pages";
import { RecipeDetails } from "../Containers";

const routes = [
  { path: "/recipedetail", component: RecipeDetails },
  { path: "/nutritionanalyze", component: NutriotionAnalyze },
  { path: "/", component: Home },
];

export default routes;

import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.spoonacular.com/recipes/",
  params: {
    apiKey: process.env.REACT_APP_RECIPE_API_KEY,
  },
});

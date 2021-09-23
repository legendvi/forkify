import "core-js/stable";
import "regenerator-runtime/runtime";
import * as modal from "./modal";
import { MODAL_CLOSE_MILLI_SEC } from "./config.js";
import recipeView from "./view/RecipeView.js";
import searchView from "./view/SearchView.js";
import resultView from "./view/ResultsView.js";
import paginationView from "./view/PaginationView.js";
import bookmarkView from "./view/BookmarkView.js";
import addRecipeView from "./view/AddRecipeView.js";

const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

if (module.hot) {
  module.hot.accept();
}
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    //show Spinner
    recipeView.renderSpinner();
    //load the Recipe
    await modal.loadRecipe(id);
    //View the Recipe
    recipeView.render(modal.state.recipe);
    resultView.update(modal.getSearchResultsPage());
    bookmarkView.update(modal.state.bookmark);
  } catch (err) {
    recipeView.renderError(err);
  }
};
const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();
    const query = searchView.getQuery();

    await modal.loadSearchResults(query);

    resultView.render(modal.getSearchResultsPage());
    paginationView.render(modal.state.search);
  } catch (err) {
    throw err;
  }
};
const controlPaginationView = function (goToPage) {
  resultView.render(modal.getSearchResultsPage(goToPage));
  paginationView.render(modal.state.search);
};

const controlServings = function (newServings) {
  modal.updateServings(newServings);
  recipeView.update(modal.state.recipe);
};

const controlBookmark = function () {
  if (!modal.state.recipe.bookmarked) modal.addBookmark(modal.state.recipe);
  else modal.deleteBookmark(modal.state.recipe.id);

  recipeView.update(modal.state.recipe);

  bookmarkView.render(modal.state.bookmark);
};
const controlBookmarkLoad = function () {
  bookmarkView.render(modal.state.bookmark);
};
const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();
    await modal.uploadRecipe(newRecipe);

    recipeView.render(modal.state.recipe);
    addRecipeView.renderMessage();
    bookmarkView.render(modal.state.bookmark);
    window.history.pushState(null, "", `${modal.state.recipe.id}`);
    setTimeout(() => {
      addRecipeView.toogleWindow();
    }, MODAL_CLOSE_MILLI_SEC);
  } catch (error) {
    addRecipeView.renderError(error.message);
  }
};
const init = () => {
  recipeView.addHandlerEventRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlBookmark);
  searchView.addHandlerSearchRender(controlSearchResults);
  paginationView.addHandlerClick(controlPaginationView);
  bookmarkView.addHadnlerRender(controlBookmarkLoad);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  modal.getLocalBookmark();
};
init();

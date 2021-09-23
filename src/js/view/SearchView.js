class SearchView {
  _ParentEl = document.querySelector(".search");
  getQuery() {
    return this._ParentEl.querySelector(".search__field").value;
  }
  _clear() {
    this._ParentEl.querySelector(".search__field").value = "";
  }
  addHandlerSearchRender(handler) {
    this._ParentEl.addEventListener("submit", (e) => {
      e.preventDefault();

      handler();
      this._clear();
    });
  }
}

export default new SearchView();

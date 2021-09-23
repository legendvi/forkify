import previewView from "./PreviewView";
import Views from "./views";
class BookmarkView extends Views {
  _ParentElement = document.querySelector(".bookmarks__list");
  _Error = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
  _Message = ``;
  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
  addHadnlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new BookmarkView();

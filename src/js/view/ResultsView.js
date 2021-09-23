import Views from "./views";
import previewView from "./PreviewView.js";
class ResultView extends Views {
  _ParentElement = document.querySelector(".results");
  _Error = `We could not find any result for your Query . Please check your Query and Try Again`;
  _Message = ``;
  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new ResultView();

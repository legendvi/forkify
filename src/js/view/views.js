import icons from "url:../../img/icons.svg";
export default class Views {
  _data;

  _clear() {
    this._ParentElement.innerHTML = "";
  }
  renderSpinner = function () {
    const spinMarkup = `<div class="spinner">
  <svg>
    <use href="${icons}#icon-loader"></use>
  </svg>
  </div>`;
    this._ParentElement.innerHTML = "";
    this._ParentElement.insertAdjacentHTML("afterbegin", spinMarkup);
  };
  render(data, render = true) {
    this._data = data;
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    this._ParentElement.insertAdjacentHTML("afterbegin", markup);
  }
  update(data) {
    this._data = data;

    const newMarkup = this._generateMarkup();
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll("*"));
    const curElements = Array.from(this._ParentElement.querySelectorAll("*"));
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      //update Changed Text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }
      //update changed Attributes
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach((attr) =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }
  renderError(message = this._Error) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this._clear();
    this._ParentElement.insertAdjacentHTML("afterbegin", markup);
  }
  renderMessage(message = this._Message) {
    const markup = `<div class="recipe">
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._ParentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

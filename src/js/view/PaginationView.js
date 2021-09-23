import Views from "./views";
import icons from "url:../../img/icons.svg";
class PaginationView extends Views {
  _ParentElement = document.querySelector(".pagination");
  addHandlerClick(handler) {
    this._ParentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }
  _generateMarkup() {
    const curPage = this._data.page;
    let PaginationButton = "";
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultsPerPage
    );
    // Page 1 but theere are other pages
    if (curPage < numPages && numPages !== 1) {
      PaginationButton =
        this._generatePreviousButton(curPage) +
        this._generateNextButton(curPage);
    }
    if (curPage === 1 && numPages > 1) {
      PaginationButton = this._generateNextButton(curPage);
    }
    //Last Page
    if (curPage === numPages && numPages > 1) {
      PaginationButton = this._generatePreviousButton(curPage);
    }

    //Page in Between

    //Page one but there are no other pages

    return PaginationButton;
  }
  _generatePreviousButton(curPage) {
    return `<button data-goto=${
      curPage - 1
    } class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${curPage - 1}</span>
  </button>`;
  }
  _generateNextButton(curPage) {
    return ` <button data-goto=${
      curPage + 1
    }  class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button> `;
  }
}

export default new PaginationView();

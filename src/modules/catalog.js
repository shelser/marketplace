import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { categoryFilter } from "./filter.js";

const catalog = () => {
  const btnCatalog = document.querySelector('.catalog-button > button');
  const catalogModal = document.querySelector('.catalog');
  const catalogModalItems = document.querySelectorAll('.catalog li');

  let isOpen = false;

  btnCatalog.addEventListener('click', () => {
    isOpen = !isOpen;

    catalogModal.style.display = isOpen ? 'block' : '';
  });

  catalogModalItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent;
      getData()
      .then((data) => {
        renderGoods(categoryFilter(data, text));
      });
      catalogModal.style.display = '';
      isOpen = false;
    });
  });
};

export default catalog;
import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { priceFilter, saleFilter } from "./filter.js";

const price = () => {

  const minPrice = document.getElementById('min');
  const maxPrice = document.getElementById('max');
  const rangePrice = document.querySelectorAll('.filter-price_range input');
  const saleBtn = document.querySelector('.filter-check_checkmark');
  const checkStyle = document.createElement('style');
  document.head.appendChild(checkStyle);
  const style = document.querySelector('head style');

  let isCheck = false;

  const saleGoods = () => {
    getData()
    .then((data) => {
      renderGoods(saleFilter(data));
    }); 
  };

  saleBtn.addEventListener('click', () => {
    isCheck = !isCheck;
    if (isCheck) {
      style.textContent = `
        .filter-check_checkmark::after {
          display: block !important;
        }
      `;
      saleGoods(); 
      rangePrice.forEach(input => input.value = ''); //сбрасываем инпут после изменения sale
    } else {
      style.textContent = ''
      getData()
      .then((data) => {
        renderGoods(data);
      });
      rangePrice.forEach(input => input.value = ''); //сбрасываем инпут после изменения sale   
    }
  })

  rangePrice.forEach((price) => {
    price.addEventListener('input', () => {
      if (isCheck) {
        getData()
        .then((data) => {
          renderGoods(priceFilter(saleFilter(data), minPrice.value, maxPrice.value));
        });
      } else {
        getData()
        .then((data) => {
          renderGoods(priceFilter(data, minPrice.value, maxPrice.value));
        });
      } 
    });
  });
};

export default price
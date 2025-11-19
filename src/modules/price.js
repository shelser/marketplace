import getData from "./getData.js";
import renderGoods from "./renderGoods.js";
import { priceFilter, saleFilter } from "./filter.js";

const price = () => {

  const minPrice = document.getElementById('min');
  const maxPrice = document.getElementById('max');
  const rangePrice = document.querySelectorAll('.filter-price_range input');
  const saleBtn = document.querySelector('.filter-check_checkmark');
  const checkboxInput = document.getElementById('discount-checkbox')

  checkboxInput.addEventListener('change', () => {
    if (checkboxInput.checked) {
      saleBtn.classList.add('checked');
    } else {
      saleBtn.classList.remove('checked');
    }
    getData()
      .then((data) => {   
        renderGoods(priceFilter(saleFilter(data, checkboxInput.checked), minPrice.value, maxPrice.value));
      });
  });

  rangePrice.forEach((price) => {
    price.addEventListener('input', () => {
      getData()
      .then((data) => {
        renderGoods(priceFilter(saleFilter(data, checkboxInput.checked), minPrice.value, maxPrice.value));
      })
    });
  });
};

export default price
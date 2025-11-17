export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  });
};

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
};

export const priceFilter = (goods, min, max) => {
  if (max === '') {
    return goods.filter((goodsItem) => goodsItem.price > min);
  }
  return goods.filter((goodsItem) => goodsItem.price > min && goodsItem.price < max);
};

export const saleFilter = (goods) => {
  return goods.filter(good => good.sale);
};
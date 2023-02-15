const getPrice = (price) => (Math.round(price * 100) / 100).toFixed(2);

export default getPrice;

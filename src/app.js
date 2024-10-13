import { getProductData } from './api.js';

document.getElementById('searchBtn').addEventListener('click', async () => {
  const productId = document.getElementById('productIdInput').value;
  const productData = await getProductData(productId);
  document.getElementById('productInfo').innerText = JSON.stringify(productData, null, 2);
});

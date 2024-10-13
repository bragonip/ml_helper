import { getProductData } from './api.js';

document.getElementById('searchBtn').addEventListener('click', async () => {
  const productName = document.getElementById('productNameInput').value;
  const productData = await getProductData(productName);

  // Mostrar los resultados en la página
  document.getElementById('productInfo').innerText = JSON.stringify(productData, null, 2);
});

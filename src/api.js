const BASE_URL = 'https://api.mercadolibre.com';

async function getProductData(productId) {
  try {
    const response = await fetch(`${BASE_URL}/items/${productId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
}

export { getProductData };

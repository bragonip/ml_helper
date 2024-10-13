const BASE_URL = 'https://api.mercadolibre.com';

async function getProductData(productName) {
  try {
    // Cambiamos el endpoint a /sites/MLA/search?q= para hacer la búsqueda por nombre de producto
    const response = await fetch(`${BASE_URL}/sites/MLA/search?q=${encodeURIComponent(productName)}`);
    const data = await response.json();
    return data.results; // Devuelve los resultados de la búsqueda
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
}

export { getProductData };

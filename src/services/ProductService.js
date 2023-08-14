const getProductData = async () => {
  try {
    const response = await fetch('/data/product.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.product[0];
  } catch (error) {
    console.error('Error fetching the Product"', error);
    throw error;
  }
};

export default { getProductData };

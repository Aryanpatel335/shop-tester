// productServiceV2.js
const Shopify = require("shopify-api-node");

class ProductServiceV2 {
  constructor(config) {
    this.shopify = new Shopify(config);
  }

  // Using old product category handling
  async createProduct(productData) {
    try {
      // Breaking change: Using deprecated fields
      const product = await this.shopify.product.create({
        title: productData.title,
        product_type: productData.type, // Deprecated
        standardizedProductType: productData.standardType, // Deprecated
      });
      return product;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  }

  // Not using new product metafield capabilities
  async updateProduct(productId, data) {
    try {
      return await this.shopify.product.update(productId, {
        title: data.title,
        description: data.description,
        // Could benefit from new metafield capabilities
      });
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  }

  // Not implementing new product variant strategy
  // Could benefit from new variantStrategy functionality
}

module.exports = ProductServiceV2;

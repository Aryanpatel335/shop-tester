// fulfillmentService.js
const Shopify = require("shopify-api-node");

class FulfillmentService {
  constructor(config) {
    this.shopify = new Shopify(config);
  }

  // Using deprecated shippingMethods field
  async getFulfillmentServices() {
    try {
      const services = await this.shopify.fulfillmentService.list();
      return services.map((service) => ({
        id: service.id,
        name: service.name,
        shippingMethods: service.shippingMethods, // Breaking change: this field is deprecated
      }));
    } catch (error) {
      console.error("Error fetching fulfillment services:", error);
      throw error;
    }
  }

  // Not using new fulfillment holds functionality
  async createFulfillment(orderId, data) {
    try {
      return await this.shopify.fulfillment.create(orderId, {
        tracking_number: data.trackingNumber,
        tracking_company: data.trackingCompany,
        line_items: data.lineItems,
      });
    } catch (error) {
      console.error("Error creating fulfillment:", error);
      throw error;
    }
  }

  // Not implementing the new fulfillment holds features
  // Could benefit from new functionality for handling holds
}

module.exports = FulfillmentService;

// orderServiceV2.js
const Shopify = require("shopify-api-node");

class OrderServiceV2 {
  constructor(config) {
    this.shopify = new Shopify(config);
  }

  // Using old order status handling without REQUEST_DECLINED
  async getOrderStatus(orderId) {
    try {
      const order = await this.shopify.order.get(orderId);
      // Breaking change: Doesn't handle new REQUEST_DECLINED status
      return order.fulfillment_status;
    } catch (error) {
      console.error("Error fetching order status:", error);
      throw error;
    }
  }

  // Not using new totalCashRoundingAdjustment field
  async getOrderTotals(orderId) {
    try {
      const order = await this.shopify.order.get(orderId);
      return {
        subtotal: order.subtotal_price,
        total: order.total_price,
        tax: order.total_tax,
        // Could benefit from new totalCashRoundingAdjustment field
      };
    } catch (error) {
      console.error("Error fetching order totals:", error);
      throw error;
    }
  }

  // Not implementing new statusPageUrl functionality
  // Could benefit from this new feature
}

module.exports = OrderServiceV2;

// checkoutService.js
const Shopify = require("shopify-api-node");

class CheckoutService {
  constructor(config) {
    this.shopify = new Shopify(config);
  }

  // Note: No abandoned checkout functionality implemented
  // This is a potential opportunity to suggest the new API capabilities

  async createCheckout(checkoutData) {
    try {
      const checkout = await this.shopify.checkout.create({
        email: checkoutData.email,
        line_items: checkoutData.items,
        shipping_address: checkoutData.shippingAddress,
      });

      return checkout;
    } catch (error) {
      console.error("Error creating checkout:", error);
      throw error;
    }
  }

  async completeCheckout(checkoutId, paymentData) {
    try {
      const completedCheckout = await this.shopify.checkout.complete(
        checkoutId,
        {
          payment: paymentData,
        }
      );

      return completedCheckout;
    } catch (error) {
      console.error("Error completing checkout:", error);
      throw error;
    }
  }
}

module.exports = CheckoutService;

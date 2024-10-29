// metafieldService.js
const Shopify = require("shopify-api-node");

class MetafieldService {
  constructor(config) {
    this.shopify = new Shopify(config);
  }

  // Basic metafield operations - not using any new capabilities
  async getMetafields(resourceType, resourceId) {
    try {
      return await this.shopify.metafield.list({
        metafield: {
          owner_resource: resourceType,
          owner_id: resourceId,
        },
      });
    } catch (error) {
      console.error("Error fetching metafields:", error);
      throw error;
    }
  }

  // Not implementing any of the new metafield capabilities:
  // - Smart collection capabilities
  // - Admin filterable capabilities
  // - New metafield definition templates
  // - New access controls
}

module.exports = MetafieldService;

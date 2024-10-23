# shop-tester/order_service.rb

class OrderService
    def create_order(order)
      ShopifyGraphQl::Order.new(order: order)
    end
  
    def fetch_product(product_id)
      ShopifyGraphql::Product.find_by_id(id: product_id)
    end
  
    def update_customer(customer)
      ShopifyGraphql::Customer.update(customer: customer)
    end
  end
  
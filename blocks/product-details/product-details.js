// Dropin Tools
import { initializers } from '@dropins/tools/initializer.js';

// Dropin Functions
import * as product from '@dropins/storefront-pdp/api.js';

// Dropin Provider
import { render as productRenderer } from '@dropins/storefront-pdp/render.js';

// Dropin Container
import ProductDetails from '@dropins/storefront-pdp/containers/ProductDetails.js';

initializers.register(pdp.initialize);

// Mount Initializers (must be called after all initializers are registered)
window.addEventListener('load', initializers.mount);

// Set endpoint configuration
product.setEndpoint('https://catalog-service-sandbox.adobe.io/graphql');

product.setFetchGraphQlHeaders({
  // Environment required headers
  'Content-Type': 'application/json',
  'Magento-Environment-Id': await getConfigValue('commerce-environment-id'),
  'Magento-Website-Code': await getConfigValue('commerce-website-code'),
  'Magento-Store-View-Code': await getConfigValue('commerce-store-view-code'),
  'Magento-Store-Code': await getConfigValue('commerce-store-code'),
  'Magento-Customer-Group': await getConfigValue('commerce-customer-group'),
  'x-api-key': await getConfigValue('commerce-x-api-key'),
});

// Render Product Details
productRenderer(ProductDetails, {
  sku: '24-MB03',
  // other configuration options
  // slots for adding custom elements, components, and functions
})(document.getElementById('your-pdp-element'));
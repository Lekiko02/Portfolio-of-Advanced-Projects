import {renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {renderCheckoutHeader} from "./checkout/checkoutHeader.js";
//import "../data/cart-class.js";
import "../data/backend-practice.js";
import { loadProducts } from "../data/products.js";

loadProducts(() => {
    renderOrderSummary(); 
    renderPaymentSummary();
    renderCheckoutHeader();
});

// To regenerate all the html we use the MVC method( Model-view-controller):

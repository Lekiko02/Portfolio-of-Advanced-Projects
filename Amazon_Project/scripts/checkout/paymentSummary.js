import {cart,removeFromCart,updateDeliveryOption} from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import {formatCurrency} from "../utils/money.js";

export function renderPaymentSummary(){
    /*Main idea of JAvascript
    1.Save the data
    2. Generate the HTML
    3.make it interactive
    */

    let productPriceCents = 0;

    let shippingPriceCents = 0;

    let cartQuantity = 0;
    
    cart.forEach((CartItem) => {
        cartQuantity += CartItem.quantity;
        const productId = CartItem.productId;
        const product = getProduct(productId)
        const productQuantity = CartItem.quantity;
        productPriceCents += product.priceCents * CartItem.quantity


        const deliveryOptionId = CartItem.deliveryOptionId;
        const deliveryOption = getDeliveryOption(deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents

    });

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;

    const taxCents = totalBeforeTaxCents * 0.1;

    const totalCents = taxCents + totalBeforeTaxCents;



    const paymentSumaryHTML = `
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartQuantity}):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>
    `
document.querySelector(".js-payment-summary").innerHTML = paymentSumaryHTML;
}




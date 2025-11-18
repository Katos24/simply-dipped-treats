'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { toast } from 'sonner';
import styles from './CartDrawer.module.css';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery' | null>(null);

  const deliveryFee = fulfillmentType === 'delivery' ? 10 : 0;
  const finalTotal = cartTotal + deliveryFee;

  const handleCheckout = async () => {
    // Validate fulfillment selection
    if (!fulfillmentType) {
      toast.error('Please select pickup or delivery above', {
        description: 'Choose how you want to receive your order',
        duration: 3000,
      });
      return;
    }

    try {
      const items = cart.map(item => ({
        productName: `${item.product.name} - ${item.variant.size}`,
        price: item.variant.price,
        quantity: item.quantity,
        fulfillmentType
      }));

      const response = await fetch('/api/checkout-cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items })
      });

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Checkout failed', {
        description: 'Please try again or contact support',
      });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={onClose} />
      
      {/* Drawer */}
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your Cart</h2>
          <button onClick={onClose} className={styles.closeButton}>✕</button>
        </div>

        <div className={styles.content}>
          {cart.length === 0 ? (
            <p className={styles.emptyMessage}>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemName}>{item.product.name}</h3>
                    <p className={styles.itemDetails}>{item.variant.size}</p>
                    <p className={styles.itemPrice}>${item.variant.price} each</p>
                  </div>
                  
                  <div className={styles.itemActions}>
                    <div className={styles.quantityControls}>
                      <button 
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className={styles.quantityButton}
                      >
                        -
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className={styles.quantityButton}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className={styles.removeButton}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className={styles.footer}>
                {/* Fulfillment Type Selection */}
                <div className={styles.fulfillmentSection}>
                  <h3 className={styles.fulfillmentTitle}>
                    How would you like to receive your order? <span className={styles.required}>*</span>
                  </h3>
                 <div className={styles.fulfillmentOptions}>
  <label className={`${styles.fulfillmentLabel} ${fulfillmentType === 'pickup' ? styles.selected : ''}`}>
    <input
      type="radio"
      name="fulfillment"
      value="pickup"
      checked={fulfillmentType === 'pickup'}
      onChange={() => setFulfillmentType('pickup')}
    />
    <div className={styles.fulfillmentContent}>
      <span className={styles.fulfillmentIcon}>📦</span>
      <div className={styles.fulfillmentName}>Pickup</div>
      <div className={styles.fulfillmentDesc}>Free</div>
    </div>
  </label>
  <label className={`${styles.fulfillmentLabel} ${fulfillmentType === 'delivery' ? styles.selected : ''}`}>
    <input
      type="radio"
      name="fulfillment"
      value="delivery"
      checked={fulfillmentType === 'delivery'}
      onChange={() => setFulfillmentType('delivery')}
    />
    <div className={styles.fulfillmentContent}>
      <span className={styles.fulfillmentIcon}>🚚</span>
      <div className={styles.fulfillmentName}>Delivery</div>
      <div className={styles.fulfillmentDesc}>+$10</div>
    </div>
  </label>
</div>
                </div>

                <div className={styles.totals}>
                  <div className={styles.subtotal}>
                    <span>Subtotal:</span>
                    <span>${cartTotal}</span>
                  </div>
                  {deliveryFee > 0 && (
                    <div className={styles.deliveryFee}>
                      <span>Delivery Fee:</span>
                      <span>${deliveryFee}</span>
                    </div>
                  )}
                  <div className={styles.total}>
                    <span className={styles.totalLabel}>Total:</span>
                    <span className={styles.totalAmount}>${finalTotal}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout} 
                  className={styles.checkoutButton}
                  disabled={!fulfillmentType}
                >
                  {fulfillmentType ? 'Proceed to Checkout' : 'Select Pickup or Delivery Above'}
                </button>
                <button onClick={clearCart} className={styles.clearButton}>
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

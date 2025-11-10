'use client';

import { Product } from '@/data/products';
import { useState } from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery'>('pickup');

  const handleOrder = async (variantIndex: number) => {
    const variant = product.variants[variantIndex];
    const productName = `${product.name} - ${variant.size}`;

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productName,
          price: variant.price,
          quantity: 1,
          fulfillmentType,
        }),
      });

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Order error:', error);
      alert('Error processing order. Please try again.');
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>
          📷 {product.name}
          <span className={styles.imagePath}>{product.image}</span>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        
        {/* Fulfillment Type Selector */}
        <div className={styles.fulfillmentSelector}>
          <label className={styles.fulfillmentLabel}>
            <input
              type="radio"
              name={`fulfillment-${product.id}`}
              value="pickup"
              checked={fulfillmentType === 'pickup'}
              onChange={() => setFulfillmentType('pickup')}
            />
            <span>Pickup (Free)</span>
          </label>
          <label className={styles.fulfillmentLabel}>
            <input
              type="radio"
              name={`fulfillment-${product.id}`}
              value="delivery"
              checked={fulfillmentType === 'delivery'}
              onChange={() => setFulfillmentType('delivery')}
            />
            <span>Delivery (+$10)</span>
          </label>
        </div>

        <div className={styles.variants}>
          {product.variants.map((variant, index) => (
            <div key={index} className={styles.variant}>
              <div className={styles.variantInfo}>
                <span className={styles.size}>{variant.size}</span>
                <span className={styles.price}>
                  ${fulfillmentType === 'delivery' ? variant.price + 10 : variant.price}
                </span>
              </div>
              <button 
                className={styles.orderButton}
                onClick={() => handleOrder(index)}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

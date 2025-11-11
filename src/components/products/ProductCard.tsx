'use client';

import { Product } from '@/data/products';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import Image from 'next/image';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant);
    
    setIsAdded(true);
    
    toast.success('Added to cart!', {
      description: `${product.name} - ${product.variants[selectedVariant].size}`,
      duration: 2000,
    });

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.productImage}
            onError={() => setImageError(true)}
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            📷 {product.name}
            <span className={styles.imagePath}>{product.image}</span>
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        
        {product.contents && (
          <div className={styles.packContents}>
            <h4 className={styles.contentsTitle}>What&apos;s Included:</h4>
            <ul className={styles.contentsList}>
              {product.contents.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.selectorSection}>
          <label className={styles.selectLabel}>Size & Price:</label>
          <select 
            className={styles.sizeSelect}
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(Number(e.target.value))}
          >
            {product.variants.map((variant, index) => (
              <option key={index} value={index}>
                {variant.size} - ${variant.price}
              </option>
            ))}
          </select>
        </div>

        <button 
          className={`${styles.addButton} ${isAdded ? styles.addButtonAdded : ''}`}
          onClick={handleAddToCart}
        >
          {isAdded ? (
            <>
              <span className={styles.checkmark}>✓</span> Added to Cart
            </>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  );
}

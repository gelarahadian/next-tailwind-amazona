import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductItems({ product, addToCartHandler }) {
  return (
    <div className="card">
      <div className="w-full h-52 relative">
        <Link href={`product/${product.slug}`}>
          <Image src={product.image} alt={product.name} fill />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button mt-2"
          onClick={() => addToCartHandler(product)}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}

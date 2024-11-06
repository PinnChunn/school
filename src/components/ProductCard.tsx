import React from 'react';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '../data/categories';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-[#B87333] text-white px-6 py-2 rounded-full hover:bg-[#A66323] transition-colors transform -translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5" />
            <span>加入購物車</span>
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-[#B87333] mb-2">{product.name}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold">{product.price}</span>
          <span className="text-gray-400 text-sm">庫存充足</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
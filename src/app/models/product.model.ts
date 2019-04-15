export interface Product {
  id: number | string;
  image: string;
  name: string;
  normalPrice: number;
  salePrice?: number;
  sizes: number[];
  colors: { id: number; name: string; image: string }[];
  selectedSize?: number;
  selectedColor?: { id: number; name: string; image: string };
}

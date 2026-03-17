import necklaceDiamond from "@/assets/necklace-diamond.jpg";
import necklacePearl from "@/assets/necklace-pearl.jpg";
import necklaceGold from "@/assets/necklace-gold.jpg";
import necklaceLuxury from "@/assets/necklace-luxury.jpg";
import necklaceRosegold from "@/assets/necklace-rosegold.jpg";
import necklaceSilver from "@/assets/necklace-silver.jpg";

export interface Product {
  id: number;
  name: string;
  nameVi: string;
  price: number;
  priceDisplay: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  { id: 1, name: "Diamond Necklace", nameVi: "Vòng Cổ Kim Cương", price: 8500000, priceDisplay: "8.500.000 ₫", image: necklaceDiamond, category: "diamond" },
  { id: 2, name: "Pearl Necklace", nameVi: "Vòng Cổ Ngọc Trai", price: 6200000, priceDisplay: "6.200.000 ₫", image: necklacePearl, category: "pearl" },
  { id: 3, name: "Gold Necklace", nameVi: "Vòng Cổ Vàng Lá", price: 8500000, priceDisplay: "8.500.000 ₫", image: necklaceGold, category: "gold" },
  { id: 4, name: "Luxury Collection", nameVi: "Bộ Sưu Tập Cao Cấp", price: 12000000, priceDisplay: "12.000.000 ₫", image: necklaceLuxury, category: "luxury" },
  { id: 5, name: "Rose Gold Ruby", nameVi: "Vòng Cổ Vàng Hồng Ruby", price: 9800000, priceDisplay: "9.800.000 ₫", image: necklaceRosegold, category: "rosegold" },
  { id: 6, name: "Silver Sapphire", nameVi: "Vòng Cổ Bạc Sapphire", price: 7500000, priceDisplay: "7.500.000 ₫", image: necklaceSilver, category: "silver" },
];

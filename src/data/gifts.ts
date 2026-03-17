import gift1 from "@/assets/gift-1.jpg";
import gift2 from "@/assets/gift-2.jpg";
import gift3 from "@/assets/gift-3.jpg";
import gift4 from "@/assets/gift-4.jpg";

export interface GiftItem {
  id: number;
  name: string;
  nameVi: string;
  price: number;
  priceDisplay: string;
  image: string;
  description: string;
}

export const gifts: GiftItem[] = [
  { id: 101, name: "Diamond Gift Set", nameVi: "Bộ Quà Kim Cương", price: 0, priceDisplay: "0 ₫", image: gift1, description: "Hộp quà cao cấp kèm vòng cổ kim cương lấp lánh" },
  { id: 102, name: "Pendant Gift Box", nameVi: "Hộp Quà Mặt Dây Chuyền", price: 0, priceDisplay: "0 ₫", image: gift2, description: "Mặt dây chuyền sang trọng trong hộp quà thiết kế riêng" },
  { id: 103, name: "Pearl Gift Collection", nameVi: "Bộ Quà Ngọc Trai", price: 0, priceDisplay: "0 ₫", image: gift3, description: "Bộ sưu tập ngọc trai hoàn hảo cho người thân yêu" },
  { id: 104, name: "Gold Luxury Gift", nameVi: "Quà Tặng Vàng Sang Trọng", price: 0, priceDisplay: "0 ₫", image: gift4, description: "Quà tặng vàng cao cấp với gói quà tặng sang trọng" },
];

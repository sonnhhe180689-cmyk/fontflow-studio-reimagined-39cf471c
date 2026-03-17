import { ShoppingCart } from "lucide-react";
import { gifts } from "@/data/gifts";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import mysteryGift1 from "@/assets/mystery-gift-1.jpg";
import mysteryGift2 from "@/assets/mystery-gift-2.jpg";
import mysteryGift3 from "@/assets/mystery-gift-3.jpg";
import mysteryGift4 from "@/assets/mystery-gift-4.jpg";

const mysteryImages = [mysteryGift1, mysteryGift2, mysteryGift3, mysteryGift4];

const GiftSection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (gift: typeof gifts[0]) => {
    addToCart({ id: gift.id, name: gift.name, nameVi: gift.nameVi, price: gift.price, image: gift.image });
    toast({ title: `Đã thêm ${gift.nameVi} vào giỏ hàng! 🎁` });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Quà Tặng Tri Ân Khách Hàng</h2>
          <p className="section-subtitle">Lựa Chọn 1 Món Quà Ngẫu Nhiên Dưới Đây</p>
          <p className="font-body text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
            Tặng kèm 1 món quà nhỏ thay lời cảm ơn của Luna Jewel dành tới các khách hàng
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gifts.map((gift, index) => (
            <div key={gift.id} className="bg-card rounded-lg overflow-hidden shadow-sm group cursor-pointer hover:shadow-lg transition-all duration-300">
              <div className="overflow-hidden">
                <img src={mysteryImages[index]} alt="Hộp quà bí ẩn" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4 text-center">
                <button onClick={() => handleAddToCart(gift)} className="btn-outline-gold text-xs px-4 py-2">
                  <ShoppingCart className="w-3 h-3 inline mr-1" /> Thêm Vào Giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSection;

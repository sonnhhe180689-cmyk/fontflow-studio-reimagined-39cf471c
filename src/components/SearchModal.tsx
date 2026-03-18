import { useState } from "react";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const SearchModal = ({ open, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const { addToCart } = useCart();

  if (!open) return null;

  const filtered = query.trim()
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.nameVi.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  const handleAdd = (p: typeof products[0]) => {
    addToCart({ id: p.id, name: p.name, nameVi: p.nameVi, price: p.price, image: p.image });
    toast({ title: `Đã thêm ${p.nameVi} vào giỏ hàng!` });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24 bg-foreground/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-background rounded-xl p-6 w-full max-w-2xl mx-4 shadow-xl max-h-[70vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 mb-6">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            autoFocus
            placeholder="Tìm kiếm vòng cổ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 font-body text-lg bg-transparent outline-none"
          />
          <button onClick={onClose}><X className="w-5 h-5 text-muted-foreground hover:text-foreground" /></button>
        </div>

        <div className="space-y-3">
          {filtered.length === 0 ? (
            <p className="font-body text-sm text-muted-foreground text-center py-8">Không tìm thấy sản phẩm nào</p>
          ) : (
            filtered.map((p) => (
              <div key={p.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-1">
                  <h4 className="font-display text-base font-semibold">{p.nameVi}</h4>
                  <p className="font-body text-sm text-primary">{p.priceDisplay}</p>
                </div>
                <button onClick={() => handleAdd(p)} className="btn-outline-gold text-xs px-4 py-2">Thêm vào giỏ</button>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-4">
          <Link to="/bo-suu-tap" onClick={onClose} className="font-body text-sm text-primary hover:underline">Xem tất cả bộ sưu tập →</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [orderForm, setOrderForm] = useState({ name: "", email: "", phone: "", address: "", note: "" });
  const [showCheckout, setShowCheckout] = useState(false);

  const formatPrice = (p: number) => p.toLocaleString("vi-VN") + " ₫";

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderForm.name || !orderForm.email || !orderForm.phone || !orderForm.address) {
      toast({ title: "Vui lòng điền đầy đủ thông tin!", variant: "destructive" });
      return;
    }
    toast({ title: "Đặt hàng thành công! 🎉", description: "Chúng tôi sẽ liên hệ xác nhận đơn hàng của bạn." });
    clearCart();
    setShowCheckout(false);
    setOrderForm({ name: "", email: "", phone: "", address: "", note: "" });
  };

  if (items.length === 0 && !showCheckout) {
    return (
      <div className="pt-16 min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Giỏ Hàng Trống</h1>
          <p className="font-body text-muted-foreground mb-8">Bạn chưa thêm sản phẩm nào vào giỏ hàng</p>
          <Link to="/bo-suu-tap"><button className="btn-gold">Khám Phá Bộ Sưu Tập</button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
          {showCheckout ? "Xác Nhận Đơn Hàng" : "Giỏ Hàng"}
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {!showCheckout ? (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-card rounded-lg p-4 flex items-center gap-4 shadow-sm">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold">{item.nameVi}</h3>
                      <p className="font-body text-sm text-primary">{formatPrice(item.price)}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-body text-lg font-medium w-8 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted">
                          <Plus className="w-4 h-4" />
                        </button>
                        <button onClick={() => removeFromCart(item.id)} className="ml-4 text-destructive hover:text-destructive/80">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-body font-semibold">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <form onSubmit={handleOrder} className="space-y-4">
                <input type="text" placeholder="Họ và tên *" value={orderForm.name} onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm bg-card font-body text-sm focus:outline-none focus:border-primary" />
                <input type="email" placeholder="Email *" value={orderForm.email} onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm bg-card font-body text-sm focus:outline-none focus:border-primary" />
                <input type="tel" placeholder="Số điện thoại *" value={orderForm.phone} onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm bg-card font-body text-sm focus:outline-none focus:border-primary" />
                <textarea placeholder="Địa chỉ giao hàng *" rows={3} value={orderForm.address} onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm bg-card font-body text-sm focus:outline-none focus:border-primary" />
                <textarea placeholder="Ghi chú (tùy chọn)" rows={3} value={orderForm.note} onChange={(e) => setOrderForm({ ...orderForm, note: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm bg-card font-body text-sm focus:outline-none focus:border-primary" />
                <button type="submit" className="btn-gold w-full">Xác Nhận Đặt Hàng</button>
                <button type="button" onClick={() => setShowCheckout(false)} className="w-full font-body text-sm text-muted-foreground hover:text-foreground text-center py-2">Quay lại</button>
              </form>
            )}
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm h-fit">
            <h2 className="font-display text-xl font-bold mb-4">Tổng Đơn Hàng</h2>
            <div className="space-y-2 font-body text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Tạm tính</span><span>{formatPrice(totalPrice)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Phí vận chuyển</span><span>Miễn phí</span></div>
              <div className="border-t border-border pt-2 mt-2 flex justify-between font-semibold text-lg">
                <span>Tổng cộng</span><span className="text-primary">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            {!showCheckout && (
              <button onClick={() => setShowCheckout(true)} className="btn-gold w-full mt-6">Tiến Hành Đặt Hàng</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

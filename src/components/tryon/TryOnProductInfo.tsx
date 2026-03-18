import { Star, SlidersHorizontal } from "lucide-react";
import bgShowroom from "@/assets/bg-showroom.png";

interface FavNecklace {id: number;nameVi: string;image: string;}
interface Props {
  necklace: {nameVi: string;priceDisplay: string;image: string;category: string;};
  selectedColor: string;onSelectColor: (c: string) => void;onAddToCart: () => void;onSelectNecklace: () => void;
  necklaceScale: number;necklaceRotation: number;necklaceOpacity: number;
  onScaleChange: (s: number) => void;onRotationChange: (r: number) => void;onOpacityChange: (o: number) => void;
  activeTab: "photo" | "select" | "adjust";onSelectTab: (tab: "photo" | "select" | "adjust") => void;
  favList: FavNecklace[];onSelectFavorite: (id: number) => void;
}

const colors = [
{ key: "gold", label: "Vàng", color: "hsl(45 80% 55%)" },
{ key: "silver", label: "Bạc", color: "hsl(0 0% 78%)" },
{ key: "rosegold", label: "Vàng Hồng", color: "hsl(15 60% 70%)" }];


const TryOnProductInfo = ({ necklace, selectedColor, onSelectColor, onAddToCart, onSelectNecklace, necklaceScale, necklaceRotation, necklaceOpacity, onScaleChange, onRotationChange, onOpacityChange, activeTab, onSelectTab, favList, onSelectFavorite }: Props) => {
  return (
    <div className="rounded-2xl p-6 space-y-5 relative overflow-hidden" style={{ backgroundImage: `url(${bgShowroom})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-card/75 backdrop-blur-[2px]" />
      <div className="relative z-10 space-y-5">
      <div>
        <div className="flex items-start justify-between gap-2">
          <h2 className="font-display text-2xl font-bold text-foreground">{necklace.nameVi}</h2>
          <span className="shrink-0 bg-primary/10 text-primary font-body text-xs font-semibold px-3 py-1 rounded-full">Vòng 18K</span>
        </div>
        <p className="font-bold text-foreground mt-2 font-mono text-xl">{necklace.priceDisplay}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex">{[1, 2, 3, 4, 5].map((s) => <Star key={s} className={`w-4 h-4 ${s <= 4 ? "text-yellow-500 fill-yellow-500" : "text-yellow-500 fill-yellow-500 opacity-60"}`} />)}</div>
        <span className="text-sm font-semibold text-foreground font-mono">4.8</span>
        <span className="text-sm text-muted-foreground font-mono">(125 đánh giá)</span>
      </div>
      <div>
        <p className="font-body text-sm font-semibold text-foreground mb-3">Chọn Màu:</p>
        <div className="flex gap-3">
          {colors.map((c) =>
            <button key={c.key} onClick={() => onSelectColor(c.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all font-body text-sm ${selectedColor === c.key ? "border-primary bg-primary/5 font-semibold" : "border-border hover:border-primary/40"}`}>
              <span className="w-5 h-5 rounded-full border border-border" style={{ background: c.color }} />{c.label}
            </button>
            )}
        </div>
      </div>
      <div className="flex gap-3">
        <button onClick={onSelectNecklace} className="flex-1 btn-gold rounded-full py-3 text-sm">Chọn Vòng</button>
        <button onClick={() => onSelectTab("adjust")} className="flex-1 btn-outline-gold rounded-full py-3 text-sm flex items-center justify-center gap-2">Điều Chỉnh <SlidersHorizontal className="w-4 h-4" /></button>
      </div>
      {activeTab === "adjust" &&
        <div className="bg-primary/5 rounded-xl p-4 space-y-3">
          <div><div className="flex justify-between mb-1"><span className="font-body text-sm font-medium text-foreground">Kích thước</span><span className="font-body text-xs text-muted-foreground">{Math.round(necklaceScale * 100)}%</span></div><input type="range" min="0.3" max="2" step="0.05" value={necklaceScale} onChange={(e) => onScaleChange(parseFloat(e.target.value))} className="w-full accent-primary" /></div>
          <div><div className="flex justify-between mb-1"><span className="font-body text-sm font-medium text-foreground">Xoay</span><span className="font-body text-xs text-muted-foreground">{necklaceRotation}°</span></div><input type="range" min="-180" max="180" step="1" value={necklaceRotation} onChange={(e) => onRotationChange(parseInt(e.target.value))} className="w-full accent-primary" /></div>
          <div><div className="flex justify-between mb-1"><span className="font-body text-sm font-medium text-foreground">Độ trong suốt</span><span className="font-body text-xs text-muted-foreground">{Math.round(necklaceOpacity * 100)}%</span></div><input type="range" min="0.1" max="1" step="0.05" value={necklaceOpacity} onChange={(e) => onOpacityChange(parseFloat(e.target.value))} className="w-full accent-primary" /></div>
          <p className="font-body text-xs text-muted-foreground text-center">💡 Kéo vòng cổ trên ảnh để thay đổi vị trí</p>
        </div>
        }
      <button onClick={onAddToCart} className="w-full gradient-tiffany text-primary-foreground font-body font-semibold py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-md">🛒 Thêm Vào Giỏ Hàng — {necklace.priceDisplay}</button>
      </div>
    </div>);

};

export default TryOnProductInfo;
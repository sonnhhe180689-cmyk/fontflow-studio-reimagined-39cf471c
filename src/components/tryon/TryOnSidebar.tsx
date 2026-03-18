import { Gem, Palette, Ruler, MessageCircle, Sparkles } from "lucide-react";
import bgShowroom from "@/assets/bg-showroom.png";
import craftsmanship from "@/assets/craftsmanship.jpg";

const features = [
  { icon: <Gem className="w-5 h-5 text-primary" />, title: "Chọn Chất Liệu", desc: "Tùy chọn chất liệu phù hợp với bạn" },
  { icon: <Palette className="w-5 h-5 text-primary" />, title: "Thiết Kế Riêng", desc: "Kiểu dáng độc quyền theo phong cách của bạn" },
  { icon: <Ruler className="w-5 h-5 text-primary" />, title: "Kích Thước Tùy Chỉnh", desc: "Đo và điều chỉnh vừa vặn hoàn hảo" },
];

const TryOnSidebar = () => (
  <div className="rounded-2xl h-full relative overflow-hidden" style={{ backgroundImage: `url(${bgShowroom})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute inset-0 bg-card/60 backdrop-blur-sm" />
    <div className="relative z-10 p-5 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4"><Sparkles className="w-5 h-5 text-primary" /><h3 className="font-display text-xl font-bold text-foreground">Đặt Làm Theo Yêu Cầu</h3></div>
      <div className="rounded-xl overflow-hidden mb-4 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.03] hover:brightness-110 cursor-default"><img src={craftsmanship} alt="Craftsmanship" className="w-full h-40 object-cover" /></div>
      <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">Tạo nên chiếc vòng cổ duy nhất dành riêng cho bạn — từ chất liệu, kiểu dáng đến từng chi tiết nhỏ nhất.</p>
      <div className="space-y-3 mb-5 flex-1">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-3 bg-card/70 rounded-xl p-3 transition-all duration-300 hover:bg-primary/15 hover:shadow-lg hover:scale-[1.03] cursor-default">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">{f.icon}</div>
            <div><p className="font-body text-sm font-semibold text-foreground">{f.title}</p><p className="font-body text-xs text-muted-foreground">{f.desc}</p></div>
          </div>
        ))}
      </div>
      <a href="/lien-he" className="btn-gold flex items-center justify-center gap-2 text-sm px-6 py-3 rounded-full w-full font-medium"><MessageCircle className="w-4 h-4" /> Liên Hệ Đặt Làm</a>
    </div>
  </div>
);

export default TryOnSidebar;

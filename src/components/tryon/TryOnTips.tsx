import { Camera, Sparkles, Eye, ShieldCheck } from "lucide-react";

const tips = [
  { icon: <Camera className="w-6 h-6" />, label: "Chụp Chính Diện", desc: "Đặt điện thoại ngang tầm mắt, giữ khoảng cách vừa phải để toàn bộ vùng cổ và vai hiện rõ trong khung hình." },
  { icon: <Sparkles className="w-6 h-6" />, label: "Ánh Sáng Tốt", desc: "Chọn nơi có ánh sáng tự nhiên hoặc đèn chiếu đều, tránh bóng đổ lên vùng cổ để vòng hiển thị chân thực nhất." },
  { icon: <ShieldCheck className="w-6 h-6" />, label: "Không Che Cổ", desc: "Buộc gọn tóc ra sau, tránh mặc áo cổ cao hoặc đeo khăn quàng để vùng cổ được lộ hoàn toàn khi thử vòng." },
  { icon: <Eye className="w-6 h-6" />, label: "Nhìn Thẳng Camera", desc: "Giữ đầu thẳng, mắt nhìn trực tiếp vào ống kính để vòng cổ được căn chỉnh đúng vị trí trên ảnh của bạn." },
];

const TryOnTips = () => (
  <div className="bg-card rounded-2xl shadow-lg p-6">
    <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">Mẹo Thử Vòng Cổ</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {tips.map((tip, i) => (
        <div key={i} className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 transition-all duration-300 hover:bg-primary/15 hover:shadow-lg hover:scale-[1.03] cursor-default">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{tip.icon}</div>
          <h4 className="font-body text-sm font-semibold text-foreground">{tip.label}</h4>
          <p className="font-body text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TryOnTips;

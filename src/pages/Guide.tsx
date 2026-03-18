import { Camera, Sparkles, Heart, ShoppingCart, CheckCircle, SlidersHorizontal, Search } from "lucide-react";
import bgFaq from "@/assets/bg-showroom-tiffany-faq.png";
import { Link } from "react-router-dom";
import guideBg1 from "@/assets/guide-bg-1.jpg";
import guideBg2 from "@/assets/guide-bg-2.jpg";
import guideBg3 from "@/assets/guide-bg-3.jpg";
import guideBg4 from "@/assets/guide-bg-4.jpg";
import guideBg5 from "@/assets/guide-bg-5.jpg";

const guideBgs = [guideBg1, guideBg2, guideBg3, guideBg4, guideBg5];

const steps = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Bước 1: Chụp Ảnh Hoặc Tải Ảnh",
    desc: "Bạn có thể chụp ảnh selfie trực tiếp bằng camera hoặc tải lên một bức ảnh chân dung có sẵn. Ảnh nên chụp thẳng mặt, vùng cổ rõ ràng để vòng cổ hiển thị chân thực nhất.",
    tips: ["Nhấn \"Chụp Ảnh\" để mở camera selfie", "Nhấn \"Tải Ảnh\" để chọn ảnh từ thiết bị", "Nhấn \"Chụp Lại\" nếu muốn đổi ảnh khác"],
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Bước 2: Chọn Vòng Cổ Yêu Thích",
    desc: "Nhấn nút \"Chọn Vòng\" để cuộn xuống phần Gợi Ý. Tại đây bạn có thể lọc theo phong cách (Cổ Điển, Cao Cấp, Hiện Đại, Đá Quý) và chọn màu sắc (Vàng, Bạc, Vàng Hồng) để tìm mẫu phù hợp.",
    tips: ["Dùng bộ lọc để tìm nhanh theo phong cách", "Chọn màu vàng/bạc/vàng hồng phù hợp trang phục", "Nhấn vào ảnh sản phẩm để thử ngay trên ảnh"],
  },
  {
    icon: <SlidersHorizontal className="w-6 h-6" />,
    title: "Bước 3: Điều Chỉnh Vị Trí & Kích Thước",
    desc: "Kéo vòng cổ trên ảnh để di chuyển đến vị trí mong muốn. Nhấn \"Điều Chỉnh\" để mở thanh trượt chỉnh kích thước, góc xoay và độ trong suốt của vòng cổ.",
    tips: ["Kéo thả vòng cổ trên ảnh để thay đổi vị trí", "Chỉnh kích thước từ 30% đến 200%", "Xoay vòng cổ và điều chỉnh độ trong suốt cho tự nhiên"],
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Bước 4: Yêu Thích & So Sánh",
    desc: "Nhấn biểu tượng ❤️ trên mỗi sản phẩm để lưu vào danh sách yêu thích. Các vòng cổ đã thích sẽ hiển thị ở cột bên phải, giúp bạn dễ dàng so sánh và chọn lại nhanh chóng.",
    tips: ["Nhấn ❤️ trên ảnh sản phẩm để thêm yêu thích", "Nhấn vào vòng yêu thích để thử lại ngay", "So sánh nhiều mẫu trước khi quyết định"],
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Bước 5: Thêm Vào Giỏ Hàng",
    desc: "Khi đã chọn được mẫu ưng ý, nhấn nút \"Thêm Vào Giỏ Hàng\" để đặt hàng. Giỏ hàng sẽ hiển thị ở góc trên bên phải màn hình.",
    tips: ["Kiểm tra kỹ tên và giá sản phẩm", "Xem lại giỏ hàng trước khi thanh toán", "Liên hệ hotline nếu cần hỗ trợ thêm"],
  },
];

const faqs = [
  { q: "Tính năng thử vòng cổ có chính xác không?", a: "Tính năng của chúng tôi giúp bạn hình dung được sản phẩm trên người. Tuy nhiên, màu sắc thực tế có thể khác đôi chút do ánh sáng và màn hình hiển thị." },
  { q: "Tôi có thể thử bao nhiêu mẫu?", a: "Bạn có thể thử không giới hạn số lượng mẫu. Hãy thoải mái khám phá toàn bộ bộ sưu tập của chúng tôi!" },
  { q: "Ảnh của tôi có được lưu trữ không?", a: "Không. Ảnh của bạn chỉ được xử lý trên trình duyệt và không được tải lên máy chủ của chúng tôi. Hoàn toàn riêng tư và bảo mật." },
  { q: "Làm sao để có kết quả thử đẹp nhất?", a: "Chụp ảnh chân dung rõ nét, ánh sáng đều, vùng cổ không bị che khuất và chọn ảnh có nền đơn giản." },
];

const Guide = () => {
  return (
    <div className="pt-16">
      <section className="py-16 luxury-header-classic">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <span className="block font-display text-title font-bold text-primary-foreground">Hướng Dẫn</span>
            <span className="block font-display text-title font-bold text-primary mt-1" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>Sử Dụng</span>
          </h1>
          <p className="font-body text-primary-foreground/80 mt-4 text-body max-w-2xl mx-auto font-light" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}>
            Hướng dẫn chi tiết cách sử dụng tính năng thử vòng cổ trực tuyến và đặt hàng tại Luna Jewel
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl p-8 shadow-sm transition-all duration-500 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.15)] hover:scale-[1.02] hover:border-primary/30 border border-primary/10 cursor-pointer group">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url(${guideBgs[i]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} />
                <div className="absolute inset-0 transition-opacity duration-500 opacity-[0.75] group-hover:opacity-[0.65]" style={{
                  background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)) 100%)'
                }} />
                <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500" style={{
                  backgroundImage: `
                    radial-gradient(2px 2px at 15% 25%, hsl(var(--primary) / 0.5) 50%, transparent 50%),
                    radial-gradient(1.5px 1.5px at 35% 65%, hsl(var(--tiffany-light) / 0.6) 50%, transparent 50%),
                    radial-gradient(2px 2px at 55% 15%, hsl(var(--primary) / 0.4) 50%, transparent 50%),
                    radial-gradient(1px 1px at 75% 45%, hsl(var(--tiffany-light) / 0.5) 50%, transparent 50%),
                    radial-gradient(1.5px 1.5px at 90% 80%, hsl(var(--primary) / 0.45) 50%, transparent 50%),
                    radial-gradient(1px 1px at 25% 90%, hsl(var(--tiffany-light) / 0.4) 50%, transparent 50%),
                    radial-gradient(2px 2px at 65% 75%, hsl(var(--primary) / 0.35) 50%, transparent 50%),
                    radial-gradient(1.5px 1.5px at 45% 40%, hsl(var(--tiffany-light) / 0.5) 50%, transparent 50%)
                  `,
                  animation: 'sparkle-float 4s ease-in-out infinite alternate'
                }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                  background: 'linear-gradient(105deg, transparent 30%, hsl(var(--primary) / 0.08) 45%, hsl(var(--tiffany-light) / 0.12) 50%, hsl(var(--primary) / 0.08) 55%, transparent 70%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s ease-in-out infinite'
                }} />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-subtitle font-bold mb-2 transition-colors duration-300 group-hover:text-primary text-foreground drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">{step.title}</h3>
                    <p className="font-body text-body text-foreground/80 font-semibold leading-relaxed mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">{step.desc}</p>
                    <div className="bg-background/70 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 group-hover:bg-background/80">
                      <p className="font-body text-body font-bold mb-2 text-foreground">Mẹo nhỏ:</p>
                      {step.tips.map((tip, j) => (
                        <div key={j} className="flex items-center gap-2 mb-1">
                          <CheckCircle className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                          <span className="font-body text-body text-foreground/80 font-semibold">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/thu-vong-co">
              <button className="btn-gold flex items-center gap-2 mx-auto">
                Bắt Đầu Thử Ngay <Sparkles className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${bgFaq})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0 bg-card/50" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(2px 2px at 10% 20%, hsl(var(--primary) / 0.5) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 30% 70%, hsl(var(--tiffany-light) / 0.6) 50%, transparent 50%),
            radial-gradient(2px 2px at 50% 10%, hsl(var(--primary) / 0.4) 50%, transparent 50%),
            radial-gradient(1px 1px at 70% 50%, hsl(var(--tiffany-light) / 0.5) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 85% 85%, hsl(var(--primary) / 0.45) 50%, transparent 50%),
            radial-gradient(1px 1px at 20% 85%, hsl(var(--tiffany-light) / 0.4) 50%, transparent 50%)
          `,
          animation: 'sparkle-float 4s ease-in-out infinite alternate'
        }} />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-title font-bold text-foreground drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
              Câu Hỏi <span className="text-primary">Thường Gặp</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.15)] hover:scale-[1.01] hover:border-primary/30 border border-primary/10 cursor-pointer group">
                <h3 className="font-display text-subtitle font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">{faq.q}</h3>
                <p className="font-body text-body text-muted-foreground leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;

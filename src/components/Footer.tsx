import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import NewsletterSection from "./NewsletterSection";

const Footer = () => {
  const location = useLocation();
  const hideNewsletter = location.pathname === "/" || location.pathname === "/bo-suu-tap";

  return (
    <footer className="bg-foreground text-primary-foreground">
      {!hideNewsletter && <NewsletterSection />}

      <div className="container mx-auto px-4 pt-0 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-subtitle font-bold mb-4">Luna Jewel</h3>
            <p className="font-body text-body text-primary-foreground/70 leading-relaxed font-light">
              Trang sức cao cấp, thiết kế tinh xảo, mang đến vẻ đẹp vượt thời gian.
            </p>
          </div>

          <div>
            <h4 className="font-display text-subtitle font-semibold mb-4">Liên Kết</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-body text-body text-primary-foreground/70 hover:text-primary transition-colors font-light">Trang Chủ</Link>
              <Link to="/bo-suu-tap" className="font-body text-body text-primary-foreground/70 hover:text-primary transition-colors font-light">Bộ Sưu Tập</Link>
              <Link to="/thu-vong-co" className="font-body text-body text-primary-foreground/70 hover:text-primary transition-colors font-light">Thử Vòng Cổ</Link>
              <Link to="/huong-dan" className="font-body text-body text-primary-foreground/70 hover:text-primary transition-colors font-light">Hướng Dẫn</Link>
              <Link to="/lien-he" className="font-body text-body text-primary-foreground/70 hover:text-primary transition-colors font-light">Liên Hệ</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-subtitle font-semibold mb-4">Liên Hệ</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="font-body text-body text-primary-foreground/70 font-light">Đại học FPT, Khu CNC Hòa Lạc, Thạch Thất, Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-mono text-body font-light text-inherit">0901 234 567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-body text-body text-primary-foreground/70 font-light">contact@lunajewel.vn</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-subtitle font-semibold mb-4">Giờ Làm Việc</h4>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 text-primary" />
              <div className="font-body text-body text-primary-foreground/70 font-light">
                <p>Thứ 2 - Chủ Nhật</p>
                <p className="font-mono">9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-body text-primary-foreground/50 font-sans font-light">
            © 2026 Luna Jewel. Bảo lưu mọi quyền.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;

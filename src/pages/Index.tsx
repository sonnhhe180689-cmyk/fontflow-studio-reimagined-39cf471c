import HeroCarousel from "@/components/HeroCarousel";
import { ArrowRight, ShoppingCart, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import craftsmanship from "@/assets/craftsmanship.jpg";
import serviceAppointment from "@/assets/service-appointment.jpg";
import servicePersonalize from "@/assets/service-personalize.jpg";
import serviceContact from "@/assets/service-contact.jpg";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { toast } from "@/hooks/use-toast";
import { useState, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const services = [
{ title: "Đặt lịch hẹn", desc: "Nắm vững nghệ thuật tặng quà mùa lễ hội với cuộc hẹn riêng tại cửa hàng.", cta: "Đặt Lịch Hẹn", link: "/lien-he", image: serviceAppointment },
{ title: "Cá nhân hóa", desc: "Hãy làm cho thiết kế trở nên đáng nhớ hơn nữa với dịch vụ khắc laser theo yêu cầu.", cta: "Tìm Hiểu Thêm", link: "/huong-dan", image: servicePersonalize },
{ title: "Liên hệ với chúng tôi", desc: "Từ tư vấn quà tặng phù hợp đến việc sắp xếp cuộc hẹn mua sắm, chúng tôi luôn sẵn sàng.", cta: "Tìm Hiểu Thêm", link: "/lien-he", image: serviceContact }];


const YOUTUBE_VIDEO_ID = "JfXqt9WUPrs";

const Index = () => {
  const { addToCart } = useCart();
  const [showVideo, setShowVideo] = useState(false);

  const handleAddToCart = (p: typeof products[0]) => {
    addToCart({ id: p.id, name: p.name, nameVi: p.nameVi, price: p.price, image: p.image });
    toast({ title: `Đã thêm ${p.nameVi} vào giỏ hàng!` });
  };

  return (
    <div>
      <HeroCarousel />

      {/* Featured Necklaces - Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Vòng Cổ Nổi Bật</h2>
            <p className="section-subtitle">Những Thiết Kế Được Yêu Thích Nhất</p>
          </div>
          <FeaturedCarousel products={products} onAddToCart={handleAddToCart} />
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 mb-12 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
            { icon: "💎", title: "Chất Lượng Cao Cấp", desc: "Nguyên liệu thật 100%, được chứng nhận bởi các tổ chức uy tín" },
            { icon: "🚚", title: "Giao Hàng Toàn Quốc", desc: "Miễn phí ship cho đơn hàng từ 2.000.000đ, giao trong 2-5 ngày" },
            { icon: "🛡️", title: "Bảo Hành Trọn Đời", desc: "Cam kết đổi trả trong 30 ngày, bảo hành miễn phí trọn đời" },
            { icon: "✨", title: "Thử Trước Khi Mua", desc: "Công nghệ thử vòng cổ 2D độc đáo, xem ngay trên ảnh của bạn" }].
            map((feature, i) =>
            <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Craftsmanship Banner - Video */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={craftsmanship} alt="Nghệ thuật chế tác" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-heading text-4xl text-primary-foreground md:text-6xl">Nghệ Thuật Chế Tác Vòng Cổ</h2>
            <p className="font-body tracking-[0.3em] uppercase text-primary-foreground/80 mt-3 text-base">Tạo tác tinh xảo từng chi tiết</p>
            <button
              onClick={() => setShowVideo(true)}
              className="mt-8 w-16 h-16 rounded-full border-2 border-primary-foreground/60 flex items-center justify-center mx-auto hover:border-primary-foreground hover:bg-primary-foreground/20 transition-all">
              
              <Play className="w-6 h-6 text-primary-foreground ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo &&
      <div className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/80 backdrop-blur-sm" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl mx-4 aspect-video" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowVideo(false)} className="absolute -top-10 right-0 text-primary-foreground hover:text-primary transition-colors">
              <X className="w-8 h-8" />
            </button>
            <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
            title="Nghệ Thuật Chế Tác Vòng Cổ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
          
          </div>
        </div>
      }

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-lg">
              <img src={craftsmanship} alt="Chế tác" className="w-full h-80 object-cover" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Khám Phá Câu Chuyện</h2>
              <p className="section-subtitle text-left">Nghệ Thuật Chế Tác</p>
              <p className="font-body text-muted-foreground mt-6 leading-relaxed">
                Mỗi chiếc vòng cổ được chế tác bởi những nghệ nhân kim hoàn giàu kinh nghiệm với sự tỉ mỉ tuyệt đối trong từng chi tiết. Từ việc tuyển chọn đá quý đến sản phẩm cuối cùng, mỗi sản phẩm đều mang giá trị nghệ thuật và đẳng cấp vượt mọi giới hạn.
              </p>
              <Link to="/bo-suu-tap">
                <button className="btn-outline-gold mt-8 text-sm">Khám Phá Bộ Sưu Tập</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Dịch Vụ Của Chúng Tôi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) =>
            <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                  <Link to={service.link}>
                    <button className="btn-outline-gold text-xs px-6 py-2">{service.cta}</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Try-On CTA */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Trải Nghiệm Thử Vòng Cổ</h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-xl mx-auto">
            Tải ảnh của bạn lên và thử ngay các mẫu vòng cổ yêu thích. Xem trước khi mua để chắc chắn bạn đã chọn đúng!
          </p>
          <Link to="/thu-vong-co">
            <button className="btn-gold mt-8 flex items-center gap-2 mx-auto text-sm">
              Thử Ngay Miễn Phí <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>);

};

/* Carousel component for Featured Necklaces - 2 items per scroll */
const FeaturedCarousel = ({ products, onAddToCart }: {products: typeof import("@/data/products").products;onAddToCart: (p: typeof import("@/data/products").products[0]) => void;}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", slidesToScroll: 2, loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {products.map((product) =>
          <div key={product.id} className="min-w-0 shrink-0 grow-0 basis-1/2 md:basis-1/4 pl-4">
              <div className="group cursor-pointer">
                <Link to="/thu-vong-co" className="block overflow-hidden rounded-lg bg-card">
                  <img src={product.image} alt={product.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
                </Link>
                <div className="mt-4 text-center">
                  <h3 className="font-display text-lg font-semibold">{product.name}</h3>
                  <p className="mt-1 font-mono text-base my-0 bg-primary-foreground font-semibold text-primary">{product.priceDisplay}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => onAddToCart(product)} className="btn-outline-gold text-xs px-4 py-2 w-full">
                      <ShoppingCart className="w-3 h-3 inline mr-1" /> Thêm Vào Giỏ
                    </button>
                    <Link to="/thu-vong-co?camera=1" className="w-full">
                      <button className="btn-gold text-xs px-4 py-2 w-full">✨ Thử Ngay</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <button onClick={scrollPrev} className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-accent transition-colors z-10">
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button onClick={scrollNext} className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-accent transition-colors z-10">
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
    </div>);

};

export default Index;
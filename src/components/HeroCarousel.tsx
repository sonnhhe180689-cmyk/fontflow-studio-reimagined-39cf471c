import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
{
  image: hero1,
  title: "BỘ SƯU TẬP\n\nCAO CẤP",
  subtitle: "Sang trọng. Thanh lịch. Vẻ đẹp vượt thời gian.",
  cta: "Khám Phá Bộ Sưu Tập",
  link: "/bo-suu-tap"
},
{
  image: hero2,
  title: "TRẢI NGHIỆM\nTHỰC TẾ",
  subtitle: "Thử vòng cổ trực tuyến ngay trên ảnh của bạn.",
  cta: "Thử Vòng Cổ Ngay",
  link: "/thu-vong-co"
},
{
  image: hero3,
  title: "KHÔNG GIAN\nSANG TRỌNG",
  subtitle: "Trải nghiệm đẳng cấp thượng lưu.",
  cta: "Tìm Hiểu Thêm",
  link: "/lien-he"
}];


const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, i) =>
      <div
        key={i}
        className="absolute inset-0 transition-all duration-700 ease-in-out"
        style={{
          opacity: i === current ? 1 : 0,
          transform: i === current ? "scale(1)" : "scale(1.05)"
        }}>
        
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
      )}

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div
            className="max-w-lg"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              transitionDelay: "0.2s"
            }}>
            
            <h1 className="font-display text-4xl lg:text-7xl text-primary-foreground leading-[1.2] whitespace-pre-line md:text-6xl font-extrabold mx-0 px-0">
              {slides[current].title}
            </h1>
            <p className="font-heading text-lg md:text-xl text-primary-foreground/90 mt-4">
              {slides[current].subtitle}
            </p>
            <button className="btn-gold mt-8 text-sm" onClick={() => navigate(slides[current].link)}>
              {slides[current].cta}
            </button>
          </div>
          <div
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(255,255,255,0.1),inset_0_0_30px_rgba(255,255,255,0.05)]"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "scale(0.8)" : "scale(1)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              transitionDelay: "0.3s"
            }}>
            
            <h3 className="font-display text-xl md:text-2xl font-bold leading-tight drop-shadow-lg">
              <span className="text-primary-foreground">Luna Jewel</span>
            </h3>
            <p className="font-body text-xs text-primary-foreground/70 mt-1">{slides[current].cta}</p>
            <button
              onClick={() => navigate(slides[current].link)}
              className="mt-3 px-5 py-2 text-[10px] font-body font-medium tracking-wider text-primary-foreground rounded-full bg-gradient-to-r from-[hsl(170,45%,55%)] to-[hsl(185,50%,60%)] hover:from-[hsl(170,45%,50%)] hover:to-[hsl(185,50%,55%)] shadow-md hover:shadow-lg transition-all flex items-center gap-1">
              
              {slides[current].cta} <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center hover:bg-background/50 transition-colors">
        
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center hover:bg-background/50 transition-colors">
        
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) =>
        <button
          key={i}
          onClick={() => goTo(i)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === current ? "bg-primary w-8" : "bg-primary-foreground/50"}`
          } />

        )}
      </div>
    </section>);

};

export default HeroCarousel;
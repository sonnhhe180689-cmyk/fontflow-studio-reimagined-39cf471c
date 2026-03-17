import { Upload, Camera, Search, RotateCcw, SlidersHorizontal, Heart, ChevronLeft, ChevronRight, Sparkles, Eye, ShieldCheck, Star } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { toast } from "@/hooks/use-toast";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TryOnPhotoArea from "@/components/tryon/TryOnPhotoArea";
import TryOnProductInfo from "@/components/tryon/TryOnProductInfo";
import TryOnSuggestions from "@/components/tryon/TryOnSuggestions";
import TryOnSidebar from "@/components/tryon/TryOnSidebar";
import TryOnTips from "@/components/tryon/TryOnTips";

const TryOn = () => {
  const [selectedNecklace, setSelectedNecklace] = useState(0);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [necklacePos, setNecklacePos] = useState({ x: 0, y: 80 });
  const [necklaceScale, setNecklaceScale] = useState(1);
  const [necklaceRotation, setNecklaceRotation] = useState(0);
  const [necklaceOpacity, setNecklaceOpacity] = useState(0.92);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<"photo" | "select" | "adjust">("photo");
  const handleSelectTab = (tab: "photo" | "select" | "adjust") => {
    setActiveTab(tab);
    if (tab === "select") {
      setTimeout(() => {
        document.getElementById("suggestions-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };
  const [selectedColor, setSelectedColor] = useState("gold");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showCamera, setShowCamera] = useState(false);
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const [searchParams] = useSearchParams();
  const photoAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchParams.get("camera") === "1") {
      setTimeout(() => {
        photoAreaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, []);

  const necklaces = products.map((p) => ({
    id: p.id, name: p.name, nameVi: p.nameVi, price: p.price,
    priceDisplay: p.priceDisplay, image: p.image, category: p.category,
  }));

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setUserImage(ev.target?.result as string);
        setNecklacePos({ x: 0, y: 80 });
        toast({ title: "✅ Ảnh đã tải lên thành công!" });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenCamera = async () => {
    setShowCamera(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      if (videoRef.current) { videoRef.current.srcObject = stream; videoRef.current.play(); }
    } catch {
      toast({ title: "Không thể mở camera.", variant: "destructive" });
      setShowCamera(false);
    }
  };

  const handleCapture = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) { ctx.translate(canvas.width, 0); ctx.scale(-1, 1); ctx.drawImage(videoRef.current, 0, 0); }
      setUserImage(canvas.toDataURL("image/jpeg"));
      setNecklacePos({ x: 0, y: 80 });
      toast({ title: "✅ Đã chụp ảnh thành công!" });
      const stream = videoRef.current.srcObject as MediaStream;
      stream?.getTracks().forEach((t) => t.stop());
      setShowCamera(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => { setIsDragging(true); setDragStart({ x: e.clientX - necklacePos.x, y: e.clientY - necklacePos.y }); };
  const handleMouseMove = (e: React.MouseEvent) => { if (!isDragging) return; setNecklacePos({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }); };
  const handleMouseUp = () => setIsDragging(false);
  const handleSelectNecklace = (i: number) => { setSelectedNecklace(i); toast({ title: `✅ Đã chọn ${necklaces[i].nameVi}!` }); };
  const handleToggleFavorite = (id: number) => { toggleFavorite(id); };
  const handleAddToCart = () => { const n = necklaces[selectedNecklace]; addToCart({ id: n.id, name: n.name, nameVi: n.nameVi, price: n.price, image: n.image }); toast({ title: `🛒 Đã thêm ${n.nameVi} vào giỏ hàng!` }); };
  const handleReset = () => { setUserImage(null); setNecklacePos({ x: 0, y: 0 }); setNecklaceScale(1); setNecklaceRotation(0); setNecklaceOpacity(0.92); };
  const stopCamera = () => { const stream = videoRef.current?.srcObject as MediaStream; stream?.getTracks().forEach((t) => t.stop()); setShowCamera(false); };

  return (
    <div className="pt-16 min-h-screen" style={{ background: "linear-gradient(180deg, hsl(174 30% 95%) 0%, hsl(180 20% 99%) 100%)" }}>
      <div className="text-center luxury-header py-20 md:py-28 px-4">
        <h1 className="relative z-10" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          <span className="block font-display text-4xl md:text-5xl font-bold text-primary-foreground">Thử Vòng Cổ</span>
          <span className="block font-display text-5xl md:text-6xl font-bold text-primary mt-1" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>Trực Tuyến</span>
        </h1>
        <p className="font-body text-primary-foreground/80 mt-4 relative z-10 text-base md:text-lg max-w-xl mx-auto" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}>
          Tải ảnh hoặc chụp ảnh của bạn lên và xem thử các mẫu vòng cổ yêu thích ngay trên màn hình
        </p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div ref={photoAreaRef} className="lg:col-span-2">
            <TryOnPhotoArea userImage={userImage} showCamera={showCamera} videoRef={videoRef} fileInputRef={fileInputRef} necklaces={necklaces} selectedNecklace={selectedNecklace} necklacePos={necklacePos} necklaceScale={necklaceScale} isDragging={isDragging} favorites={favorites} onToggleFavorite={handleToggleFavorite} onFileUpload={handleFileUpload} onOpenCamera={handleOpenCamera} onCapture={handleCapture} onStopCamera={stopCamera} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onReset={handleReset} onSelectTab={handleSelectTab} activeTab={activeTab} onSelect={handleSelectNecklace} onScaleChange={setNecklaceScale} necklaceRotation={necklaceRotation} necklaceOpacity={necklaceOpacity} onRotationChange={setNecklaceRotation} onOpacityChange={setNecklaceOpacity} />
          </div>
          <div>
            <TryOnProductInfo necklace={necklaces[selectedNecklace]} selectedColor={selectedColor} onSelectColor={setSelectedColor} onAddToCart={handleAddToCart} onSelectNecklace={() => handleSelectTab("select")} necklaceScale={necklaceScale} necklaceRotation={necklaceRotation} necklaceOpacity={necklaceOpacity} onScaleChange={setNecklaceScale} onRotationChange={setNecklaceRotation} onOpacityChange={setNecklaceOpacity} activeTab={activeTab} onSelectTab={handleSelectTab} favList={necklaces.filter((n) => favorites.has(n.id))} onSelectFavorite={(id) => { const idx = necklaces.findIndex((n) => n.id === id); if (idx >= 0) handleSelectNecklace(idx); }} />
          </div>
        </div>
        <div id="suggestions-section" className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TryOnSuggestions necklaces={necklaces} selectedNecklace={selectedNecklace} favorites={favorites} onSelect={handleSelectNecklace} onToggleFavorite={handleToggleFavorite} colorFilter={selectedColor} />
          <TryOnSidebar />
        </div>
        <TryOnTips />
      </div>
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
    </div>
  );
};

export default TryOn;

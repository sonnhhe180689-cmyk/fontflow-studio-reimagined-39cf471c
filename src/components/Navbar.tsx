import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, Menu, X, ShoppingCart, LogIn } from "lucide-react";
import { useCart } from "@/context/CartContext";
import SearchModal from "./SearchModal";

const navLinks = [
  { label: "Trang Chủ", path: "/" },
  { label: "Bộ Sưu Tập", path: "/bo-suu-tap" },
  { label: "Thử Vòng Cổ", path: "/thu-vong-co" },
  { label: "Hướng Dẫn", path: "/huong-dan" },
  { label: "Liên Hệ", path: "/lien-he" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [authForm, setAuthForm] = useState({ name: "", email: "", password: "" });

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    alert(authMode === "login" ? "Đăng nhập thành công!" : "Đăng ký thành công!");
    setShowAuthModal(false);
    setAuthForm({ name: "", email: "", password: "" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="font-display text-2xl font-bold tracking-wider text-foreground">
            Luna Jewel
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm tracking-wider transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)] ${
                  location.pathname === link.path
                    ? "text-primary border-b-2 border-primary pb-1 drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setShowSearch(true)}>
              <Search className="w-5 h-5 text-foreground cursor-pointer hover:text-primary transition-colors" />
            </button>
            <Link to="/gio-hang" className="relative">
              <ShoppingCart className="w-5 h-5 text-foreground cursor-pointer hover:text-primary transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-body">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={() => { setShowAuthModal(true); setAuthMode("login"); }}>
              <User className="w-5 h-5 text-foreground cursor-pointer hover:text-primary transition-colors" />
            </button>
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-background border-t border-border py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 font-body text-sm tracking-wider transition-all duration-300 hover:text-primary hover:bg-primary/5 hover:pl-8 ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <SearchModal open={showSearch} onClose={() => setShowSearch(false)} />

      {showAuthModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/50 backdrop-blur-sm" onClick={() => setShowAuthModal(false)}>
          <div className="bg-background rounded-xl p-8 w-full max-w-md mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl font-bold">
                {authMode === "login" ? "Đăng Nhập" : "Đăng Ký"}
              </h2>
              <button onClick={() => setShowAuthModal(false)}>
                <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </button>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              {authMode === "register" && (
                <input type="text" placeholder="Họ và tên" required value={authForm.name} onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm bg-card font-body text-sm focus:outline-none focus:border-primary" />
              )}
              <input type="email" placeholder="Email" required value={authForm.email} onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm bg-card font-body text-sm focus:outline-none focus:border-primary" />
              <input type="password" placeholder="Mật khẩu" required value={authForm.password} onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm bg-card font-body text-sm focus:outline-none focus:border-primary" />
              <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                <LogIn className="w-4 h-4" />
                {authMode === "login" ? "Đăng Nhập" : "Đăng Ký"}
              </button>
            </form>

            <p className="font-body text-sm text-center text-muted-foreground mt-4">
              {authMode === "login" ? (
                <>Chưa có tài khoản? <button className="text-primary font-medium" onClick={() => setAuthMode("register")}>Đăng ký</button></>
              ) : (
                <>Đã có tài khoản? <button className="text-primary font-medium" onClick={() => setAuthMode("login")}>Đăng nhập</button></>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

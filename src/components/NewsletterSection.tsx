import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast({ title: "Vui lòng nhập email hợp lệ!", variant: "destructive" });
      return;
    }
    toast({ title: "Đăng ký thành công! 🎉", description: "Cảm ơn bạn đã đăng ký nhận thông tin." });
    setEmail("");
  };

  return (
    <div className="border-b border-primary-foreground/20 py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
          CẬP NHẬT MỚI NHẤT
        </h3>
        <p className="font-body text-sm text-primary-foreground/60 mb-8">
          Đăng ký để nhận thông tin về bộ sưu tập mới và ưu đãi đặc biệt
        </p>
        <form onSubmit={handleSubscribe} className="flex max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 bg-transparent border border-primary-foreground/30 text-primary-foreground font-body text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary-foreground text-foreground font-body font-medium text-sm tracking-wider hover:bg-primary-foreground/90 transition-colors"
          >
            ĐĂNG KÝ
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;

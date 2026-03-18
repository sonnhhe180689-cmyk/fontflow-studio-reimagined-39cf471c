import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import guideBg1 from "@/assets/guide-bg-1.jpg";
import guideBg2 from "@/assets/guide-bg-2.jpg";
import guideBg3 from "@/assets/guide-bg-3.jpg";
import guideBg4 from "@/assets/guide-bg-4.jpg";

const contactInfo = [
{ icon: <MapPin className="w-6 h-6" />, title: "Địa Chỉ", lines: ["Đại học FPT, Khu CNC Hòa Lạc", "Thạch Thất, Hà Nội"], bg: guideBg1 },
{ icon: <Phone className="w-6 h-6" />, title: "Hotline", lines: ["0901 234 567", "0901 234 568"], bg: guideBg2 },
{ icon: <Mail className="w-6 h-6" />, title: "Email", lines: ["contact@lunajewel.vn", "support@lunajewel.vn"], bg: guideBg3 },
{ icon: <Clock className="w-6 h-6" />, title: "Giờ Làm Việc", lines: ["Thứ 2 - Chủ Nhật", "9:00 - 21:00"], bg: guideBg4 }];


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Vui lòng điền đầy đủ thông tin!", variant: "destructive" });
      return;
    }
    toast({ title: "Gửi tin nhắn thành công! ✉️", description: "Chúng tôi sẽ phản hồi trong thời gian sớm nhất." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-16">
      <section className="py-16 luxury-header-classic">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <span className="block font-display text-4xl md:text-5xl font-bold text-primary-foreground">Liên Hệ</span>
            <span className="block font-display text-5xl md:text-6xl font-bold text-primary mt-1" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>Với Chúng Tôi</span>
          </h1>
          <p className="font-body text-primary-foreground/80 mt-4 text-base md:text-lg max-w-xl mx-auto" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}>
            Có câu hỏi hoặc cần hỗ trợ? Đội ngũ của chúng tôi luôn sẵn sàng giúp đỡ bạn
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              {contactInfo.map((info, i) =>
              <div key={i} className="relative overflow-hidden rounded-xl p-6 shadow-sm transition-all duration-500 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.15)] hover:scale-[1.03] hover:border-primary/30 border border-primary/10 cursor-pointer group">
                  <div className="absolute inset-0" style={{
                  backgroundImage: `url(${info.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-[0.78] group-hover:opacity-[0.68]" style={{
                  background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)) 100%)'
                }} />
                  <div className="absolute inset-0 opacity-25 group-hover:opacity-55 transition-opacity duration-500" style={{
                  backgroundImage: `
                      radial-gradient(2px 2px at 15% 25%, hsl(var(--primary) / 0.5) 50%, transparent 50%),
                      radial-gradient(1.5px 1.5px at 35% 65%, hsl(var(--tiffany-light) / 0.6) 50%, transparent 50%),
                      radial-gradient(2px 2px at 55% 15%, hsl(var(--primary) / 0.4) 50%, transparent 50%),
                      radial-gradient(1px 1px at 75% 45%, hsl(var(--tiffany-light) / 0.5) 50%, transparent 50%),
                      radial-gradient(1.5px 1.5px at 90% 80%, hsl(var(--primary) / 0.45) 50%, transparent 50%),
                      radial-gradient(1px 1px at 25% 90%, hsl(var(--tiffany-light) / 0.4) 50%, transparent 50%)
                    `,
                  animation: 'sparkle-float 4s ease-in-out infinite alternate'
                }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                  background: 'linear-gradient(105deg, transparent 30%, hsl(var(--primary) / 0.08) 45%, hsl(var(--tiffany-light) / 0.12) 50%, hsl(var(--primary) / 0.08) 55%, transparent 70%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s ease-in-out infinite'
                }} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                      {info.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-primary text-foreground drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">{info.title}</h3>
                    {info.lines.map((line, j) =>
                  <p key={j} className="text-sm text-foreground/80 font-medium transition-colors duration-300 group-hover:text-foreground drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)] font-mono">{line}</p>
                  )}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-lg border border-transparent hover:border-primary/20">
              <h3 className="font-display text-2xl font-bold mb-6">Gửi Tin Nhắn</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Họ và tên *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm bg-background font-body text-sm focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50" />
                <input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm bg-background font-body text-sm focus:outline-none focus:border-primary transition-all duration-300 hover:border-primary/50" />
                <textarea placeholder="Nội dung tin nhắn *" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 border border-border rounded-sm bg-background font-body text-sm focus:outline-none focus:border-primary resize-none transition-all duration-300 hover:border-primary/50" />
                <button onClick={handleSubmit} className="btn-gold w-full flex items-center justify-center gap-2">
                  Gửi Tin Nhắn <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <a href="https://maps.google.com/?q=21.0124,105.5257" target="_blank" rel="noopener noreferrer" className="absolute top-4 left-4 z-10 bg-background px-4 py-2 rounded-md shadow-md font-body text-sm hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1">
          Mở trong Maps ↗
        </a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.7!2d105.5225!3d21.0124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc60e7d3f19%3A0x2be9d7d0b5abcbf4!2sFPT%20University!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Luna Jewel Location" />
      </section>
    </div>);

};

export default Contact;
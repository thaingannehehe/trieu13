const SERVICES = [
  { name: 'Cắt Tóc & Tỉa Lông', price: '350.000₫', desc: 'Cắt tỉa theo khuôn mặt và phong cách cá nhân.' },
  { name: 'Nhuộm Tóc Đơn Sắc', price: '850.000₫', desc: 'Tư vấn màu sắc và nhuộm chuyên nghiệp.' },
  { name: 'Uốn Tóc Nước Nóng', price: '1.200.000₫', desc: 'Uốn lơi, uốn toàn bộ, tạo phom tự nhiên.' },
  { name: 'Liệu Trình Chăm Sóc Tóc', price: '650.000₫', desc: 'Phục hồi tóc hư tổn, cung cấp dưỡng chất.' },
  { name: 'Tẩy & Ombré', price: '1.800.000₫', desc: 'Tẩy an toàn, tạo hiệu ứng màu đa chiều.' },
  { name: 'Làm Tóc Cưới', price: '1.500.000₫', desc: 'Tạo kiểu tóc cô dâu, kèm thử nghiệm trước.' },
];

export default function ServicesPricing() {
  return (
    <section
      aria-label="Services and pricing"
      className="bg-[#FAF8F5] px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#7a6b5d]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Bảng Giá
          </span>
          <h2
            className="text-[32px] leading-[1.1] tracking-tight text-[#2a221c] md:text-[44px]"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
          >
            Dịch Vụ & Bảng Giá
          </h2>
        </div>

        <div className="divide-y divide-[#2a221c]/10 border-y border-[#2a221c]/10">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                <h3
                  className="text-[18px] text-[#2a221c] md:text-[22px]"
                  style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
                >
                  {s.name}
                </h3>
                <p
                  className="text-[13px] text-[#7a6b5d]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.desc}
                </p>
              </div>
              <span
                className="text-[16px] text-[#2a221c] md:text-[18px] md:flex-none"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

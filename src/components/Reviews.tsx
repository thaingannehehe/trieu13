const REVIEWS = [
  {
    name: 'Nguyễn Thị Mai',
    service: 'Nhuộm & Uốn',
    text: 'Màu tóc lên chuẩn từng sợi, đội ngũ tư vấn rất nhiệt tình. Không gian salon sang trọng và thoải mái.',
  },
  {
    name: 'Trần Thanh Hằng',
    service: 'Cắt Tóc & Phục Hồi',
    text: 'Kiểu tóc cắt tỉa rất tinh tế, đúng như mình mong muốn. Liệu trình phục hồi giúp tóc mềm mại trở lại.',
  },
  {
    name: 'Lê Hoàng Yến',
    service: 'Tẩy & Ombré',
    text: 'Tẩy tóc an toàn, không bị khô xơ. Hiệu ứng ombré tự nhiên và rất hợp với nước da của mình.',
  },
];

export default function Reviews() {
  return (
    <section
      aria-label="Client reviews"
      className="bg-[#FAF8F5] px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#7a6b5d]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Khách Hàng Nói Gì
          </span>
          <h2
            className="text-[32px] leading-[1.1] tracking-tight text-[#2a221c] md:text-[44px]"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
          >
            Cảm Nhận Khách Hàng
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="flex flex-col gap-5 rounded-sm border border-[#2a221c]/10 bg-white/50 p-8"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[14px] text-[#c9a96e]">★</span>
                ))}
              </div>
              <p
                className="text-[15px] leading-[1.8] text-[#2a221c]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                "{r.text}"
              </p>
              <div className="mt-auto">
                <p
                  className="text-[16px] text-[#2a221c]"
                  style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
                >
                  {r.name}
                </p>
                <p
                  className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[#7a6b5d]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {r.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

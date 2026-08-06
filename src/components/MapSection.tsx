export default function MapSection() {
  return (
    <section
      aria-label="Salon location"
      className="bg-[#FAF8F5] px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#7a6b5d]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Vị Trí Salon
          </span>
          <h2
            className="text-[32px] leading-[1.1] tracking-tight text-[#2a221c] md:text-[44px]"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
          >
            Tìm Đến Chúng Tôi
          </h2>
        </div>

        <div className="h-[400px] w-full overflow-hidden rounded-sm border border-[#2a221c]/10 bg-[#f0ebe2] md:h-[480px]">
          <div className="flex h-full w-full items-center justify-center">
            <span
              className="text-[12px] uppercase tracking-[0.2em] text-[#7a6b5d]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Google Maps Placeholder
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#7a6b5d]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Địa Chỉ
          </span>
          <p
            className="text-[16px] text-[#2a221c] md:text-[18px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            123 Nguyễn Văn Cừ, Quận 1, TP. Hồ Chí Minh
          </p>
        </div>
      </div>
    </section>
  );
}

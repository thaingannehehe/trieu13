const STYLISTS = [
  {
    name: 'Triệu Mỹ Dung',
    role: 'Creative Director',
    img: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/v1786017643/1_1_wvbsxs.jpg',
  },
  {
    name: 'Thanh Hằng',
    role: 'Chuyên Gia Nhuộm Màu',
    img: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/v1786017643/1_4_pc8okp.jpg',
  },
  {
    name: 'Hoàng Anh',
    role: 'Chuyên Gia Tóc Layer',
    img: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/v1786017645/1_2_j8pfn8.jpg',
  },
  {
    name: 'Bảo Trân',
    role: 'Chuyên Gia Uốn & Phục Hồi',
    img: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/v1786017645/1_3_zd0tau.jpg',
  },
  {
    name: 'Kim Ngân',
    role: 'Chuyên Gia Tóc Bob',
    img: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/v1786017645/1_7_utvsma.jpg',
  },
  {
    name: 'Ngọc Ánh',
    role: 'Chuyên Gia Tóc Ngắn',
    img: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/v1786017645/1_6_ybbgge.jpg',
  },
  {
    name: 'Mỹ Linh',
    role: 'Chuyên Gia Balayage',
    img: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/v1786017646/1_12_b70tlb.jpg',
  },
  {
    name: 'Thu Trang',
    role: 'Chuyên Gia Nối Tóc',
    img: 'https://res.cloudinary.com/o5ikznlv/image/upload/q_auto/f_auto/v1786017646/1_5_ivdfvn.jpg',
  },
];

export default function Stylists() {
  return (
    <section
      id="stylist"
      aria-label="Meet our stylists"
      className="bg-[#FAF8F5] px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#7a6b5d]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Đội Ngũ
          </span>
          <h2
            className="text-[32px] leading-[1.1] tracking-tight text-[#2a221c] md:text-[44px]"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
          >
            Gặp Gỡ Nhà Tạo Mẫu
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
          style={{ columnGap: '32px', rowGap: '56px' }}
        >
          {STYLISTS.map((stylist) => (
            <article key={stylist.name} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-[#f0ebe2]">
                <img
                  src={stylist.img}
                  alt={stylist.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p
                className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#8b5e3c] md:text-[12px]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {stylist.role}
              </p>
              <h3
                className="mt-2 text-[32px] leading-[1.05] tracking-tight text-[#2a221c] md:text-[38px]"
                style={{ fontFamily: "'Newsreader', serif", fontWeight: 500 }}
              >
                {stylist.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

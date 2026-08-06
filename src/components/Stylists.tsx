const STYLISTS = [
  {
    name: 'Triệu Thị Mỹ Dung',
    role: 'Giám Đốc Sáng Lập & Nhà Tạo Mẫu Trưởng',
    img: 'https://images.pexels.com/photos/29852852/pexels-photo-29852852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Nguyễn Thanh Hằng',
    role: 'Chuyên Gia Nhuộm & Màu Tóc',
    img: 'https://images.pexels.com/photos/13801472/pexels-photo-13801472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Lê Hoàng Anh',
    role: 'Nhà Tạo Mẫu Cắt Tóc',
    img: 'https://images.pexels.com/photos/30004325/pexels-photo-30004325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Trần Bảo Trân',
    role: 'Chuyên Gia Uốn & Phục Hồi Tóc',
    img: 'https://images.pexels.com/photos/30198184/pexels-photo-30198184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export default function Stylists() {
  return (
    <section
      aria-label="Meet our stylists"
      className="bg-[#FAF8F5] px-6 py-20 md:py-28"
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

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {STYLISTS.map((s) => (
            <div key={s.name} className="flex flex-col gap-4">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-[#f0ebe2]">
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3
                className="text-[20px] text-[#2a221c]"
                style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
              >
                {s.name}
              </h3>
              <p
                className="text-[12px] uppercase tracking-[0.15em] text-[#7a6b5d]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.role}
              </p>
              <p
                className="text-[13px] leading-[1.7] text-[#7a6b5d]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Đặt ra tiêu chuẩn cao nhất cho từng kiểu tóc, mang đến trải nghiệm hoàn hảo cho mỗi khách hàng.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

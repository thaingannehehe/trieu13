const GALLERY_IMAGES = [
  'https://images.pexels.com/photos/11813865/pexels-photo-11813865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/17328861/pexels-photo-17328861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/3065208/pexels-photo-3065208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/30661047/pexels-photo-30661047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/3993463/pexels-photo-3993463.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7440132/pexels-photo-7440132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export default function HairGallery() {
  return (
    <section
      aria-label="Hair gallery"
      className="bg-[#FAF8F5] px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-[#7a6b5d]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Lookbook
          </span>
          <h2
            className="text-[32px] leading-[1.1] tracking-tight text-[#2a221c] md:text-[44px]"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 400 }}
          >
            Bộ Sưu Tập Tóc Đẹp
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="aspect-[3/4] overflow-hidden rounded-sm bg-[#f0ebe2]"
            >
              <img
                src={src}
                alt={`Mẫu tóc ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

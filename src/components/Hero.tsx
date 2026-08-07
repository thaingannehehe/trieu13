import { forwardRef } from 'react';

const HERO_IMG = 'https://ik.imagekit.io/zznoau6lx/Hair%20demo%201/2026-08-06_07-24-22_Lumina_1.jpg';

/**
 * The Hero is always mounted — from frame one. It is never faded in,
 * never swapped, never replaced. The IntroOverlay simply reveals it.
 *
 * The title lives INSIDE the Hero section as an absolutely-positioned
 * element (not a global fixed overlay). Its vertical position is driven by
 * a single CSS variable (--hero-title-top, defined in index.css) so it can
 * be moved up or down by changing one value. Because Hero is position:relative
 * without a z-index, it does NOT create a stacking context — so the title at
 * z-[90] still appears above the IntroOverlay (z-[80]) during the intro,
 * preserving the mask reveal exactly. After the intro, the title scrolls
 * away together with the Hero.
 */
const Hero = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#1c1612]"
    >
      {/* ── Hero background (frame one, always present) ── */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Mẫu tóc Triệu Tóc Đẹp"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1612]/30 via-transparent to-[#1c1612]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1612]/60 via-[#1c1612]/10 to-transparent" />
      </div>

      {/* ── Title (part of the Hero, not a global overlay) ──
          Positioned absolutely within the Hero section. The vertical anchor
          is --hero-title-top (a single CSS variable in index.css). Horizontal
          padding matches the description below for visual alignment. z-[90]
          keeps it above the IntroOverlay (z-[80]) during the intro so the
          SplitText animation is visible on top of the mask — identical to the
          previous fixed-layer behavior. */}
      <div
        className="absolute left-0 w-full pointer-events-none z-[90]"
        style={{ top: 'var(--hero-title-top, 28%)' }}
      >
        <div className="pl-12 md:pl-20 lg:pl-28" style={{ maxWidth: '42%', minWidth: 320 }}>
          <h1
            id="hero-title"
            className="text-white tracking-tight"
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(48px, 9vw, 128px)',
              lineHeight: 1,
              fontWeight: 300,
              letterSpacing: '-0.01em',
            }}
          >
            Triệu
            <br />
            Tóc Đẹp
          </h1>
          <div
            className="mt-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#d8d2c9]/90 px-4 py-2 text-[10px] text-[#2a221c] shadow-[0_4px_16px_rgba(28,22,18,0.12)]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            aria-label="Google 4.8 trên 5, 1279 đánh giá"
          >
            <span className="font-medium tracking-[0.08em]">GOOGLE</span>
            <span className="flex gap-0.5 text-[12px] text-[#c9a96e]" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>★</span>
              ))}
            </span>
            <span className="font-medium">4.8</span>
            <span className="text-[#7a6b5d]">·</span>
            <span>1279 đánh giá</span>
          </div>
        </div>
      </div>

      {/* ── Description + CTA ──
          Positioned independently of the title. The bottom padding reserves
          the editorial space the title occupies visually above it, so the
          composition matches the original Hero without a spacer div. */}
      <div
        id="hero-content"
        className="absolute inset-0 z-20 h-full flex flex-col justify-end pointer-events-none"
      >
        <div
          className="pl-12 md:pl-20 lg:pl-28 pb-20"
          style={{ maxWidth: '42%', minWidth: 320 }}
        >
          <p
            className="hero-content-item text-white/65 text-[14px] md:text-[15px] leading-[1.8] mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Tiêu chuẩn mới trong nghệ thuật tạo mẫu tóc. Cắt tỉa chính xác, màu tóc đa chiều, và các liệu trình chăm sóc được thiết kế riêng cho từng khách hàng — bởi những nhà tạo mẫu coi mỗi mái tóc như một tác phẩm.
          </p>

          <div className="hero-content-item pointer-events-auto flex items-center gap-4">
            <button
              className="whitespace-nowrap text-[#1c1612] bg-white px-8 py-4 hover:bg-white/90 transition-colors duration-300 uppercase tracking-[0.15em] text-[12px] font-medium active:scale-95"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Đặt Lịch Hẹn
            </button>
            <a
              href="#services-pricing"
              className="whitespace-nowrap border border-white/60 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10 active:scale-95"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Dịch Vụ &amp; Giá
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        id="hero-scroll"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span
          className="text-white/40 text-[10px] uppercase tracking-[0.3em]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Cuộn Xuống
        </span>
        <div className="w-px h-12 bg-white/20 overflow-hidden">
          <div className="w-full h-1/2 bg-white scroll-line" />
        </div>
      </div>

      {/* ── Side label ── */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <p
          className="text-white/30 text-[10px] uppercase tracking-[0.3em] rotate-90 origin-center whitespace-nowrap"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Thành Lập 2018 — Sài Gòn
        </p>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;

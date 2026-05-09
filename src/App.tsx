import type { ReactNode } from "react";

const accent = "#FF4D6D";

function IconPin({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.25" fill="currentColor" />
    </svg>
  );
}

function IconUserOutline({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8.5" r="3.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M5.5 19.25c0-3.25 2.9-5.5 6.5-5.5s6.5 2.25 6.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHome({ active }: { active?: boolean }) {
  const c = active ? accent : "#666666";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4.5 10.25 12 3.75l7.5 6.5V20a1 1 0 0 1-1 1h-4.75v-6H10.25v6H5.5a1 1 0 0 1-1-1v-9.75Z"
        stroke={c}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBag({ active }: { active?: boolean }) {
  const c = active ? accent : "#666666";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.25 8.25V6a3.75 3.75 0 0 1 7.5 0v2.25"
        stroke={c}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M5.5 9.75h13l1 11.5H4.5l1-11.5Z"
        stroke={c}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconOrders({ active }: { active?: boolean }) {
  const c = active ? accent : "#666666";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.5 5.5h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V9l3.5-3.5Z"
        stroke={c}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M8.5 5.5V9H5" stroke={c} strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9 13h8M9 16.5h6" stroke={c} strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconHeart({ active }: { active?: boolean }) {
  const c = active ? accent : "#666666";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 20.35c-.35 0-.7-.12-1-.36-3.6-2.9-8.5-6.55-8.5-11.2A4.85 4.85 0 0 1 12 5.5a4.85 4.85 0 0 1 9.5 3.29c0 4.65-4.9 8.3-8.5 11.2-.3.24-.65.36-1 .36Z"
        stroke={c}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconProfile({ active }: { active?: boolean }) {
  const c = active ? accent : "#666666";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="3.25" stroke={c} strokeWidth="1.75" />
      <path
        d="M6.25 19.5c0-3.1 2.6-5.25 5.75-5.25S17.75 16.4 17.75 19.5"
        stroke={c}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AllCategoriesIcon() {
  return (
    <div
      className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl shadow-soft"
      style={{ backgroundColor: accent }}
    >
      <div className="grid grid-cols-2 gap-1">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/95" />
        ))}
      </div>
    </div>
  );
}

const categories: { label: string; gradient: string; symbol: string }[] = [
  { label: "蛋糕", gradient: "from-[#FFD6E0] to-[#FFC2D4]", symbol: "🎂" },
  { label: "意面", gradient: "from-[#FFE8C8] to-[#FFD8A8]", symbol: "🍝" },
  { label: "披萨", gradient: "from-[#FFE4C4] to-[#FFCC99]", symbol: "🍕" },
  { label: "马卡龙", gradient: "from-[#F3E8FF] to-[#E9D5FF]", symbol: "🍬" },
  { label: "咖啡饮品", gradient: "from-[#E8DDD4] to-[#D4C4B8]", symbol: "☕" },
  { label: "甜品", gradient: "from-[#FFE4F3] to-[#FFC9E8]", symbol: "🍮" },
  { label: "面包", gradient: "from-[#FFF0D6] to-[#FFE0A8]", symbol: "🥖" },
  { label: "下午茶", gradient: "from-[#E8F5E9] to-[#C8E6C9]", symbol: "🫖" },
  { label: "生日定制", gradient: "from-[#E3F2FD] to-[#BBDEFB]", symbol: "🎁" },
];

const products = [
  {
    name: "草莓奶油蛋糕",
    price: "¥128",
    img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "提拉米苏",
    price: "¥36",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "抹茶千层",
    price: "¥108",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop&q=80",
  },
];

const heroCakeImg =
  "https://images.unsplash.com/photo-1565958011703-44f982c41a5d?w=520&h=520&fit=crop&q=85";

export default function App() {
  return (
    <div className="min-h-dvh bg-bakery-bg font-sans text-bakery-ink antialiased">
      <div className="relative mx-auto min-h-dvh w-full max-w-md pb-[calc(4.25rem+env(safe-area-inset-bottom,0px))] sm:shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
        <header className="px-4 pt-3 sm:pt-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-start gap-1.5 pt-0.5">
              <IconPin className="mt-0.5 shrink-0 text-bakery-accent" />
              <p className="text-[15px] font-semibold leading-snug tracking-tight text-bakery-ink">
                甜心烘焙屋（万象城店）
              </p>
            </div>
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-black/[0.03]"
              aria-label="账户"
            >
              <IconUserOutline className="text-bakery-muted" />
            </button>
          </div>

          <div
            className="mt-3 flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 shadow-soft ring-1 ring-black/[0.03]"
            role="search"
          >
            <IconSearch className="shrink-0 text-bakery-subtle" />
            <input
              type="search"
              readOnly
              tabIndex={0}
              placeholder="搜索蛋糕、甜品、咖啡..."
              className="min-w-0 flex-1 cursor-default border-0 bg-transparent p-0 text-[14px] text-bakery-ink placeholder:text-bakery-subtle focus:outline-none focus:ring-0"
            />
          </div>
        </header>

        <section className="relative z-0 mt-4 px-4">
          <div className="relative overflow-hidden rounded-[1.125rem] bg-gradient-to-br from-[#FFE8EE] via-[#FFD6E0] to-[#FFC9D6] shadow-soft ring-1 ring-white/60">
            <div
              className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/35 blur-2xl"
              aria-hidden
            />
            <div className="relative flex min-h-[148px] items-center pl-4 pr-[42%] py-4 sm:min-h-[156px]">
              <div className="max-w-[55%]">
                <h2 className="font-serif text-[26px] font-semibold leading-tight text-bakery-accent sm:text-[28px]">
                  草莓季限定
                </h2>
                <p className="mt-1 font-display text-[17px] italic text-[#E85A78] sm:text-[18px]">
                  Strawberry Cake
                </p>
                <button
                  type="button"
                  className="mt-3 rounded-full bg-white px-3.5 py-1.5 text-[12px] font-medium text-bakery-accent shadow-sm ring-1 ring-black/[0.04]"
                >
                  立即品尝
                </button>
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-[-6px] top-2 w-[52%] max-w-[200px] sm:right-0">
              <img
                src={heroCakeImg}
                alt=""
                className="h-full w-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(255,77,109,0.18)]"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="mt-6 px-2 sm:px-3">
          <div className="grid grid-cols-5 gap-x-1 gap-y-5">
            {categories.map((c) => (
              <button
                key={c.label}
                type="button"
                className="flex flex-col items-center gap-1.5 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-bakery-accent/40 rounded-lg"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-b ${c.gradient} text-[22px] shadow-soft ring-1 ring-white/70`}
                >
                  <span className="select-none leading-none" aria-hidden>
                    {c.symbol}
                  </span>
                </div>
                <span className="w-full px-0.5 text-cat font-normal text-bakery-muted">{c.label}</span>
              </button>
            ))}
            <button
              type="button"
              className="flex flex-col items-center gap-1.5 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-bakery-accent/40 rounded-lg"
            >
              <AllCategoriesIcon />
              <span className="w-full px-0.5 text-cat font-normal text-bakery-muted">全部分类</span>
            </button>
          </div>
        </section>

        <section className="mt-7 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-4 w-1 rounded-full bg-bakery-accent" aria-hidden />
              <h3 className="text-[16px] font-bold tracking-tight text-bakery-ink">人气推荐</h3>
            </div>
            <button type="button" className="flex items-center gap-0.5 text-[13px] text-bakery-subtle">
              更多
              <IconChevronRight className="text-bakery-subtle" />
            </button>
          </div>

          <div className="no-scrollbar -mx-4 mt-3 flex gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
            {products.map((p) => (
              <article
                key={p.name}
                className="w-[132px] shrink-0 overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-black/[0.03] sm:w-full sm:shrink"
              >
                <div className="aspect-square w-full overflow-hidden bg-[#f7f7f7]">
                  <img src={p.img} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="relative px-2.5 pb-2.5 pt-2">
                  <div className="flex items-start justify-between gap-1 pr-4">
                    <h4 className="text-[13px] font-semibold leading-snug text-bakery-ink">{p.name}</h4>
                  </div>
                  <div className="mt-1.5 flex items-end justify-between">
                    <p className="text-[15px] font-bold tabular-nums text-bakery-accent">{p.price}</p>
                    <IconChevronRight className="mb-0.5 shrink-0 text-bakery-subtle opacity-70" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <nav
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/[0.05] bg-white/95 backdrop-blur-sm"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="mx-auto flex max-w-md justify-around px-1 pt-2">
            <NavItem label="首页" active icon={<IconHome active />} />
            <NavItem label="点单" icon={<IconBag />} />
            <NavItem label="订单" icon={<IconOrders />} />
            <NavItem label="会员" icon={<IconHeart />} />
            <NavItem label="我的" icon={<IconProfile />} />
          </div>
        </nav>
      </div>
    </div>
  );
}

function NavItem({
  label,
  active,
  icon,
}: {
  label: string;
  active?: boolean;
  icon: ReactNode;
}) {
  return (
    <button
      type="button"
      className="flex min-w-[3.25rem] flex-col items-center gap-1 pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-bakery-accent/30 rounded-lg"
    >
      <span className="flex h-6 w-6 items-center justify-center [&>svg]:scale-100">{icon}</span>
      <span
        className={`text-nav font-medium ${active ? "text-bakery-accent" : "text-bakery-muted"}`}
        style={{ letterSpacing: "0.01em" }}
      >
        {label}
      </span>
    </button>
  );
}

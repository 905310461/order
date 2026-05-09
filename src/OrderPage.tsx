import { useEffect, useMemo, useState, type Dispatch, type SetStateAction } from "react";
import { menuItems, SIDEBAR_BY_TOP, TOP_CATEGORIES } from "./menuItems";

/** 点单页主色，贴近截图珊瑚红 */
const coral = "#FF5A5F";

function IconBack({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full text-[#111] hover:bg-black/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
      aria-label="返回"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function IconMenuMore() {
  return (
    <button
      type="button"
      className="flex h-10 w-10 items-center justify-center rounded-full text-[#111] hover:bg-black/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
      aria-label="更多"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="6" cy="8" r="1.25" fill="currentColor" />
        <circle cx="12" cy="8" r="1.25" fill="currentColor" />
        <circle cx="18" cy="8" r="1.25" fill="currentColor" />
        <path d="M5 12h14M5 16h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    </button>
  );
}

function IconCartGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.25 8.25V6a3.75 3.75 0 0 1 7.5 0v2.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M5.5 9.75h13l1 11.5H4.5l1-11.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type OrderPageProps = {
  onBack: () => void;
  cart: Record<string, number>;
  setCart: Dispatch<SetStateAction<Record<string, number>>>;
};

export default function OrderPage({ onBack, cart, setCart }: OrderPageProps) {
  const [activeTop, setActiveTop] = useState<string>("蛋糕");
  const [activeSub, setActiveSub] = useState<string>("推荐");

  const sidebar = SIDEBAR_BY_TOP[activeTop] ?? SIDEBAR_BY_TOP["蛋糕"];

  useEffect(() => {
    const list = SIDEBAR_BY_TOP[activeTop];
    if (!list?.length) return;
    setActiveSub((prev) => (list.includes(prev) ? prev : list[0]));
  }, [activeTop]);

  const filtered = useMemo(
    () => menuItems.filter((m) => m.topCategory === activeTop && m.subCategory === activeSub),
    [activeTop, activeSub],
  );

  const { totalQty, totalPrice } = useMemo(() => {
    let qty = 0;
    let price = 0;
    for (const item of menuItems) {
      const n = cart[item.id] ?? 0;
      if (n > 0) {
        qty += n;
        price += n * item.price;
      }
    }
    return { totalQty: qty, totalPrice: price };
  }, [cart]);

  const setQty = (id: string, next: number) => {
    setCart((prev) => {
      const copy = { ...prev };
      if (next <= 0) delete copy[id];
      else copy[id] = next;
      return copy;
    });
  };

  return (
    <div className="flex h-dvh max-w-md flex-col bg-white font-sans text-[#111] antialiased sm:mx-auto sm:shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
      <header className="flex shrink-0 items-center justify-between border-b border-black/[0.06] bg-white px-1">
        <IconBack onClick={onBack} />
        <h1 className="text-[17px] font-bold tracking-tight">点单</h1>
        <IconMenuMore />
      </header>

      <div className="no-scrollbar shrink-0 overflow-x-auto border-b border-black/[0.06] bg-white px-3">
        <div className="flex min-w-max gap-6 px-1">
          {TOP_CATEGORIES.map((tab) => {
            const active = tab === activeTop;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTop(tab)}
                className={`relative shrink-0 py-3 text-[15px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  active ? "font-semibold" : "font-normal text-[#888888]"
                }`}
                style={{ color: active ? coral : undefined }}
              >
                {tab}
                {active ? (
                  <span
                    className="absolute bottom-0 left-0 right-0 mx-auto h-[3px] w-[60%] min-w-[1.5rem] rounded-full"
                    style={{ backgroundColor: coral }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside className="no-scrollbar w-[26%] max-w-[5.75rem] shrink-0 overflow-y-auto bg-[#F7F7F7] sm:max-w-[6.25rem]">
          {sidebar.map((label) => {
            const active = label === activeSub;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActiveSub(label)}
                className={`w-full px-1.5 py-[1.125rem] text-center text-[13px] leading-snug transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset ${
                  active ? "bg-white font-medium" : "font-normal text-[#555555]"
                }`}
                style={{ color: active ? coral : undefined }}
              >
                {label}
              </button>
            );
          })}
        </aside>

        <main className="no-scrollbar min-w-0 flex-1 overflow-y-auto bg-white px-3 py-3">
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-[14px] text-[#9CA3AF]">该分类暂无菜品</p>
          ) : (
            <ul className="space-y-5">
              {filtered.map((item) => {
                const qty = cart[item.id] ?? 0;
                return (
                  <li key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt=""
                      className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-[10px] bg-[#f5f5f5] object-cover"
                      loading="lazy"
                    />
                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <h2 className="text-[15px] font-bold leading-snug text-[#111]">{item.name}</h2>
                        <p className="mt-1 text-[12px] leading-relaxed text-[#9CA3AF]">{item.description}</p>
                      </div>
                      <div className="mt-2 flex items-end justify-between gap-2">
                        <p className="tabular-nums" style={{ color: coral }}>
                          <span className="text-[12px] font-semibold">¥</span>
                          <span className="text-[17px] font-bold">{item.price}</span>
                        </p>
                        {qty === 0 ? (
                          <button
                            type="button"
                            onClick={() => setQty(item.id, 1)}
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-light leading-none text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                            style={{ backgroundColor: coral }}
                            aria-label={`将${item.name}加入购物车`}
                          >
                            +
                          </button>
                        ) : (
                          <div className="flex shrink-0 items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setQty(item.id, qty - 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[18px] font-medium leading-none text-[#666] focus:outline-none focus-visible:ring-2"
                              aria-label="减少"
                            >
                              −
                            </button>
                            <span className="min-w-[1.25rem] text-center text-[14px] font-semibold tabular-nums text-[#111]">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQty(item.id, qty + 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-light leading-none text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
                              style={{ backgroundColor: coral }}
                              aria-label="增加"
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </main>
      </div>

      <div
        className="shrink-0 px-3 pt-2"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))" }}
      >
        <div
          className="flex h-[3.25rem] items-center gap-2 rounded-full px-2.5 shadow-[0_8px_24px_rgba(255,90,95,0.35)]"
          style={{
            background: `linear-gradient(90deg, #FF8A8E 0%, ${coral} 55%, #FF4D55 100%)`,
          }}
        >
          <div className="relative shrink-0 pl-0.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
              <IconCartGlyph className="text-[#FF5A5F]" />
            </div>
            {totalQty > 0 ? (
              <span className="absolute -right-0.5 -top-1 flex min-h-[1.125rem] min-w-[1.125rem] items-center justify-center rounded-full bg-[#E02020] px-1 text-[10px] font-bold leading-none text-white">
                {totalQty > 99 ? "99+" : totalQty}
              </span>
            ) : null}
          </div>
          <div className="min-w-0 flex-1 pl-1">
            <p className="truncate text-[18px] font-bold tabular-nums text-white">¥{totalPrice}</p>
          </div>
          <button
            type="button"
            disabled={totalQty === 0}
            className="shrink-0 rounded-full bg-white/30 px-4 py-2 text-[14px] font-medium text-white backdrop-blur-[2px] transition enabled:hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 disabled:opacity-50"
          >
            去结算
          </button>
        </div>
      </div>
    </div>
  );
}

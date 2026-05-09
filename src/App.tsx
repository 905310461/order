import { useState } from "react";
import type { ReactNode } from "react";
import HomePage from "./HomePage";
import OrderPage from "./OrderPage";

const accent = "#FF4D6D";

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

export default function App() {
  const [screen, setScreen] = useState<"home" | "order">("home");
  const [orderCart, setOrderCart] = useState<Record<string, number>>({});

  if (screen === "order") {
    return (
      <OrderPage
        onBack={() => setScreen("home")}
        cart={orderCart}
        setCart={setOrderCart}
      />
    );
  }

  return (
    <div className="min-h-dvh bg-bakery-bg font-sans text-bakery-ink antialiased">
      <div className="relative mx-auto min-h-dvh w-full max-w-md pb-[calc(4.25rem+env(safe-area-inset-bottom,0px))] sm:shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
        <HomePage />

        <nav
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/[0.05] bg-white/95 backdrop-blur-sm"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="mx-auto flex max-w-md justify-around px-1 pt-2">
            <NavItem label="首页" active icon={<IconHome active />} onClick={() => setScreen("home")} />
            <NavItem label="点单" icon={<IconBag />} onClick={() => setScreen("order")} />
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
  onClick,
}: {
  label: string;
  active?: boolean;
  icon: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
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

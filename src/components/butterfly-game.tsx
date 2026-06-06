"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const getLink = () => ["https://mym", ".fans/Curly", "cake"].join("");

const BLOCKED_UA = [
  "facebookexternalhit", "facebot", "twitterbot", "linkedinbot",
  "instagram", "pinterest", "slackbot", "telegrambot", "whatsapp",
  "googlebot", "bingbot", "yandexbot", "duckduckbot", "baiduspider",
  "ahrefsbot", "semrushbot", "scrapy", "curl", "wget", "python-requests",
];

export function ButterflyGame() {
  const [pos, setPos] = useState({ x: 60, y: 40 });
  const [popped, setPopped] = useState(false);
  const [popPos, setPopPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (BLOCKED_UA.some((bot) => ua.includes(bot))) {
      setBlocked(true);
      return;
    }
    const onInteract = () => setVisible(true);
    window.addEventListener("mousemove", onInteract, { once: true });
    window.addEventListener("touchstart", onInteract, { once: true });
    const fallback = setTimeout(() => setVisible(true), 1500);
    return () => {
      window.removeEventListener("mousemove", onInteract);
      window.removeEventListener("touchstart", onInteract);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!visible || popped) return;
    const fly = () => {
      setPos({ x: 8 + Math.random() * 82, y: 8 + Math.random() * 75 });
    };
    fly();
    intervalRef.current = setInterval(fly, 3500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [visible, popped]);

  const handleCatch = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (popped) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    setPopPos({ x: (pos.x / 100) * vw, y: (pos.y / 100) * vh });
    setPopped(true);
  }, [popped, pos]);

  if (blocked) return null;

  return (
    <>
      {visible && !popped && (
        <button
          onClick={handleCatch}
          onTouchEnd={handleCatch}
          className="fixed z-50 cursor-pointer select-none bg-transparent border-none p-2 leading-none"
          style={{
            fontSize: "3.5rem",
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "left 2.8s cubic-bezier(0.45, 0.05, 0.55, 0.95), top 2.8s cubic-bezier(0.45, 0.05, 0.55, 0.95)",
            filter: "drop-shadow(0 0 10px rgba(255,180,255,0.7))",
            animation: "bob 2.5s ease-in-out infinite",
          }}
          aria-label="Catch the emoji"
        >
          🐀
        </button>
      )}

      {popped && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{ left: popPos.x, top: popPos.y, transform: "translate(-50%, -50%)" }}
        >
          {["✨","🌸","💫","⭐","🌺","✨","💖","🌸"].map((p, i) => (
            <span key={i} className="absolute text-xl"
              style={{ animation: `burst-${i % 4} 0.7s ease-out forwards`, animationDelay: `${i * 0.04}s` }}>
              {p}
            </span>
          ))}
        </div>
      )}

      {popped && (
        <div className="flex flex-col items-center gap-2 mt-6 w-full max-w-sm animate-fade-in">
          <a
            ref={(el) => { if (el) el.href = getLink(); }}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full text-white font-medium text-sm transition-all duration-300 hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #e91e8c 0%, #c2006e 100%)" }}
          >
            Message me
          </a>
        </div>
      )}
    </>
  );
}

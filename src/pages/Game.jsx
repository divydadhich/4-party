import LevelTabs from "../components/LevelTabs";
import { useEffect, useState } from "react";
import i1 from "../assets/icon1.jpg";
import Avatar from "../assets/avatar.jpeg";
import G from "../assets/game.png";

export default function Game() {
  const currentLevel = 2;
  const nextLevel = 3;

  const currentExp = 705000;
  const requiredExp = 189330;

  const progressPercent = Math.min(
    Math.round((currentExp / requiredExp) * 100),
    100
  );

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progressPercent);
    }, 300);

    return () => clearTimeout(timer);
  }, [progressPercent]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#171737] to-[#0b0b24] text-white flex justify-center">
      <div className="w-full max-w-[390px] px-4 pt-4 pb-10">

        {/* ================= TABS ================= */}
        <LevelTabs />

        {/* ================= LEVEL CARD ================= */}
        <div className="border-2 border-[#6f73ff]/60 rounded-2xl mt-4">
          <div className="relative mb-8">

            {/* Card */}
            <div
              className="relative rounded-2xl px-4 py-5 overflow-hidden
              bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857]
              border border-yellow-300/70"
            >
              {/* Diamond pattern */}
              <div
                className="absolute inset-0 opacity-20
                bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.15)_75%,rgba(255,255,255,.15)),
                    linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.15)_75%,rgba(255,255,255,.15))]
                bg-[length:20px_20px]
                bg-[position:0_0,10px_10px]"
              />

              {/* Content */}
              <div className="relative z-10 pr-24">
                <p className="text-lg font-semibold mb-3">
                  Level {currentLevel}
                </p>

                {/* ================= PROGRESS ================= */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm opacity-90 min-w-[44px]">
                    Lv.{currentLevel}
                  </span>

                  <div className="relative flex-1 h-2 bg-white/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${animatedProgress}%` }}
                    />

                    <span
                      className="absolute -top-7 text-[11px] bg-white text-[#ff4d5e]
                      px-2 py-[1px] rounded-full font-semibold
                      transition-all duration-700 ease-out"
                      style={{
                        left: `${animatedProgress}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      {animatedProgress}%
                    </span>
                  </div>

                  <span className="text-sm opacity-90 min-w-[44px] text-right">
                    Lv.{nextLevel}
                  </span>
                </div>

                <p className="text-xs opacity-90">
                  Requires {requiredExp} Experience Upgrade
                </p>
              </div>
            </div>

            {/* Avatar */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2">
              <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                <img
                  src={Avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= LEVEL LIST ================= */}
          <div className="mb-10">

            {/* Headings */}
            <div className="grid grid-cols-2 gap-4 mb-4 px-10 ">
              <span className="text-lg text-white/60">
                Level range (Lv.)
              </span>
              <span className="text-lg text-white/60 text-center ">
                Level icons
              </span>
            </div>

            {/* Rows */}
            <div className="space-y-4">
              {[
                ["1–10", ],
                ["11–20", ],
                ["21–30", ],
                ["31–40", ],
                ["41–50", ],
                ["51–60", ],
                ["61–70", ],
                ["71–80", ],
                ["81–90", ],
                ["91–100", ],
                ["101–110", ],
                ["111–120", ],
              ].map(([range, lvl]) => (
                <div
                  key={lvl}
                  className="grid grid-cols-2 gap-4 items-center px-13"
                >
                  <span className="text-base text-white/80">
                    {range}
                  </span>

                  <div className="flex justify-center">
                    <div className="relative w-16 h-8">
                      <img
                        src={i1}
                        alt={`Level ${lvl}`}
                        className="w-full h-full object-contain"
                      />
                      <span
                        className="absolute inset-0 flex items-center justify-center
                        text-xs font-bold text-white drop-shadow"
                      >
                        {lvl}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= HOW TO UPGRADE ================= */}
        <div
          className="rounded-2xl p-5
          bg-gradient-to-b from-[#26265d] to-[#1b1b46]
          border-2 border-[#6f73ff]/60
          shadow-[0_0_30px_rgba(111,115,255,0.15)] mt-6"
        >
          <h2 className="text-center text-lg font-semibold mb-6">
            How to Upgrade?
          </h2>

          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-full
              bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4]
              flex items-center justify-center"
            >
              <img src={G} alt="Game" className="w-8 h-8 object-contain" />
            </div>

            <div>
              <p className="font-medium">
                Earn points by playing games
              </p>
              <p className="text-sm opacity-80">
                1 Coin = 1 EXP
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

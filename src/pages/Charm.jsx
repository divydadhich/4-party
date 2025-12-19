import LevelTabs from "../components/LevelTabs";
import { useEffect, useState } from "react";
import i1 from "../assets/icon1.jpg"
import Avatar from "../assets/avatar.jpeg"

export default function Charm() {
    const currentLevel = 41;
const nextLevel = 42;

const currentExp = 705000;       // example value
const requiredExp = 3537890;

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
    <div className="min-h-screen w-full bg-gradient-to-b from-[#171737] to-[#0b0b24] text-white flex justify-center  ">
      <div className="w-full max-w-[390px] px-4 pt-4 pb-10 ">

       

       {/* ================= TABS ================= */}
<LevelTabs />

        {/* ================= LEVEL CARD ================= */}
        <div className="border-2 border-[#6f73ff]/60 rounded-2xl">
<div className="relative mb-8 ">

{/* Card */}
<div
  className="relative rounded-2xl px-4 py-5 overflow-hidden
  bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#9333ea]
  border border-yellow-300/70"
>
  {/* Diamond pattern */}
  <div className="absolute inset-0 opacity-20
    bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.15)_75%,rgba(255,255,255,.15)),
        linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_75%,rgba(255,255,255,.15)_75%,rgba(255,255,255,.15))]
    bg-[length:20px_20px]
    bg-[position:0_0,10px_10px]" />

  {/* Content */}
  <div className="relative z-10 pr-24">

    {/* Level title */}
    <p className="text-lg font-semibold mb-3">
      Level 41
    </p>

    {/* ================= PROGRESS ROW ================= */}
<div className="flex items-center gap-2 mb-3">

{/* Current level */}
<span className="text-sm opacity-90 min-w-[44px]">
  Lv.{currentLevel}
</span>

{/* Progress bar */}
<div className="relative flex-1 h-2 bg-white/40 rounded-full overflow-hidden">

  {/* Progress fill */}
  <div
    className="h-full bg-white rounded-full transition-all duration-700 ease-out"
    style={{ width: `${animatedProgress}%` }}
  />

  {/* Percentage bubble */}
  <span
    className="absolute -top-7 text-[11px] bg-white text-[#ff4d5e]
               px-2 py-[1px] rounded-full font-semibold
               transition-all duration-700 ease-out"
    style={{ left: `${animatedProgress}%`, transform: "translateX(-50%)" }}
  >
    {animatedProgress}%
  </span>
</div>

{/* Next level */}
<span className="text-sm opacity-90 min-w-[44px] text-right">
  Lv.{nextLevel}
</span>
</div>

    {/* Requirement text */}
    <p className="text-xs opacity-90">
      Requires 3537890 Experience Upgrade
    </p>
  </div>
</div>

{/* Avatar (overlapping) */}
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
<div className="flex items-center justify-between mb-3 px-10">
  <span className="text-lg  tracking-wide text-white/60">
    Level Range (Lv.)
  </span>
  <span className="text-lg  tracking-wide text-white/60">
    Level icon
  </span>
</div>



{/* Levels */}
<div className="space-y-4  ">
  {[
    ["1–10", 10],
    ["11–20", 20],
    ["21–30", 30],
    ["31–40", 40],
    ["41–50", 50],
    ["51–60", 60],
    ["61–70", 70],
    ["71–80", 80],
    ["81–90", 90],
    ["91–100", 100],
    ["101–110", 110],
    ["111–120", 120],
  ].map(([range, lvl]) => (
    <div key={lvl} className="flex items-center justify-between px-13">

      {/* Level Range */}
      <span className="text-lg text-white/80">
        {range}
      </span>

    {/* Level Icon – Image */}
<div className="relative w-17 h-10 flex items-center justify-center">
  <img
    src={i1}
    alt="Level Icon"
    className="w-full h-full object-contain"
  />

</div>



    </div>
  ))}
</div>
</div>
</div>

        {/* ================= HOW TO UPGRADE ================= */}
        <div className="rounded-2xl p-5 
                        bg-gradient-to-b from-[#26265d] to-[#1b1b46]
                        border-2 border-[#6f73ff]/60
                        shadow-[0_0_30px_rgba(111,115,255,0.15)] mt-6">

          <h2 className="text-center text-lg font-semibold mb-6">
            How to Upgrade?
          </h2>

          <div className="space-y-6">

            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4]
                              flex items-center justify-center text-2xl">
                🎁
              </div>
              <div>
                <p className="font-medium">Give a Gift</p>
                <p className="text-sm opacity-80">1 Coins = 1 EXP</p>
              </div>
            </div>

           

          

          </div>
        </div>

      </div>
    </div>
  );
}

import { NavLink } from "react-router-dom";

export default function LevelTabs() {
  const base =
    "relative text-sm pb-2 transition";

  const active =
    "font-semibold text-white after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-4 after:h-[2px] after:bg-white after:-translate-x-1/2 after:rounded";

  const inactive = "opacity-50";

  return (
    <div className="flex justify-around mt-10 mb-6">
      <NavLink to="/wealth" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        Wealth
      </NavLink>

      <NavLink to="/charm" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        Charm
      </NavLink>

      <NavLink to="/game" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
        Game
      </NavLink>
    </div>
  );
}

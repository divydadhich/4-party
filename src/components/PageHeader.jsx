import { useNavigate } from "react-router-dom";

export default function PageHeader({ title }) {
  const navigate = useNavigate();

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        h-12
        bg-gradient-to-b from-[#1c1c3a] to-[#12122b]
        text-white
        flex items-center
      "
    >
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="absolute left-4 text-xl opacity-90"
      >
        ‹
      </button>

      {/* Title */}
      <h1 className="w-full text-center text-sm font-medium tracking-wide">
        {title}
      </h1>

      {/* Close */}
      <button
        onClick={() => navigate(-1)}
        className="absolute right-4 text-lg opacity-80"
      >
        ✕
      </button>
    </header>
  );
}

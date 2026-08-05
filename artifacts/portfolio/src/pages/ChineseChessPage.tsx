import XiangqiBoard from "@/components/xiangqi/XiangqiBoard";

export default function ChineseChessPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-24 px-5 md:px-10">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-3 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Chinese Chess</h1>
        <p className="text-white/50 max-w-lg text-sm md:text-base">
          Xiangqi (象棋) — pass-and-play locally. Red moves first. Capture the enemy
          general, or trap them with no legal moves, to win.
        </p>
      </div>

      <div className="mt-10">
        <XiangqiBoard />
      </div>
    </main>
  );
}

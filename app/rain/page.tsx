import MatrixRain from "@/components/MatrixRain";

export default function Rain() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <MatrixRain />
      <div className="relative z-10 p-8 text-green-400">
        <h1 className="mb-4 text-4xl font-bold">Welcome to the Matrix</h1>
        <p className="text-xl">Continue the mission Agent...</p>
      </div>
    </div>
  );
}

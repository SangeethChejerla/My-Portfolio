
export default function Terminal() {
    return (
      <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className="text-sm">bash</p>
        </div>
        <div className="mt-4">
          <p className="text-green-400">$ npx create-next-app@latest [title]</p>
          <p className="text-white"> next@14+</p>
          <p className="text-white">Your next.js app router is initialized</p>
          <p className="text-white"> select your preference &rarr;</p>
          <p className="text-green-400">$ Typescript</p>
          <p className="text-green-400">$ Tailwind css</p>
          <p className="text-green-400">$ Shadcn UI</p>
        </div>
      </aside>
    )
  }
  
  
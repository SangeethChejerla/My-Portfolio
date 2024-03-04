export default function AboutLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      <h1 className="-mt-14 inline-block text-[64px] font-bold text-black dark:text-white">Rule</h1>
        {children}
      </>
    )
  }
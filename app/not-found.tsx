import Link from 'next/link';
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#07110f] px-5 text-[#f2f4ee]">
      <div className="max-w-[700px] text-center">
        <p className="font-mono text-sm text-[#71f6b5]">404</p>
        <h1 className="mt-5 text-[clamp(3.5rem,8vw,7rem)] leading-[.9] font-medium tracking-[-.065em]">
          This route isn&apos;t part of the system.
        </h1>
        <p className="mx-auto mt-7 max-w-[560px] leading-7 text-[#9cafa6]">
          The page may have moved or the URL may be incorrect.
        </p>
        <Link className="mt-8 inline-block rounded-full bg-[#71f6b5] px-6 py-3 font-bold text-[#07110f]" href="/">
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}

"use client"
import { ListEmails } from "@/components/ListEmails";
import { TanStackProvider } from "@/plugins/TanStackQuery";

export default function Home() {
  return (
    <TanStackProvider>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
        <ListEmails />
      {/* </div> */}
    </TanStackProvider>
  );
}

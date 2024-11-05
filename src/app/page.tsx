"use client"
import { ListEmails } from "@/app/components/ListEmails";
import { TanStackProvider } from "@/plugins/TanStackQuery";

export default function Home() {
  return (
    <TanStackProvider>
      <ListEmails />
    </TanStackProvider>
  );
}

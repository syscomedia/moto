'use client';

import { usePathname } from 'next/navigation';
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import FloatingContact from "@/components/ui/FloatingContact";

export default function PublicWidgets() {
  const pathname = usePathname();

  // Do not display public communication widgets on admin dashboard or API routes
  if (pathname.startsWith('/admin') || pathname.startsWith('/api')) {
    return null;
  }

  return (
    <>
      <WhatsAppButton />
      <FloatingContact />
    </>
  );
}

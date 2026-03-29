// ============================================================
// ModalWrapper.jsx
// App এর global modal container। Layout এ একবার বসানো আছে।
// শুধু showLoginModal = true হলে RegiLog modal দেখাবে।
// বাকি সময় কিছুই render করবে না।
// ============================================================

'use client';
import dynamic from "next/dynamic";
import { useLoginModalStore } from "@/store/authSlice";

const RegiLog = dynamic(() => import("@/component/auth/regiLog/RegiLog"), { ssr: false });

export default function ModalWrapper() {
  const { showLoginModal } = useLoginModalStore();

  // শুধু modal open থাকলেই render করবে
  if (!showLoginModal) return null;

  return <RegiLog />;
}
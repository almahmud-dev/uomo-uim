'use client';
import dynamic from "next/dynamic";

const RegiLog = dynamic(() => import("@/component/auth/regiLog/RegiLog"), { ssr: false });

export default function ModalWrapper() {
  return <RegiLog />;
}
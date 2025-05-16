"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hoooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      Root Page
    </div>
  );
}

export default SetupPage;
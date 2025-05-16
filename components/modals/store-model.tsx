import { useStoreModal } from "@/hoooks/use-store-modal"
import { Modal } from "@/components/ui/modal"

export const StoreModal = () => {
    const storeModal = useStoreModal();
    
    return (
        <Modal
            title="Create Store"
            description="Add a new store to your account"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Future Create Store Form
        </Modal>
    )
}
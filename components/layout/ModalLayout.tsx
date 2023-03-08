import { useState } from "react";

export interface IModal {
    className?: string;
    isOpen: boolean;
    open: (arg0: string) => void;
    close: () => void;
    customClasses?: boolean;
    children: any;
    onSideClick?: () => void;
}


const ModalLayout = ({
    className,
    isOpen,
    close,
    children,
    customClasses = false,
    onSideClick,
}: IModal) => {
    return (
        <div className={`w-screen h-screen z-[9999] fixed top-0 left-0 flex items-center justify-center  
        ${isOpen ? "bg-overlay-gray " : "hidden"} ${className}`} 
        onClick={onSideClick ? onSideClick : close}>
            <div className="lg:h-max w-max" onClick={(e)=>{e.stopPropagation();}}>
                {children}
            </div>
        </div>
    )
}
export default ModalLayout;

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    return { isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }
}
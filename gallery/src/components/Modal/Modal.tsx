import { Picture } from "@/app/types/Picture"
import React from "react";

type Props = {
    picture?: Picture;
    closeModal: () => void;
}

export const Modal = ({ picture, closeModal }: Props) => {
    return (
        <React.Fragment>
            <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 px-2 flex justify-center items-center bg-black bg-opacity-90">
                <img className="max-w-screen max-h-screen" src={picture?.path} alt={picture?.name} />
            </div>
            <div onClick={closeModal} className="fixed top-5 right-5 cursor-pointer text-white text-3xl hover:opacity-70">
                &times;
            </div>
        </React.Fragment>
    )
}
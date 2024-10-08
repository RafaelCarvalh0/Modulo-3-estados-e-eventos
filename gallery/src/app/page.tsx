'use client'

import { useState } from "react";
import { Picture } from "./types/Picture";
import { usePage } from "./hooks/usePage";
import { PictureItem } from "@/components/PictureItem";
import { Modal } from "@/components/Modal/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState<Picture>();

  const {
    pictures
  } = usePage();

  const OpenModal = (index: number) => {
    const { path, name } = pictures.filter((value, key) => key === index)[0]
    setImage({ ...pictures, id: 0, path: path, name: name });
    setIsModalOpen(true);
  }

  const CloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-screen h-screen p-5">
      <h1 className="text-3xl text-center pb-4 text-gray-700">Fotos Intergalacticas</h1>
      <section className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {
            pictures.map((item, index) => (
              <PictureItem picture={item} index={index} onClick={OpenModal} />
            ))}
        </div>
      </section>
      {isModalOpen && (
        <Modal picture={image} closeModal={CloseModal} />
      )}
    </div>
  );
}

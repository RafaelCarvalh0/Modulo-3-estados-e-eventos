"use client"

import { CustomButton } from "@/components/CustomButton";
import { Person } from "@/types/Person";
import { TodoItem } from "@/types/TodoItem";
import { FormEvent, useState } from "react";


const Page = () => {
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<TodoItem[]>([

  ]);

  // const handleButton1 = () => alert("Clicou Botão 1");
  // const handleButton2 = () => alert("Clicou Botão 2");
  // const handleButton3 = () => alert("Clicou Botão 3");

  const handleAddButton = () => {

    if (itemInput.trim() === '') return;

    setList([...list, { id: list.length++, label: itemInput, checked: false }])
    setItemInput('');
  }

  const deleteItem = (id: number) => {
    const newList = list.filter((item, key) => item.id !== id)
    setList(newList);
  }

  const toggleItem = (id: number) => {
    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
      }
    }

    //newList[index].checked = !newList[index].checked;

    setList(newList);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>
      {/* ENVIANDO FUNÇÃO POR PROP
      <CustomButton label="Clique aqui 1" onClick={handleButton1} />
      <CustomButton label="Clique aqui 2" onClick={handleButton2} />
      <CustomButton label="Clique aqui 3" onClick={handleButton3} /> */}

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-green-50">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>

      <p className="my-4">{list.length} Itens na lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
          <li key={item.id}>
            <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3" />
            {item.label} - <button onClick={() => deleteItem(item.id)} className="hover:underline">[ deletar ]</button></li>
        ))}
      </ul>

    </div>
  );
};

export default Page;

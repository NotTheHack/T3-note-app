import { Dispatch, FC, SetStateAction, useState} from "react";
import { trpc } from "../../utils/trpc";
import { Note } from "@prisma/client";

interface ItemModalProps {
  setModalOpen:Dispatch<SetStateAction<boolean>>
  setItems: Dispatch<SetStateAction<Note[]>>
}


const NotesModal: FC<ItemModalProps> = ({setModalOpen,  setItems}) =>{

  const [fields,setFields] = useState({
    title:'',
    body:''
  })

  const { mutate } = trpc.note.createNote.useMutation({onSuccess(data) {
    setItems((prev) => [...prev,data])
  }})
  
  const handleChange = (e: { currentTarget: { name: any; value: any; }; }) => setFields({
    ...fields,
    [e.currentTarget.name]: e.currentTarget.value,
  })

    // @ts-ignore
    function handleSubmit(e) {
      e.preventDefault();
      mutate({title: fields.title, body:fields.body})
      setModalOpen(false)
    }

  return( 
    <div className="absolute inset-0 flex items-center justify-center bg-black/75">
      <div className="h-2/3 w-96 bg-white border-8 border-purple-300 relative">
      <h2 className="text-xl font-medium mt-4 text-center">ANOTAÊ</h2>
      <form onSubmit={handleSubmit}>

      <input name="title" value={fields.title} onChange={handleChange} type="text" className="w-full bg-gray-300 border-y border-gray-400" placeholder="  title" />
      <textarea name="body" value={fields.body} onChange={handleChange} className="block p-2.5 w-full h-[500px] text-sm bg-gray-300 border-gray-400 resize-none" />


        <div className="flex justify-end">

        <button type="submit" className="rounded-md bg-gray-500 p-2 text-sm text-white transition hover:bg-gray-600">ADD</button>
        <button type="button" onClick={() => setModalOpen(false)} className="rounded-md bg-gray-500 p-2 text-sm text-white transition hover:bg-gray-600">SAIR</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default NotesModal
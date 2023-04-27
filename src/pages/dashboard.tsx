import NotesModal from "../components/notesModal/modal"
import GetNotesModal from "../components/notesModal/getModal"
import { useSession} from "next-auth/react"
import {BsFillFileEarmarkFill} from 'react-icons/bs'
import { useState , useEffect } from "react"
import {BiTrashAlt, BiEditAlt} from 'react-icons/bi';
import { Note } from '@prisma/client';
import {trpc} from '../utils/trpc'
import { useRouter } from "next/router"

export default function Component(){
  const { data: session } = useSession()
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [notesModalOpen, setNotesModalOpen] = useState<boolean>(false)
  const [noteId, setNoteId] = useState<string>('')
  const [items, setItems] = useState<Note[]>([])
  const router = useRouter()
  const {data, isLoading} = trpc.note.getNotes.useQuery(undefined,{onSuccess:setItems})


  
  const { mutate } = trpc.note.deleteNote.useMutation({onSuccess(data,{id}) {
      setItems((prev) => prev.filter((item) => item.id !== id))
    }
  })

  if (!session) {
    return(
      () => {router.push("/")}
    )
  }

  if(!data || isLoading) return <p>Loading..</p>
  return (
    <>
    <section className="bodystyle ">
      <div className="m-8 mt-0 mb-0 bg-white h-screen">
      {modalOpen && <NotesModal setModalOpen={setModalOpen} setItems={setItems} />}
      {notesModalOpen && <GetNotesModal noteId={noteId} setNotesModalOpen={setNotesModalOpen} setItems={setItems}/>}
        <div className="container mx-auto">
          <div className="flex flex-row-reverse m-1 mt-0">
            <button onClick={() => setModalOpen(true)} className="text-xs"><BsFillFileEarmarkFill size={25} />New </button>
          </div>
          <table className="min-w-full table-auto">
            <thead>
              <tr className=" bg-purple-500"> 
                <th className=" py-1 text-center">
                  <span>Note Name</span>
                </th>
                <th className=" py-1">
                  <span></span>
                </th>
                <th className=" py-1 text-center">
                  <span>Created At</span>
                </th>
                <th className=" py-1 text-center">
                  <span>Actions</span>
                </th>
              </tr>
            </thead>

            {TableRow()}

        </table>
        </div>
      </div>
    </section>
    </>
  )
  
  function TableRow(){
    return(
      <tbody>
      {items.map((items) =>(
        <tr key={null} className='border'>
        <td key={items.title} className="text-center border "><span>{items.title?.substring(0,50)}</span></td>
        <td key={items.body} className="text-center border"><span>{items.body?.substring(0,50)}</span></td>
        <td key={items.createdAt.toString()} className="text-center border"><span>{items.createdAt.toDateString()}</span></td>
        <td key={undefined} className="border grid grid-cols-2 gap-2 place-items-center">
          <button key={undefined} onClick={() => {setNotesModalOpen(true), setNoteId(items.id) } }  className="cursor"> <BiEditAlt size={25} color={"rgb(168,85,247)"} /> </button>
          <button key={undefined}  onClick={() => mutate({id:items.id}) } className="cursor"> <BiTrashAlt size={25} color={"rgb(255,0,0)"} /> </button>
        </td>
        </tr>
      ))}
    </tbody>
    )
  }


}
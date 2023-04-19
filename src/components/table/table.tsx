import {useState} from "react";
import {BiTrashAlt} from 'react-icons/bi';
import { Note } from '@prisma/client';
import { trpc } from '../../utils/trpc';


export default function TableRow(){
  const [items, setItems] = useState<Note[]>([])
  const {data, isLoading} = trpc.note.getNotes.useQuery(undefined,{ 
    onSuccess(data){
      setItems([...data])
    }
})
  const { mutate } = trpc.note.deleteNote.useMutation()

  if(!data || isLoading) return <p>Loading..</p>
  return(
    <tbody>
    {items.map((items) =>(
      <tr className=' relative'>
      <td key={items.title} className="text-center"><span>{items.title}</span></td>
      <td key={items.body} className="text-center"><span>{items.body}</span></td>
      <td key={items.id} className="text-center"><span>{items.createdAt.toDateString()}</span></td>
      <td key={items.id} className=" grid"> <button key={items.id}  onClick={() => mutate({id:items.id}) } className="cursor place-self-center"> <BiTrashAlt size={25} color={"rgb(255,0,0)"} /> </button></td>
      </tr>
    ))}
  </tbody>
  )
}
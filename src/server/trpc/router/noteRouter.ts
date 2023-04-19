import { z } from "zod";
import { Prisma } from "@prisma/client";

import { router, publicProcedure } from "../trpc";

const defaultNoteSelect = Prisma.validator<Prisma.NoteSelect>()({
  title:true,
  body:true,
  createdAt:true
})

export const noteRouter = router({
  createNote:publicProcedure.input( z.object( {title: z.string().nullish(), body:z.string().nullish()} ) ).mutation( async ({ctx, input}) => {
    const note = await ctx.prisma.note.create({
      data:{
        title: input.title,
        body: input.body,
        author: {
          connect:{id:ctx.session?.user?.id}
        }
      } 
    })
    console.log("Note created with success.")
    return note;
  }),
  deleteNote:publicProcedure.input( z.object( {id:z.string()} ) ).mutation( async ( {ctx, input} ) => {
    await ctx.prisma.note.delete({where: {id: input.id },})
    console.log(" note " + input.id + " deleted with success.")
  }),
  deleteAll:publicProcedure.mutation( async ( {ctx} ) => {
    const {count} = await ctx.prisma.note.deleteMany()
    console.log( count + " notes deleted with success.")
  }),
  updateNote:publicProcedure.input(z.object( {id:z.string(), title:z.string(), body:z.string()} ) ).mutation( async ( {ctx,input} ) => {
    const note = await ctx.prisma.note.update({
      where: {id: input.id },
      data:{
        title:input.title,
        body:input.body,
      }
    })
    return note;
  }),
  getNote: publicProcedure.input(z.object( {id:z.string()} ) ).query( async ( {ctx,input} ) => { 
    const note = await ctx.prisma.note.findUnique({
      where: {id: input.id }
    })
    return note;
  }),
  getNotes: publicProcedure.query( async ( {ctx} ) => { 
    const note = await ctx.prisma.note.findMany({
      where: {
        author:{id:ctx.session?.user?.id}
    }})
    console.log(note)
    return note;
  }),

});

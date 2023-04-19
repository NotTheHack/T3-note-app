import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { noteRouter } from "./noteRouter";

export const appRouter = router({
  example: exampleRouter,
  note:noteRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

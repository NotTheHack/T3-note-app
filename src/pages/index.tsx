import { type NextPage } from "next";
import Head from "next/head";
import image from '../../public/images/dummy.jpg'
import Button from "../components/button/button";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Noteapp</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bodystyle h-screen">
        <div className="max-[1024px]:py-[15%] ">
          <div className="min-[768px]:flex min-[768px]:gap-4 items-center">
          <div className="flex flex-col gap-5 p-3 min-[768px]:basis-1/2">
              <h1 className="font-bold text-2xl">NoteApp</h1>
              <h2 className="font-semibold">This is a noteapp made in react using the T3 Stack.</h2>
              <h2 className="text-white font-semibold">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet."</h2>
          </div>
          <div className="max-[425px]:hidden flex basis-1/2 p-6" >
            <Image
              src={image}
              alt="welcome"
              width={500}
              height={500}
            />
          </div>
          </div>
          <div className="flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import { type NextPage } from "next";
import Head from "next/head";
import image from '../../public/images/dummy.jpg'
import Button from "../components/button/button";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bodystyle" >
        <div className="min-h-screen grid grid-cols-2 grid-flow-col gap-5">
          <div className=" relative">
            <div className=" box-border-300 p-5 absolute top-1/4 left-16">
              <h1 className=" font-bold text-2xl">NoteApp</h1>
              <h2 className="font-semibold">This is a noteapp made in react using the T3 Stack.</h2>
              <h2 className="pb-7 text-white font-semibold">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet."</h2>
              <Button />
            </div>
          </div>
          <div>
            <div className="box-border-300 p-5 absolute top-1/4" >
              <Image
                src={image}
                alt="welcome"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

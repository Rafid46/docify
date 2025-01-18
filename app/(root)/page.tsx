import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { FaRegFileLines } from "react-icons/fa6";

const Home = () => {
  const document = [];
  return (
    <main>
      <nav className="fixed top-0 w-full  py-3  z-50">
        <div className="container mx-auto">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex justify-between w-full lg:flex-row ">
              <p className="text-[#5DEBD7] text-3xl font-bold"> Docify</p>
              <div className="flex items-center">
                <p className="font-normal"> Notification </p>
                <button className="btn-primary btn-small md:ml-5">
                  {" "}
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        {document.length > 0 ? (
          <div></div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <FaRegFileLines className="text-5xl" />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;

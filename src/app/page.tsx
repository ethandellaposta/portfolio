import { FaBars } from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col mesh">
      <div className="mesh-grain-img"></div>
      {/* HEADER */}
      <div className="w-full mb-8 flex flex-col">
        <div className="absolute top-0 left-0 right-0 transform -translate-y-32 bg-white h-128"></div>
        <div className="transform -skew-y-[8deg] bg-white h-128"></div>

        {/* Top */}
        <div
          className={`absolute top-24 left-32 right-32 flex flex-row justify-start gap-28`}
        >
          <div className="bg-gray-400 lg:w-48 lg:h-48 w-32 h-32 rounded-full flex justify-center items-center"></div>

          {/* Name */}
          <div className="w-1/2  flex flex-col justify-center items-center z-10">
            <div className="mb-36 w-full flex justify-center p-4">
              <h1 className="text-5xl lg:text-9xl">Ethan Della Posta</h1>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-white bg-opacity-10 place-self-center rounded-md transform w-6/12 p-4 backdrop-filter backdrop-blur-sm bg-opacity-40 border border-white border-opacity-50 drop-shadow-xl transform -translate-y-16">
          <p className="text-md lg:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
            pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
            Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          </p>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="p-32 flex flex-col space-y-8">
        <h3 className="text-white text-2xl">Yumi</h3>
        <div className="flex flex-row justify-start space-x-8">
          <div className="border-gray-400 border-2 w-60 h-40 rounded-md"></div>
          <div className="flex flex-col justify-end space-y-4">
            <div className="bg-white bg-opacity-10 w-32 h-8 "></div>
            <div className="bg-white bg-opacity-10 w-60 h-8"></div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center border-4 border-white border-opacity-10 border-dotted p-4 rounded-md">
          <p className="text-white text-opacity-70 text-md lg:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
            pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
            Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            nisi euismod, pellentesque nisi id, vehicula dolor. Fusce cursus
            pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
            Pharetra dui, ac tincidunt eros pulvinar a. Sed interdum auctor.
          </p>
        </div>
      </div>
    </main>
  );
}

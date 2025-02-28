import Programs from "@/app/components/home/programs";
import About from "@/app/components/home/about";

export default function Home() {
  return (
    <div>
      <About/>
      <Programs/>
      <div className="grid grid-cols-2 my-16">
          <div className="flex justify-center">
              <button className="text-center border border-zinc-900 rounded w-[140px] h-[70px] m-2 p-1
                    transition md:hover:bg-lime-600 active:bg-lime-600 duration-300
              ">
                  Помочь
              </button>
          </div>
          <div className="flex justify-center">
              <button className="text-center border border-zinc-900 rounded w-[140px] h-[70px] m-2 p-1
                    transition md:hover:bg-lime-600 active:bg-lime-600 duration-300
              ">
                  Нужна помощь
              </button>
          </div>
      </div>
    </div>
  );
}

import Programs from "@/app/components/home/programs";
import About from "@/app/components/home/about";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <main className="w-3/4">
          <About/>
          <Programs/>
      </main>
    </div>
  );
}

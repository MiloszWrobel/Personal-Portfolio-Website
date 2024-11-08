import WEBSITES from "../data";
import image1 from "../assets/city.png";
import image2 from "../assets/city2.jpg";
import image3 from "../assets/no-projects.png";
export default function ProjectDisplay({ projectId, onReturn }) {
  const images = [image1, image2, image3];
  return (
    <div className="min-h-screen bg-slate-300 relative ">
      <h1 className=" absolute left-1/2 transform -translate-x-1/2 top-4 text-4xl text-stone-900 ">
        {WEBSITES[projectId - 1].title}
      </h1>
      <button
        className=" absolute top-4 right-4 text-2xl text-stone-50 place-self-center justify-end bg-slate-800 rounded-xl p-2 hover:bg-slate-900 hover:text-stone-100 "
        onClick={onReturn}
      >
        Back to menu
      </button>
      <div className="flex justify-center items-center pt-28 space-x-4">
        <div className=" w-1/4 transform scale-75">
          <img src={images[0]} className="object-cover w-full h-full" />
        </div>

        <div className=" w-1/2 transform scale-100">
          <img src={images[1]} className="object-cover w-full h-full" />
        </div>

        <div className=" w-1/4 transform scale-75">
          <img src={images[2]} className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Background() {
  const image = "/src/assets/city.png";

  function handleScrollClick() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  function handleLinkClick(link) {
    window.open(link, "_blank");
  }

  return (
    <div className="relative min-h-screen w-screen">
      <img
        src={image}
        alt="background"
        className="w-full object-cover"
        style={{ height: "100vh" }}
      />

      <h2
        className=" bg-slate-800 text-white text-5xl bg-origin-border border-4 border-slate-800 rounded-2xl p-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ top: "50vh" }}
      >
        Milosz Wrobel
      </h2>

      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex gap-6"
        style={{ top: "75vh" }}
      >
        <button
          onClick={() =>
            handleLinkClick("https://www.linkedin.com/in/milosz-w/")
          }
          className="p-4 bg-slate-800 text-white rounded-full"
        >
          <SiLinkedin className="w-6 h-6 text-white" /> {/* LinkedIn Icon */}
        </button>

        <button
          onClick={() => handleLinkClick("https://github.com/MiloszWrobel")}
          className="p-4 bg-slate-800 text-white rounded-full"
        >
          <SiGithub className="w-6 h-6 text-white" /> {/* GitHub Icon */}
        </button>
      </div>

      <button
        onClick={handleScrollClick}
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-slate-800 text-white rounded-full"
        style={{ top: "85vh" }}
      >
        <ChevronDownIcon className="w-6 h-4 text-white" />
      </button>
    </div>
  );
}

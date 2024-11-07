import { ChevronDownIcon } from "@heroicons/react/24/outline"; // Correct import for Heroicons v2

export default function Background() {
  const image = "/src/assets/city.png";

  function handleClick() {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by one viewport height
      behavior: "smooth", // Smooth scrolling
    });
  }
  return (
    <div className="relative min-h-screen w-screen">
      {/* Background Image */}
      <img
        src={image}
        alt="background"
        className="w-full object-cover" // Makes the image cover the whole viewport
        style={{ height: "100vh" }} // Ensures the image fills the screen height
      />
      <button
        onClick={handleClick}
        className="absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-slate-800 text-white rounded-full"
      >
        <ChevronDownIcon className="w-6 h-4 text-white" />
      </button>
    </div>
  );
}

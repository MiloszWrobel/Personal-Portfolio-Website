import WEBSITES from "../data";
export default function ProjectDisplay({ projectId, onReturn }) {
  const classes =
    " absolute top-4 right-4 text-2xl text-stone-50 place-self-center justify-end bg-slate-800 rounded-xl p-2 hover:bg-slate-900 hover:text-stone-100 ";
  return (
    <div className="min-h-screen bg-slate-300 relative ">
      <h1 className=" absolute left-1/2 transform -translate-x-1/2 top-4 text-4xl text-stone-900 ">
        {WEBSITES[projectId - 1].title}
      </h1>
      <button className={classes} onClick={onReturn}>
        Back to menu
      </button>
    </div>
  );
}

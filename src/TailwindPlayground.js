const TailwindPlayGround = () => (
  <>
    <div>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <p className="font-serif">Hello typography!</p>
      <p className="text-sm">Hello typography!</p>
      <p className="italic">Hello typography!</p>
      <p className="font-bold italic">Hello typography!</p>
      <p className="text-right font-bold italic">Hello typography!</p>
      <p className="text-xl font-semibold text-indigo-500">Hello typography!</p>
      <div className="bg-pink-500">Hello spacing!</div>
      <div className="bg-red-500 px-4">Hello spacing!</div>
      <div className="mx-4 bg-orange-500">Hello spacing!</div>
      <div className="bg-amber-500 pt-4">Hello spacing!</div>
      <div className="mt-4 bg-yellow-500">Hello spacing!</div>
      <div className="m-4 bg-green-500 p-4">Hello spacing!</div>
      <div className="flex space-x-4 bg-slate-500 p-4">
        <div className="bg-blue-500">Hello spacing!</div>
        <div className="bg-indigo-500">Hello spacing!</div>
        <div className="bg-violet-500">Hello spacing!</div>
      </div>
      <div className="w-24 bg-pink-500">Hello sizing!</div>
      <div className="w-48 bg-red-500">Hello sizing!</div>
      <div className="w-2/3 bg-orange-500">Hello sizing!</div>
      <div className="h-12 w-12 bg-amber-500">Hello sizing!</div>
      <div className="h-12 w-12 rounded-sm bg-yellow-500">Hello sizing!</div>
      <div className="h-12 w-12 rounded-md bg-green-500">Hello sizing!</div>
      <div className="h-12 w-12 rounded-2xl bg-blue-500">Hello sizing!</div>
      <div className="h-12 w-12 rounded-full bg-indigo-500">Hello sizing!</div>
      <div className="h-12 w-64 rounded-full bg-violet-500">Hello sizing!</div>
      <button className="m-4 h-12 w-36 rounded-full border-2 border-dashed border-blue-500 bg-pink-500 text-center hover:bg-rose-500">
        Hello button!
      </button>
    </div>
  </>
);

export default TailwindPlayGround;

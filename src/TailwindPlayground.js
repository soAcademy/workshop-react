const TailwindPlayGround = () => (
  <>
    <div>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <p className="font-serif">Hello typography!</p>
      <p className="text-sm">Hello typography!</p>
      <p className="italic">Hello typography!</p>
      <p className="italic font-bold">Hello typography!</p>
      <p className="italic font-bold text-right">Hello typography!</p>
      <p className="font-semibold text-indigo-500 text-xl">Hello typography!</p>
      <div className="bg-pink-500">Hello spacing!</div>
      <div className="bg-red-500 px-4">Hello spacing!</div>
      <div className="bg-orange-500 mx-4">Hello spacing!</div>
      <div className="bg-amber-500 pt-4">Hello spacing!</div>
      <div className="bg-yellow-500 mt-4">Hello spacing!</div>
      <div className="bg-green-500 p-4 m-4">Hello spacing!</div>
      <div class="flex space-x-4 bg-slate-500 p-4">
        <div className="bg-blue-500">Hello spacing!</div>
        <div className="bg-indigo-500">Hello spacing!</div>
        <div className="bg-violet-500">Hello spacing!</div>
      </div>
      <div className="bg-pink-500 w-24">Hello sizing!</div>
      <div className="bg-red-500 w-48">Hello sizing!</div>
      <div className="bg-orange-500 w-2/3">Hello sizing!</div>
      <div className="bg-amber-500 w-12 h-12">Hello sizing!</div>
      <div className="bg-yellow-500 w-12 h-12 rounded-sm">Hello sizing!</div>
      <div className="bg-green-500 w-12 h-12 rounded-md">Hello sizing!</div>
      <div className="bg-blue-500 w-12 h-12 rounded-2xl">Hello sizing!</div>
      <div className="bg-indigo-500 w-12 h-12 rounded-full">Hello sizing!</div>
      <div className="bg-violet-500 w-64 h-12 rounded-full">Hello sizing!</div>
      <button className="bg-pink-500 m-4 w-36 h-12 text-center rounded-full border-2 border-dashed border-blue-500 hover:bg-rose-500">
        Hello button!
      </button>
    </div>
  </>
);

export default TailwindPlayGround;

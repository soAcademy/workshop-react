import Product from './Product.js';

function App() {
  return (
    <>
      <p className="text-lg">Font Size</p>
      <p className="text-base text-green-500">Hello world</p>
      <div className="bg-yellow-300">Hello World</div>
      <div className="bg-gray-300 p-4">Hello World</div>
      <div className="flex bg-blue-400 space-x-20">
        <div className="bg-red-400">01</div>
        <div className="bg-yellow-400 p-4">999999</div>
        <div className="bg-green-400 m-4">777</div>
      </div>
      <div className="flex bg-red-300 w-full">
        <div className="bg-blue-200 w-1/2 pt-10 rounded-lg">Test</div>
      </div>

      <div className="w-48 bg-pink-100 border-4 border-rose-500 border-dotted mt-4 p-5">Button</div>     
      <p className="text-red-700 font-bold underline text-3xl">Hello world</p>
      <div className="w-24 h-38 bg-blue-500">w-24</div>
      <div className="w-1/2 h-38 bg-yellow-300 rounded-lg border-2 border-red-500 border-dotted">w-1/2</div>
      <button className="w-24 bg-green-200 hover:bg-green-800 mt-5 pt-5">Button1</button>
      <button className="w-36 bg-red-200 active:bg-red-500 focus:outline-none focus:ring-red-800">Button2</button>     

           <Product />

      <div className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
 <div className="bg-red-700"><Product /></div>
 <div className="bg-red-700"><Product /></div> 
 <div className="bg-red-700"><Product /></div>
 <div className="bg-red-700"><Product /></div>
 <div className="bg-red-700"><Product /></div>
 <div className="bg-red-700"><Product /></div>
</div>
    
    </>
  );
}

export default App;

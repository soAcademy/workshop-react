import Products from "./Products";

const data = [
  {
    name: "The New: MacBook Pro 2040",
    img: "https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: `
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's`,
    price: "$20,000",
  },
  {
    name: "Iphone 20",
    img: "https://www.thaimobilecenter.com/home/img_stock/2022830_134524.jpg",
    description: `
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's`,
    price: "$18,000",
  },
  {
    name: "AirPods Pro 20",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1632861342000",
    description: `
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's`,
    price: "$13,000",
  },
  {
    name: "The New: Apple Watch 2040",
    img: "https://media.wired.com/photos/632b6fafd884b4dcc9416568/4:3/w_1799,h_1349,c_limit/Apple-Watch-SE-2022-Gear.jpg",
    description: `
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's`,
    price: "$15,000",
  },
  {
    name: "Ipad Mini 19",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-1-202207_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1654903884450",
    description: `
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's`,
    price: "$15,000",
  },
  {
    name: "The New: Ipad Pro 2040",
    img: "https://s.yimg.com/os/creatr-uploaded-images/2022-10/eeed7221-56c8-11ed-a597-98db309f1bfd",
    description: `
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's`,
    price: "$18,000",
  },
];

const Workshop = () => {
  return (
    // <div>
    //   <div className="text-2xl">Hello World</div>
    //   <div className="text-sm">Hello World</div>
    //   <div className="text-red-700">Hello World</div>
    //   <div className="text-blue-300">Hello World</div>
    //   <div className="text-center">Hello World</div>
    //   <div className="font-bold">Hello World</div>
    //   <div className="text-2xl text-red-700 text-center font-bold">
    //     Hello World
    //   </div>
    //   <div className="pt-6 bg-gray-400">pt-6</div>
    //   <div className="mr-6 bg-green-400">mr-6</div>
    //   <div className="mt-8 bg-gray-400">mt-8</div>
    //   <div class="flex space-x-4">
    //     <div className="border border-pink-900">01</div>
    //     <div className="border border-pink-900">02</div>
    //     <div className="border border-pink-900">03</div>
    //   </div>
    //   <div className="w-24 h-38 bg-red-700">w-24</div>
    //   <div className="w-2/3 bg-red-400">w-2/3</div>
    //   <div className="w-full bg-red-600">w-full</div>
    //   <div className="w-24 h-24 bg-red-200 rounded-lg">w-24 h-24</div>
    //   <div class="border border-gray-600 rounded">box</div>
    //   <div class="border border-gray-600 rounded-md">box</div>
    //   <div class="border border-gray-600 rounded-lg">box</div>
    //   <div class="border border-gray-600 rounded-full">box</div>
    //   <div class="border border-indigo-600">box</div>
    //   <div class="border-2 border-indigo-600">box</div>
    //   <div class="border-4 border-indigo-600">box</div>
    //   <div class="border-8 border-indigo-600">box</div>
    //   <input type="text" class="border-2 border-rose-600"></input>
    //   <div class="border-solid border-2 border-indigo-600">box</div>
    //   <div class="border-dashed border-2 border-indigo-600">box</div>
    //   <div class="border-dotted border-2 border-indigo-600">box</div>
    //   <div class="border-double border-4 border-indigo-600">box</div>
    //   <button class="bg-sky-600 hover:bg-sky-700">Save changes</button>
    //   <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
    //     Save changes
    //   </button>
    // </div>

    // // WORKSHOP 2
    // <div>
    //   <div className="text-red-700 text-3xl font-bold underline">Hello World</div>
    //   <div className="h-38 w-24 bg-blue-500">w-24</div>
    //   <div className="h-38 w-1/2 bg-yellow-300 rounded-lg">w-1/2</div>
    //   <button className="w-24 bg-green-200 hover:bg-green-800">Button 1</button>
    //   <button className="w-36 bg-red-200 active:bg-red-500 focus:outline-none focus:ring focus:ring-red-800">
    //     Button 2
    //   </button>
    // </div>

    //WORKSHOP 3 // 4
    <div className="w-full flex justify-center py-6">
      <div className="grid gap-6 grid-cols-1 grid-rows-3 md:grid-cols-3">
        {data.map((r, idx) => (
          <Products key={idx} data={r} />
        ))}
      </div>
    </div>
  );
};

export default Workshop;

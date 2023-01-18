import TailwindExample from "./TailwindExample";
import Resume from "./Resume";
import Shop from "./Shop";

const App = () => {
  const databases = [
    {
      id: 1,
      name: "Bin",
      profile: "My name is Bin",
    },
    {
      id: 2,
      name: "Jam",
      profile: "My name is Jam",
    },
    {
      id: 3,
      name: "Ploy",
      profile: "My name is Ploy",
    },
  ];

  return (
    <>
      {/* <TailwindExample /> */}
      {/* <Resume data={databases[2]} /> */}
      <Shop />
    </>
  );
};
// t (top), b (bottom), l (left), r (right), y (top and bottom), x (left and right)
export default App;
// xs, sm, base, md, lg, xl, 2xl
// yarn add react-icons

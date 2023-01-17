import "./App.css";
import {
  myInformation,
  experience,
  education,
  contact,
  myImg,
} from "./myInformation";

function App() {
  // const element = <div>Hello</div>;
  // const element2 = (
  //   <div>
  //     <h1>Hello</h1>
  //     <h2>World!</h2>
  //   </div>
  // );
  // const element3 = <div>{1 + 1}</div>;
  // const fullName = "Khun boeing";
  // const user = {
  //   firstName: "Khun",
  //   lastName: "Boeing !!",
  // };

  // const oddOrEven = (number) => {
  //   if (number % 2 === 0) return "even";
  //   else return "odd";
  // };

  // const myStyle = {
  //   color: "blue",
  //   backgroundColor: "red",
  // };
  console.log(myImg.url);
  return (
    <>
      {/* <div>{element}</div>
      <div>{element2}</div>
      <div>{fullName}</div>
      <div>{element3}</div>
      <div>{user.firstName + "  " + user.lastName}</div>
      <div>{oddOrEven(100)}</div>
      <h1 style={{ color: "blue" }}>Hello Blue Header!</h1>
      <h1 style={{ backgroundColor: "red" }}>Hello Red Background!</h1>
      <div style={myStyle}>Hello Style!</div>
      <div className="blue-with-red">ข้อ 4 CSS workshop + ข้อ 5 font kanit</div> */}
      <div>
        <div>
          <h1 className="text-3xl font-bold underline">Hello World!</h1>
          <div>
            <img src={myImg.url}></img>
          </div>
          <div>
            <div>{myInformation.name}</div>
            <div>{myInformation.position}</div>
          </div>
          <div>
            <div>{education.school1}</div>
            <div>{education.school2}</div>
            <div>{education.school3}</div>
            <div>{education.school4}</div>
          </div>
        </div>
        <div>
          <div>
            <div>{contact.tel}</div>
            <div>{contact.email}</div>
          </div>
          <div>
            <div>{experience.job1}</div>
            <div>{experience.job2}</div>
            <div>{experience.job3}</div>
            <div>{experience.job4}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

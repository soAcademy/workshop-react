import "./index.css";
import Resume from "./Resume";
import Shop from "./Shop.js";

const App = () => {
  const info = {
    image: `./cake.jpg`,
    aboutMe: `An ExtraOrdinary Ducky is what i describe myself, past few years i studied a lot of new things.
    Perferendis, qui impedit. Ut tempora incidunt eaque itaque pariatur,
    illum, laudantium corporis ipsam magnam, soluta ipsa deleniti porro
    ullam. Repudiandae fugiat dolor suscipit fuga laboriosam ipsa? Saepe
    unde suscipit voluptas quis itaque, Yes! I am a duck :P`,
    site1: "https://github.com/cerkcake",
    site2: "https://www.facebook.com/yoonuch",
    site3: "http://www.facebook.com",
    fname: `KUNLANIS`,
    lname: `YOONUCH`,
    location: `Saimai, Bangkok`,
    contactInfo: `091-234-5678`,
    qualify: `Assc. Engineer No.69903`,
    school: `RITTIYA WANNALAI, Bangkok`,
    schoolDetail: <ul class="list-none">
    <li>
      - Science-Mathematics
    </li>
  </ul>,
    university1: `KING MONGKUT'S UNIVERSITY OF TECHNOLOGY THONBURI, Bangkok`,
    universityDetail1: <ul class="list-none">
    <li>
      - Bachelor of Civil Engineering
    </li>
  </ul>,
      university2: `KONKUK UNIVERSITY, Seoul`,
      universityDetail2: <ul>
      <li>
      - Summer Course of Korean Language & Project Management
      </li>
    </ul>,
  };
  return (
    <Resume props={info}/>
    // <Shop/>
  );
};

export default App;

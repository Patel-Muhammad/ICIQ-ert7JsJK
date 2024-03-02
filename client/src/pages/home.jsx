import React from "react";
import CardIcon from "../component/cardIcon.jsx";
import { TbTextScan2 } from "react-icons/tb";
import { MdOutlineFileUpload } from "react-icons/md";
import { GiMedicalPackAlt } from "react-icons/gi";
import { PiCardsBold } from "react-icons/pi";
import ImageCardCom from "../component/image_card.jsx";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Home = () => {
  const uploadClick = () => {
    console.log("Hiiiiii")
  }

  return (
    <div className="wrapper">
      <div className="container">
        <CardIcon icon={<TbTextScan2 />} text={"Scan"}  />
        <CardIcon icon={<MdOutlineFileUpload />} text={"Upload"}  />
        <CardIcon icon={<GiMedicalPackAlt />} text={"Prescription"} />
        <CardIcon icon={<PiCardsBold />} text={"Detox Guide"} />
      </div>
      <div className="independent">
        <p className="h2-tag">Empowering Healthier lives, One Scan at a Time</p>
        <div className="image-card">
          <ImageCardCom
            img={img1}
            head={"Prioritize your health."}
            disc={
              "Take charge of your health journey for vitality and longevity"
            }
          />
          <ImageCardCom
            img={img2}
            head={"No ads"}
            disc={
              "Brands cannot pay Yuka to advertise their products on the app."
            }
          />
          <ImageCardCom
            img={img3}
            head={"Responsible financing"}
            disc={"Smart Choice has developed 3 responsible funding resources."}
          />

        </div>
      </div>
      
    </div>
  );
};

export default Home;

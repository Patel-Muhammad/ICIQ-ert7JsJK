import { MdOutlineDocumentScanner } from "react-icons/md";
import Card from "../../components/partial/card";
import Heading from "../../components/partial/heading";
import IconCard from "../../components/IconCard";
import TextScanner from "../../components/partial/TextScanner";
import HashLoader from "react-spinners/HashLoader";


const Home = () => {
  return (
    <div>
      <Heading type="h2" fontWeight="light">
        THis is custom Heading H1 thin
      </Heading>
    //   <TextScanner />

      <div className="flex justify-center items-center h-screen">
        <HashLoader
          color="#00DB5F"
          size={60}
          speedMultiplier={1}
        />
      </div>

    </div>
  );
};

export default Home;

import { MdOutlineDocumentScanner } from "react-icons/md";
import Card from "../../components/partial/card";
import Heading from "../../components/partial/heading";
import IconCard from "../../components/partial/IconCard";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
        <Heading type="h2" fontWeight="light">
          THis is custom Heading H1 thin
        </Heading>
        <IconCard icon={<MdOutlineDocumentScanner size={50} />} className="" style={{ color: "blue" }} />

    </div>
  );
};

export default Home;

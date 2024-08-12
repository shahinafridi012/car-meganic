
import About from "../About/About";
import Banner from "../Banner/Banner";
import Coustomer from "../Coustomer/Coustomer";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Status from "./Status";



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Status></Status>
            <Team></Team>
            <Coustomer></Coustomer>

        </div>
    );
};

export default Home;
import { Carousel } from "react-bootstrap"
import wallpaper from "./Images/wallpaper.jpg"
import GetStarted from "./Components/GetStarted"
import './App.css';
import Products from "./Components/Products"
import Header from "./Components/Header"
import HowItWorks from "./Components/HowItWorks"
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f8f5f1" }}>
      <Header /><br /><br /><br />
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={wallpaper}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="primary" >
              <h1>Heading Title</h1>
              <img src={wallpaper} style={{ height: "40px" }} alt=""></img>
              <h3>We are the country's first holistic wellness platform for men. We talk ,listen to them and understand there needs</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel><br /><br /><br /><br />
      <GetStarted /><br /><hr /><br /><br /><br />
      <Products /><br /><br /><br /><br />
      <GetStarted />
      <HowItWorks />
    </div>
  );
}

export default App;

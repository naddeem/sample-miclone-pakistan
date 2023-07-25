import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreNavbar from "./component/PreNavbar";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Offers from "./component/Offers";
import Heading from "./component/Heading";
import StarProduct from "./component/StarProduct";
import HotAccessoriesMenu from "./component/HotAccessoriesMenu";
import HotAccessories from "./component/HotAccessories";
import ProductReviews from "./component/ProductReviews";
import Videos from "./component/Videos";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import NavOptions from "./component/NavOptions.jsx";
import data from "./data/data.json";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        accessories={data.accessories}
        audio={data.audio}
      />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text={"BEST SELLERS"} />
      <StarProduct startProduct={data.starProduct} />
      <Heading text={"HOT ACCESSORIES"} />
      <HotAccessoriesMenu />

      {/* Wrap your Route inside the Routes component */}
      <Routes>
        <Route
          path="/music"
          element={
            // Use 'element' instead of child component
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          path="/smartDevice"
          element={
            // Use 'element' instead of child component
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          path="/home"
          element={
            // Use 'element' instead of child component
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          path="/lifestyle"
          element={
            // Use 'element' instead of child component
            <HotAccessories
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          path="/mobileAccessories"
          element={
            // Use 'element' instead of child component
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;

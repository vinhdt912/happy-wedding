import { ConfigProvider } from "antd";
import AboutUs from "./components/AboutUs/AboutUs";
import Banner from "./components/Banner";
import LoveStory from "./components/LoveStory/LoveStory";
import GoogleMap from "./components/Map/GoogleMap";
import Gallery from "./components/Gallery/Gallery";
import Hope from "./components/Hope/Hope";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Mali",
        },
      }}
    >
      <Banner />
      <AboutUs />
      <LoveStory />
      <Gallery />
      <Hope />
      <GoogleMap />
    </ConfigProvider>
  );
}

export default App;

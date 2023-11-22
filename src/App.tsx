import { ConfigProvider } from "antd";
import AboutUs from "./components/AboutUs/AboutUs";
import Banner from "./components/Banner/Banner";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import ContactUs from "./components/ContactUs/ContactUs";
import Gallery from "./components/Gallery/Gallery";
import Gift from "./components/Gift/Gift";
import Hope from "./components/Hope/Hope";
import LoveStory from "./components/LoveStory/LoveStory";
import GoogleMap from "./components/Map/GoogleMap";
import ThiepMoi from "./components/ThiepMoi/ThiepMoi";
import PlaySound from "./components/PlaySound/PlaySound";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Mali",
          colorPrimary: "#d67567",
          colorSuccess: "#73d13d",
        },
      }}
    >
      <Banner />
      <AboutUs />
      <LoveStory />
      <Gallery />
      <Hope />
      <ContactUs />
      <Gift />
      <ThiepMoi />
      <GoogleMap />
      <ContactInfo />
      <PlaySound />
    </ConfigProvider>
  );
}

export default App;

import { ConfigProvider } from "antd";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import LoveStory from "./components/LoveStory";

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
    </ConfigProvider>
  );
}

export default App;

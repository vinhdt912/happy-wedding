import { ConfigProvider } from "antd";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Mali",
        },
      }}
    >
      <AboutUs />
    </ConfigProvider>
  );
}

export default App;

import "./App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List";
import Spinner from "./components/Spinner";
function App() {
  const [SolicitudCategoria, SetSolicitudCategoria] = useState("");
  const [arrayNews, SetArrayNews] = useState([]);
  const [Loading, SetLoading] = useState(false);
  useEffect(() => {
    const handleGetNews = async () => {
      const response = await axios.get(
        `https://gnews.io/api/v4/top-headlines?country=us&topic=${SolicitudCategoria}&token=b90101b6d233b4d240315eb31183d57b`
      );
      SetLoading(true);
      setTimeout(() => {
        SetLoading(false);
        SetArrayNews(response.data.articles);
      }, 2500);
    };
    handleGetNews();
  }, [SolicitudCategoria]);
  return (
    <div className="App">
      <Header />
      <section className="wrapperSection">
        <Form SetSolicitudCategoria={SetSolicitudCategoria} />
      </section>
      <main className="wrapperMain">
        {Loading ? <Spinner /> : <List arrayNews={arrayNews} />}
      </main>
    </div>
  );
}

export default App;

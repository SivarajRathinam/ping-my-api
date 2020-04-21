import React from "react";
import "./styles/App.scss";
import Layout from "./components/layout";
import PingMe from "./pages/pinger";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./helpers/axiosInterceptor";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <PingMe />
        </Layout>
      </Provider>
    </div>
  );
}

export default App;

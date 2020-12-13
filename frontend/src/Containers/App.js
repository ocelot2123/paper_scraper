import React from 'react';
import Main from "./Main";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../Redux/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);


function App() {

    return (
      <ReduxProvider store={reduxStore}>
          <div className="App">
                <Main />
          </div>
      </ReduxProvider>
  );
}

export default App;
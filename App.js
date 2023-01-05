import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigation from "./src/Navigation/AppNavigation";
import { peristedStore, store } from "./src/store";



const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={peristedStore}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  )
}

export default App;
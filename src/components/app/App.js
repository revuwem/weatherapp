import React, { useState } from "react";

import Sidebar from "../sidebar";
import View from "../view";

const App = () => {
  const [location, setLocation] = useState("Murmansk");

  return (
    <>
      <h1>Weather App</h1>
      <Sidebar setLocation={setLocation} />
      <View location={location} />
    </>
  );
};

export default App;

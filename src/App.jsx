import Body from "./components/Body";
import Header from "./components/Header";

import data from "./res-data.js";

const App = () => {
  return (
    <div>
      <Header />
      <Body data={data} />
      {/* <h1>FOOTER</h1> */}
    </div>
  );
};

export default App;

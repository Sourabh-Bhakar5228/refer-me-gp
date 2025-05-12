
import AppProvider from "./provider/AppProvider";
import Routing from "./routes/routing";

function App() {
  return (
    <AppProvider>
      <Routing />
    </AppProvider>
  );
}

export default App;

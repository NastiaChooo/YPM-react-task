import "./App.css";
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Header />
          <NotesList />
        </div>
      </div>
    </Provider>
  );
}

export default App;

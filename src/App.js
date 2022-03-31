import AppContext from "./context/AppContext";
import {
  ContentBody,
  ContentHeader,
  Menu,
  Navbar,
  FloatedButtons,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <AppContext>
      <div className="app">
        {/* Floated Buttons */}
        <FloatedButtons />

        {/* Drawer Menu */}
        <Menu />

        {/* Main Content */}
        <main>
          <Navbar />
          <div className="content">
            <ContentHeader />
            <ContentBody />
          </div>
        </main>
      </div>
    </AppContext>
  );
};

export default App;

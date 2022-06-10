import { useEffect, useState } from "react";

import WebFont from "webfontloader";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoginPage from "./pages/login";
import ConsciencePage from "./pages/conscience";
import { GlobalStyle, ThemeDark } from "./globalComponents";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Readex Pro:200,300,400,600,700", "Bebas Neue"],
      },
    });
  }, []);

  return (
    <AnimatePresence>
      <ThemeDark />
      <GlobalStyle />
      <div className="App">
        <Switch>
          {loggedIn && (
            <Route
              path={"/conscience/:abstraction"}
              component={ConsciencePage}
            />
          )}
          <Route exact path={"/"}>
            <LoginPage setLoggedIn={setLoggedIn} />
          </Route>
        </Switch>
      </div>
    </AnimatePresence>
  );
}

export default App;

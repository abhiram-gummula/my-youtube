import "./App.css"
import Head from "./components/Head"
import Body from "./components/Body"
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createHashRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import ResultsPage from "./components/ResultsPage";

const appRouter = createHashRouter([
  {
    path: "/",
    element: <><Head /><Body /></>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "results",
        element: <ResultsPage />
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
 
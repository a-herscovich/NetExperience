import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import { Layout, Home, MDUPage, HospitalityPage, Error404 } from "./pages";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/MDU" element={<MDUPage />} />
      <Route path="/Hospitality" element={<HospitalityPage />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  </Routes>
  );
};

export default App;

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<PageWrapper />}>
//       <Route element={<Home />} path="/" />
//       {/* <Route element={<Error404 />} path="*" /> */}
//     </Route>
//   )
// );
// return <RouterProvider router={router} />;

import { Routes, Route } from "react-router";
import { GlobalStyle } from "@/styles/global-style";
import GlobalLayout from "@/components/common/global-layout";
import TestPage from "@/pages/test-page";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<TestPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

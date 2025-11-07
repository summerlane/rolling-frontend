import { Routes, Route } from "react-router";
import { GlobalStyle } from "@/styles/global-style";
import GlobalLayout from "@/components/common/global-layout";
import TestPage from "@/pages/test-page";
import MessagePage from "@/pages/message-page";
import TempPage from "@/pages/temp-page";
import ToastTestPage from "@/pages/toast-test-page";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<GlobalLayout />}>
            <Route path="/" element={<TestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<TempPage />} />
          <Route path="/main" element={<TestPage />} />
          <Route path="/list" element={<TestPage />} />
          <Route path="/post-user" element={<TestPage />} />
          <Route path="/post" element={<TestPage />} />
          <Route path="/message" element={<TestPage />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/toast-test-page" element={<ToastTestPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

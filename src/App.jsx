import { Routes, Route } from "react-router";
import { GlobalStyle } from "@/styles/global-style";
import GlobalLayout from "@/components/common/global-layout";
import TestPage from "@/pages/test-page";
import MessagePage from "@/pages/message-page";
import MainPage from "@/pages/main-page";
import ListPage from "@/pages/list-page";
import PostPage from "@/pages/post-page";
import TempPage from "@/pages/temp-page";
import ToastTestPage from "@/pages/toast-test-page";
import RollingPage from "@/pages/rolling-page";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<TempPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/rolling" element={<RollingPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/message-page" element={<MessagePage />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/toast-test-page" element={<ToastTestPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

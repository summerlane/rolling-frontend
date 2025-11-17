import { Routes, Route } from "react-router";
import { GlobalStyle } from "@/styles/global-style";
import GlobalLayout from "@/components/common/global-layout";
import MessagePage from "@/pages/message-page";
import MainPage from "@/pages/main-page";
import ListPage from "@/pages/list-page";
import PostPage from "@/pages/post-page";
import RollingPage from "@/pages/rolling-page";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/post/:id" element={<RollingPage />} />
          <Route path="/post/:id/edit" element={<RollingPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/post/:id/message" element={<MessagePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

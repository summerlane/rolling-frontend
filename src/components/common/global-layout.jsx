import { Outlet, useLocation } from "react-router";
import Header from "@/components/common/header";

const PAGES_WITH_BUTTON = ["main", "list"];

export default function GlobalLayout() {
  const location = useLocation();
  const showButton = PAGES_WITH_BUTTON.some((page) => location.pathname.includes(page));

  return (
    <>
      <Header showButton={showButton} />
      <Outlet />
    </>
  );
}

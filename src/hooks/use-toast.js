import { useContext } from "react";
import { ToastContext } from "@/contexts/toast-context-state";

export default function useToast() {
  return useContext(ToastContext);
}

import { toast } from "react-toastify";
import type { Id } from "react-toastify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function success(toastId: Id, router: AppRouterInstance) {
  toast.update(toastId, {
    render: "Sukses",
    type: "success",
    isLoading: false,
    autoClose: 3000,
  });
  router.refresh();
}

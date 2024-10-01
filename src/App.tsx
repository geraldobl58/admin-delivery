import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";

export function App() {
  return (
    <>
      <Toaster richColors />
      <RouterProvider router={router} />;
    </>
  );
}

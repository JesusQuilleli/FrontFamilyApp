
import {  RouterProvider } from "react-router"
import { appRouter } from "./app.router"
import { Toaster } from 'sonner';
import { useAuthStore } from "./auth/store/auth.store";
import { useEffect } from "react";


export const App = () => {
  const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);


  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster />
    </>
  )
}

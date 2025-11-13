import { useAuthStore } from "@/auth/store/auth.store";
import { type JSX, useEffect } from "react";

interface CheckAuthProps {
   children: JSX.Element;
}

export const CheckAuth = ({ children }: CheckAuthProps) => {
   const { checkAuthStatus, authStatus } = useAuthStore();

   useEffect(() => {
      const verify = async () => {
         const token = localStorage.getItem("token");
         if (token) {
            await checkAuthStatus();
         }
      };

      verify();
   }, [checkAuthStatus]);

   // Mostrar loading solo durante la verificación inicial
   if (authStatus === "checking") {
      return (
         <div className="flex h-screen items-center justify-center">
            <div className="text-center">
               <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4"></div>
               <span className="text-lg font-medium">Verificando sesión...</span>
            </div>
         </div>
      );
   }

   return children;
};
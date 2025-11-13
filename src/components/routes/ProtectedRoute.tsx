import { useAuthStore } from "@/auth/store/auth.store"
import type { JSX } from "react"
import { Navigate } from "react-router";

interface ProtectedRouteProps {
   children: JSX.Element;
}

export function ProtectedRouteClient({ children }: ProtectedRouteProps) {
   const { authStatus, role } = useAuthStore();

   if (authStatus === "checking") return <p>Cargando...</p>;

   // No autenticado → redirige al login
   if (authStatus === "not-authenticated") {
      return <Navigate to="/auth/login" replace />;
   }

   // Usuario autenticado pero no es client → redirige al admin o a inicio
   if (role !== "cliente") {
      return <p>No eres Cliente</p>;
   }

   return children;
}

export function ProtectedRouteAdmin({ children }: ProtectedRouteProps) {
   const { authStatus, role } = useAuthStore();

   if (authStatus === "checking") return <p>Cargando...</p>;

   if (authStatus === "not-authenticated") {
      return <Navigate to="/auth/login" replace />;
   }

   if (role !== "admin") {
      return <p>No eres Administrador</p>;
   }

   return children
}

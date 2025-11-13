import type { User } from "@/interfaces/user.interface";

export type RegisterResponse = {
   ok: boolean;
   msg?: string;
   role?: string | null;
   token?: string | null;
   user?: User | null;
};
import type { User } from "@/interfaces/user.interface";

export interface LoginResponse {
   ok: boolean;
   msg: string;
   user: User;
   token: string;
}

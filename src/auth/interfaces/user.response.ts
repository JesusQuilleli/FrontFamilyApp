import type { User } from "@/interfaces/user.interface";

export interface UserResponse {
   ok: boolean;
   msg: string;
   user: User;
   token: string;
}
export interface AuthResponse {
    user: User; 
    token: string;
}

interface User {
    name: string; 
    email: string; 
    status: Boolean;
}
export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    register: (name: string, email: string, password: string) => void;
}

export interface User {
    id: string | null;
    name: string | null;
    email: string | null;
    role: string | null;
}
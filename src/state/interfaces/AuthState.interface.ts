export interface AuthState {
    isAuthenticated: boolean;
    user: LoginUser | null;
    login: (loginUser: LoginUser) => void;
    logout: () => void;
    register: (registerUser: RegisterUser) => void;
}

export interface RegisterUser{
    name: string;
    email: string;
    password: string;
}

export interface LoginUser{
    email: string;
    password: string;
}
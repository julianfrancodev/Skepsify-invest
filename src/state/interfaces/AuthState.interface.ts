export interface AuthState {
    isAuthenticated: boolean;
    user: LoginUser | null;
    login: (loginUser: LoginUser) => void;
    logout: () => void;
    register: (registerUser: RegisterUser) => void;
}

export interface RegisterUser{
    email: string;
    password: string;
}

export interface LoginUser{
    email: string;
    password: string;
}

export interface LoginUserGoogle {
    accessToken: string;
    email:      string;
    familyName: null;
    givenName:  string;
    id:         string;
    name:       string;
    photo:      string;
}

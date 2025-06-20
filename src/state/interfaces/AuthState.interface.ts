export interface AuthState {
    isAuthenticated: boolean;
    user: LoginUser | null;
    userGoogle: LoginUserGoogle | null;
    login: (loginUser: LoginUser) => void;
    logout: () => void;
    register: (registerUser: RegisterUser) => void;
    loginGoogle: (loginUserGoogle: LoginUserGoogle) => void;
    validateToken: () => Promise<boolean>;
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

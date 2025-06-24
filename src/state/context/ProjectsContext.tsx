import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import authentication, { updateCurrentUser } from '@react-native-firebase/auth';
import { Project, ProjectsState } from '../interfaces/ProjectsState.inteface';
import { API_PROJECTS_URL } from '@env';
const projectsContext = createContext<ProjectsState | undefined>(undefined);

export const ProjectsProvider = ({ children }: { children: React.ReactNode }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = async () => {
        try {
            const currentUser = authentication().currentUser;
            if (!currentUser) throw new Error('Usuario no autenticado');
            const token = await currentUser.getIdToken();
            setIsLoading(true);
            const response = await axios.get(`${API_PROJECTS_URL}/projects`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setProjects(response.data.projects || []);
            setIsLoading(false);
        } catch (error) {
            console.log('Error al obtener proyectos:', error);
            setError('Error al obtener proyectos');
        }
    };

    

    return (
        <projectsContext.Provider value={{ projects, fetchProjects, isLoading, error }}>
            {children}
        </projectsContext.Provider>
    );
};

export const useProjectsContext = () => {
    const context = useContext(projectsContext);
    if (context === undefined) {
        throw new Error('useProjectsContext must be used within a ProjectsProvider');
    }
    return context;
};

export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  financialOjective: number;
  progress: number;
  rating: number;
  button1Title: string;
  button2Title: string;
  urlRedirect: string;
}

export interface ProjectsState {
  projects: Project[];
  fetchProjects: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}
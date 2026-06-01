export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  links?: {
    github?: string | null;
    live?: string | null;
  };
  features: string[];
  accessibilityNote?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  description: string[];
  achievements?: string[];
  isFounding?: boolean;
}

export interface EducationItem {
  id: string;
  diploma: string;
  institution: string;
  period: string;
  description: string;
  skillsAcquired?: string[];
}

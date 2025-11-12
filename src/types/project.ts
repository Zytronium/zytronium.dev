export interface ProjectLinks {
  github?: string;
  live?: string;
  playStore?: string;
  itch?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  links: ProjectLinks;
  image?: string;
}

export interface IProject {
  id: number;
  name: string;
  short_description: string;
  long_description: string;
  stack: string[];
  learned: string;
  images: string[];
  repository_url: string;
  deploy_url: string;
}

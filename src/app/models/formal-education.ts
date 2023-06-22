export interface Project {
  imgUrl: string;
  title: string;
  content: string;
  projLink: string;
  gitLink: string;
  technologies: Technology[];
}
type Technology =
  | 'angular'
  | 'mongo'
  | 'react'
  | 'nodejs'
  | 'typescript'
  | 'rxjs'
  | 'firebase'
  | 'sass'
  | 'vue'
  | 'tailwind';

export { default as Profile } from './Profile';
export { default as FrontendSection } from './FrontendSection';
export { default as KnowledegSection } from './KnowledegSection';
export { default as KnowledegCard } from './KnowledegCard';
export { default as DBSection } from './DBSection';
export { default as BackendSection } from './BackendSection';
export { default as SkillSection } from './SkillSection';

const FrontendKnowledegs = [
  { id: 1, label: 'React Hooks' },
  { id: 2, label: 'React Context' },
  { id: 3, label: 'Lazy Loading y Suspense' },
  { id: 4, label: 'Functional Components' },
  { id: 5, label: 'Server Side Rendering' },
  { id: 6, label: 'Redux y Redux Toolkit' },
  { id: 7, label: 'Intersection Observer' },
];
const BackendKnowledegs = [
  { id: 1, label: 'Rutas' },
  { id: 2, label: 'Middlawares' },
  { id: 3, label: 'Autenticación y Autorización' },
  { id: 4, label: 'JSON Web Tokens' },
  { id: 5, label: 'Express Session' },
  { id: 6, label: 'Contraseñas Encriptadas' },
  { id: 7, label: 'Validaciones y Data Transfer Objects(DTO)' },
];
const DBKnowledegs = [
  { id: 1, label: 'Mongoose' },
  { id: 2, label: 'Logical Delete' },
  { id: 3, label: 'Migrations' },
  { id: 4, label: 'Backups' },
  { id: 5, label: 'Data Monitoring' },
  { id: 6, label: 'Search Indexes' },
];

export const Knowledegs = [
  {
    id: 1,
    title: 'Front End',
    description:
      'Avanzado conocimiento en Javascript y ReactJS. Conexiones con Servidores. Guias De Estilo, Sistemas de Diseños y Librerias de Componentes:',
    skills: FrontendKnowledegs,
  },
  {
    id: 2,
    title: 'Back End',
    description:
      'Node.js y Typescript para crear servidores con comunicación HTTP, para Servicios Web REST y Graphql.',
    skills: BackendKnowledegs,
  },
  {
    id: 3,
    title: 'Data Base',
    description:
      'Avanzado conocimiento usando bases de datos Mongo, PostgresSQL y SQL.',
    skills: DBKnowledegs,
  },
];

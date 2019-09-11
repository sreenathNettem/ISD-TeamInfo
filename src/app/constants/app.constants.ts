export const APP_CONSTANTS = {
  PAGE_ROUTES: {
    LOGIN: '/isd-login'
  },
  PAGE_NAMES: {
    LOGIN: 'isd-login',
  },
  STORAGE_KEYS: {
    USER: 'user'
  }
};

export const PROJECTS = [
  { id: 1, name: 'ISD' },
  { id: 2, name: 'Cognos' },
];

export const TEAMS = [
  { id: 1, name: 'UI', project_id: 1, Project_name: 'ISD' },
  { id: 2, name: 'API', project_id: 1, Project_name: 'ISD' },
  { id: 3, name: 'TEST', project_id: 1, Project_name: 'ISD' },
  { id: 4, name: 'DEVOPS', project_id: 1, Project_name: 'ISD' },
  { id: 5, name: 'CALL', project_id: 2, Project_name: 'Cognos' },
  { id: 7, name: 'STD Reports', project_id: 2, Project_name: 'Cognos' }
];



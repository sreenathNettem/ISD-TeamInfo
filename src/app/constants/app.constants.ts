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

export const IMAGEDATA = [
  {
    coordinate: '240, 74, 306, 130',
    image: './assets/imgs/5.png',
    ratingNum: '5',
    isSelected: false
  },
  {
    coordinate: '220, 130, 286, 196',
    image: './assets/imgs/4.png',
    ratingNum: '4',
    isSelected: true
  },
  {
    coordinate: '162, 160, 228, 226',
    image: './assets/imgs/3.png',
    ratingNum: '3',
    isSelected: true
  },
  {
    coordinate: '100, 130, 196, 166',
    image: './assets/imgs/2.png',
    ratingNum: '2',
    isSelected: true
  },
  {
    coordinate: '64, 74, 130, 130',
    image: './assets/imgs/1.png',
    ratingNum: '1',
    isSelected: true
  }
];



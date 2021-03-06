
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
    coordinate: '205, 70, 245, 110',
    image: './assets/imgs/5.png',
    ratingNum: '5',
    isSelected: false
  },
  {
    coordinate: '170, 110, 210, 150',
    image: './assets/imgs/4.png',
    ratingNum: '4',
    isSelected: true
  },
  {
    coordinate: '110, 140, 150, 200',
    image: './assets/imgs/3.png',
    ratingNum: '3',
    isSelected: true
  },
  {
    coordinate: '85, 110, 125, 150',
    image: './assets/imgs/2.png',
    ratingNum: '2',
    isSelected: true
  },
  {
    coordinate: '60, 70, 100, 110',
    image: './assets/imgs/1.png',
    ratingNum: '1',
    isSelected: true
  }];

export const LINE_GRAPH_DATA = [
  [{
    DATE: '09-09-2019',
    VALUE: 0
  },
  {
    DATE: '10-09-2019',
    VALUE: 400
  },
  {
    DATE: '11-09-2019',
    VALUE: 250
  },
  {
    DATE: '12-09-2019',
    VALUE: 140
  }
  ],
  [
    {
      DATE: '09-09-2019',
      VALUE: 430
    },
    {
      DATE: '10-09-2019',
      VALUE: 370
    },
    {
      DATE: '11-09-2019',
      VALUE: 250
    },
    {
      DATE: '12-09-2019',
      VALUE: 450
    }
  ],
  [
    {
      DATE: '09-09-2019',
      VALUE: 130
    },
    {
      DATE: '10-09-2019',
      VALUE: 270
    },
    {
      DATE: '11-09-2019',
      VALUE: 350
    },
    {
      DATE: '12-09-2019',
      VALUE: 450
    }
  ],
  [
    {
      DATE: '09-09-2019',
      VALUE: 100
    },
    {
      DATE: '10-09-2019',
      VALUE: 190
    },
    {
      DATE: '11-09-2019',
      VALUE: 200
    },
    {
      DATE: '12-09-2019',
      VALUE: 250
    }
  ]
];

export const USER_COMMENTS = [
  { 'RATING_ID': '9', 'USER_ID': 'srnettem@in.ibm.com', 'USER_RATING': '3', 'USER_PROJECT': '1', 'USER_TEAM': '2', 'USER_COMMENT': '', 'USER_RATED_TIMESTAMP': '2019-09-16', 'USER_RATED_TIME': '2019-09-16 16:58:29.849336' },
  { 'RATING_ID': '8', 'USER_ID': 'srnettem@in.ibm.com', 'USER_RATING': '4', 'USER_PROJECT': '2', 'USER_TEAM': '5', 'USER_COMMENT': '', 'USER_RATED_TIMESTAMP': '2019-09-16', 'USER_RATED_TIME': '2019-09-16 16:49:02.646380' },
  { 'RATING_ID': '7', 'USER_ID': 'srnettem@in.ibm.com', 'USER_RATING': '5', 'USER_PROJECT': '1', 'USER_TEAM': '3', 'USER_COMMENT': '', 'USER_RATED_TIMESTAMP': '2019-09-16', 'USER_RATED_TIME': '2019-09-16 16:17:51.832084' },
  { 'RATING_ID': '6', 'USER_ID': 'srnettem@in.ibm.com', 'USER_RATING': '5', 'USER_PROJECT': '2', 'USER_TEAM': '7', 'USER_COMMENT': '', 'USER_RATED_TIMESTAMP': '2019-09-16', 'USER_RATED_TIME': '2019-09-16 16:17:23.136885' },
  { 'RATING_ID': '5', 'USER_ID': 'srnettem@in.ibm.com', 'USER_RATING': '1', 'USER_PROJECT': '1', 'USER_TEAM': '1', 'USER_COMMENT': '', 'USER_RATED_TIMESTAMP': '2019-09-16', 'USER_RATED_TIME': '2019-09-16 16:04:59.803209' },
  { 'RATING_ID': '4', 'USER_ID': 'srnettem@in.ibm.com', 'USER_RATING': '2', 'USER_PROJECT': '1', 'USER_TEAM': '1', 'USER_COMMENT': '', 'USER_RATED_TIMESTAMP': '2019-09-16', 'USER_RATED_TIME': '2019-09-16 16:00:56.893132' }
];

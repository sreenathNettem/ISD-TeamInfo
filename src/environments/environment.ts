// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  noAuthentication: false,
  backendApiUrl: 'https://skyline.epm-sales-development.us-south.containers.appdomain.cloud/mobile/',
  backendW3Url: 'https://skyline.epm-sales-development.us-south.containers.appdomain.cloud/',
  backendAvatarUrl: 'https://skyline.epm-sales-development.us-south.containers.appdomain.cloud/',
  accessHubUrl: 'https://skyline.epm-sales-development.us-south.containers.appdomain.cloud/getAccessHubData',
  // userDetails: {
  //   email: 'srnettem@in.ibm.com',
  //   uid: 'AVPU08744',
  //   firstName: 'Sreenath',
  //   lastName: 'Nettem'
  // },
  userDetails: {
    email: '',
    uid: '',
    firstName: '',
    lastName: ''
  },
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

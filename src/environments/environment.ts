// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  noAuthentication: true,
  backendApiUrl: 'https://skyline.epm-sales-development.us-south.containers.appdomain.cloud/mobile/',
  backendW3Url: 'https://localhost/',
  backendAvatarUrl: 'https://skyline.epm-sales-development.us-south.containers.appdomain.cloud/',
  accessHubUrl: 'https://localhost/getAccessHubData',
  backendUrl: 'https://localhost/',
  userDetails: {
    email: 'srnettem@in.ibm.com',
    uid: 'AVPU08744',
    firstName: 'Sreenath',
    lastName: 'Nettem',
    role: 'admin'
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

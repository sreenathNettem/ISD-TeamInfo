import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
  profileDetails;
  profileDetailsDefault = [
    {
      profileName: 'profileBUAllGeos',
      accessHubDetails: {
        USERCATEGORY: 'Business Unit',
        USERGLOBALMARKETSUBCATEGORY: null,
        USERGEOGRAPHY: ['All'],
        USERBUSINESSUNIT: [
          'Systems Hardware',
          'Systems Software',
          'GBS',
          'GTS',
          'C&DP',
          'Security',
          'WCE Mktg & Commerce',
          'WCE Supply Chain',
          'Collaboration Solns',
          'Talent Solns',
          'Watson Health',
          'Watson IoT',
          'Watson Education',
          'Wtsn Media & Weather',
          'Indus Platforms Unit'
        ]
      },
      parametersList: [
        {
          parameterName: 'qtr',
          label: 'QUARTER',
          name: 'qtr',
          data: ['CQ', 'NQ'],
          multi: false,
          showAstrick: false,
          close: true,
          model: 'CQ',
          bindLabel: 'label',
          show: true,
          showBreadCrumb: true
        },
        {
          parameterName: 'geo',
          label: 'Geo',
          name: 'geo',
          data: ['North America',
            'Europe',
            'Japan',
            'Asia Pacific',
            'Greater China Group',
            'Latin America',
            'MEA'],
          multi: true,
          showAstrick: false,
          displayRole: true,
          close: false,
          model: [],
          clearable: true,
          bindLabel: 'id'
        },
        {
          parameterName: 'brand',
          label: 'BU',
          name: 'brand',
          data: ['Systems Hardware',
            'Systems Software',
            'GBS',
            'GTS',
            'C&DP',
            'Security',
            'WCE Mktg & Commerce',
            'WCE Supply Chain',
            'Collaboration Solns',
            'Talent Solns',
            'Watson Health',
            'Watson IoT',
            'Watson Education',
            'Wtsn Media & Weather',
            'Indus Platforms Unit'],
          multi: true,
          showAstrick: false,
          displayRole: true,
          close: false,
          model: [],
          clearable: true,
          bindLabel: 'id'
        }
      ],
      segments: [
        {
          parameterName: 'revTyp',
          label: 'revTyp',
          name: 'revTyp',
          data: ['Trans. Revenue', 'Signings', 'Signings-ACV'],
          multi: false,
          showAstrick: false,
          displayRole: true,
          close: false,
          model: 'Trans. Revenue',
          clearable: true,
          bindLabel: 'id'
        }
      ]
    }
  ];
  constructor() { }
}

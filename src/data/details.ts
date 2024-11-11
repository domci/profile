export interface AdditionalDetails {
    salaryExpectations: string;
    hourlyRate: string;
    locationPreferences: string;
    availability: string;
    jobTypes: string[];
  }
  
  export const additionalDetails: AdditionalDetails = {
    salaryExpectations: '110k €. Negotiable.',
    hourlyRate: '130 €/hour',
    locationPreferences: 'Remote',
    availability: '3 months',
    jobTypes: ['Full-time', 'Contracting', 'Freelance', 'Consulting'],
  };
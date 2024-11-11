export interface AdditionalDetails {
    salaryExpectations: string;
    hourlyRate: string;
    locationPreferences: string;
    availability: string;
    jobTypes: string[];
    contact: string;
    github: string;
  }
  
  export const additionalDetails: AdditionalDetails = {
    salaryExpectations: '110k €. Negotiable.',
    hourlyRate: '130 €/hour',
    locationPreferences: 'Remote',
    availability: '3 months',
    jobTypes: ['Full-time', 'Contracting', 'Freelance', 'Consulting'],
    contact: 'https://www.linkedin.com/in/dominik-cichon-1aa400a0/',
    github: 'https://github.com/domci',
  };
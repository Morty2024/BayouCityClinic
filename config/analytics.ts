import { disable } from 'aws-amplify/analytics';

export const disableAnalytics = () => {
  try {
    disable();
    console.log('Analytics disabled');
  } catch (error) {
    console.error('Error disabling analytics:', error);
  }
}; 
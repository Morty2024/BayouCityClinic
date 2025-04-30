import { Amplify } from 'aws-amplify';

// Update these values with your Cognito information from the AWS Console
const awsConfig = {
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1', // Update this to your region (e.g., us-east-1, us-west-2)
    
    // REQUIRED - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_95kri5', // Replace with your User Pool ID
    
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: 'YOUR_CLIENT_ID', // Replace with your App Client ID
    
    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: true,
  }
};

// Configure Amplify
const configureAmplify = () => {
  // Add Product name for better tracking of the requests
  Amplify.configure({ ...awsConfig, Analytics: { disabled: true } });
};

export default configureAmplify; 
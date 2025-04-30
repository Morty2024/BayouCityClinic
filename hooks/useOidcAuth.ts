import { useAuth } from "react-oidc-context";

/**
 * Custom hook to handle OIDC authentication with Cognito
 */
export function useOidcAuth() {
  const auth = useAuth();

  // Function to handle sign-out through Cognito
  const signOutRedirect = () => {
    const clientId = "5svs97v0pkoauc5a42vsoascrd";
    const logoutUri = encodeURIComponent("https://bayoucityclinic.xyz/");
    const cognitoDomain = "https://<your-cognito-domain>"; // Update with your Cognito domain
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${logoutUri}`;
  };

  // Function to handle sign-in
  const signIn = () => {
    auth.signinRedirect();
  };

  // Function to handle sign-out
  const signOut = () => {
    auth.removeUser();
    // You can optionally redirect to Cognito's logout endpoint
    // signOutRedirect();
  };

  return {
    isLoading: auth.isLoading,
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    error: auth.error,
    signIn,
    signOut,
    signOutRedirect
  };
}

export default useOidcAuth; 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom, selector } from 'recoil';

// Utility function to decode JWT
function decodeJwt(token: string): Record<string, any> | null {
  try {
    const payload = token.split('.')[1]; // Get the payload part of the token
    if (!payload) return null;
    const decodedPayload = atob(payload); // Decode from base64
    return JSON.parse(decodedPayload); // Parse as JSON
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
}


// Atom to store the user role
export const userRoleState = atom<string | null>({
  key: 'userRoleState',
  default: null, // Default value, will be set by the selector
});

// Selector to decode the token and assign the role
export const decodedUserRoleState = selector<string | null>({
  key: 'decodedUserRoleState',
  get: () => {
    const token = localStorage.getItem('token'); // Replace with your token storage method

    if (token) {
      const decodedToken = decodeJwt(token); // Use the custom decode function
      if (decodedToken) {
        return decodedToken.role; // Assuming the role is in the `role` field
      }
    }

    return null; // No token found, or token is invalid
  },
  set: ({ set }, newValue) => {
    set(userRoleState, newValue); // Allow manual override of the role if needed
  },
});

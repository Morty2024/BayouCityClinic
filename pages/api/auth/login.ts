import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs';

// Importing the users array from register endpoint
// In a real app, this would be a database query
import { users, User } from './register';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    // In a real app, this would be a database query
    const user = users.find((u: User) => u.email === email);
    
    // If user doesn't exist or password is incorrect
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Return user info without password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: passwordField, ...userWithoutPassword } = user;
    
    return res.status(200).json({ 
      message: 'Login successful', 
      user: userWithoutPassword 
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 
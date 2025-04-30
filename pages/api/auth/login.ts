import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// This would typically connect to a database in a real implementation
const users: User[] = [
  {
    id: '1',
    email: 'test@example.com',
    // This is just an example - in production, never store passwords like this
    password: '$2a$10$8Ux8xN6WZd4M8L7cT9C4EueGKowdkXJI2kpDqyB9qZ.BBnCDk8jXK', // hashed 'password123'
    firstName: 'Test',
    lastName: 'User'
  }
];

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
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Find user
    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // In a real implementation, you would create a session or JWT token here
    // For this example, we'll just return the user (minus the password)
    const { id, email: userEmail, firstName, lastName } = user;
    const userWithoutPassword = { id, email: userEmail, firstName, lastName };
    
    return res.status(200).json({ 
      user: userWithoutPassword,
      token: 'sample-jwt-token' // In a real app, generate a proper JWT
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
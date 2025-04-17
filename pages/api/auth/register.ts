import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcryptjs';

// Define a User type
export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  phone?: string;
  createdAt: Date;
}

// In a real implementation, this would be stored in a database
export const users: User[] = [];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password, firstName, lastName, dateOfBirth, phone } = req.body;

    // Basic validation
    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if user already exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email,
      password: hashedPassword,
      firstName,
      lastName,
      dateOfBirth,
      phone,
      createdAt: new Date(),
    };

    // Store the user
    users.push(newUser);

    // Return success without exposing the password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: passwordField, ...userWithoutPassword } = newUser;
    return res.status(201).json({ 
      message: 'User registered successfully', 
      user: userWithoutPassword 
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 
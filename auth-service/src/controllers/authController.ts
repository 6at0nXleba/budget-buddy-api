import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { configDotenv } from 'dotenv';

configDotenv()

const secret = process.env.JWT_SECRET

export const register = async (req: Request, res: Response) => {
  const { userName, password, family_access, firstName, lastName, email } = req.body;

  try {
    //? check if user exist
    const existingUser = await User.findOne({ where: { userName } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //? creating new user
    const newUser = await User.create({
      userName,
      password: hashedPassword,
      family_access,
      firstName,
      lastName,
      email,
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  try {
    //? find user by username
    const user = await User.findOne({ where: { userName } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    //? check pass
    const isPasswordValid = await bcrypt.compare(password, user.getDataValue('password'));
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
      const token = jwt.sign(
      { id: user.getDataValue('id'), userName: user.getDataValue('userName') },
      secret!,
      { expiresIn: '1h' }
      );
      res.json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const verifyToken = (req: Request, res: Response) => {
  const token = req.body.token || req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(token, secret!);

    res.json({
      valid: true,
      user: decoded,
    });
  } catch (error) {
    return res.status(401).json({ valid: false, message: 'Invalid or expired token' });
  }
};
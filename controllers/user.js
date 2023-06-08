import { db } from '../db.js';

// Get all users
export const getUsers = (req, res) => {
  const query = "SELECT * FROM users";

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
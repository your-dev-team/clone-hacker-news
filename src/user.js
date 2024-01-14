const express = require('express');
const router = express.Router();

const User = require('./classes/User');
const db = require('./database');

router.post('/', async (req, res) => {
  const userData = req.body;
  const user = new User(userData);
  await db.createUser(user);
  res.status(201).send(user);
});

router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const user = await db.getUserProfile(userId);
  res.send(user);
});

router.put('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;
  await db.updateUserProfile(userId, updatedData);
  res.send(`User profile with ID: ${userId} updated successfully.`);
});

router.delete('/:userId', async (req, res) => {
  const userId = req.params.userId;
  await db.deleteUserProfile(userId);
  res.send(`User profile with ID: ${userId} deleted successfully.`);
});

module.exports = router;

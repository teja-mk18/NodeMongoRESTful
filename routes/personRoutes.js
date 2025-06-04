const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// GET all people
router.get('/', async (req, res) => {
  const people = await Person.find();
  res.json(people);
});

// GET person by ID
router.get('/:id', async (req, res) => {
  const person = await Person.findById(req.params.id);
  if (!person) {
    return res.status(404).json({ message: 'Person not found' });
  }
  res.json(person);
});

// POST new person
router.post('/', async (req, res) => {
  const person = new Person(req.body);
  await person.save();
  res.json(person);
});

// PUT update person
router.put('/:id', async (req, res) => {
  const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(person);
});

// DELETE person
router.delete('/:id', async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.json({ message: 'Person deleted' });
});

module.exports = router;

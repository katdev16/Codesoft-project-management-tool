
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');


router.post('/', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().populate('tasks');
        res.json(projects);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



module.exports = router;

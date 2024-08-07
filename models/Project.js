const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    deadline: Date,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.export = mongoose.model('Project',ProjectSchema);
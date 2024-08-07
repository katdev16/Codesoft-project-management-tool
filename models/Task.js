const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: String,
    description: String,
    deadline: Date,
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'] },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }

})

module.exports = mongoose.model('Task', TaskSchema)
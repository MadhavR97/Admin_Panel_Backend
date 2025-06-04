const studentSchema = require('../model/student_schema');

// Get all students
module.exports.getStudents = async (req, res) => {
    try {
        const students = await studentSchema.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching students', error });
    }
};

// Add a new student
module.exports.addStudent = async (req, res) => {
    try {
        await studentSchema.create(req.body);
        res.status(201).json({ msg: 'Student added successfully' });
    }
    catch (error) {
        res.status(500).json({ msg: 'Error adding student', error });
    }
}

// Update a student
module.exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedStudent = await studentSchema.findByIdAndUpdate(id, req.body);
        res.status(200).json({ msg: 'Student updated successfully', student: updatedStudent });
    }
    catch (error) {
        res.status(500).json({ msg: 'Error updating student', error });
    }
}

// Delete a student
module.exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await studentSchema.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Student deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ msg: 'Error deleting student', error });
    }
}
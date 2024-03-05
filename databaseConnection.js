const mysql = require('mysql2/promise')

// const password = require('../dia1/password')

async function main() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Nuriatkm5',
            database: 'dia1'
        });
        console.log('Connected');
        const result = await connection.query(selectAllTeachers)
        console.log(result);
        connection.end()
    } catch (error) {
        console.log(error);
    }
}

const createTable = 'CREATE TABLE Marks (mark_id INT AUTO_INCREMENT PRIMARY KEY, student_id INT,subject_id INT, date DATE, mark INT)';
const insertDirection = 'INSERT INTO direccion (Pais,Ciudad,Calle) VALUES ("Ecuador","Quito","C/Color")';
const updateSetMarks = 'UPDATE Marks SET marks= 0';
const updateUser2 = 'UPDATE users SET name="Antonio" WHERE id=2';
const deleteAllDirection = 'DELETE from direccion';
const selectAllStudents = 'SELECT first_name, last_name FROM students';
const selectAllTeachers = 'SELECT * FROM teachers';
const deleteMarck = 'DELETE from marks WHERE date >= "2014-01-01"';
const updadteMarckStudents = 'UPDATE Marks SET mark=5 WHERE mark<5';
main();

// RETOS PALABRAS RESERVADAS DIA2.

const averageGrade = 'SELECT AVG(mark) AS note FROM marks WHERE subject_id = 1';
const allStudents = 'SELECT COUNT(*) AS all_students FROM students';
const allGroups = 'SELECT * FROM dia1.groups';
const deleteNote = 'DELETE FROM marks WHERE mark > 5 AND YEAR(date) = YEAR(CURDATE()) - 1';
const studentsUpdate = 'SELECT * FROM students WHERE year_income = YEAR(CURDATE())';
const teachersSubject = 'SELECT subject_id, COUNT(*) AS num_teachers FROM teachers_subject GROUP BY subject_id';
const getNoteStudent = 'SELECT id, mark FROM marks WHERE (id BETWEEN 1 AND 20) OR (mark > 8 AND YEAR(date) = YEAR(CURDATE()) - 1)';
const getAverageGrade = 'SELECT subject_id, AVG(mark) AS notes FROM marks WHERE YEAR(date) = YEAR(CURDATE()) - 1 GROUP BY subject_id';
const arithmetic = 'SELECT student_id, AVG(dark) AS note FROM darks WHERE YEAR(date) = YEAR(CURDATE()) - 1 GROUP BY student_id';

// ::RETOS DE UNIONES::

const getInfo = 'SELECT students.first_name, students.last_name, subjects.title as subject FROM students JOIN subjects ON students.group_id = subjects.subject_id';
const getNameSubject = 'SELECT teachers.firts_name, teachers.last_name, subjects.title as subject FROM teachers JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id JOIN subjects ON subject_teacher.subject_id = subjects.subject_id';
const selectInfo = 'SELECT COUNT(students.student_id) as total_students, subjects.title as subject, teachers.firts_name as teacher_first_name, teachers.last_name as teacher_last_name FROM students JOIN subjects ON students.group_id = subjects.subject_id JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id GROUP BY subjects.subject_id, teachers.teacher_id';
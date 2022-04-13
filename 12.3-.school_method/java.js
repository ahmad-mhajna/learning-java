const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};
function findPerson(isTeacher, id) {
  if (isTeacher) return school.teachers.find((teacher) => teacher.id === id);
  else return school.students.find((student) => student.id === id);
}
function assignStudent(id, subject) {
  const student = findPerson(false, id);
  const teacher = school.teachers.find((teacher) =>
    teacher.subjects.includes(subject)
  );
  if (teacher.capacityLeft > 0) {
    teacher.students.push(student);
    teacher.capacityLeft--;
    console.log(teacher);
  } else
    console.log(`Sorry,
  no available teachers left`);
}
const assignTeachersSubject = (id, subject) => {
  const teacher = findPerson(true, id);
  if (!teacher.subjects.includes(subject)) teacher.subjects.push(subject);
  console.log(teacher);
};
const removeTeachersSubject = (id, subject) => {
  const teacher = findPerson(true, id);
  let subIndex = teacher.subjects.indexOf(subject);
  if (teacher.subjects.includes(subject)) teacher.subjects.splice(subIndex, 1);
  console.log(teacher);
};

assignStudent(11, `biology`);
assignTeachersSubject(1, `english`);
removeTeachersSubject(1, `english`);

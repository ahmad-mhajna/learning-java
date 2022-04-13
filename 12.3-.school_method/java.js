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
  findPerson(isTeacher, id) {
    if (isTeacher) return this.teachers.find((teacher) => teacher.id === id);
    else return this.students.find((student) => student.id === id);
  },
  assignStudent(id, subject) {
    const student = this.findPerson(false, id);
    const teacher = this.teachers.find((teacher) =>
      teacher.subjects.includes(subject)
    );
    if (teacher.capacityLeft > 0) {
      teacher.students.push(student);
      teacher.capacityLeft--;
      console.log(teacher);
    } else
      console.log(`Sorry,
    no available teachers left`);
  },
  assignTeachersSubject(id, subject) {
    const teacher = this.findPerson(true, id);
    if (!teacher.subjects.includes(subject)) teacher.subjects.push(subject);
    console.log(teacher);
  },
  removeTeachersSubject(id, subject) {
    const teacher = this.findPerson(true, id);
    let subIndex = teacher.subjects.indexOf(subject);
    if (teacher.subjects.includes(subject))
      teacher.subjects.splice(subIndex, 1);
    console.log(teacher);
  },
};

school.assignStudent(11, `biology`);
school.assignTeachersSubject(1, `english`);
school.removeTeachersSubject(1, `english`);

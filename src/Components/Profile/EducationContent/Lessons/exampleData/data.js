// Example schedule data for demonstration
const exampleSchedule = [
  {
    topic: "Fundamentals of React",
    subtopic: "Introduction to React",
    flashcardsCount: 3,
    lessonDate: new Date(2023, 7, 9, 10, 0), // required
    endTime: new Date(2023, 7, 9, 10, 45), // required
    lessonNumber: 3,
    lessonDuration: 45,
  },
  {
    topic: "Fundamentals of Express",
    subtopic: "Routing in Express",
    flashcardsCount: 6,
    lessonDate: new Date(2023, 7, 10, 14, 0),
    endTime: new Date(2023, 7, 10, 16, 0),
    lessonNumber: 4,
    lessonDuration: 45,
  },
  {
    topic: "React Hooks",
    subtopic: "useState and useEffect",
    flashcardsCount: 4,
    lessonDate: new Date(2023, 7, 11, 9, 0),
    endTime: new Date(2023, 7, 11, 10, 30),
    lessonNumber: 1,
    lessonDuration: 45,
  },
  {
    topic: "React Hooks",
    subtopic: "useContext and useReducer",
    flashcardsCount: 5,
    lessonDate: new Date(2023, 7, 12, 13, 0),
    endTime: new Date(2023, 7, 12, 15, 0),
    lessonNumber: 2,
    lessonDuration: 45,
  },
];

export default exampleSchedule;

// Function to change the completion status of a lesson by its ID
export default function updateStoredLessons(id) {
  const lessons = JSON.parse(localStorage.getItem("lessons"));

//   console.log("lessons", lessons);
  if (lessons) {
    // Find the index of the lesson with the specified ID in the array
    const lessonIndex = lessons.findIndex((lesson) => lesson._id === id);

    // If the lesson with the specified ID is found
    if (lessonIndex !== -1) {
      // Change the 'completed' property to true
      lessons[lessonIndex].completed = true;
    //   console.log(lessons[lessonIndex]);

      // Update the local storage with the updated array of lessons
      return localStorage.setItem("lessons", JSON.stringify(lessons));
    }
    console.log("Lesson with the specified ID not found");
  }
}

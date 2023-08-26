export const selectUserLessons = (state) => state.lessons.lessons;

export const selectLessonPoints = (state) => state.lessons.points;

export const selectLessonsLoadingStatus = (state) => state.lessons.isLoading;

export const selectMissedLessonsType = (state) => state.lessons.missed;

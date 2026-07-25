import coursesData from "../../public/data.json";

// Simulate a network delay to show loading states (e.g., 1.5 seconds)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCourses() {
  await delay(1500);
  return coursesData;
}

export async function getCourseById(id) {
  await delay(1000);
  const course = coursesData.find((c) => c.id.toString() === id.toString());
  return course || null;
}

export async function getPopularCourses() {
  await delay(1200);
  // Sort by rating descending and take top 3
  return [...coursesData].sort((a, b) => b.rating - a.rating).slice(0, 3);
}

export async function getTrendingCourses() {
  await delay(1200);
  // For demo purposes, let's just return the last 3 courses as "Trending/New Releases"
  return [...coursesData].reverse().slice(0, 3);
}

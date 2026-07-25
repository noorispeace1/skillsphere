import { getCourses } from "@/lib/api";
import CourseCard from "@/components/CourseCard";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: 'All Courses | SkillSphere',
  description: 'Explore our vast library of premium courses.',
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-gray-950 pt-28 pb-24 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Explore All Courses
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Discover thousands of courses from top instructors. From Web Development to Data Science, we have everything you need to upgrade your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

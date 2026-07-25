import Image from "next/image";
import Link from "next/link";
import { Sparkles, BookOpen, Trophy, Users, CheckCircle, Clock } from "lucide-react";
import { getCourses } from "@/lib/api";
import CourseCard from "@/components/CourseCard";
import HeroSlider from "@/components/HeroSlider";

export default async function Home() {
  const allCourses = await getCourses();

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col pt-16 text-gray-100">
      
      {/* Hero Section */}
      <HeroSlider />

      {/* All Courses Section */}
      <section className="py-24 bg-gray-950 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Explore Courses
              </h2>
              <p className="text-gray-400 max-w-2xl text-lg">
                Choose from our extensive catalog of professional courses.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tips Section */}
      <section className="py-24 bg-gray-950 relative border-t border-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              📌 Learning Tips
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Master the art of studying effectively with these proven techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Pomodoro Technique</h3>
              <p className="text-gray-400 leading-relaxed">
                Break your study sessions into 25-minute focused intervals, separated by 5-minute breaks. This helps maintain high levels of concentration while preventing burnout.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                <Clock size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Time Blocking</h3>
              <p className="text-gray-400 leading-relaxed">
                Schedule specific blocks of time in your calendar dedicated solely to learning. Treat these blocks as non-negotiable appointments with yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Instructors */}
      <section className="py-24 bg-gray-900 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              🏆 Top Instructors
            </h2>
            <p className="text-lg text-gray-400">
              Learn from industry leaders and professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Doe", role: "Senior Web Developer", img: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
              { name: "Sarah Smith", role: "UI/UX Designer", img: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
              { name: "Dr. Alan Turing", role: "Data Scientist", img: "https://i.pravatar.cc/150?u=a04258a2462d826712d" },
              { name: "Emma Johnson", role: "Mobile Developer", img: "https://i.pravatar.cc/150?u=a042581f4e29026024d" }
            ].map((instructor, i) => (
              <div key={i} className="bg-gray-950 p-6 rounded-3xl border border-gray-800 text-center hover:border-indigo-500/50 transition-colors">
                <Image src={instructor.img} alt={instructor.name} width={96} height={96} className="rounded-full mx-auto mb-4 border-2 border-indigo-500/30" />
                <h4 className="text-lg font-bold text-white">{instructor.name}</h4>
                <p className="text-indigo-400 text-sm font-medium">{instructor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homepage CTA */}
      <section className="bg-gray-950 py-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start your journey?</h2>
          <Link
            href="/auth/register"
            className="inline-flex justify-center items-center h-12 bg-white text-gray-900 font-bold px-8 rounded-full hover:bg-gray-200 transition-colors"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}

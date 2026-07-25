import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getCourseById } from "@/lib/api";
import { Button } from "@heroui/react";
import { Clock, Star, User, BookOpen, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = await getCourseById(id);
  if (!course) return { title: 'Course Not Found' };
  return { title: `${course.title} | SkillSphere` };
}

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;
  
  // 🔒 Protected Route Check
  const reqHeaders = await headers();
  const session = await auth.api.getSession({ headers: reqHeaders });
  
  if (!session) {
    redirect("/auth/login");
  }

  const course = await getCourseById(id);

  if (!course) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-950 text-white">
        <h1 className="text-3xl font-bold">Course not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-24 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-400 mb-8 mt-4">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/courses" className="hover:text-white">Courses</Link>
          <span className="mx-2">/</span>
          <span className="text-white font-medium truncate">{course.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              {course.title}
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {course.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 bg-gray-900 p-6 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-2">
                <User size={20} className="text-indigo-400" />
                <span className="text-white font-medium">{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <span className="text-white font-bold">{course.rating} <span className="text-gray-500 font-normal">(420 reviews)</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-purple-400" />
                <span className="text-white">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-pink-400" />
                <span className="text-white">{course.level}</span>
              </div>
            </div>

            {/* Curriculum */}
            <h2 className="text-3xl font-bold text-white mb-8">Course Curriculum</h2>
            <div className="space-y-4">
              {(course.curriculum || ["Introduction and Basics", "Deep Dive & Core Concepts", "Advanced Techniques", "Final Project & Certification"]).map((topic, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <span className="text-lg text-gray-200 font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <div className="relative w-full h-64">
                <Image 
                  src={course.image} 
                  alt={course.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-4xl font-extrabold text-white mb-6">
                  ${course.price || 49.99}
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold mb-4 shadow-lg hover:shadow-xl transition-all"
                  radius="full"
                >
                  Enroll Now
                </Button>
                
                <p className="text-center text-sm text-gray-400 mb-6">
                  30-Day Money-Back Guarantee
                </p>

                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-green-400" />
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-green-400" />
                    <span>Access on mobile and TV</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-green-400" />
                    <span>Certificate of completion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Card, Button } from "@heroui/react";
import { Star, Clock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ course }) {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-none bg-gray-900/40 backdrop-blur-md overflow-hidden">
      <div className="p-0 overflow-hidden relative">
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
            {course.category}
          </span>
        </div>
        <div className="relative w-full h-48">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-t-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="flex flex-col items-start px-5 py-6 bg-gray-900 rounded-b-xl border border-gray-800 flex-1">
        <div className="flex items-center gap-1 mb-2">
          <Star className="text-yellow-400 fill-yellow-400" size={16} />
          <span className="text-yellow-400 font-bold text-sm">{course.rating}</span>
        </div>
        
        <h4 className="text-white font-bold text-lg mb-2 line-clamp-2 min-h-[56px]">
          {course.title}
        </h4>
        
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <User size={14} className="mr-1" />
          <span className="mr-4">{course.instructor}</span>
        </div>

        <div className="flex items-center text-gray-400 text-sm mb-6">
          <Clock size={14} className="mr-1" />
          <span>{course.duration}</span>
        </div>

        <div className="flex items-center justify-between w-full mt-auto">
          <span className="text-white font-extrabold text-xl">${course.price || 49.99}</span>
          <Link href={`/courses/${course.id}`}>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
              radius="full"
              size="sm"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

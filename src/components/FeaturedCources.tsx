"use client";

import Link from "next/link";
import courseData from "../data/musicCourses.json";
import { BackgroundGradient } from "./ui/background-gradient";


interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCources() {
  const FeaturedCourceData = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div>
      <div className="text-center">
        <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h1>
        <p className={` mt-5 text-5xl  leading-8 font-extrabold tracking-tight text-[#865DFF] sm:text-4xl`}>
          Learn With the Best
        </p>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {FeaturedCourceData.map((course: Course) => (
            <div key={course.id} className="flex justify-center ">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-[#26355D] overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <img className="rounded-xl h-40 w-[280px] object-cover" src={course.image} />
                  <h1 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-[#AF47D2]">
                    {course.title}
                  </h1>
                  <p className="text-sm mt-4 text-neutral-600 dark:text-[#FF8F00] flex-grow">
                    {course.description}
                  </p>
                  <Link className="mt-4 dark:bg-[#F72798] px-4 py-2 rounded-xl dark:text-[#FFFF80]" href={`/courses/${course.slug}`}>Learn more</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className=" [box-shadow:inset_20px_20px_60px_#a010d8,_inset_-20px_-20px_60px_#d816ff] px-4 py-4 rounded-xl text-lg text-[#FFFFFF] bg-[#BC13FE] hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCources;

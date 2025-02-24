import { Badge } from "lucide-react"
import React from "react"

const stats = [
  {
    name: "Faster Project Completion",
    value: "98% On-Time delivery",
  },
  {
    name: "Higher Cost Efficiency",
    value: "Up to 30% Savings",
  },
  {
    name: "Increased Work Capacity",
    value: "Over 1,000 Projects",
  },
];



export default function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="mx-auto w-full max-w-6xl px-3"
    >
      <h2
        id="features-title"
        className="mt-44 md:mt-64 inline-block text-center w-full bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        Built for Efficiency and Sustainability
      </h2>
      <p className="mt-6 max-w-3xl mx-auto text-center w-full  text-lg leading-7 text-gray-600 dark:text-gray-400">
        Our innovative construction approach eliminates common project delays, ensuring seamless execution.
        With a focus on quality, safety, and cost efficiency, we deliver reliable solutions that stand the test of time.
      </p>

      <dl className="mt-12 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:border rounded-3xl backdrop-blur bg-white/[1%] md:border-gray-200 md:py-14 dark:border-gray-800">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="border-l-2 border-indigo-100 pl-6 md:border-l md:text-center lg:border-gray-200 lg:first:border-none dark:border-indigo-900 lg:dark:border-gray-800">
              <dd className="inline-block bg-gradient-to-t from-indigo-900 to-indigo-600 bg-clip-text text-5xl whitespace-none font-bold tracking-tight text-transparent dark:from-indigo-700 dark:to-indigo-400">
                {stat.value}
              </dd>
              <dt className="mt-3 text-gray-600 dark:text-gray-400">
                {stat.name}
              </dt>
            </div>
          </React.Fragment>
        ))}
      </dl>
    </section>
  )
}

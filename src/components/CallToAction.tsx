import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-6xl">
      <div className="grid items-center gap-8 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <h2
            id="cta-title"
            className="scroll-my-60 text-3xl font-semibold tracking-tighter text-balance md:text-4xl"
          >
            Ready to get started ?
          </h2>
          <p className="mt-3 mb-8 text-lg text-gray-600">
          Begin your smart construction journey today or talk to our experts about your project’s specific needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="text-md h-10 text-xl">
              <Link href="/configurator">Start using configurator</Link>
            </Button>
          </div>
        </div>
        <div className="relative isolate rounded-xl sm:col-span-4 sm:h-full">
          
          <Image
            alt="Farm with vehicles"
            src="/farm-footer.webp"
            height={1000}
            width={1000}
            className="relative shadow-xl z-10 rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default CallToAction

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Unlock Knowledge with StudyNotesHub
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Explore comprehensive study notes for your degree, semester, subject, and topic. 
              Organized, detailed, and easy to navigate!
            </p>
            <div className="mt-8">
              <Link href="/degrees"
                 className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition">
                  Start Exploring
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            How StudyNotesHub Works
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Organize your study materials with our easy-to-use platform.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mx-auto mb-6">
                <span className="material-icons text-blue-600 text-3xl">school</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Degree-Wise Organization</h3>
              <p className="text-gray-600 text-center">
                Easily browse notes categorized by your degree, from Engineering to Commerce and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex items-center justify-center h-16 w-16 bg-green-100 rounded-full mx-auto mb-6">
                <span className="material-icons text-green-600 text-3xl">filter_alt</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Semester-Wise Filtering</h3>
              <p className="text-gray-600 text-center">
                Access notes tailored for each semester of your studies, making it easy to find what you need.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex items-center justify-center h-16 w-16 bg-red-100 rounded-full mx-auto mb-6">
                <span className="material-icons text-red-600 text-3xl">subject</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Subject-Specific Notes</h3>
              <p className="text-gray-600 text-center">
                Dive deep into each subject with detailed notes on topics ranging from Calculus to Computer Science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Ready to Ace Your Studies?</h2>
          <p className="mt-4">
            Get started with StudyNotesHub and find all the notes you need in one place.
          </p>
          <div className="mt-8">
            <Link href="/degrees"
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition">
                Browse Notes
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-900">What Students Are Saying</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <p className="text-gray-600 italic">
                "StudyNotesHub made preparing for exams so much easier. All the notes I needed in one place!"
              </p>
              <p className="mt-4 text-right text-sm font-semibold text-gray-900">- Alex, Engineering Student</p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <p className="text-gray-600 italic">
                "I love the organization by degree and semester. It's so simple to find exactly what I need."
              </p>
              <p className="mt-4 text-right text-sm font-semibold text-gray-900">- Emily, Commerce Student</p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <p className="text-gray-600 italic">
                "The detailed notes helped me a lot, especially for topics I was struggling with."
              </p>
              <p className="mt-4 text-right text-sm font-semibold text-gray-900">- John, Science Student</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

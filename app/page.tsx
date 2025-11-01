export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Engaging Tag Line - Stylized */}
            <div className="py-4">
              <p className="text-2xl md:text-3xl font-bold text-gray-800 italic text-left" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                Dropping Zero&apos;s and One&apos;s until they stick
              </p>
            </div>

            {/* Circular Avatar and Name */}
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  AN
                </div>
              </div>
              <div className="flex flex-col justify-center" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Aaron
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Nielsen
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 leading-tight mt-2">
                  Software Engineer
                </h2>
              </div>
            </div>
          </div>

          {/* Right Column - About Section with rounded corners */}
          <div className="bg-gray-100 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
              About
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong>Aaron Nielsen</strong>
              </p>
              <p className="leading-relaxed">
                Senior Software Engineer with 29 years of software development experience.
              </p>
              <p className="leading-relaxed">
                With nearly three decades of experience in software development, I bring a wealth of knowledge 
                and expertise to every project. As a Senior Software Engineer, I specialize in creating robust, 
                scalable, and maintainable software solutions that drive business success.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Projects Section - Full width, rounded corners */}
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Featured Projects
          </h2>
          <div className="text-center text-gray-600">
            <p>Project showcase coming soon...</p>
          </div>
        </div>
      </div>
    </main>
  )
}



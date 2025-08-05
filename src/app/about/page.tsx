

export default function EducationSection() {
  return (

    
    <div className="bg-[#0d0d0d] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-700 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gray-700 rounded-full translate-y-20 translate-x-20"></div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-teal-400 mb-4">{"< Education />"}</h1>
          <p className="text-lg text-green-400 font-light">But otherwise you have degrees?</p>
        </div>

        {/* Download button */}
        {/* <div className="flex justify-end mb-12">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium">
            <Download className="w-4 h-4 mr-2" />
            Download Transcript
          </Button>
        </div> */}

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-32 top-0 bottom-0 w-0.5 bg-gray-600"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {/* Bachelor's Degree */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <span className="text-white font-medium text-lg">2022 - 2026</span>
              </div>
              <div className="absolute left-32 w-4 h-4 bg-teal-500 rounded-full -translate-x-2 mt-1"></div>
              <div className="flex-1 ml-12">
                <h3 className="text-2xl font-semibold text-white mb-3">Bachelor of Technology, Computer Science</h3>
                <p className="text-purple-500 mb-3 text-lg">
                  <span className="font-medium">AKTU</span> Kanpur, Uttar Pradesh
                </p>
                <p className="text-blue-500 mb-2 text-lg font-medium">CGPA: 7.5</p>
                <p className="text-gray-300 text-lg">In progress</p>
              </div>
            </div>

            {/* Intermediate */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <span className="text-white font-medium text-lg">2021-2022</span>
              </div>
              <div className="absolute left-32 w-4 h-4 bg-teal-500 rounded-full -translate-x-2 mt-1"></div>
              <div className="flex-1 ml-12">
                <h3 className="text-2xl font-semibold text-white mb-3">Intermediate</h3>
                <p className="text-white mb-3 text-lg">Physics, Chemistry, Mathematics</p>
                <p className="text-purple-500 mb-3 text-lg">
                  <span className="font-medium">CBSE</span> Stepping Stone, Gorakhpur
                </p>
                <p className="text-blue-500 text-lg font-medium">Percentage: 71%</p>
              </div>
            </div>

            {/* High School */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0 w-32 text-right pr-8">
                <span className="text-white font-medium text-lg">2019-2020</span>
              </div>
              <div className="absolute left-32 w-4 h-4 bg-teal-500 rounded-full -translate-x-2 mt-1"></div>
              <div className="flex-1 ml-12">
                <h3 className="text-2xl font-semibold text-white mb-3">High School</h3>
                <p className="text-purple-500 mb-3 text-lg">
                  <span className="font-medium">ICSE</span> St.Joseph, Gorakhpur
                </p>
                <p className="text-blue-500 text-lg font-medium">Percentage: 65%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { resumeData } from '@/data/resume';
import { skillsData } from '@/data/skills';

export function Resume() {
  return (
    <main className="relative z-20">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div>
          <img
            src="/placeholder.svg?height=200&width=200"
            alt={resumeData.name}
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500 mb-8"
          />
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {resumeData.name}
          </h1>
          <h2 className="text-3xl text-blue-400 mb-8">
            {resumeData.title}
          </h2>
          <div className="max-w-2xl mx-auto text-xl mb-12 leading-relaxed">
            {resumeData.summary.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/dominik-cichon-1aa400a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transform hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <svg
            className="h-8 w-8 text-blue-400 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <title>Scroll Down</title>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Work Experience
          </h2>
          <div className="space-y-8">
            {resumeData.experiences.map((exp) => (
              <div key={exp.title} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                  {exp.title} - {exp.company}
                </h3>
                <p className="text-gray-400 mb-4">
                  {exp.startDate} - {exp.endDate}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {exp.responsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Skills
          </h2>
          <div className="space-y-8">
            {Object.values(skillsData).map((skillCategory) => (
              <div key={skillCategory.category} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-indigo-400 mb-6">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            Education
          </h2>
          <div className="space-y-8">
            {resumeData.education.map((edu) => (
              <div key={edu.degree} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                  {edu.degree} - {edu.institution}
                </h3>
                <p className="text-gray-400 mb-4">
                  {edu.startDate} - {edu.endDate}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {edu.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Soft Skills Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
            Languages & Soft Skills
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-pink-400 mb-2">
                Languages
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                {resumeData.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-pink-400 mb-2">
                Soft Skills
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                {resumeData.softSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

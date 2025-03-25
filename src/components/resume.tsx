import { resumeData } from '@/data/resume';
import Image from 'next/image';
import { AudioPlayer } from '@/components/audio-player';

export function Resume() {
  return (
    <main className="relative z-20">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div>
          <div className="flex justify-center mb-8">
            <Image
              src="/dom.jpeg"
              alt={resumeData.name}
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-500"
              priority
            />
          </div>
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

          <div className="flex items-center justify-center mb-12">
            <AudioPlayer audioUrl="/audio/podcast.m4a" />
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {resumeData.experiences.map((exp) => (
              <div 
                key={exp.company} 
                className="relative w-24 h-24 transition-all duration-300"
              >
                <img
                  src={`/companies/${exp.company.toLowerCase().replace(/\s+/g, '-')}.png`}
                  alt={`${exp.company} logo`}
                  className="object-contain w-full h-full"
                  width={96}
                  height={96}
                />
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Currently Available For:</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                  Consulting Gigs (Hourly)
                </span>
                <span className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                  Freelance Projects
                </span>
                <span className="px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">
                  Full-Time Remote
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <a
              href="https://www.linkedin.com/in/dominik-cichon-1aa400a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transform hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
            
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/domci"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <span className="sr-only">Visit my GitHub profile</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>GitHub</title>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/dominik-cichon-1aa400a0/"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <span className="sr-only">Visit my LinkedIn profile</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>LinkedIn</title>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Pet Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold text-blue-400 p-4 border-b border-gray-700/50">
                  {project.title}
                </h3>
                <div className="p-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-video rounded-lg overflow-hidden 
                               shadow-[0_0_15px_rgba(0,0,0,0.2)] 
                               hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                               transition-all duration-300 
                               group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-white/10 opacity-50 group-hover:opacity-0 transition-opacity" />
                      <Image
                        src={project.screenshot.src}
                        alt={project.screenshot.alt}
                        width={project.screenshot.width}
                        height={project.screenshot.height}
                        className="object-cover w-full h-full rounded-lg 
                                 transform group-hover:scale-105 
                                 transition-transform duration-300"
                      />
                    </a>
                  ) : (
                    <div className="relative aspect-video rounded-lg overflow-hidden 
                              shadow-[0_0_15px_rgba(0,0,0,0.2)] 
                              hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                              transition-all duration-300 
                              group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-white/10 opacity-50 group-hover:opacity-0 transition-opacity" />
                      <Image
                        src={project.screenshot.src}
                        alt={project.screenshot.alt}
                        width={project.screenshot.width}
                        height={project.screenshot.height}
                        className="object-cover w-full h-full rounded-lg 
                                 transform group-hover:scale-105 
                                 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Technical Skills */}
            {Object.entries(resumeData.technicalSkills)
              .slice(0, 6)
              .map(([category, skills]: [string, string[]]) => (
                <div
                  key={category}
                  className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
                >
                  <h3 className="text-sm font-semibold text-indigo-400 mb-2 pb-1 border-b border-indigo-400/20">
                    {category
                      .replace(/([a-z])([A-Z])/g, '$1 $2')
                      .replace(/^./, (str) => str.toUpperCase())
                      .replace(/\bAI\b/g, 'AI')}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-xs font-medium hover:bg-blue-500/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

            {/* Languages Card */}
            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
              <h3 className="text-sm font-semibold text-indigo-400 mb-2 pb-1 border-b border-indigo-400/20">
                Languages
              </h3>
              <div className="flex flex-wrap gap-1">
                {resumeData.languages.map((language) => (
                  <span
                    key={language}
                    className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-xs font-medium hover:bg-blue-500/20 transition-colors"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-colors">
              <h3 className="text-sm font-semibold text-indigo-400 mb-2 pb-1 border-b border-indigo-400/20">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {resumeData.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-xs font-medium hover:bg-blue-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
                <ul className="list-disc space-y-2 text-gray-200 ml-4">
                  {exp.responsibilities.map((resp) => (
                    <li key={resp} className="pl-2">
                      <span className="relative -left-2">{resp}</span>
                    </li>
                  ))}
                </ul>
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
                  {edu.details.map((detail, index) => (
                    typeof detail === 'string' ? (
                      <li key={index}>{detail}</li>
                    ) : (
                      <li key={index} className="space-y-2">
                        {detail.title}
                        <ul className="list-disc list-inside ml-6 space-y-1 text-gray-300">
                          {detail.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>{subItem}</li>
                          ))}
                        </ul>
                      </li>
                    )
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

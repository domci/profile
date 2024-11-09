'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AudioPlayer } from '@/components/audio-player'
import { ResumeChat } from '@/components/resume-chat'
import { MoveRight, Github, Linkedin, Twitter, ChevronDown, MessageCircle, X } from 'lucide-react'

export default function ProfilePage() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          section.classList.add('active')
        } else {
          section.classList.remove('active')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=2000&width=3000&text=AI+Neural+Network")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-transparent to-gray-900 z-10" />

      <Button
        className="fixed top-4 right-4 z-50 bg-blue-600 hover:bg-blue-700"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        Chat with AI
      </Button>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-blue-400">Chat with My Resume</h2>
                <Button variant="ghost" onClick={() => setIsChatOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <ResumeChat />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-20">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="John Doe"
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-500 mb-8 glow-effect"
            />
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient">
              John Doe
            </h1>
            <h2 className="text-3xl text-blue-400 mb-8 typewriter">Senior Machine Learning Engineer</h2>
            <p className="max-w-2xl mx-auto text-xl mb-12 leading-relaxed text-glitch" data-text="Pushing the boundaries of AI">
              Passionate about pushing the boundaries of AI and machine learning to solve complex real-world problems.
              With over 8 years of experience in developing cutting-edge ML models and scalable AI systems.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-transform">
                Download CV
                <MoveRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-transform">
                Contact Me
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ChevronDown className="h-8 w-8 text-blue-400" />
          </motion.div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full">
            <motion.h2 
              className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-gradient"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Experience & Skills
            </motion.h2>
            <div className="space-y-8">
              <Card className="bg-gray-800 border-none hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Senior ML Engineer - TechCorp</h3>
                  <p className="text-gray-400 mb-4">2018 - Present</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Led the development of a state-of-the-art NLP model for sentiment analysis, improving accuracy by 15%</li>
                    <li>Designed and implemented a scalable ML pipeline using Kubernetes and TensorFlow, reducing training time by 40%</li>
                    <li>Mentored junior engineers and conducted regular knowledge-sharing sessions on advanced ML topics</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-none hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Ph.D. in Machine Learning - Tech University</h3>
                  <p className="text-gray-400 mb-4">2014 - 2018</p>
                  <p className="text-gray-300">Thesis: "Advancements in Reinforcement Learning for Autonomous Systems"</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-none hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'NLP', 'Computer Vision', 'Reinforcement Learning', 'MLOps', 'Kubernetes', 'Docker', 'AWS', 'GCP'].map((skill) => (
                      <Badge key={skill} className="bg-blue-600 hover:bg-blue-700 transform hover:scale-110 transition-transform">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl w-full">
            <motion.h2 
              className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: project * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-gray-800 border-none h-full flex flex-col hover-glow">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=ML+Project+${project}`}
                      alt={`Project ${project}`}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transform hover:scale-105 transition-transform"
                    />
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold mb-2 text-purple-400">ML Project {project}</h3>
                      <p className="text-gray-300 mb-4 flex-grow">
                        An innovative machine learning project that demonstrates advanced techniques in {project === 1 ? 'natural language processing' : project === 2 ? 'computer vision' : 'reinforcement learning'}.
                      </p>
                      <Button variant="outline" className="w-full mt-auto border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-transform">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full">
            <motion.h2 
              className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600 animate-gradient"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Audio Testimonials
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((testimonial) => (
                <motion.div
                  key={testimonial}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: testimonial * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800 border-none hover-glow">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-yellow-400">Testimonial {testimonial}</h3>
                      <AudioPlayer src={`/testimonial${testimonial}.mp3`} />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-20 bg-gray-900 py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2023 John Doe. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/johndoe" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/johndoe" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/johndoe" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
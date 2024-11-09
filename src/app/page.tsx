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
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=2000&width=3000&text=Data+Passion")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-transparent to-gray-900 z-10" />

      <main className="relative z-20">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
          <div>
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Dominik Cichon"
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-500 mb-8"
            />
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Dominik Cichon
            </h1>
            <h2 className="text-3xl text-blue-400 mb-8">
              Senior Machine Learning Engineer
            </h2>
            <p className="max-w-2xl mx-auto text-xl mb-12 leading-relaxed">
              Passionate about data with over 9 years of industry experience in collecting, organizing, analyzing, and deploying various ML and data products. Customer-oriented, curious, and fast-learning engineer determined to build amazing data products.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/Dominik_Cichon_CV.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transform hover:scale-105 transition-transform"
              >
                Download CV
              </a>
              <a
                href="mailto:me@dominik-cichon.de"
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
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img
                  src="/project1.png"
                  alt="Project 1"
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-purple-400">
                    ML Framework Establishment
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Established a comprehensive ML framework utilizing Cookiecutter, Vertex AI, DVC, and KubeFlow.
                  </p>
                  <a
                    href="#"
                    className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-4 py-2 rounded-md w-full text-center block transform hover:scale-105 transition-transform"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img
                  src="/project2.png"
                  alt="Project 2"
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-purple-400">
                    Webshop Recommendations
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Developed and deployed a new ML model for webshop recommendations, enhancing user experience.
                  </p>
                  <a
                    href="#"
                    className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-4 py-2 rounded-md w-full text-center block transform hover:scale-105 transition-transform"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Experience & Skills
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Senior Machine Learning Engineer - OTTO GmbH & Co KG
                </h3>
                <p className="text-gray-400 mb-4">Jan. 2024 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Developing a Gen AI-based Partner Chat-Bot with RAG pipeline in Azure Cloud.</li>
                  <li>Introduction of Kill Switch for critical security issues across team projects.</li>
                  <li>Managing Budget Watchdog for Azure resources.</li>
                  <li>Acting as a sparring partner for business and product teams on GenAI and ML topics.</li>
                  <li>In charge of security within the team.</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Senior Data Engineer ML - Everstores Technologies GmbH
                </h3>
                <p className="text-gray-400 mb-4">Feb. 2023 - Dec. 2024</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Established a comprehensive ML framework using Cookiecutter, Vertex AI, DVC, and KubeFlow.</li>
                  <li>Created ML pipelines focusing on supply chain demand projections, revenue forecasting, and shop acquisition price estimations.</li>
                  <li>Incorporated AI chat functionalities into primary brand management dashboards.</li>
                  <li>Designed and maintained data pipelines leveraging Dagster, dbt, BigQuery, and various data sources.</li>
                  <li>Executed web scraping for B2B campaign contact extraction.</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Expert Data Developer - Bonprix GmbH & Co. KG
                </h3>
                <p className="text-gray-400 mb-4">June 2020 - Jan. 2023</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Developed and deployed new ML model for webshop recommendations.</li>
                  <li>Implemented ML pipelines in GCP using Python, Vertex AI, Argo, KubeFlow, and MLFlow.</li>
                  <li>Designed CI/CD pipelines for ML Ops with KubeFlow and GitLab.</li>
                  <li>Refactored legacy recommender systems from PySpark to Vertex AI.</li>
                  <li>Migrated Hadoop/Spark based data science projects to Google Cloud Platform.</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Analytical Consultant - Google Germany GmbH
                </h3>
                <p className="text-gray-400 mb-4">Aug. 2019 - June 2020</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Drove customer's marketing performance on Google.</li>
                  <li>Conducted causal impact analysis for video campaigns.</li>
                  <li>Identified new market opportunities for customers and Google.</li>
                  <li>Developed ETL pipelines for internal workflows and data exchange with customers.</li>
                  <li>Proved performance of Google advertising products to customers.</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Manager User Analytics - Xing SE
                </h3>
                <p className="text-gray-400 mb-4">Oct. 2014 - July 2019</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Developed text classifier for Xing News.</li>
                  <li>Optimized newsletter email rollout using ML.</li>
                  <li>Implemented ML-based email performance optimization.</li>
                  <li>Conducted data enrichment with web scraping.</li>
                  <li>Initiated and analyzed A/B tests.</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-green-400">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Python',
                    'TensorFlow',
                    'PyTorch',
                    'Scikit-learn',
                    'Deep Learning',
                    'NLP',
                    'Computer Vision',
                    'Reinforcement Learning',
                    'MLOps',
                    'Kubernetes',
                    'Docker',
                    'AWS',
                    'GCP',
                    'Google Cloud Platform',
                    'Vertex AI',
                    'BigQuery',
                    'Pub/Sub',
                    'CloudRun',
                    'AppEngine',
                    'CloudFunctions',
                    'DataProc',
                    'Datastore',
                    'Compute Engine',
                    'Amazon AWS',
                    'EC2',
                    'S3',
                    'RDS',
                    'OpenAI',
                    'LangChain',
                    'Streamlit',
                    'XGBoost',
                    'Pandas',
                    'Scikit-learn',
                    'SpaCy',
                    'MLFlow',
                    'Flask',
                    'FastAPI',
                    'NumPy',
                    'BeautifulSoup',
                    'Selenium',
                    'PySpark',
                    'Tensorflow',
                    'BERT',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full transform hover:scale-110 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
              Education
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  M.A. Management & Entrepreneurship - Leuphana University of Lüneburg
                </h3>
                <p className="text-gray-400 mb-4">Oct. 2012 – Oct. 2014</p>
                <p className="text-gray-300">
                  Master thesis: "Design and Implementation of Data Mining Procedures in Service-Oriented eCommerce" (Grade: 1.0)
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  B.A. Business Administration - IBA University of Cooperative Education
                </h3>
                <p className="text-gray-400 mb-4">Oct. 2009 – Sept. 2012</p>
                <p className="text-gray-300">
                  Bachelor thesis: "Balanced Scorecard as a Strategic Management Tool in System Gastronomy" (Grade: 1.0)
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  Apprenticeship as IT Management Assistant - c.a.r.u.s. IT AG
                </h3>
                <p className="text-gray-400 mb-4">Aug. 2004 – July 2007</p>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl w-full">
            <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-600">
              Languages & Soft Skills
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-red-400">
                  Languages
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Native in German</li>
                  <li>Fluent in English</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-red-400">
                  Soft Skills
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Pragmatism</li>
                  <li>Honesty</li>
                  <li>Analytical Thinking</li>
                  <li>Problem-Solving</li>
                  <li>Motivation and Curiosity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-20 bg-gray-900 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 Dominik Cichon. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/dominik-cichon"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* GitHub Icon */}
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/dominik-cichon"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* LinkedIn Icon */}
              </svg>
            </a>
            <a
              href="https://twitter.com/D_Chain"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Twitter Icon */}
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
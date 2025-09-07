import ScrollFloat from '@/components/ScrollFloat';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto mb-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-1 rounded-2xl">
              <div className="bg-gray-800 p-8 rounded-2xl h-full">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Who am I?</h3>
                <p className="text-gray-300 leading-relaxed">
                  A fifth-semester Informatics student at
                  Sebelas Maret University with experience
                  in backend web development and
                  software development. Familiar with C,
                  C++, Python, Java, PHP, and Javascript.
                  Passionate about building real-world
                  applications, contributing to research
                  projects, and always ready to learn new
                  technologies and skills.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm passionate about creating solutions that solve real problems and help businesses grow. Whether it's a
              simple landing page or a complex web application, I approach each project with dedication and attention to
              detail.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">1+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div id="education" className="max-w-4xl mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Education</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 w-0.5 h-full bg-gray-700 transform -translate-x-1/2"></div>

          <div className="relative mb-12 flex justify-between items-center w-full">
            <div className="w-5/12">
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-400">Universitas Sebelas Maret</h3>
                <p className="text-sm text-gray-400 mb-2">Aug 2023 - Present</p>
                <p className="font-semibold">Bachelor of Informatics</p>
              </div>
            </div>
            <div className="absolute left-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center transform -translate-x-1/2">
              <GraduationCap size={20} />
            </div>
            <div className="w-5/12"></div>
          </div>

          <div className="relative mb-12 flex justify-between items-center w-full">
            <div className="w-5/12"></div>
            <div className="absolute left-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center transform -translate-x-1/2">
              <GraduationCap size={20} />
            </div>
            <div className="w-5/12">
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-400">SMAN 1 Purworejo</h3>
                <p className="text-sm text-gray-400 mb-2">July 2020 - May 2023</p>
                <p className="font-semibold">Science</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div id="experience" className="max-w-4xl mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-full flex-shrink-0">
                <Briefcase size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Web Developer</h3>
                <p className="text-gray-300 text-lg font-medium mb-2">Enzo Group CV</p>
                <p className="text-gray-500">Oct 2024 - Feb 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-full flex-shrink-0">
                <Briefcase size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Lecturer's Assistant</h3>
                <p className="text-gray-300 text-lg font-medium mb-2">Programming Concept, Data Structure & Algorithm, Computer System Organization</p>
                <p className="text-gray-500">Sept 2024 - July 2025</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="flex items-center justify-center w-14 h-14 bg-purple-600 rounded-full flex-shrink-0">
                <Briefcase size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">WordPress Developer</h3>
                <p className="text-gray-300 text-lg font-medium mb-2">Made LSP (Lembaga Sertifikasi Profesi) and LIK (Lembaga Inovasi dan Kewirausahaan) WordPress website for UNISRI (Universitas Slamet Riyadi)</p>
                <p className="text-gray-500">Sept 2024 - Oct 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

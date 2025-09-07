import { Code, Database, Palette, Smartphone, Brain } from "lucide-react"
import { SiSolidity } from "react-icons/si";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "HTML, TailwindCSS, React, Next.js, TypeScript, JavaScript",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Laravel, Flask, MySQL",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: SiSolidity,
    title: "Web3 Development",
    description: "Solidity, Smart Contract",
    color: "bg-black",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Python, scikit-learn, Streamlit",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native",
    color: "from-orange-500 to-red-500",
  }
]

export default function SkillsPage() {
  return (
    <div className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I specialize in modern web technologies and frameworks, constantly learning and adapting to new trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div key={index} className="group">
                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 h-full hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

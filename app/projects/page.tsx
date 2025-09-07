import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Enzo Group ERP",
    description: "Laravel-based website for managing customer orders, tracking inventory, and team calendars, replacing spreadsheets with an efficient, centralized system.",
    image: "/erp-enzo.png",
    github:"github.com/naufalfzml/enzo-group-erp",
    website:"erp.enzocreatives.com",
    tags: ["Backend", "Laravel"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Verifund",
    description: "A fundraising platform that ensures 100% transparency, where donation agencies can create campaigns. Funds are stored in smart contracts and only disbursed to verified wallet addresses announced beforehand.",
    image: "/verifund.png",
    github:"github.com/Verifund-Team",
    website:"verifund.vercel.app",
    tags: ["Solidity", "Foundry", "Next.js"],
    color: "from-green-500 to-cyan-500",
  }, 
  {
    title: "CKD Prediction",
    description: "A project to detect chronic kidney disease by analyzing user-inserted indicators, with additional features that allow users to upload CSV files to make input easier.",
    image: "/ckd.png",
    github:"github.com/naufalfzml/ckd-disease-pred",
    website:"cek-ginjal-plus.streamlit.app",
    tags: ["AI / Machine Learning", "Python"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "PAUD Cahya Indria",
    description: "The Next.js-based PAUD website is used to manage PAUD administration, such as registration, criticism and suggestions, as well as articles and news about PAUD.",
    image: "/paud.png",
    github:"github.com/naufalfzml/paud-web",
    website:"",
    tags: ["Fullstack", "Next.js"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Hotel Management",
    description: "This project is a website that uses the flask framework for its backend. This project is a website to manage the running of a hotel system that implements simple CRUD from a database.",
    image: "/hotel-management.png",
    github:"github.com/naufalfzml/Project-Akhir-BasisData",
    website:"",
    tags: ["Fullstack", "Flask"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Unisri's Lembaga Sertifikasi Profesi",
    description: "The UNISRI LSP website is a platform designed to manage and streamline the certification process for professionaltraining and qualifications.",
    image: "/lsp.png",
    github:"",
    website:"lsp-unisri.com",
    tags: ["Frontend", "WordPress"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Unisri's Lembaga Inovasi dan Kewirausahaan",
    description: "Developed a user-friendly website with WordPress for UNISRI's LIK, streamlining the registration and management of innovation and entrepreneurship programs.",
    image: "/lik.png",
    github:"",
    website:"lik-unisri.com",
    tags: ["Frontend", "WordPress"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Heart Disease Prediction",
    description: "A project to detect heart disease by analyzing user-inserted indicators, with additional features that allow users to upload CSV files to make input easier.",
    image: "/heart-disease.png",
    github:"github.com/naufalfzml/porto-ml-dqlab",
    website:"cardiocarepluz.streamlit.app",
    tags: ["AI / Machine Learning", "Python"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cult of University",
    description: "This game was developed with Java in Greenfoot as a final OOP project, telling the story of Mahmud from FATISDA who saves his university from an occult monster attack.",
    image: "/cult-of-university.png",
    github:"",
    website:"greenfoot.org/scenarios/34054",
    tags: ["Java", "Greenfoot"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Para Pencari RTX",
    description: "Para Pencari RTX is a Unity game built with C# as a final project for the Programming Concept course, where players collect RTX to win, inspired by Super Mario Bros.",
    image: "/para-pencari-rtx.png",
    github:"github.com/naufalfzml/Project-Uas-KP-Para-Pencari-RTX",
    website:"",
    tags: ["C#", "Unity"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "SIGAP App",
    description: "Para Pencari RTX is a Unity game built with C# as a final project for the Programming Concept course, where players collect RTX to win, inspired by Super Mario Bros.",
    image: "/verifund.png",
    github:"github.com/naufalfzml/sigap-app",
    website:"",
    tags: ["React Native"],
    color: "from-red-500 to-blue-500",
  },
  
]

export default function WorkPage() {
  return (
    <div className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Check out some of my recent projects. Each project is uniquely designed and developed to meet specific
            client needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group h-full flex flex-col">
              <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.website && (
                      <Button asChild size="sm" className="bg-white text-black hover:bg-gray-200">
                        <a href={`https://${project.website}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Go to App
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button asChild
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                      >
                        <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

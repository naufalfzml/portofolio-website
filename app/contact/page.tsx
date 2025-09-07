import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's work together</h3>
              <p className="text-gray-400 mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div className="text-gray-400">naufalfzml07@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Location</div>
                  <div className="text-gray-400">Surakarta, Indonesia</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-lg font-medium mb-4 text-white">Reach me!</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/naufalfzml" target="_blank"
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fawwaz-naufal/" target="_blank"
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                {/* <a
                  href="https://x.com/naufaldev3" target="_blank"
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a> */}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-gray-900 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-gray-900 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Subject</label>
                <Input
                  placeholder="Project inquiry"
                  className="bg-gray-900 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-gray-900 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

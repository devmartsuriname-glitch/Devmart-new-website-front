import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">Vortex</div>
            <p className="text-gray-400 mb-4">
              Creative design agency specializes in innovative visual solutions
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                <span>f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                <span>t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                <span>in</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors cursor-pointer">
                <span>ig</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services/ui-ux-design" className="hover:text-yellow-400 transition-colors">UI/UX Design</a></li>
              <li><a href="/services/mobile-apps" className="hover:text-yellow-400 transition-colors">Mobile Apps Design</a></li>
              <li><a href="/services/web-development" className="hover:text-yellow-400 transition-colors">Web Development</a></li>
              <li><a href="/services/saas-design" className="hover:text-yellow-400 transition-colors">SaaS Design</a></li>
              <li><a href="/services/animation-design" className="hover:text-yellow-400 transition-colors">Webflow Design</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Activities</a></li>
              <li><a href="/portfolio" className="hover:text-yellow-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Expert Team</a></li>
              <li><a href="/blog" className="hover:text-yellow-400 transition-colors">Blog & News</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">I agree with the Terms and Conditions</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address"
                className="flex-1 px-4 py-2 bg-gray-800 rounded border border-gray-700 focus:border-yellow-400 outline-none"
              />
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                →
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center text-gray-400 text-sm">
          <p>Copyright © 2024 designing-world</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms & conditions</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

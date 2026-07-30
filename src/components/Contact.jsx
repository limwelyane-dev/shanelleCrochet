import React from 'react'
import {Mail} from "lucide-react"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

function ContactSection() {
  return (
    <section
  id="contact"
  className="relative bg-gray-800 font-sans text-white py-12 px-5 z-40 overflow-x-hidden"
>
  <div className="container mx-auto">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Left */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-2xl text-text2 font-semibold">
          Shanelle Crochet
        </h1>

        <p>This is just an example text.</p>

        <ul className="space-y-2">
          <li>
            <a href="mailto:limwelyane@gmail.com">
              limwelyane@gmail.com
            </a>
          </li>

          <li>
            <a href="tel:+639398866823">
              +63 9398 866 823
            </a>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* Resources */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl mb-4">Resources</h1>

          <ul className="space-y-2">
            <li>Services</li>
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        {/* Social */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl mb-4">Social Media</h1>

          <div className="flex justify-center sm:justify-start flex-wrap gap-4">
            <FaFacebook size={28} />
            <FaInstagram size={28} />
            <FaTwitter size={28} />
            <FaLinkedin size={28} />
            <FaYoutube size={28} />
          </div>
        </div>

        {/* Newsletter */}
        <div className="col-span-full mt-4">
          <div className="relative flex items-center">
            <Mail
              size={18}
              className="absolute left-3"
            />

            <input
              type="text"
              placeholder="Enter your email"
              className="w-full bg-white/10 py-2 pl-10 pr-24 rounded-lg"
            />

            <button className="absolute right-2 bg-white text-black rounded-md px-4 py-1.5 text-sm">
              Send
            </button>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
  )
}

export default ContactSection
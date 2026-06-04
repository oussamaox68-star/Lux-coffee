import Link from 'next/link'
import { Coffee, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about#story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  ],
}

export function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-gold-500/20">
      {/* Newsletter Section */}
      <div className="bg-gradient-gold py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-luxury-black mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-luxury-black/80 mb-8 max-w-2xl mx-auto">
              Get exclusive offers, new product announcements, and coffee tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/90 border-gold-500/30 text-luxury-black placeholder:text-luxury-black/50"
                required
              />
              <Button type="submit" variant="default" className="bg-luxury-black text-gold-400 hover:bg-luxury-charcoal">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Coffee className="h-8 w-8 text-gold-500" />
              <span className="text-2xl font-bold text-gradient">LUX Coffee</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Experience the finest luxury coffee crafted with passion and precision. Every cup tells a story of excellence.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-gold-400 hover:text-gold-300 hover:bg-gold-500/10"
                >
                  <Link href={social.href} aria-label={social.name}>
                    <social.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>123 Luxury Avenue<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <span>hello@luxcoffee.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Clock className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Mon - Sun: 7:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} LUX Coffee. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-gold-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

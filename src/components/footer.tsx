import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">John Doe</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer building modern web applications with cutting-edge technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:text-primary">Home</Link>
              <Link href="#portfolio" className="text-sm hover:text-primary">Portfolio</Link>
              <Link href="#about" className="text-sm hover:text-primary">About</Link>
              <Link href="#contact" className="text-sm hover:text-primary">Contact</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// page.tsx
import { FaGithub, FaLinkedin, FaGoogle, FaInstagram } from 'react-icons/fa'; // FontAwesome Icons
import Image from 'next/image';
import Link from 'next/link';
import './home.css'; // Import the CSS file

export default function HOME() {
  return (
    <main>
      {/* Video Section */}
      <section className="video-section">
        <video 
          autoPlay
          loop
          muted
          className="video-background"
        >
          <source src="bgvideo.mp4" type="video/mp4" />
        </video>

        {/* Centered Image */}
        <Image
          src="/bglogo.png"  
          alt="Centered Image"
          width={400}
          height={400}
          className="centered-image"
        />

        {/* "My Project" Button */}
        <div className="project-button-container">
          <button className="project-button">
            <Link href="/project">My Project</Link>
          </button>
        </div>

        {/* Text and Button on the Left */}
        <div className="text-container">
          <h1 className="main-title">ALIA YOUSUF</h1>
          <p className="subtitle">Frontend Developer</p>

          {/* "About Me" Button */}
          <div className="about-button-container">
            <button className="about-button">
              <Link href="/about">About Me</Link>
            </button>
          </div>
        </div>

        {/* Sidebar for Icons */}
        <div className="icon-sidebar">
          {/* GitHub Icon */}
          <Link 
            href="https://github.com/aliayousuf/furniture-website"
            className="icon-link"
          >
            <FaGithub className="icon" />
          </Link>

          {/* LinkedIn Icon */}
          <Link 
            href="https://www.linkedin.com/in/alia-yousuf-a484562b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="icon-link"
          >
            <FaLinkedin className="icon" />
          </Link>

          {/* Gmail Icon */}
          <Link 
            href="https://mail.google.com"
            className="icon-link"
          >
            <FaGoogle className="icon" />
          </Link>

          {/* Instagram Icon */}
          <Link 
            href="https://www.instagram.com/alia._izzat/profilecard/?igsh=MWE5emZ3dWpsYmVkdQ=="
            className="icon-link"
          >
            <FaInstagram className="icon" />
          </Link>
        </div>
      </section>
    </main>
  );
}
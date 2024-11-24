
// page.tsx
import Image from "next/image";
import './about.css'; // Import the CSS file

export default function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        {/* Left Section: Text and List */}
        <div className="about-text">
          <h1 className="about-heading">ABOUT ME</h1>
          <p className="about-description">
            I believe in the power of clean code and thoughtful design, and I am always eager to learn new technologies to stay ahead in the fast-evolving world of frontend development. Below are some of the technologies and tools I use to create awesome websites:
          </p>

          <ul className="about-list">
            {/* List Items */}
            {["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "NEXT.JS", "TAILWIND CSS"].map((tech) => (
              <li key={tech} className="about-list-item">
                <button className="about-button">#{tech}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="about-image-container">
          <Image
            src="/about.png"
            alt="About Image"
            width={400}
            height={400}
            layout="responsive"
            className="about-image"
          />
        </div>
      </section>
    </div>
  );
}
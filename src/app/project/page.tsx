
import Image from 'next/image';
import Link from 'next/link';
import './project.css'; // Import the CSS file

export default function Project() {
  return (
    <div>
      {/* First Section with Background Image */}
      <div className="project-background">
        <div className="project-overlay">
          <h1 className="project-title">My Projects</h1>
          <p className="project-description">
            Here are some of the amazing projects I've worked on. Each one is designed with unique concepts and built to offer exceptional user experiences.
          </p>
        </div>
      </div>

      {/* Second Section with 4 Cards */}
      <div className="project-card-container">
        {/* Card 1 */}
        <Link href="https://tailwind-furniture-website.vercel.app/" className="project-card" target="_blank" rel="noopener noreferrer">
          <div className="project-image-container">
            <Image src="/p1.jpeg" className='project-image' alt="Project 1" width={105} height={84} />
          </div>
          <h2 className="project-card-title">Furniture Website</h2>
        </Link>

        {/* Card 2 */}
        <Link href="https://web-development-website-bice.vercel.app/" className="project-card" target="_blank" rel="noopener noreferrer">
          <div className="project-image-container">
            <Image src="/p2.jpg" className='project-image' alt="Project 2" width={105} height={84} />
          </div>
          <h2 className="project-card-title">Web Development Skill Website</h2>
        </Link>

        {/* Card 3 */}
        <Link href="https://milkshake-website-custom-css.vercel.app/" className="project-card" target="_blank" rel="noopener noreferrer">
          <div className="project-image-container">
            <Image src="/sm1.png" className='project-image' alt="Quiz App" width={105} height={84} />
          </div>
          <h2 className="project-card-title">Milk Shake Website</h2>
        </Link>

        {/* Card 4 */}
        <Link href="https://html-burger-website1.vercel.app/" className="project-card" target="_blank" rel="noopener noreferrer">
          <div className="project-image-container">
            <Image src="/home.png" className='project-image' alt="Project 4" width={105} height={84} />
          </div>
          <h2 className="project-card-title">Burger Website</h2>
        </Link>
      </div>
    </div>
  );
}
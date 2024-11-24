
import './contact.css'; // Import the CSS file

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-overlay">
        {/* Contact Heading */}
        <h1 className="contact-heading">Contact Us</h1>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form">
            {/* Name & Email (Inline) */}
            <div className="contact-inputs">
              {/* Name Input */}
              <div className="contact-input">
                <label htmlFor="name" className="contact-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input-field"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="contact-input">
                <label htmlFor="email" className="contact-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input-field"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="contact-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="contact-textarea"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="contact-submit">
              <button
                type="submit"
                className="contact-submit-button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
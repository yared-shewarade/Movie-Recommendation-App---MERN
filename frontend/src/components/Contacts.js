import React from 'react';

function Contacts() {
  // Dummy support email and phone number (replace with actual contact information)
  const supportEmail = 'support@example.com';
  const phoneNumber = '+1-123-456-7890';

  // FAQ data (replace with your own FAQs)
  const faqs = [
    {
      question: 'How do I add my favorite movies?',
      answer: 'You can add your favorite movies in the "Add Movies" section.'
    },
    {
      question: 'How can I edit my movie lists?',
      answer: 'You can edit your movie lists in the "Favorites Movies" section.'
    },
    // Add more FAQs as needed
  ];

  // Function to handle feedback submission
  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    // Process user feedback here
  };

  return (
    <div className="contacts-container">
      <h1>Contact and Support</h1>

      <section className="support-info">
        <h2>Support Information</h2>
        <p>If you need assistance, you can reach us through the following contact options:</p>
        <ul>
          <li>Email: <a href={`mailto:${supportEmail}`}>{supportEmail}</a></li>
          <li>Phone: {phoneNumber}</li>
        </ul>
      </section>

      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <strong>Q: {faq.question}</strong>
              <br />
              A: {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section className="feedback">
        <h2>Provide Feedback</h2>
        <p>We'd love to hear your thoughts on our app. Please share your feedback with us:</p>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea
            rows="4"
            cols="50"
            placeholder="Your feedback..."
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </section>
    </div>
  );
}

export default Contacts;
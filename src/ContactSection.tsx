import React from 'react'

export default function ContactSection() {
  return (
    <div className="section">
      <h2>Contact</h2>
      <hr />
      <div className="contact">
        <a className="contact-link" href="mailto:seisuke.ym@gmail.com">
          <button className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>Mail</p>
          </button>
        </a>
        <a className="contact-link" href="https://github.com/seihello">
          <button className="contact-item">
            <i className="fab fa-github"></i>
            <p>GitHub</p>
          </button>
        </a>
        <a className="contact-link" href="https://www.linkedin.com/in/seisuke-yamada-a02140257/">
          <button className="contact-item">
            <i className="fab fa-linkedin"></i>
            <p>LinkedIn</p>
          </button>
        </a>
        <a className="contact-link" href="https://leetcode.com/momoiropuchoman/">
          <button className="contact-item">
            <i className="fas fa-keyboard"></i>
            <p>LeetCode</p>
          </button>
        </a>
        <a className="contact-link" href="https://www.instagram.com/y_seisuke/">
          <button className="contact-item">
            <i className="fab fa-instagram-square"></i>
            <p>Instagram</p>
          </button>
        </a>
      </div>
    </div>
  )
}

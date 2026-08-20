import React from "react";
import './launchPage.css'; // Import the CSS file for styling

export default function LaunchPage() {
  return (
    <main className="launch-page">
      <div className="light light-1" />
      <div className="light light-2" />
      <div className="light light-3" />
      <div className="light light-4" />

      <div className="wave wave-1" />
      <div className="wave wave-2" />
      <div className="wave wave-3" />
      <div className="wave wave-4" />
      <div className="wave wave-5" />

      <div className="launch-content">
        {/* Replace /logo.png with your actual logo path */}
        <img
          src="/logo.png"
          alt="Vipin Tyagi & Company Law Firm"
          className="launch-logo"
        />

        <p className="launch-label">LAUNCHING ON</p>

        <h1>28th August 2026</h1>

        <div className="gold-divider">
          <span />
          <i>◆</i>
          <span />
        </div>

        <p className="firm-name">Vipin Tyagi &amp; Company</p>
      </div>
    </main>
  );
}
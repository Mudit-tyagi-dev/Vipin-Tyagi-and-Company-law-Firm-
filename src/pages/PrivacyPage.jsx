import { useEffect } from 'react';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | Vipin Tyagi & Company Law Firm';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      {/* Hero Header */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <span className="text-accent font-medium tracking-wider uppercase text-sm block mb-3">
            Legal Document
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/70 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Last updated: July 2026. Your privacy and trust are paramount to us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-premium border border-border p-8 md:p-12 space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                1. Introduction
              </h2>
              <p>
                Vipin Tyagi & Company ("we", "us", or "our") operates the website{' '}
                <a href="/" className="text-accent hover:underline">
                  www.vipintyagiandcompany.com
                </a>. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services, when submitting a request for consultation, or otherwise contacting us.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact Data:</strong> Name, phone number, email address, city, and preferred practice areas.
                </li>
                <li>
                  <strong>Communication Data:</strong> The message content and any files or details you submit to describe your legal concerns.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, device information, and activity details collected via browser logs and analytics tags.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We use personal information collected via our website for a variety of business purposes described below:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To facilitate consultation scheduling and respond to inquiry forms.</li>
                <li>To evaluate legal problems submitted to us for professional evaluation.</li>
                <li>To send administrative details, service updates, or informational newsletters.</li>
                <li>To improve and analyze our website user experience and design performance.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                4. Data Sharing and Protection
              </h2>
              <p>
                We do not sell, trade, rent, or lease your personal identification information to others. We share information only with authorized advocates and associates in our firm's network to deliver requested legal advice. We adopt appropriate data collection, storage, and processing practices, and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                5. Cookies and Analytics
              </h2>
              <p>
                We use cookies and similar tracking technologies to analyze site traffic, personalize content, and understand user behavior. You can configure your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                6. Your Legal Rights
              </h2>
              <p>
                Under applicable local data protection regulations, you have rights to request access to, correction of, or erasure of your personal data. To exercise these rights, please write to us directly at our email address.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <h2 className="font-serif text-xl font-semibold text-primary mb-3">
                Contacting Us
              </h2>
              <p className="text-sm">
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this website, please contact our Head Office:
              </p>
              <p className="mt-3 font-semibold text-primary text-sm">
                Vipin Tyagi & Company (Law Firm)<br />
                Chamber No. 304, District Court, Ghaziabad-201002, UP<br />
                Email: vipintyagiandcompany@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

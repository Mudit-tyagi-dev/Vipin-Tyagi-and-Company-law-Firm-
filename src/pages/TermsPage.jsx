import { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Service | Vipin Tyagi & Company Law Firm';
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
            Terms of Service
          </h1>
          <p className="text-primary-foreground/70 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Please read these terms carefully before accessing or using our website.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-premium border border-border p-8 md:p-12 space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or using the website of Vipin Tyagi & Company (the "Site"), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                2. No Legal Advice or Lawyer-Client Relationship
              </h2>
              <p>
                The information on this Site is provided for informational purposes only. It is not intended to be legal advice and should not be construed as such. Accessing, viewing, or submitting information to this Site does not create a lawyer-client relationship between you and Vipin Tyagi & Company.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                3. Use of the Site
              </h2>
              <p className="mb-4">
                You agree to use the Site only for lawful purposes. You are prohibited from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using the Site in any way that violates national or international laws.</li>
                <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of the Site.</li>
                <li>Introducing viruses, trojans, worms, or other malicious hardware code to the Site.</li>
                <li>Attempting to gain unauthorized access to our web servers, database, or server components.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                4. Intellectual Property
              </h2>
              <p>
                All contents on this Site—including text, graphics, logos, images, map icons, layouts, and software—are the intellectual property of Vipin Tyagi & Company or its content suppliers and are protected by Indian and international copyright laws. Any unauthorized use of the Site's contents is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                Under no circumstances shall Vipin Tyagi & Company, its partners, or associates be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this Site, or from reliance on any information provided on this Site.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                6. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of the use of this Site shall be subject to the exclusive jurisdiction of the competent courts of Ghaziabad, Uttar Pradesh, India.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-xs">
                © {new Date().getFullYear()} Vipin Tyagi & Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

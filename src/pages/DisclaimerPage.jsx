import { useEffect } from 'react';

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = 'Disclaimer | Vipin Tyagi & Company Law Firm';
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
            Disclaimer
          </h1>
          <p className="text-primary-foreground/70 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Bar Council of India regulations and compliance declarations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-premium border border-border p-8 md:p-12 space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                Bar Council of India Compliance
              </h2>
              <p className="mb-4">
                The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By using this website, you acknowledge and confirm that:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from us or any of our members to solicit work through this website.
                </li>
                <li>
                  The user wishes to gain more information about Vipin Tyagi & Company, its practice areas, and its advocates for their own personal information and use.
                </li>
                <li>
                  The information provided on this website is made available only upon the user's specific request and does not constitute a solicitation, advertisement, or legal advice.
                </li>
                <li>
                  Any information obtained or downloaded from this website does not create any lawyer-client relationship between Vipin Tyagi & Company and the user.
                </li>
                <li>
                  The information contained on this website is not legal advice and should not be treated as a legal opinion or consultation.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                No Liability
              </h2>
              <p>
                Vipin Tyagi & Company shall not be liable for any consequence of any action taken by the user relying on the material or information provided on this website. Users must seek independent legal advice from qualified legal professionals in their jurisdiction for any specific legal problems.
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

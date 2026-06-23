import { useEffect, useState } from "react";

export function DisclaimerModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    setShow(true);
  }, []);

  const handleAgree = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-9999 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      {/* Box */}
      <div className="bg-white max-w-4xl w-full rounded-sm shadow-2xl p-8 md:p-12 animate-in fade-in zoom-in duration-300">
        <h2 className="font-serif text-2xl font-semibold text-primary mb-6">
          DISCLAIMER:
        </h2>

        <div className="space-y-5 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            The rules of the Bar Council of India prohibit law firms from
            soliciting work or advertising in any manner. By clicking on "I
            AGREE", the user acknowledges that:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              The user wishes to gain more information about Vipin Tyagi &
              Company, its practice areas and its advocates for his/her own
              information and use.
            </li>

            <li>
              The information provided on this website is made available only
              upon the user's specific request and does not constitute
              solicitation or advertisement.
            </li>

            <li>
              Any information obtained from this website does not create any
              lawyer-client relationship.
            </li>

            <li>
              The information contained on this website is not legal advice and
              should not be treated as a legal opinion.
            </li>
          </ul>

          <p>
            Vipin Tyagi & Company shall not be liable for any consequence of any
            action taken by relying on the material or information provided on
            this website. Users must seek independent legal advice wherever
            required.
          </p>
        </div>

        <button
          onClick={handleAgree}
          className="
          mt-8
          bg-accent
          text-primary
          px-8
          py-3
          font-semibold
          hover:bg-accent/80
          transition
          "
        >
          I Agree
        </button>
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";
import { Play } from "lucide-react";

// Apne YouTube videos yahan daalo
const videos = [
  {
    id: 1,
    youtubeId: "v0Z9vY2UO1s", // ← sirf video ID daalo
    title:
      "क्या है महिलाओ के अधिकार || Advocate Mr.Vipin Tyagi || Female Rights",
    // category: 'Corporate Law',
    // description: 'How we helped a major company navigate a complex ₹500Cr merger.',
  },
  {
    id: 2,
    youtubeId: "nPIVO92Mi4c",
    title:
      "How to Register FIR via Court ? कोर्ट द्वारा ऐसे दर्ज कराएं FIR - Adv. Vipin Tyagi | Legal Solutions",
    // category: 'Property Law',
    // description: 'Successfully resolved a 10-year old property dispute in just 8 months.',
  },
  {
    id: 3,
    youtubeId: "jEGA81LydIg",
    title:
      "How to Deal With Cheque Bounce Cases Advocate Advice about by-- Mr Vipin Tyagi Ghaziabad",
    // category: 'Criminal Law',
    // description: 'Complete acquittal secured for our client in a high-profile criminal case.',
  },
  {
    id: 4,
    youtubeId: "4LMOSstyE9o",
    title:
      "Law for Womens Rights Matrimonial Disputes महिलाओ के अधिकार Advocate Advice by Adv.Vipin Tyagi",
    // category: 'Criminal Law',
    // description: 'Complete acquittal secured for our client in a high-profile criminal case.',
  },
  {
    id: 5,
    youtubeId: "ISuxoqUrPU8",
    title:
      'उत्तर प्रदेश में "लव जिहाद" - क्या है Love Jihad कानून ?? Advocate Vipin Tyagi',
    // category: 'Criminal Law',
    // description: 'Complete acquittal secured for our client in a high-profile criminal case.',
  },
  {
    id: 6,
    youtubeId: "nzA_kk8klkw",
    title: "Advocate Advise for Cheque Bounce || Mr.Vipin Tyagi || Ghaziabad",
    // category: 'Criminal Law',
    // description: 'Complete acquittal secured for our client in a high-profile criminal case.',
  },
];

function VideoCard({ video, index }) {
  const iframeRef = useRef(null);

  return (
    <div
      className="success-card bg-white rounded-2xl overflow-hidden shadow-premium hover-lift border border-border"
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        transition: `all 0.7s ease ${index * 0.15}s`,
      }}
    >
      {/* YouTube Embed */}
      <div className="relative aspect-video bg-primary">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&playsinline=1`}
          title={video.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">
          {video.category}
        </span>
        <h3 className="font-serif text-xl font-semibold text-primary mt-2 mb-2">
          {video.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
  );
}

export function SuccessStoriesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".success-card, .success-header")
              .forEach((el) => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* <div className="absolute inset-0 opacity-1">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div> */}

      <section
        id="success-stories"
        ref={sectionRef}
        className="py-20 lg:py-32 bg-muted/30"
      >
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div
            className="success-header text-center max-w-3xl mx-auto mb-16"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.7s ease",
            }}
          >
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              LEGAL INSIGHTS
            </span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6">
              Expert legal guidance through informative videos and practical
              advice
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Watch how we've helped our clients achieve justice and protect
              their interests across India's most complex legal challenges.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

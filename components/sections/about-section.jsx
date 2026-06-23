import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, Target, Eye } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering exceptional legal services with the highest professional standards.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description:
      "Building lasting relationships through personalized attention and dedicated service.",
  },
  {
    icon: Target,
    title: "Integrity",
    description:
      "Upholding ethical practices and transparency in every engagement.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "Embracing modern solutions while respecting traditional legal wisdom.",
  },
];
export function AboutSection() {
  const sectionRef = useRef(null);
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(".about-image", {
  //       scrollTrigger: {
  //         trigger: ".about-image",
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //       x: -100,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //     });
  //     gsap.from(".about-content > *", {
  //       scrollTrigger: {
  //         trigger: ".about-content",
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.15,
  //       ease: "power3.out",
  //     });
  //     gsap.from(".value-card", {
  //       scrollTrigger: {
  //         trigger: ".values-grid",
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //       y: 60,
  //       opacity: 0,
  //       duration: 0.8,
  //       stagger: 0.1,
  //       ease: "power3.out",
  //     });
  //   }, sectionRef);
  //   return () => ctx.revert();
  // }, []);
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main About */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <div className="about-image relative mb-12 md:mb-0">
            <img
              src="/images/3dimg.jpg"
              alt="Vipin Tyagi & Company Law Firm"
              className="w-full h-full object-cover"
            />
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-accent rounded-lg -z-10" />
            {/* Experience Badge */}
            <div
  className="
  absolute
  -bottom-6
  left-4
  md:bottom-8
  md:left-8
  bg-primary
  text-primary-foreground
  px-4
  py-3
  md:px-6
  md:py-4
  rounded-2xl
  shadow-xl
  z-10
  "
>
  <p className="text-2xl md:text-3xl font-serif font-bold text-accent">
    22+
  </p>
  <p className="text-xs md:text-sm">
    Years of Excellence
  </p>
</div>
          </div>

          {/* Content */}
          <div className="about-content">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              About Our Firm
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
              Inspiration is the most important part of our Life.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded with a vision to make world-class legal services
              accessible across India, Apex Legal Partners has grown from a
              single office in Delhi to a nationwide network of partner offices
              spanning 18+ cities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Vipin Tyagi & Co. is a firm of excellent and dedicated advocates
              who have been writing new success stories in their field of work
              for the last 20 years. The firm is presently working in all the
              states of North India as well as metro cities of South India along
              with its associates providing satisfactory service to its clients.
              We strive to create a world where everyone can access the justice
              and understanding they deserve. We believe that everyone should
              have the opportunity to have their voice heard and to have their
              rights respected.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We work to ensure that everyone is treated fairly and
              respectfully, no matter their background or circumstances. We are
              committed to promoting justice, equity, and inclusion in our
              communities, and to providing the necessary resources to help our
              clients understand and protect their rights. Our mission is to
              provide effective and compassionate advocacy, to ensure that no
              one is left behind and that justice is served for all.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  Our Mission
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our mission is to be a trusted advocate for our clients,
                  advocating for their rights and interests while providing
                  high-quality products and services.
                </p>
              </div>
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We strive to create a world where everyone can access the
                  justice and understanding they deserve. We believe that
                  everyone should have the opportunity to have their voice heard
                  and to have their rights respected.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="value-card p-6 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

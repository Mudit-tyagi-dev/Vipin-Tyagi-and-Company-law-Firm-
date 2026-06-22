import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogPosts } from '@/lib/data';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
export function InsightsSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.insights-header > *', {
        scrollTrigger: {
          trigger: '.insights-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
      gsap.from('.blog-card', {
        scrollTrigger: {
          trigger: '.blog-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return <section id="insights" ref={sectionRef} className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="insights-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">Legal Insights</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-4 text-balance">
              Latest From Our Experts
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Stay informed with expert analysis on legal developments, regulatory updates, 
              and practical guidance from our attorneys.
            </p>
          </div>
          <Link href="/insights" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all group shrink-0">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => <article key={post.slug} className="blog-card group bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="relative aspect-16/10 overflow-hidden">
                <img src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif font-semibold text-xl text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{post.author}</span>
                </div>
              </div>
            </article>)}
        </div>
      </div>
    </section>;
}

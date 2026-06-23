import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { id: 1, src: '/download.png' },
  { id: 2, src: '/images/gallery/WhatsApp Image 2026-06-19 at 1.00.48 AM.jpeg' },
  { id: 3, src: '/images/gallery/WhatsApp Image 2026-06-19 at 1.00.49 AM (2).jpeg' },
  { id: 4, src: '/images/gallery/WhatsApp Image 2026-06-19 at 12.52.05 AM.jpeg' },
  { id: 5, src: '/images/gallery/WhatsApp Image 2026-06-19 at 12.52.07 AM (1).jpeg' },
  { id: 6, src: '/images/gallery/WhatsApp Image 2026-06-19 at 12.54.53 AM.jpeg' },
  { id: 7, src: '/images/gallery/WhatsApp Image 2026-06-19 at 12.52.08 AM.jpeg' },
  { id: 8, src: '/images/gallery/WhatsApp Image 2026-06-19 at 12.52.08 AM (1).jpeg' },
  { id: 9, src: '/images/gallery/1.4.jpeg' },
  { id: 10, src: '/images/gallery/1.13.jpeg' },
  { id: 11, src: '/images/gallery/1-27.jpeg' },
  { id: 12, src: '/images/gallery/i2.jpg' },
]

const PREVIEW_COUNT = 6 // pehle kitni images dikhni hain

export function InsightsSection() {
  const sectionRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const prev = () => setLightbox(i => (i - 1 + galleryImages.length) % galleryImages.length)
  const next = () => setLightbox(i => (i + 1) % galleryImages.length)

  // Body scroll lock jab modal/lightbox open ho
  useEffect(() => {
    const locked = lightbox !== null || modalOpen
    document.body.style.overflow = locked ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox, modalOpen])

  // Keyboard
  useEffect(() => {
    const handler = (e) => {
      if (lightbox === null) return
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.g-item').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="g-item text-center max-w-2xl mx-auto mb-14"
          style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Our Firm</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-3 mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground">
            A glimpse into our offices, team, and the work we do across India.
          </p>
        </div>

        {/* Preview Grid — 6 images, 3 cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.slice(0, PREVIEW_COUNT).map((img, index) => (
            <div
              key={img.id}
              className="g-item relative overflow-hidden rounded-xl cursor-pointer group aspect-4/3"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `all 0.6s ease ${index * 0.1}s`,
              }}
              onClick={() => setLightbox(index)}
            >
              <img
                src={img.src}
                alt={`Gallery ${img.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        {galleryImages.length > PREVIEW_COUNT && (
          <div className="g-item text-center mt-10"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.7s ease 0.5s' }}>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5"
            >
              View Full Gallery
              <span className="bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full font-semibold">
                +{galleryImages.length - PREVIEW_COUNT} more
              </span>
            </button>
          </div>
        )}
      </div>

      {/* ── Full Gallery Modal ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-sm flex flex-col">

          {/* Modal Header */}
          <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-white/10 shrink-0">
            <div>
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">Our Firm</span>
              <h3 className="text-white font-serif text-xl font-semibold">Gallery</h3>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Grid — scrollable */}
          <div className="overflow-y-auto flex-1 px-4 md:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {galleryImages.map((img, index) => (
                <div
                  key={img.id}
                  className="relative overflow-hidden rounded-xl cursor-pointer group aspect-4/3"
                  onClick={() => { setModalOpen(false); setLightbox(index) }}
                >
                  <img
                    src={img.src}
                    alt={`Gallery ${img.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {galleryImages.length}
          </span>

          {/* Prev */}
          <button
            className="absolute left-2 md:left-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="w-full h-full flex items-center justify-center p-12 md:p-16"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={`Gallery ${galleryImages[lightbox].id}`}
              className="max-w-full max-h-full object-contain rounded-lg select-none"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-2 md:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  )
}


// import { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import { blogPosts } from '@/lib/data';
// import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
// export function InsightsSection() {
//   const sectionRef = useRef(null);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from('.insights-header > *', {
//         scrollTrigger: {
//           trigger: '.insights-header',
//           start: 'top 80%',
//           toggleActions: 'play none none none'
//         },
//         y: 50,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.15,
//         ease: 'power3.out'
//       });
//       gsap.from('.blog-card', {
//         scrollTrigger: {
//           trigger: '.blog-grid',
//           start: 'top 80%',
//           toggleActions: 'play none none none'
//         },
//         y: 80,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.15,
//         ease: 'power3.out'
//       });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);
//   return <section id="insights" ref={sectionRef} className="py-20 lg:py-32 bg-muted/30">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Header */}
//         <div className="insights-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
//           <div className="max-w-2xl">
//             <span className="text-accent font-medium tracking-wider uppercase text-sm">Legal Insights</span>
//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-4 mb-4 text-balance">
//               Latest From Our Experts
//             </h2>
//             <p className="text-muted-foreground leading-relaxed">
//               Stay informed with expert analysis on legal developments, regulatory updates, 
//               and practical guidance from our attorneys.
//             </p>
//           </div>
//           <Link href="/insights" className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all group shrink-0">
//             View All Articles
//             <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
//           </Link>
//         </div>

//         {/* Blog Grid */}
//         <div className="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map(post => <article key={post.slug} className="blog-card group bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300">
//               {/* Image */}
//               <div className="relative aspect-16/10 overflow-hidden">
//                 <img src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-medium">
//                     {post.category}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 {/* Meta */}
//                 <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
//                   <span className="flex items-center gap-1">
//                     <Calendar className="w-4 h-4" />
//                     {new Date(post.date).toLocaleDateString('en-IN', {
//                   day: 'numeric',
//                   month: 'short',
//                   year: 'numeric'
//                 })}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock className="w-4 h-4" />
//                     {post.readTime}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="font-serif font-semibold text-xl text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
//                   {post.title}
//                 </h3>

//                 {/* Excerpt */}
//                 <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
//                   {post.excerpt}
//                 </p>

//                 {/* Author */}
//                 <div className="flex items-center gap-2 pt-4 border-t border-border">
//                   <User className="w-4 h-4 text-muted-foreground" />
//                   <span className="text-sm text-muted-foreground">{post.author}</span>
//                 </div>
//               </div>
//             </article>)}
//         </div>
//       </div>
//     </section>;
// }

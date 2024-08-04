import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const BlogSection: React.FC<any> = ({ blogs }) => {
  const blogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const blogAnimation = gsap.context(() => {
      if (window.innerWidth >= 1200) {
        const blogCards = gsap.utils.selector(blogRef);

        const anim = gsap.fromTo(
          blogCards(".blog"),
          {
            y: 100,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.3,
          }
        );
        ScrollTrigger.create({
          trigger: blogRef.current,
          toggleActions: "play none none reset",
          animation: anim,
        });
      }
    });

    return () => {
      blogAnimation.revert();
    };
  }, []);
  return (
    <section className="blog-section" ref={blogRef}>
      <div className="container">
        <div className="heading text-center justify-content-center mb-5">
          <h2 className="fw-bold">
            <span className="fw-bold"> Our </span> Blogs
          </h2>
        </div>
        <div className="row blogs">
          {blogs.map((blog: any, index: number) => (
            <div className="col-md-4" key={`blog-${index}`}>
              <article className="blog">
                <Card blog={blog} lazyLoadImage />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

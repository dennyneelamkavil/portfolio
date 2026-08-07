export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",

          name: "Denny N J",

          alternateName: ["Denny NJ", "Denny Neelamkavil", "Denny"],

          url: "https://www.dennynj.in",

          image: "https://www.dennynj.in/denny.png",

          jobTitle: "Full Stack Developer",

          email: "mailto:dennynj4748@gmail.com",

          sameAs: [
            "https://github.com/dennyneelamkavil",
            "https://www.linkedin.com/in/dennynj/",
            "https://www.instagram.com/dennynj.webdev/",
          ],

          knowsAbout: [
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "Laravel",
            "TypeScript",
            "Express.js",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
          ],
        }),
      }}
    />
  );
}

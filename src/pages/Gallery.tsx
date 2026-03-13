import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const videos = [
  "/videos/vid1.mp4",
  "/videos/vid2.mp4",
  "/videos/vid3.mp4",
  "/videos/vid4.mp4",
];

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Saphie's Tasty - Food Photos & Videos Kampala</title>
        <meta name="description" content="See Saphie's Tasty in action! Browse our gallery of homemade food photos and videos from our kitchen and catering events in Kampala, Uganda." />
        <meta name="keywords" content="Saphie's Tasty gallery, food photos Kampala, catering photos Uganda, homemade food pictures" />
        <meta property="og:title" content="Gallery | Saphie's Tasty" />
        <meta property="og:description" content="Photos and videos from Saphie's Tasty kitchen and events in Kampala." />
        <link rel="canonical" href="https://saphiestasty.com/gallery" />
      </Helmet>

      <div className="pt-20">
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Our <span className="text-primary">Gallery</span>
              </h1>
              <p className="font-body text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
                A feast for the eyes — see what we've been cooking up!
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading title="Photo Gallery" subtitle="Snapshots from our kitchen and events." />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-square bg-muted rounded-2xl overflow-hidden group cursor-pointer relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center">
                    <span className="font-body text-muted-foreground text-sm">Photo {i + 1}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 rounded-2xl" />
                </motion.div>
              ))}
            </div>
            <p className="text-center text-muted-foreground font-body mt-8 text-sm">
              Add your real photos to the gallery to showcase your delicious creations!
            </p>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <SectionHeading title="Video Gallery" subtitle="Watch us in action!" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-video bg-card rounded-2xl overflow-hidden shadow-card border border-border"
                >
                  <video
                    src={src}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import photo1 from "@/assets/images/STK5.jpeg";
import photo2 from "@/assets/images/STK9.jpeg";
import photo3 from "@/assets/images/STK10.jpeg";

const photos = [photo1, photo2, photo3];
const photoLabels = ["Samosas", "Mandazi", "Meat & Pineapple"];

const videos = [
  "/videos/STK1.mp4",
  "/videos/STK2.mp4",
  "/videos/STK3.mp4",
  "/videos/STK4.mp4",
  "/videos/STK7.mp4",
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

        {/* Photo Gallery */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading title="Photo Gallery" subtitle="Snapshots from our kitchen and events." />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {photos.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-card border border-border group"
                >
                  <img
                    src={src}
                    alt={photoLabels[i]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery */}
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

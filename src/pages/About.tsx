import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heart, Users, Utensils, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import saphiePhoto from "@/assets/images/STK11.jpeg";

const values = [
  { icon: Heart, title: "Made with Love", desc: "Every meal is prepared with the same care and passion as cooking for our own family." },
  { icon: Users, title: "Community First", desc: "We believe food brings people together. That's why we serve with heart." },
  { icon: Utensils, title: "Authentic Recipes", desc: "Traditional recipes passed down through generations, with a modern twist." },
  { icon: Clock, title: "Always Fresh", desc: "We prepare everything fresh for each order — no shortcuts, no compromises." },
];

const teamMembers = [
  { desc: "Our head chef brings years of passion and experience to every dish she prepares." },
  { desc: "Dedicated to making sure every catering event runs smoothly and deliciously." },
  { desc: "Ensuring your orders arrive hot, fresh and right on time." },
  { desc: "The heart of our kitchen, helping craft every meal with care." },
];

const About = () => (
  <>
    <Helmet>
      <title>About Us | Saphie's Tasty - Homemade Catering Kampala</title>
      <meta name="description" content="Meet Saphie and the team behind Saphie's Tasty. A homemade catering business in Kampala, Uganda built on love, authentic recipes and community." />
      <meta name="keywords" content="about Saphie's Tasty, Kampala catering, homemade food Uganda, Saphie caterer Kampala" />
      <meta property="og:title" content="About Us | Saphie's Tasty" />
      <meta property="og:description" content="Meet the team behind Saphie's Tasty — homemade catering in Kampala, Uganda." />
      <link rel="canonical" href="https://saphiestasty.com/about" />
    </Helmet>

    <div className="pt-20">

      {/* Hero — Meet Saphie with real photo */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Meet <span className="text-primary">Saphie</span>
              </h1>
              <p className="font-body text-lg text-secondary-foreground/70 leading-relaxed">
                Saphie's Tasty started from a simple dream — to share the flavours of home with
                everyone. What began as cooking for family and friends quickly grew into a beloved
                catering service known for generous portions, authentic taste, and that warm "auntie's
                kitchen" feeling that makes every meal special.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <img
                src={saphiePhoto}
                alt="Saphie - Founder of Saphie's Tasty"
                className="w-64 h-80 object-cover object-top rounded-3xl shadow-card border-4 border-primary/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story — no image placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Story" subtitle="From a family kitchen to your favourite caterer." />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto font-body text-muted-foreground leading-relaxed space-y-6 text-lg"
          >
            <p>
              It all started with Saphie cooking for her family — experimenting with recipes,
              perfecting the chapati, and making sure everyone left the table with a full belly
              and a smile. Word spread quickly: friends started asking for party platters,
              neighbours wanted delivery, and before long, Saphie's Tasty was born.
            </p>
            <p>
              Today, we cater for university events, religious gatherings, family celebrations,
              and everything in between. But no matter how big we grow, the heart of what we do
              stays the same — real food, made with real love, for real people.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Team — descriptions only, no photos, no names */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading title="The Team" subtitle="The wonderful people behind every meal." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-card border border-border"
              >
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  </>
);

export default About;

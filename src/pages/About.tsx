import { motion } from "framer-motion";
import { Heart, Users, Utensils, Clock, ImageIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Heart, title: "Made with Love", desc: "Every meal is prepared with the same care and passion as cooking for our own family." },
  { icon: Users, title: "Community First", desc: "We believe food brings people together. That's why we serve with heart." },
  { icon: Utensils, title: "Authentic Recipes", desc: "Traditional recipes passed down through generations, with a modern twist." },
  { icon: Clock, title: "Always Fresh", desc: "We prepare everything fresh for each order — no shortcuts, no compromises." },
];

// Replace these with real team member names/roles/photos when ready
const teamMembers = [
  { name: "Team Member 1", role: "Chef & Founder" },
  { name: "Team Member 2", role: "Head of Catering" },
  { name: "Team Member 3", role: "Delivery & Logistics" },
  { name: "Team Member 4", role: "Kitchen Assistant" },
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
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
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Story" subtitle="From a family kitchen to your favourite caterer." />

        {/* Story text + image placeholder side by side */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 font-body text-muted-foreground leading-relaxed space-y-6 text-lg"
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

          {/* Image placeholder — replace src with your actual image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            {/* TO ADD YOUR IMAGE: replace the div below with:
                <img src={yourImage} alt="Saphie's Kitchen" className="w-full h-80 object-cover rounded-2xl shadow-card" />
            */}
            <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-muted rounded-2xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-3 shadow-card">
              <ImageIcon className="text-primary/40" size={48} />
              <p className="font-body text-muted-foreground text-sm font-medium">Your photo goes here</p>
              <p className="font-body text-muted-foreground/60 text-xs">Replace this placeholder with your image</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-muted">
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

    {/* The Team */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="The Team" subtitle="The wonderful people behind every meal." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* TO ADD TEAM PHOTO: replace the div below with:
                  <img src={memberPhoto} alt={member.name} className="w-32 h-32 object-cover rounded-full shadow-card mb-4" />
              */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-muted border-2 border-dashed border-primary/30 flex flex-col items-center justify-center mb-4 shadow-card">
                <ImageIcon className="text-primary/40" size={28} />
                <p className="font-body text-muted-foreground/60 text-xs mt-1">Photo</p>
              </div>
              <h4 className="font-display text-base font-bold text-foreground">{member.name}</h4>
              <p className="font-body text-muted-foreground text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;

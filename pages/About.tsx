import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="bg-white text-slate-800">

      {/* Hero Section */}
      <section className="relative py-28 bg-emerald-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-300 rounded-full blur-3xl opacity-20" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Story 🌿
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            UrbanLeaf began with a simple belief — fresh, nutrient-dense food
            should not be a luxury. It should be accessible, local, and alive.
          </motion.p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/aboutus.jpg"
              alt="Founder"
              className="rounded-3xl shadow-2xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">From a Small Experiment 🌱</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              What started as a small vertical farming experiment in a compact
              urban space quickly grew into something bigger. We saw how
              microgreens could transform everyday meals — not just in flavor,
              but in nutrition.
            </p>
            <p className="text-slate-600 leading-relaxed">
              UrbanLeaf was built to reconnect cities with clean, powerful food.
              No pesticides. No long supply chains. Just fresh greens harvested
              hours before they reach your plate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Why We Do This 💚
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Local First",
                text: "Grown right in the city using vertical farming to reduce food miles."
              },
              {
                title: "Pure & Clean",
                text: "100% pesticide-free using organic seeds and purified water."
              },
              {
                title: "Harvest-to-Home",
                text: "Harvested on delivery day for peak nutrition and taste."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-emerald-700">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-28 text-center bg-emerald-900 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Growing a Healthier Future 🌍
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-emerald-100"
        >
          UrbanLeaf is more than microgreens. It’s a step toward sustainable,
          mindful living — one tray at a time.
        </motion.p>
      </section>

    </div>
  );
};

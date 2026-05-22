import React from "react";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center text-center h-screen px-6">
        
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-95"></div>

        <div className="absolute w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20 top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20 bottom-10 right-10"></div>

        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            APKA BHAI <span className="text-cyan-400">AI</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Futuristic AI content, viral storytelling, paid promotions,
            cinematic reels, and smart digital branding.
          </p>

          <div className="mt-10 flex gap-5 justify-center flex-wrap">
            <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold shadow-[0_0_25px_#06b6d4]">
              Explore Content
            </button>

            <button className="px-8 py-4 rounded-2xl border border-gray-600 hover:border-cyan-400 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 md:px-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Our <span className="text-cyan-400">Services</span>
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            AI-powered digital creativity for creators and brands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-cyan-400">
              AI Suggestions
            </h3>

            <p className="mt-5 text-gray-300 leading-relaxed">
              Daily AI tools, prompts, productivity tricks, and viral content
              strategies for creators.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-purple-400">
              Paid Promotions
            </h3>

            <p className="mt-5 text-gray-300 leading-relaxed">
              Promote your business, app, startup, or Instagram brand with
              futuristic AI marketing.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:scale-105 transition">
            <h3 className="text-3xl font-bold text-pink-400">
              Storytelling
            </h3>

            <p className="mt-5 text-gray-300 leading-relaxed">
              Cinematic AI stories, survival reels, emotional content, and
              viral scripts.
            </p>
          </div>

        </div>
      </section>

      {/* SHOWCASE */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950 px-6 md:px-20">
        
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Viral <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            Creative AI reels and futuristic cinematic content.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-105 transition"
            >
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                alt="project"
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-400">
                  AI Reel Project
                </h3>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  Futuristic cinematic AI storytelling with viral visual style
                  and social media optimization.
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* PROMOTION SECTION */}
      <section className="py-24 px-6 md:px-20">
        
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Boost Your Brand With
              <span className="text-cyan-400"> AI Promotions</span>
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-relaxed">
              Get futuristic promotions for your business, products, reels,
              startups, and social media content.
            </p>

            <ul className="mt-8 space-y-4 text-lg text-gray-300">
              <li>✔ Instagram Promotions</li>
              <li>✔ Viral AI Reels</li>
              <li>✔ Story Advertisements</li>
              <li>✔ AI Marketing Campaigns</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
            
            <h3 className="text-3xl font-bold text-cyan-400">
              Contact For Promotion
            </h3>

            <div className="mt-8 space-y-5">
              
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-2xl bg-black border border-gray-700 focus:outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-2xl bg-black border border-gray-700 focus:outline-none focus:border-cyan-400"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your project"
                className="w-full p-4 rounded-2xl bg-black border border-gray-700 focus:outline-none focus:border-cyan-400"
              ></textarea>

              <button className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition shadow-[0_0_25px_#06b6d4]">
                Submit Request
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-6 md:px-20">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div>
            <h2 className="text-3xl font-bold">
              APKA BHAI <span className="text-cyan-400">AI</span>
            </h2>

            <p className="mt-3 text-gray-500">
              Smart AI content. Viral storytelling. Future branding.
            </p>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Contact</a>
          </div>

        </div>
      </footer>
    </div>
  );
}

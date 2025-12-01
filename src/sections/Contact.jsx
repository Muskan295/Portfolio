import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const addChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const AfterSubmit = async (event) => {
    event.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: <SiGithub />, label: "GitHub", url: "https://github.com/muskan295/" },
    { icon: <SiLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/muskan-06b53a324/" },
    { icon: <SiInstagram />, label: "Instagram", url: "https://instagram.com/muskanmittal295/" },
  ];

  const contactInfo = [
    { icon: <FiMail />, title: "Email", value: "muskan@example.com" },
    { icon: <FiPhone />, title: "Phone", value: "+1 (123) 456-7890" },
    { icon: <FiMapPin />, title: "Location", value: "New Delhi, India" },
  ];

  return (
    <section id="contact" className="portfolio-section pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6">
        <div className="mb-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '2.2rem',
              marginBottom: '8px',
              background: 'linear-gradient(90deg, #6A11CB, #2575FC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-base max-w-2xl mx-auto mb-10"
          >
            Have a project or want to collaborate? I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
         
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 mt-0.5">
                    <div className="text-white text-lg">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-400 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="text-base font-semibold text-white mb-4">Find me online</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center p-3 rounded-lg bg-white/5 text-white text-sm hover:bg-gradient-to-r hover:from-purple-500/15 hover:to-blue-500/15 border border-white/10 hover:border-purple-500/30 transition-all group"
                  >
                    <div className="text-xl mb-1">{social.icon}</div>
                    <span className="text-xs opacity-80">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-purple-600/10 backdrop-blur-xl rounded-xl p-6 border border-white/10 h-full">
              <h3 className="text-lg font-semibold text-white mb-6">Send me a message</h3>
              
              <form onSubmit={AfterSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={addChange}
                      required
                      className="w-full px-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={addChange}
                      required
                      className="w-full px-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={addChange}
                    required
                    className="w-full px-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition resize-none"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="text-sm" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 p-3 mt-3 rounded-lg text-sm ${status.includes("successfully") ? "bg-green-500/10 border border-green-500/30 text-green-400" : "bg-red-500/10 border border-red-500/30 text-red-400"}`}
                    >
                      {status.includes("successfully") ? <FiCheckCircle /> : null}
                      <span>{status}</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
            
         
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
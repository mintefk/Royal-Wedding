import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function RSVP() {
  const [attendance, setAttendance] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!phone || !isValidPhoneNumber(phone)) {
      alert("እባክዎ የትክክለኛ ዓለም አቀፍ ስልክ ቁጥር ያስገቡ።");
      return;
    }

    if (!form.checkValidity() || !attendance) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      fullName: formData.get("fullName") ?? "",
      phone,
      attendance,
      guests: formData.get("guests") ?? "",
      message: formData.get("message") ?? "",
    };

    try {
      setSubmitting(true);
      const res = await fetch("http://localhost:4000/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      alert("እናመሰግናለን፣ መመዝገብዎ ተቀብሏል።");
      form.reset();
      setAttendance("");
    } catch (err) {
      console.error(err);
      alert("ይቅርታ፣ መመዝገብዎን ማስተናገድ አልተቻለም። እባክዎ እንደገና ይሞክሩ።");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="RSVP"
      className="relative py-24 px-6 overflow-hidden flex items-center justify-center bg-[#1E3A2B]"
      aria-labelledby="rsvp-heading"
    >
      {/* Background image layer (from Venue concept) */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <img
          src="/images/6.webp" loading="lazy" 
          alt="Elegant wedding ambiance"
          className="w-full h-full object-cover opacity-40
                     [mask-image:radial-gradient(circle,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]
                     [mask-repeat:no-repeat]
                     [mask-size:100%_100%]"
        />
      </motion.div>

      {/* Color overlay + decorative frame */}
      <div className="absolute inset-0 bg-[#1E3A2B]/10" />
      <div className="absolute inset-6 md:inset-10 border border-[#C6A75E]/60 rounded-[2rem] pointer-events-none" />

      <motion.div
        className="relative z-10 w-full max-w-xl bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] border border-[#C6A75E]/70 px-6 py-10 md:px-10 md:py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.28em] uppercase text-[#C6A75E]/80 mb-2">
            የጋብቻ መመዝገብ
          </p>
          <h2
            id="rsvp-heading"
            className="text-3xl md:text-4xl font-serif text-[#1E3A2B] mb-4"
          >
            እባክዎ መገኘትዎን ያረጋግጡ
          </h2>
          <p className="text-sm md:text-base text-[#1E3A2B]/80 leading-relaxed">
            ወዳጆቻችን እና ቤተሰቦቻችን ሆይ፣ በክብር እና በደስታ የሚካሄደውን የጋብቻችን ቀን ከእኛ ጋር
            እንድታካፍሉ እንጋብዛችኋለን። እባክዎ መገኘትዎን ወይም እንዳትችሉ በጊዜ ያሳውቁን።
          </p>
        </div>

        <form className="space-y-5 text-sm md:text-base" onSubmit={handleSubmit} noValidate>
          <div className="space-y-1">
            <label htmlFor="fullName" className="block text-[#1E3A2B] font-medium">
              ሙሉ ስም *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="w-full rounded-xl border border-[#C6A75E]/50 bg-white/80 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#C6A75E] focus:border-transparent text-[#1E3A2B] placeholder:text-[#1E3A2B]/40"
              placeholder="ሙሉ ስምዎን ያስገቡ"
            />
          </div>

          <div className="space-y-1 border-[#C6A75E]/50">
            <label htmlFor="phone" className="block text-[#1E3A2B] font-medium">
              ስልክ ቁጥር *
            </label>
            <div className="w-full">
              <PhoneInput
                id="phone"
                name="phone"
                international
                defaultCountry="ET"
                value={phone}
                onChange={setPhone}
                className="w-full rounded-xl border border-[#C6A75E]/50 bg-white/80 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#C6A75E] focus:border-transparent text-[#1E3A2B] placeholder:text-[#1E3A2B]/40"
                countryCallingCodeEditable={false}
              />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[#1E3A2B] font-medium">መገኘት ማረጋገጫ *</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <label className="flex-1 inline-flex items-center gap-2 rounded-xl border border-[#C6A75E]/60 bg-white/70 px-3 py-2 cursor-pointer hover:border-[#C6A75E] transition-colors">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  className="text-[#1E3A2B]"
                  onChange={(e) => setAttendance(e.target.value)}
                  required
                />
                <span className="text-[#1E3A2B]">እገኛለሁ</span>
              </label>
              <label className="flex-1 inline-flex items-center gap-2 rounded-xl border border-[#C6A75E]/60 bg-white/70 px-3 py-2 cursor-pointer hover:border-[#C6A75E] transition-colors">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  className="text-[#1E3A2B]"
                  onChange={(e) => setAttendance(e.target.value)}
                  required
                />
                <span className="text-[#1E3A2B]">አልችልም</span>
              </label>
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="guests" className="block text-[#1E3A2B] font-medium">
              የእንግዶች ብዛት *
            </label>
            <input
              id="guests"
              name="guests"
              type="number"
              min={1}
              max={10}
              required
              className="w-full rounded-xl border border-[#C6A75E]/50 bg-white/80 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#C6A75E] focus:border-transparent text-[#1E3A2B] placeholder:text-[#1E3A2B]/40"
              placeholder="የሚመጡ እንግዶች ብዛት"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="block text-[#1E3A2B] font-medium">
              መልዕክት (ፈቃደኛ)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="w-full rounded-xl border border-[#C6A75E]/40 bg-white/80 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#C6A75E] focus:border-transparent text-[#1E3A2B] placeholder:text-[#1E3A2B]/40 resize-none"
              placeholder="ለወጣቶቹ መልዕክትዎን እዚህ ይጻፉ (ፈቃደኛ)"
            />
          </div>

          <div className="flex items-center gap-3 pt-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent" />
            <span className="px-3 py-1 rounded-full border border-[#C6A75E]/70 bg-white/80 text-[11px] tracking-[0.18em] uppercase text-[#1E3A2B]/80">
              ኢትዮጵያ
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent" />
          </div>

          <div className="pt-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98, y: 0 }}
              disabled={submitting}
              className="w-full inline-flex justify-center items-center rounded-full bg-[#C6A75E] text-[#1E3A2B] font-semibold tracking-wide px-6 py-3.5 shadow-[0_10px_30px_rgba(198,167,94,0.6)] hover:shadow-[0_14px_40px_rgba(198,167,94,0.8)] transition-shadow duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "በመላክ ላይ..." : "መረጃውን ያስገቡ"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
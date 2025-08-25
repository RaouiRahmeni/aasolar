"use client";

import { motion, Variants } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { useForm, SubmitHandler } from "react-hook-form";
import { ReactElement } from "react";
import { useTranslations } from "next-intl";

// Type definitions
interface ContactMethod {
  icon: ReactElement;
  title: string;
  description: string;
  link: string;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactNow = () => {
  const t = useTranslations("Contact");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // TODO: integrate with API
  };

  const contactMethods: ContactMethod[] = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: t("contactOptions.phone.label"),
      description: t("contactOptions.phone.value"),
      link: `tel:${t("contactOptions.phone.value")}`,
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: t("contactOptions.email.label"),
      description: t("contactOptions.email.value"),
      link: `mailto:${t("contactOptions.email.value")}`,
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: t("contactOptions.location.label"),
      description: t("contactOptions.location.value"),
      link: "https://maps.google.com",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const contactMethodVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const mapVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const hoverAnimation = {
    x: 5,
    transition: { duration: 0.2 },
  };

  const buttonHover = {
    scale: 1.02,
    transition: { duration: 0.2 },
  };

  const buttonTap = {
    scale: 0.98,
    transition: { duration: 0.1 },
  };

  return (
    <section id="contact" className="py-40 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={contactMethodVariants}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                whileHover={hoverAnimation}
                variants={contactMethodVariants}
                href={method.link}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  {method.icon}
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{method.description}</p>
                </div>
              </motion.a>
            ))}

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={mapVariants}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="h-64 bg-gray-200 rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.186873560317!2d46.67227631500195!3d24.813477984065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3b9b8e502a1%3A0x6d471a9e4e6a41e1!2sRiyadh!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Company Location"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={formVariants}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-right">
              {t("form.submit")}{" "}
              {/* Could also use a separate key for "Send us a message" */}
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1 text-right"
                  >
                    {t("form.name.label")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: t("form.name.required") })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 text-right">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1 text-right"
                  >
                    {t("form.email.label")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: t("form.email.required"),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("form.email.invalid"),
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 text-right">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1 text-right"
                >
                  {t("form.phone.label")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: t("form.phone.required"),
                    pattern: {
                      value: /^[0-9]+$/,
                      message: t("form.phone.invalid"),
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 text-right">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1 text-right"
                >
                  {t("form.message.label")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", {
                    required: t("form.message.required"),
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 text-right">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <FiSend className="w-5 h-5" />
                {t("form.submit")}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactNow;

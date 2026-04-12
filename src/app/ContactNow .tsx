"use client";

import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslations } from "next-intl";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export default function ContactNow() {
  const t = useTranslations("Contact");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const contactMethods: ContactMethod[] = [
    {
      icon: <FiPhone size={22} />,
      title: t("contactOptions.phone.label"),
      description: t("contactOptions.phone.value"),
      link: `tel:${t("contactOptions.phone.value")}`,
    },
    {
      icon: <FiMail size={22} />,
      title: t("contactOptions.email.label"),
      description: t("contactOptions.email.value"),
      link: `mailto:${t("contactOptions.email.value")}`,
    },
    {
      icon: <FiMapPin size={22} />,
      title: t("contactOptions.location.label"),
      description: t("contactOptions.location.value"),
      link: "https://maps.google.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* background accent */}
      <div className="absolute -left-40 top-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t("title")}
          </h2>

          <div className="w-20 h-1 bg-sky-500 mx-auto mt-6 mb-6 rounded" />

          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="bg-sky-100 text-sky-600 p-3 rounded-xl">
                  {method.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {method.title}
                  </h3>

                  <p className="text-gray-600 mt-1">{method.description}</p>
                </div>
              </a>
            ))}

            {/* MAP */}
            <div className="h-64 rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.186873560317!2d46.67227631500195!3d24.813477984065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3b9b8e502a1%3A0x6d471a9e4e6a41e1!2sRiyadh!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              {t("form.submit")}
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-700">
                    {t("form.name.label")}
                  </label>

                  <input
                    {...register("name", { required: t("form.name.required") })}
                    className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                  />

                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-700">
                    {t("form.email.label")}
                  </label>

                  <input
                    type="email"
                    {...register("email", {
                      required: t("form.email.required"),
                    })}
                    className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                  />

                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-700">
                  {t("form.phone.label")}
                </label>

                <input
                  type="tel"
                  {...register("phone", {
                    required: t("form.phone.required"),
                  })}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                />

                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-700">
                  {t("form.message.label")}
                </label>

                <textarea
                  rows={4}
                  {...register("message", {
                    required: t("form.message.required"),
                  })}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                />

                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition"
              >
                <FiSend />
                {t("form.submit")}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

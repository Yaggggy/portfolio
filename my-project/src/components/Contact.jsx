import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="text-blue-500 hover:underline block"
          >
            Call: {CONTACT.phoneNo}
          </a>
          <a
            href={`https://wa.me/${CONTACT.phoneNo.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            Message on WhatsApp
          </a>
        </motion.div>

        <a
          href={`mailto:${CONTACT.email}`}
          className="text-blue-500 hover:underline"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;

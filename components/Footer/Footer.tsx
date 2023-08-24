import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="bg-primary/10 py-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white">
                Developed By Team Paradox With HTML, CSS, JS, TS and a little bit of <span className="color red">&#x2764;</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

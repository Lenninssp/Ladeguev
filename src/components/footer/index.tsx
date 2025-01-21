import Link from "next/link";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="spacing section-padding-x -z-10 h-1/5 bg-alg">
      <div className="spacing sticky bottom-12 flex flex-col gap-y-12">
        <div className="grid-gap flex grid-cols-12 flex-col h-full gap-y-12 md:grid">
          <p className=" col-span-6 max-w-[20ch] text-h5 font-medium leading-snug text-aqua-green lg: text-h2 2xl:text-h3">
            Contact Me here 
          </p>
          <div className="col-span-6 flex grid-cols-subgrid justify-between md:grid mb-10">
            <nav className="link-text col-span-3 flex flex-col gap-y-6 ">
              <h3 className="   uppercase tracking-base text-lemon">
                [ *My Social Media]
              </h3>
              <ul className=" flex flex-col gap-y-2  text-brighter-aqua-green">
                <li className="relative">
                  <span aria-hidden="true" className="leading-tight opacity-0">
                    Instagram
                  </span>
                  <Link href={"https://www.instagram.com/ladeguev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} className="text-nowrap absolute bottom-0 left-0" >
                    Instagram
                  </Link>
                </li>

                <li className="relative">
                  <span aria-hidden="true" className="leading-tight opacity-0">
                    Youtube
                  </span>
                  <Link href={"https://www.youtube.com/channel/UCIB3zURyRNKENYvaPeEA4WA"} className="text-nowrap absolute bottom-0 left-0">
                    Youtube
                  </Link>
                </li>

                <li className="relative">
                  <span aria-hidden="true" className="leading-tight opacity-0">
                    Tik-Tok
                  </span>
                  <Link href={"https://www.tiktok.com/@ladeguev"} className="text-nowrap absolute bottom-0 left-0" >
                    Tik-Tok
                  </Link>
                </li>
              </ul>

              
            </nav>
            <nav className="link-text col-span-3 flex flex-col gap-y-6 ">
              <h3 className="   uppercase tracking-base text-lemon">
                [ *Business contact]
              </h3>
              <ul className=" flex flex-col gap-y-2  text-brighter-aqua-green">
                <li className="relative">
                  <span aria-hidden="true" className="leading-tight opacity-0">
                    alejandro@ladeguev.com
                  </span>
                  <a className="text-nowrap absolute bottom-0 left-0" href="/">
                  alejandro@ladeguev.com
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

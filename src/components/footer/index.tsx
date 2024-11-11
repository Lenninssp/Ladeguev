import "./styles.css";

const Footer = () => {
  return (
    <footer className="spacing section-padding-x -z-10 h-1/5 bg-alg">
      <div className="spacing sticky bottom-12 flex flex-col gap-y-12">
        <div className="grid-gap flex grid-cols-12 flex-col h-full gap-y-12 md:grid">
          <p className=" col-span-6 max-w-[20ch] text-h5 font-medium leading-snug text-aqua-green lg: text-h2 2xl:text-h3">
            Please contact me or whatever
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
                  <a className="text-nowrap absolute bottom-0 left-0" href="/">
                    Instagram
                  </a>
                </li>

                <li className="relative">
                  <span aria-hidden="true" className="leading-tight opacity-0">
                    Youtube
                  </span>
                  <a className="text-nowrap absolute bottom-0 left-0" href="/">
                    Youtube
                  </a>
                </li>

                <li className="relative">
                  <span aria-hidden="true" className="leading-tight opacity-0">
                    Tik-Tok
                  </span>
                  <a className="text-nowrap absolute bottom-0 left-0" href="/">
                    Tik-Tok
                  </a>
                </li>

                <li className="relative">
                  <span aria-hidden="true" className="leading-tight opacity-0">
                    X - Twitter
                  </span>
                  <a className="text-nowrap absolute bottom-0 left-0" href="/">
                    X - Twitter
                  </a>
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
                    alejandroisapussy@yaburgay.com
                  </span>
                  <a className="text-nowrap absolute bottom-0 left-0" href="/">
                    alejandroisapussy@yaburgay.com
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

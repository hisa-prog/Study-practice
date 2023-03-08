import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { WithLanguage } from "../../services/withLanguage";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => {
  const [isMev, setIsMev] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const router = useRouter();
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    if (router.asPath === `/${language}/mev/`) setIsMev(true);
    else setIsMev(false);
    if (router.asPath === `/${language}/contact/`) setIsContact(true);
    else setIsContact(false);
  }, [router]);

  return (
    <>
      <WithLanguage language={language}>
        <div className="w-full h-full relative ">
          <Header isFixed={isMev} />
          {children}
          {!isMev && <Footer />}
        </div>
      </WithLanguage>
    </>
  );
};

export default Layout;

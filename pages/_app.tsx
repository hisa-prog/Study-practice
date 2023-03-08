import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../components/sections/incubator/ContactNow/index.css'
import '../components/sections/incubator/PrefaceSD/prefaceSD.css'
import '../components/sections/incubator/WhoWeAreSD/whoWeAreSD.css'
import '../components/sections/incubator/Button/button.css'
import '../components/sections/incubator/HowWeProvide/howWeProvide.css'
import '../components/sections/incubator/TechStackSD/techStackSD.css'
import '../components/sections/incubator/Title/title.css'
import '../components/sections/incubator/PlatinumClients/platinumClients.css'
import '../components/sections/incubator/Testimonials/testimonials.css'
import '../components/sections/incubator/FooterSD/footerSD.css'
import '../components/sections/incubator/WeOfferSD/weOfferSD.css'
import '../components/sections/incubator/FooterLight/footer.css'
import '../components/sections/incubator/MediaSlider/mediaSlider.css'
import '../components/sections/incubator/Recognition/recognition.css'
import '../components/sections/incubator/Investors/investors.css'
import '../components/sections/incubator/Partnerships/partnerships.css'
import '../components/sections/incubator/ModalPure/index.css'
import '../components/sections/about/SliderNavigation/sliderNavigation.css'
import '../components/sections/about/Slider/slider.css'
import '../components/sections/about/PrefaceMain/prefaceMain.css'
import '../components/sections/about/WhyPlatinum/whyPlatinum.css'
import '../components/sections/about/WhoWeAre/whoWeAre.css'
import '../components/sections/about/Facts/facts.css'
import '../components/sections/about/TeamTestimonials/teamTestimonials.css'
import '../components/sections/about/TeamByDepartments/teamByDepartments.css'
import '../components/sections/about/Community/community.css'
import '../components/sections/about/BlogPreview/blog-preview.css'
import '../components/sections/about/PlacesWeWorked/placeWeWorked.css'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Platinum Capital</title>
        <meta
          property="title"
          content="Platinum Capital"
          key="title"
        />
        <link type="image/x-icon" rel="shortcut icon" href="/favicon.ico" />
        <link type="image/png" sizes="16x16" rel="icon" href="/favicon-16x16.png" />
        <link type="image/png" sizes="32x32" rel="icon" href="/favicon-32x32.png" />
        <link type="image/png" sizes="512x512" rel="icon" href="/android-chrome-512x512.png" />
        <link type="image/png" sizes="192x192" rel="icon" href="/android-chrome-192x192.png" />
        <link sizes="180x180" rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

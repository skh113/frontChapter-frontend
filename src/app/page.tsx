// import Tweets from "@/app/components/Tweets/Tweets";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import "yet-another-react-lightbox/styles.css";
import AdditionalPlans from "./components/AdditionalPlans";
import ConferenceLocation from "./components/ConferenceLocation";
import ConferenceTicket from "./components/ConferenceTicket/ConferenceTicket";
import CountDown from "./components/CountDown";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Participants from "./components/Participants/Participants";
import Speakers from "./components/Speakers/Speakers";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <CountDown />
        <Speakers />
        <Timeline />
        <Participants />
        <ConferenceLocation />
        <ConferenceTicket />
        <AdditionalPlans />
        <Footer />
        {/* <Tweets /> */}
      </main>
      <GoogleAnalytics gaId="G-G0H1X12MC" />
    </>
  );
}

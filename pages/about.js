import Header from "./../components/header/Header";
import Layout from "../components/ui/Layout";
import Footer from "../components/footer/Footer";
import AboutContent from "../components/about/AboutContent";

const About = () => {
  return (
    <>
      <Header />
      <Layout>
        <AboutContent />
      </Layout>
      <Footer />
    </>
  );
};

export default About;

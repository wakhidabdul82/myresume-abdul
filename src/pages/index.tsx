import AboutMeSection from '@/components/AboutMeSection';
import ConnectMe from '@/components/ConnectMe';
import HeroSection from '@/components/HeroSection';
import LatestProject from '@/components/LatestProject';
import MySkills from '@/components/MySkills';
import NavigationBar from '@/components/NavigationBar';
import ResumeSection from '@/components/ResumeSection';
import { Main } from '@/layouts/Main';
import { Meta } from '@/layouts/Meta';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="MyResume | Abdul Wakhid"
          description="Curriculum Vitae Abdul Wakhid as Web Programmer"
        />
      }
    >
      <NavigationBar />
      <section id="home" className="flex items-center text-black">
        <HeroSection />
      </section>
      <section id="aboutme">
        <AboutMeSection />
      </section>
      <section id="resume">
        <ResumeSection />
      </section>
      <section id="skills">
        <MySkills />
      </section>
      <section id="projects">
        <LatestProject />
      </section>
      <section id="connectme">
        <ConnectMe />
      </section>
      <section id="footer" className="pt-16">
        <hr className="border border-black"></hr>
        <p className="ibm-md items-center py-5 text-center">
          Made with ❤️‍🔥 by Me
        </p>
      </section>
    </Main>
  );
};

export default Index;

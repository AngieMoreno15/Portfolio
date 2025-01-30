import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/subHeroSection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain'
import HelperSection from './components/HelperSection';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectsMain from './components/projectsSection/ProjectsMain';
import ContactMeMain from './components/contactMeMain/ContactMeMain';
import FooterMain from './components/footer/FooterMain';

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain/>
    </main>
  );
};

export default App;

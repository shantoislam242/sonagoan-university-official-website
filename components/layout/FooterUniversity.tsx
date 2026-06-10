import JourneyCTA from '@/components/sections/JourneyCTA';
import SUFooter from './SUFooter';

// All 4 footer wrappers (University / HomeTwo / HomeThree / HomeFive)
// render the same new components. They stay as separate files because
// the 30 page files import them by name — keeping the wrapper names
// avoids touching any page-level JSX.
export default function FooterUniversity() {
  return (
    <>
      <JourneyCTA />
      <SUFooter />
    </>
  );
}

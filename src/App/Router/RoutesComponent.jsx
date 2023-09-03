import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersonalInformationView } from "../Views/PersonalInformation";
import { ProfileView } from "../Views/Profile";
import { ProfessionalExperienceView } from "../Views/ProfessionalExperience";
import { AcademicStudiesView } from "../Views/AcademicStudies";
import { Navbar } from "../Shared/Components/Navbar";
import { Footer } from "../Shared/Components/Footer";

export const RoutesComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<PersonalInformationView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/experience" element={<ProfessionalExperienceView />} />
          <Route path="/studies" element={<AcademicStudiesView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

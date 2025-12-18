import ImageSlider from "../components/ImageSlider/ImageSlider"
import OurTeam from "../components/OurTeam/OurTeam"
import StudentFeedback from "../components/StudentFeedback/StudentFeedback"
import StatsSection from "./StatsSection"
import RoiHero from "../components/Roi-hero/roiHero"
import RrethNesh from "../components/RrethNesh/rrethNesh"
import Formati from "../components/Formati/Formati"

const RrethRoi = () => {
  return (
    <>
      <RoiHero title={"Rreth ROI Academy"} />
      <StatsSection />
      <RrethNesh />
      <Formati
        title={"Formati i Mësimit – Online, Fizikisht dhe Sistem Hibrid"}
        text={`Ne ofrojmë fleksibilitet të plotë për ndjekjen e trajnimeve: në klasa fizike në lokacionet tona në Prishtinë, Tiranë dhe Shkup, në format online për të gjithë ata që preferojnë të mësojnë nga distanca, si dhe në sistemin hibrid (të kombinuar) për ata që dëshirojnë të përfitojnë nga të dyja format e mësimit.

Të gjitha materialet dhe burimet e nevojshme për ndjekjen e trajnimeve janë të aksesueshme në çdo kohë për të gjithë studentët tanë.

Pjesëmarrësit në programet tona kanë mundësinë të zgjedhin programe 2-mujore, të fokusuara në aftësi specifike të tregut të punës ose të ndjekin programet tona 6-mujore, të cilat ofrojnë një përgatitje më të thelluar, përfshirë një praktikë intensive.

Pavarësisht formës së ndjekjes së kursit, të gjithë studentët tanë marrin të njëjtën cilësi të lartë mësimore dhe të njëjtat mundësi për të përfituar njohuri të dobishme për karrierën e tyre.`}
        bgColor={"#fafafa"}
        radius={"18px 18px 0 0"}
        radius2={"0 0 18px 18px"}
      />
      <Formati
        title={"Rezultatet dhe Suksesi i Pjesëmarrësve"}
        text={`Që nga viti 2019, mbi 6,000 studentë kanë përfunduar me sukses trajnimet tona dhe një pjesë e madhe e tyre janë të punësuar në kompani prestigjioze ose kanë nisur rrugën e tyre të pavarur profesionale.

Kjo dëshmon jo vetëm cilësinë e programeve tona, por edhe ndikimin e tyre real në zhvillimin e karrierës së pjesëmarrësve tanë.

Falë metodave moderne të mësimdhënies dhe përvojës së pasur të trajnerëve tanë, studentët pajisen me aftësitë më të kërkuara në tregun e punës. Ata janë të përgatitur të punojnë në kompani të ndryshme, të krijojnë projekte të suksesshme ose të fillojnë bizneset e tyre personale.

Me një staf të përkushtuar prej 22 trajnerësh me përvojë të gjatë në fushat përkatëse, ROI Academy ofron një mjedis të përshtatshëm për rritje dhe zhvillim profesional.

Përveç kësaj, ne kemi krijuar bashkëpunime të shumta me kompani dhe institucione, duke mundësuar angazhimin e studentëve tanë në projekte reale gjatë dhe pas përfundimit të trajnimit. Ky rrjet partneritetesh e bën më të lehtë tranzicionin e studentëve në një karrierë aktive dhe të suksesshme.

Kjo është arsyeja pse një numër i madh i studentëve tanë sigurojnë punësim brenda pak muajsh nga përfundimi i programit të tyre.`}
        reverse={true}
        bgColor={"#ffffff"}
        radius={"18px 18px 0 0"}
        radius2={"0 0 18px 18px"}
      />
      <StudentFeedback />
      <OurTeam />
      <ImageSlider />
    </>
  )
}

export default RrethRoi

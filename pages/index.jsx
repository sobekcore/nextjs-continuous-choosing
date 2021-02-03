import Title from "../components/title";
import SocialIcons from "../components/social-icons";
import RenderButtons from "../components/render-buttons";
import Footer from "../components/footer";

export default function Index()
{
  return(
    <div className="page">
      <Title />
      <SocialIcons />
      <RenderButtons />
      <Footer />
    </div>
  )
}

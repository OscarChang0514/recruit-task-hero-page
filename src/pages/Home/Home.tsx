import { useNavigate } from "react-router";
import { MainTitle, StyledHome, StyledPrimaryButton } from "./Home.style";
import { HomeProps } from "./Home.type";

const Home: React.FC<HomeProps> = (props) => {

  const navigate = useNavigate();

  return (
    <StyledHome>
      <header>
        <MainTitle>Welcome !</MainTitle>
        <h4>感謝給予面試機會 !</h4>
        <h4>請查看Heroes頁面或點選Document跳至Github readme</h4>
        <div>
          <StyledPrimaryButton onClick={() => navigate('/heroes')}>
            Heroes
          </StyledPrimaryButton>
          <StyledPrimaryButton onClick={() => window.open('https://github.com/OscarChang0514/recruit-task-hero-page')}>
            Document
          </StyledPrimaryButton>
        </div>
      </header>
    </StyledHome>
  );
};

export default Home;

import React, { lazy, Suspense } from 'react'
import styled from "styled-components"
import { Bio, heroStats } from "../data/constants"
import Typewriter from "typewriter-effect";
import img from "../assets/personalsite-image.png"
import {Tilt} from "react-tilt"
import {motion} from "framer-motion"
import {headContainerAnimation,headContentAnimation,headTextAnimation,} from "../utils/motion";
// import StarCanvas from "../canvas/Stars";
import { StarsCanvas } from '../canvas';

const MainBgAnimation = lazy(() => import("../MainBgAnimation/Msection"));


const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    position:relative;
    padding:80px 30px;
    z-index:1;

    
    @media (max-width:960px) {
    padding:66px 16px;
}
    @media (max-width:640px){
    padding:32px 16px;
    }

    clip-path:polygon(0 0, 100% 0,100% 100%,70% 95%, 0 100%);



`;

const MainInnerContainer = styled.div`
position: relative;
display:flex;
justify-content: space-between;
align-items: center;
width:100%;
max-width:1100px;

@media (max-width:960px) {
    flex-direction:column;
}

`;
const MainLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;

`;
const MainRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
`;


  const Title=styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  `;


  const TextLoop=styled.div`
    font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  `;

  const Span=styled.div`
    cursor: pointer;
  color: ${({ theme }) => theme.primary};
  `;






  const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const Tagline = styled.p`
  margin: 0 0 18px;
  font-size: 15px;
  line-height: 1.55;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 560px;
  @media (max-width: 960px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  width: 100%;
  max-width: 560px;
  margin-bottom: 22px;
  @media (max-width: 960px) {
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.text_primary + 22};
  background: rgba(17, 25, 40, 0.55);
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  line-height: 1.2;
`;

const StatLabel = styled.div`
  font-size: 12px;
  line-height: 1.35;
  margin-top: 4px;
  color: ${({ theme }) => theme.text_secondary};
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  margin-bottom: 22px;
  font-size: 14px;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const QuickLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 5px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;

  }
`;

const MainBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  // max-width: 1360px;
  // overflow: hidden;
  // padding: 0 30px;
  // top: 50%;
  // left: 50%;
  // -webkit-transform: translateX(-50%) translateY(-50%);
  // transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;




const Main = () => {
  return (
    <div id="Profile">
      <MainContainer>

        <MainBg>
          <StarsCanvas />
          <Suspense fallback={null}>
            <MainBgAnimation />
          </Suspense>
        </MainBg>

        <motion.div {...headContainerAnimation} >

        <MainInnerContainer>
          <MainLeftContainer>
          <motion.div {...headTextAnimation} >

            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                      />
                  </Span>
                </TextLoop>
            
                      </motion.div>

                      
            <SubTitle>
              {Bio.description}
            </SubTitle>
            {Bio.tagline ? <Tagline>{Bio.tagline}</Tagline> : null}

            <StatsGrid aria-label="Highlights">
              {heroStats.map((s) => (
                <StatCard key={s.label}>
                  <StatValue>{s.value}</StatValue>
                  <StatLabel>{s.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>

            <LinkRow>
              <QuickLink href={`mailto:${Bio.email}`}>Email</QuickLink>
              <QuickLink href={Bio.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </QuickLink>
              <QuickLink href={Bio.fiverr} target="_blank" rel="noreferrer">
                Fiverr
              </QuickLink>
              <QuickLink href={Bio.github} target="_blank" rel="noreferrer">
                GitHub
              </QuickLink>
            </LinkRow>

            <ResumeButton href={Bio.resume} target="_blank" rel="noreferrer">
                View Resume
              </ResumeButton>


          </MainLeftContainer>
          <MainRightContainer>
          <Tilt>
            <Img src={img} alt="Rizwan Hussain" loading="eager" decoding="async" fetchPriority="high" />
            </Tilt>
          </MainRightContainer>
        </MainInnerContainer>

        </motion.div>

      </MainContainer>
    </div>
  )
}

export default Main

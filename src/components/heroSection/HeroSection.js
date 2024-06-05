import React from "react";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
//import HeroImg from "../../images/images.jpg";
import {
  HeroContainer,
  HeroBg,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
} from "./HeroSectionStyled";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>{/* <HeroAnimation /> */}</HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a{" "}
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
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            {/* <Img src={HeroImg} alt="my image" /> */}
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;

import React from "react";
import HeroBgAnimation from "../heroSection/heroBgAnimation/HeroBgAnimation.js";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/images.png";
import {
  HeroContainer,
  HeroBg,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  TextLoop,
  Title,
  Img,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroSectionStyled";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
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
            <Img src={HeroImg} alt="my image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;

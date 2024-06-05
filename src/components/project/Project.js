import React from "react";
import { useState } from "react";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectStyled";

const Project = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          {" "}
          i have worked on wide range of projects. Here are some of my projects
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton
              active
              value="all"
              onClick={() => {
                setToggle("all");
              }}
            >
              All
            </ToggleButton>
          ) : (
            <ToggleButton
              value="all"
              onClick={() => {
                setToggle("all");
              }}
            >
              All
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Project;

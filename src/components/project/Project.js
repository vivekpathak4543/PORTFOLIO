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
              active="true"
              value="all"
              onClick={() => {
                setToggle("all");
              }}
            >
              All
            </ToggleButton>
          ) : (
            <ToggleButton
              active="false"
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
            projects.map((project, id) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
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

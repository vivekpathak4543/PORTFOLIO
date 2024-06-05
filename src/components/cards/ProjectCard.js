import React from "react";
import {
  Button,
  Card,
  Image,
  Tags,
  Tag,
  Details,
  Title,
  Date,
  Description,
  Members,
  Avatar,
} from "./ProjectCardStyled";

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar src={member.img} />
        ))}
      </Members>
      <Button>View Project</Button>
    </Card>
  );
};

export default ProjectCard;

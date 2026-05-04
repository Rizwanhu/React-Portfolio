import React, { memo } from "react";
import styled from "styled-components";

const Card = styled.article`
  width: 100%;
  max-width: 330px;
  min-height: 480px;
  background-color: ${({ theme }) => theme.card};
  cursor: default;
  border-radius: 12px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 40px 4px rgba(0, 0, 0, 0.55);
  }
  @media (max-width: 480px) {
    max-width: 100%;
    min-height: unset;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.25);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 6px;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.text_secondary + 44};
  background: rgba(255, 255, 255, 0.04);
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 2px;
  flex: 1;
`;
const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.35;
`;
const Date = styled.div`
  font-size: 11px;
  margin-top: 2px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 80};
`;
const Description = styled.p`
  margin: 6px 0 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
  padding-top: 8px;
`;

const Button = styled.a`
  flex: 1;
  min-width: 120px;
  text-align: center;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 45%, 0.35),
    hsla(294, 100%, 45%, 0.35)
  );
  border: 1px solid ${({ theme }) => theme.primary + 80};
  transition: filter 0.2s ease, transform 0.2s ease;
  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }
`;

const ButtonGhost = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.primary};
`;

const ProjectCard = ({ project }) => {
  const tags = project.tags ?? [];

  return (
    <Card>
      <Image
        src={project.image}
        alt=""
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <Tags>
        {tags.slice(0, 6).map((tag) => (
          <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
        ))}
        {tags.length > 6 && <Tag>+{tags.length - 6}</Tag>}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        {project.date ? <Date>{project.date}</Date> : null}
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member) => (
          <Avatar key={member.img} src={member.img} alt="" loading="lazy" />
        ))}
      </Members>
      <Actions>
        {project.github ? (
          <Button href={project.github} target="_blank" rel="noreferrer">
            Source
          </Button>
        ) : null}
        {project.webapp ? (
          <ButtonGhost href={project.webapp} target="_blank" rel="noreferrer">
            Live demo
          </ButtonGhost>
        ) : null}
      </Actions>
    </Card>
  );
};

export default memo(ProjectCard);

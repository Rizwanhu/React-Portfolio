import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const DateText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 1.55;
  }
`;
const Span = styled.div`
  max-width: 100%;
  margin-bottom: ${({ $hasList }) => ($hasList ? "10px" : "0")};
`;

const BulletList = styled.ul`
  margin: 0 0 0 18px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text_primary + 95};
  @media only screen and (max-width: 768px) {
    font-size: 13px;
    margin-left: 14px;
  }
`;

const TechRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const TechChip = styled.span`
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.primary + 55};
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.primary + 12};
`;

const ExperienceCard = ({ experience }) => {
  const bullets = experience?.bullets ?? [];
  const techStack = experience?.techStack ?? [];

  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company ?? "Experience"}
          loading="lazy"
          decoding="async"
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "8px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={experience?.date}
    >
      <Top>
        <Image
          src={experience?.img}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <Body>
          <Role>{experience?.role}</Role>
          <Company>{experience?.company}</Company>
          <DateText>{experience?.date}</DateText>
        </Body>
      </Top>
      <Description>
        {experience?.desc && (
          <Span $hasList={bullets.length > 0}>{experience.desc}</Span>
        )}
        {bullets.length > 0 && (
          <BulletList>
            {bullets.map((line, index) => (
              <li key={`${experience?.id ?? "exp"}-b-${index}`}>{line}</li>
            ))}
          </BulletList>
        )}
        {techStack.length > 0 && (
          <TechRow>
            {techStack.map((tech, index) => (
              <TechChip key={`${experience?.id ?? "exp"}-t-${index}`}>
                {tech}
              </TechChip>
            ))}
          </TechRow>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;

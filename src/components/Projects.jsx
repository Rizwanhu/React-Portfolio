import React, { useMemo, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { projects } from "../data/constants";
import ProjectCard from "../Section/Projectinfo";
import {
  getStoredProjectFilter,
  setStoredProjectFilter,
} from "../utils/portfolioStorage";

const PAGE_SIZE = 6;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0 16px 24px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  max-width: 720px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 0 4px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 11px;
    border-radius: 10px;
  }
`;

const ToggleButton = styled.button`
  padding: 10px 14px;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 8px 10px;
  }
  ${({ $active, theme }) =>
    $active &&
    `
  background:  ${theme.primary + 28};
  font-weight: 600;
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  align-self: stretch;
  min-height: 36px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 24px;
  flex-wrap: wrap;
`;

const SeeMoreRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 28px;
  width: 100%;
`;

const CountHint = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const SeeMoreButton = styled.button`
  padding: 12px 28px;
  border-radius: 999px;
  border: 1.5px solid ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + 18};
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
`;

const FILTER_OPTIONS = [
  { id: "all", label: "All" },
  { id: "web app", label: "Web apps" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI & data" },
];

const Projects = () => {
  const [toggle, setToggle] = useState(getStoredProjectFilter);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const onFilterChange = useCallback((id) => {
    setToggle(id);
    setStoredProjectFilter(id);
  }, []);

  const filteredProjects = useMemo(() => {
    if (toggle === "all") return projects;
    return projects.filter((item) => item.category === toggle);
  }, [toggle]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [toggle]);

  const total = filteredProjects.length;
  const shown = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < total;

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc style={{ marginBottom: "28px" }}>
          A mix of production-style builds and sharp experiments — each tied to a
          clear user or business outcome, not just a tech demo.
        </Desc>

        <ToggleButtonGroup role="tablist" aria-label="Filter projects">
          {FILTER_OPTIONS.map((opt, index) => (
            <React.Fragment key={opt.id}>
              {index > 0 && <Divider aria-hidden />}
              <ToggleButton
                type="button"
                role="tab"
                aria-selected={toggle === opt.id}
                $active={toggle === opt.id}
                onClick={() => onFilterChange(opt.id)}
              >
                {opt.label}
              </ToggleButton>
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {shown.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>

        {total > 0 && (
          <SeeMoreRow>
            <CountHint>
              Showing {shown.length} of {total} project{total === 1 ? "" : "s"}
            </CountHint>
            {hasMore ? (
              <SeeMoreButton
                type="button"
                onClick={() =>
                  setVisibleCount((c) => Math.min(c + PAGE_SIZE, total))
                }
              >
                See more
              </SeeMoreButton>
            ) : null}
          </SeeMoreRow>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;

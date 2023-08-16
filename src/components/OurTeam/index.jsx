import React from "react";
import { SectionTeam, ContainerTeam } from "./style";
import { Team } from "./Team";
import TeamImage from "./TeamImg";
const OurTeam = () => {
  return (
    <SectionTeam>
      <ContainerTeam>
        <Team />
        <TeamImage />
      </ContainerTeam>
    </SectionTeam>
  );
};

export default OurTeam;

import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { HeroCover, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <HeroCover>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! <br />
          I'm Edema 
        </SectionTitle>
        <SectionText>
        I am a passionate software developer totally dedicated to building software applications in the most innovative and efficient manner possible.
        I adapt easily to latest technological advancements and build software with them.
        </SectionText>
        <Link href="#about" ><Button >More About Me</Button></Link>
      </LeftSection>
    </Section>
  </HeroCover>
);

export default Hero;
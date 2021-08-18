import React from 'react';

import Link from 'next/link';
import Button from '../../styles/GlobalComponents/Button';

import { Section, SectionDivider } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, PassionTitle } from './AcomplishmentsStyles';

const data = [
  { number: 'Passion', text: 'I have Passion for people, technology, self development and continuous learning.'},
  { number: 'Hobbies', text: 'When I am not coding, I take out time to watch event documentaries or play tennis.'},
  {number:'Team work', text: 'I contribute and work perfectly either as a team or an individual.'}
];

const Acomplishments = () => (
  <Section>
    <PassionTitle>Passion and Interests</PassionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <br />
    <Link href="https://docs.google.com/document/d/1GSFAFimSZnkhy0fuFaUMf1gPQqcLTBPKbGgw8QCfIc8/edit?usp=sharing" target="_blank"><Button >View my CV</Button></Link>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;

import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { HngIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { PassionTitle } from '../Acomplishments/AcomplishmentsStyles';

const Footer = () => {
  return (
    <FooterWrapper id='contact'>
      <PassionTitle>Contact me</PassionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+2348169277926">+234-816-927-7926</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:edemaukabi@gmail.com">
          edemaukabi@gmail.com
          </LinkItem>
          <LinkItem href="mailto:contact@edemaukabi.com">
          contact@edemaukabi.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle style={{margin:"5px 5px 5px 15px"}}>Visit HNG I4G website</LinkTitle>
          <HngIcons href="https://internship.zuri.team" target="_blank">
            <div style={{width:"15rem", backgroundColor:"#fff", borderRadius:"20px"}} >
            <img src="../../images/hng-logo.png" style={{width:"12rem", objectFit: "contain", padding:"5px"}}/></div>
          </HngIcons>
          {/* <LinkItem href="tel:+2348169277926">HNG LOGO</LinkItem> */}
        </LinkColumn>
        <LinkColumn></LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Thank you for visiting! You can as well check me out on social media</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/edemaukabi" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/edemaukabi/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/EdemaUkabi" target="_blank">
          <AiFillFacebook size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

import React from 'react'
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSec() {
    return (
        <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web design"
            desc="I create UI/UX design's that help attract users."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="web dev"
            desc="I create high performance website's."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Cloud Dev"
            desc="I build solutions in the cloud."
          />
        </div>
      </div>
    </ServicesItemsStyles>
    )
}

import React from 'react';
import Card from '../../components/partial/card';
import Heading from '../../components/partial/heading';

type Props = {};

const Headings = (props: Props) => {
  return (
    <div>
      <Card>
        <Heading type="h1" fontWeight="light">
          THis is custom Heading H1 thin
        </Heading>
        <Heading type="h2" fontWeight="light">
          THis is custom Heading H2 thin
        </Heading>
        <Heading type="h3" fontWeight="light">
          THis is custom Heading H3 thin
        </Heading>
        <Heading type="h4" fontWeight="light">
          THis is custom Heading H4 thin
        </Heading>
        <Heading type="h5" fontWeight="light">
          THis is custom Heading H5 thin
        </Heading>
        <Heading type="h6" fontWeight="light">
          THis is custom Heading H6 thin
        </Heading>
        <div className="mt-3"></div>
        <Heading type="h1" fontWeight="normal">
          THis is custom Heading H1 Normal
        </Heading>
        <Heading type="h2" fontWeight="normal">
          THis is custom Heading H2 Normal
        </Heading>
        <Heading type="h3" fontWeight="normal">
          THis is custom Heading H3 Normal
        </Heading>
        <Heading type="h4" fontWeight="normal">
          THis is custom Heading H4 Normal
        </Heading>
        <Heading type="h5" fontWeight="normal">
          THis is custom Heading H5 Normal
        </Heading>
        <Heading type="h6" fontWeight="normal">
          THis is custom Heading H6 Normal
        </Heading>
        <div className="mt-3"></div>
        <Heading type="h1" fontWeight="semi-bold">
          THis is custom Heading H1 semi-bold
        </Heading>
        <Heading type="h2" fontWeight="semi-bold">
          THis is custom Heading H2 semi-bold
        </Heading>
        <Heading type="h3" fontWeight="semi-bold">
          THis is custom Heading H3 semi-bold
        </Heading>
        <Heading type="h4" fontWeight="semi-bold">
          THis is custom Heading H4 semi-bold
        </Heading>
        <Heading type="h5" fontWeight="semi-bold">
          THis is custom Heading H5 semi-bold
        </Heading>
        <Heading type="h6" fontWeight="semi-bold">
          THis is custom Heading H6 semi-bold
        </Heading>
        <div className="mt-3"></div>
        <Heading type="h1" fontWeight="bold">
          THis is custom Heading H1 bold
        </Heading>
        <Heading type="h2" fontWeight="bold">
          THis is custom Heading H2 bold
        </Heading>
        <Heading type="h3" fontWeight="bold">
          THis is custom Heading H3 bold
        </Heading>
        <Heading type="h4" fontWeight="bold">
          THis is custom Heading H4 bold
        </Heading>
        <Heading type="h5" fontWeight="bold">
          THis is custom Heading H5 bold
        </Heading>
        <Heading type="h6" fontWeight="bold">
          THis is custom Heading H6 bold
        </Heading>
      </Card>
    </div>
  );
};

export default Headings;

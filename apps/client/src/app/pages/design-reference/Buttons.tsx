import React from "react";
import Card from "../../components/partial/card";
import Button from "../../components/partial/button";
import Heading from "../../components/partial/heading";
import Badge from "../../components/partial/badge";

type Props = {};

const Buttons = (props: Props) => {
  return (
    <div>
      <Card>
        <Heading type="h4">Button Filled</Heading>
        <div className="flex gap-2 items-center">
          <Button state="primary" type="filled">
            Button
          </Button>
          <Button state="danger" type="filled">
            Button
          </Button>
          <Button state="success" type="filled">
            Button
          </Button>
          <Button state="warning" type="filled">
            Button
          </Button>
          <Button state="gray" type="filled">
            Button
          </Button>
          <Button state="black-outlined" type="filled">
            Button
          </Button>
        </div>
        <Heading type="h4" className="mt-4">
          Button Outlined
        </Heading>
        <div className="flex gap-2 items-center">
          <Button state="primary" type="outlined">
            Button
          </Button>
          <Button state="danger" type="outlined">
            Button
          </Button>
          <Button state="success" type="outlined">
            Button
          </Button>
          <Button state="warning" type="outlined">
            Button
          </Button>
          <Button state="gray" type="outlined">
            Button
          </Button>
          <Button state="black-outlined" type="outlined">
            Button
          </Button>
        </div>
        <Heading type="h4" className="mt-4">
          Badges Filled
        </Heading>
        <div className="flex gap-2 items-center">
          <Badge state="primary" type="filled">
            Badge
          </Badge>
          <Badge state="danger" type="filled">
            Badge
          </Badge>
          <Badge state="success" type="filled">
            Badge
          </Badge>
          <Badge state="warning" type="filled">
            Badge
          </Badge>
          <Badge state="gray" type="filled">
            Badge
          </Badge>
        </div>
        <Heading type="h4" className="mt-4">
          Badges
        </Heading>
        <div className="flex gap-2 items-center">
          <Badge state="primary">Badge</Badge>
          <Badge state="danger">Badge</Badge>
          <Badge state="success">Badge</Badge>
          <Badge state="warning">Badge</Badge>
          <Badge state="gray">Badge</Badge>
        </div>
      </Card>
    </div>
  );
};

export default Buttons;

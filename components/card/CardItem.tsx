import React, { FC } from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';

interface CardItemProps {
  person: {
    name: string;
    age: number;
    sex: string;
  };
}

const CardItem: FC<CardItemProps> = ({ person, ...props }) => {
  return (
    <Card variant='filled'>
      <CardHeader>
        <Heading size='md'>{person.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{person.age}</Text>
      </CardBody>
      <CardFooter>
        <Text>{person.sex}</Text>
      </CardFooter>
    </Card>
  );
};

export default CardItem;

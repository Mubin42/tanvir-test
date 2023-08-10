import CardItem from '@/components/card/CardItem';
import { Flex, Text } from '@chakra-ui/react';

const people = [
  {
    name: 'John Doe',
    age: 25,
    sex: 'Male',
  },
  {
    name: 'Jane Doe',
    age: 24,
    sex: 'Female',
  },
  {
    name: 'John Smith',
    age: 25,
    sex: 'Non Binary',
  },
];

export default function Home() {
  return (
    <>
      <Text>Cards</Text>

      <Flex gap='30px'>
        {people.map((person, index) => {
          return <CardItem key={index} person={person} />;
        })}
      </Flex>
    </>
  );
}

import React, { CSSProperties } from 'react';
import { Tailwind } from '@react-email/tailwind';
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html className="bg-white">
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;

import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';

const LogoBox = styled.span`
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 10px;
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
          >
            Seacal DEV
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;

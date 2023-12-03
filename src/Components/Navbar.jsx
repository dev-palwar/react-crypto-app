import { Box, Flex, useDisclosure, HStack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Nav() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg="#1a202c"
      color="white"
      className='nav'
    >
      <Box display={{ base: 'block', md: 'none' }} onClick={onToggle}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Flex align="center" direction="row" justifyContent="center">
        <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
          <HStack className='menu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/exchange'>Exchanges</Link></li>
          <li><Link to='/coins'>Coin</Link></li>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Nav;




















// import {
//   Box,
//   Flex,
//   Button,
//   useColorModeValue,
//   Stack,
//   useColorMode,
// } from '@chakra-ui/react';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// function Nav() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <Box>Crypto sansaar</Box>
//           <Flex alignItems={'center'}>
//             <Stack direction={'row'} spacing={7}>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//               </Button>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }
//  export default Nav;
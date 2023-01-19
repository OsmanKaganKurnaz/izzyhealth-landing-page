import logo from './logo.svg';
import './App.css';
import { Box, Button, VStack, HStack, Flex, Image, Circle, Icon, Text, InputRightAddon, Input, InputGroup, InputRightElement, Mark, Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <Flex flexDirection={"column"} overflow={"hidden"} w={"100%"}>
      <Flex zIndex={"-1"} position={"absolute"}>
        <Image width={"80vw"} src='/assets/images/background-rect-1.png'></Image>
      </Flex>
      <Flex w={"100%"} justifyContent={"flex-end"} zIndex={"-2"} position={"absolute"}>
        <Image w={"75vw"} src='/assets/images/background-rect-2.png'></Image>
      </Flex>
      <VStack flexDirection={"column"} w={"100vw"} paddingX={"15vw"} justifyContent={"center"}>

        {/* NAVİGATİON BAR */}
        <Flex justifyContent={"center"} pb={"200px"}>
          <Flex justifyContent={"space-around"} width={"70vw"} mt={"50px"}>
            <Flex width={"100%"} alignItems={"center"} >
              <Image height={"35px"} src={"/assets/images/logo.png"}></Image>
            </Flex>
            <Flex flexDirection={"row"} gap={"5"}>
              <Button fontSize={"20px"} textColor={"white"} variant={"none"}>Home</Button>
              <Button fontSize={"20px"} textColor={"white"} variant={"none"}>Product</Button>
              <Button fontSize={"20px"} textColor={"white"} variant={"none"}>Pricing</Button>
              <Button fontSize={"20px"} textColor={"white"} variant={"none"}>Health Professional</Button>
              <Button fontSize={"20px"} textColor={"white"} variant={"none"}>Login</Button>
              <Button _hover={{ bg: "white", color: "#2BA3F4", border: "2px" }} fontSize={"20px"} textColor={"white"} px={"30px"} border={"1px"} borderRadius={"100px"} variant={"none"}>Get Started</Button>
            </Flex>
          </Flex>
        </Flex>

        {/* SECTİON 1 */}
        <Flex flexDirection={"row"} justifyContent={"flex-start"} w={"100%"}>
          <Flex h={"max-content"} width={"40%"}>
            <Text fontWeight={"bold"} color={"white"} fontSize={"40px"}>Personalized health for you and your family from anywhere</Text>
          </Flex>
          <Flex gap={"40px"} pl={"10%"} w={"55%"}>
            <Flex gap={"30px"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"33%"}>
              <Flex borderRadius={"35px"} position={"relative"} style={{ transform: "rotate(-45deg)" }} backgroundColor={"#FCFCFC"} w={"100px"} h={"100px"} justifyContent={"center"} alignItems={"center"} >
                <Circle position={"absolute"} style={{ transform: "rotate(45deg)" }} backgroundColor={"#59CDFF"} size={"80px"}>
                  <Image src='./assets/icons/camera.png' w={"45px"}>
                  </Image>
                </Circle>
              </Flex>
              <Text color={"white"} fontSize={"15px"} fontWeight={"bold"}>Video Message</Text>
            </Flex>
            <Flex gap={"30px"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"33%"}>
              <Flex borderRadius={"35px"} position={"relative"} style={{ transform: "rotate(-45deg)" }} backgroundColor={"#FCFCFC"} w={"100px"} h={"100px"} justifyContent={"center"} alignItems={"center"} >
                <Circle position={"absolute"} style={{ transform: "rotate(45deg)" }} backgroundColor={"#0C81EB"} size={"80px"}>
                  <Image src='./assets/icons/voice-note.png' w={"45px"}>
                  </Image>
                </Circle>
              </Flex>
              <Text color={"white"} fontSize={"15px"} fontWeight={"bold"}>Voice Note</Text>
            </Flex>
            <Flex gap={"30px"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"33%"}>
              <Flex borderRadius={"35px"} position={"relative"} style={{ transform: "rotate(-45deg)" }} backgroundColor={"#FCFCFC"} w={"100px"} h={"100px"} justifyContent={"center"} alignItems={"center"} >
                <Circle position={"absolute"} style={{ transform: "rotate(45deg)" }} backgroundColor={"#4096FC"} size={"80px"}>
                  <Image src='./assets/icons/prescription-message.png' w={"35px"}>
                  </Image>
                </Circle>
              </Flex>
              <Text color={"white"} fontSize={"15px"} fontWeight={"bold"}>Prescription Message</Text>
            </Flex>
          </Flex>
        </Flex>
      </VStack>

      {/* SECTİON 2 */}
      <Flex ml={"15%"} w={"80%"} flexDirection={"row"} pt={"75px"}>
        <InputGroup justifyContent={"flex-start"} w={"440px"} borderColor={"#1781FF"} >
          <Input h={"60px"} backgroundColor={"white"} placeholder='Your email address' borderRadius={"70px"}></Input>
          <InputRightElement h={"60px"} width={"145px"} >
            <Button _hover={{ bg: "white", color: "#2BA3F4", border: "2px" }} h={"60px"} backgroundColor={"#1781FF"} width={"145px"} borderRadius={"70px"} justifyContent={"center"} textColor={"white"} fontSize={"15px"}>
              Subscribe
            </Button>
          </InputRightElement>
        </InputGroup>
        <Image ml={"50px"} w={"950px"} src='./assets/images/component-1.png'></Image>
      </Flex>

      {/* SECTİON 3 */}
      <VStack mt={"50px"} justifyContent={"center"} w={"100%"}>
        <Flex justifyItems={"flex-start"} w={"70%"}>
          <Text fontSize={"45px"} fontWeight={"bold"}>Medical Care Team</Text>
        </Flex>
        <Flex pt={"30px"} justifyItems={"flex-start"} w={"70%"}>
          <Text fontSize={"20px"} >Primary Health Care </Text>
        </Flex>
        <Flex justifyItems={"flex-start"} w={"70%"} flexDirection={"row"}>
          <Flex flexDirection={"column"} w={"35%"} >
            <Flex pt={"40px"} position={"relative"} >
              <Text fontSize={"32px"}>Contact our Doctor for the first time <Mark color={"#3E98FB"} fontSize={"48"} fontWeight={"bold"}>Free</Mark></Text>
              <Button _hover={{ bg: "white", color: "#2BA3F4", border: "2px" }} w={"140px"} h={"60px"} borderRadius={"70px"} top={"100px"} right={"140px"} position={"absolute"} bgColor={"#2BA3F4"} color={"white"}>Let’s Start</Button>
            </Flex>
            <Flex pt={"50px"} w={"75%"} >
              <Text fontSize={"18px"}>Lets compare our service pricing with a few countries we serve</Text>
            </Flex>
          </Flex>
          <Flex pl={"20%"} flexDirection={"row"}>
            <Flex alignItems={"center"} flexDirection={"column"}>
              <Circle bgColor={"#64BEFF"} w={"120px"} h={"120px"}>
                <Image width={"50px"} src='./assets/icons/physician.png'>
                </Image>
              </Circle>
              <Text fontWeight={"bold"} fontSize={"18px"} pt={"20px"}>Physician</Text>
            </Flex>
          </Flex>
          <Flex flexDirection={"row"}>
            <Flex pl={"100px"} alignItems={"center"} flexDirection={"column"}>
              <Circle bgColor={"#BCB6FF"} w={"120px"} h={"120px"}>
                <Image width={"65px"} src='./assets/icons/psychologist.png'>
                </Image>
              </Circle>
              <Text fontWeight={"bold"} fontSize={"18px"} pt={"20px"}>Psychologist</Text>
            </Flex>
          </Flex>
          <Flex pl={"100px"} flexDirection={"row"}>
            <Flex alignItems={"center"} flexDirection={"column"}>
              <Circle bgColor={"#7E7BFF"} w={"120px"} h={"120px"}>
                <Image width={"60px"} src='./assets/icons/nutritionist.png'>
                </Image>
              </Circle>
              <Text fontWeight={"bold"} fontSize={"18px"} pt={"20px"}>Nutritionist</Text>
            </Flex>
          </Flex>
        </Flex>
      </VStack>

      {/* SECTİON 4 */}
      <VStack position={"relative"} mt={"130px"} justifyContent={"center"} w={"100%"}>
        <Flex zIndex={"-1"} alignItems={"space-between"} width={"100%"}>
          <Image w={"1800px"} h={"800px"} position={"absolute"} src='./assets/images/background-thunder-1.png'></Image>
          <Image pt={"40px"} right={"0"} w={"650px"} h={"600px"} position={"absolute"} src='./assets/images/background-thunder-2.png'></Image>
        </Flex>
        <Flex justifyItems={"flex-start"} w={"70%"}>
          <Flex pt={"50px"} gap={"40px"} flexDirection={"column"} justifyContent={"flex-start"} w={"35%"}>
            <Flex gap={"35px"} alignItems={"center"} flexDirection={"row"} justifyContent={"flex-start"}>
              <Image w={"50px"} src='./assets/images/nigeria.png'></Image>
              <Text fontSize={"24px"}>Nigeria</Text>
            </Flex>
            <Flex gap={"35px"} alignItems={"center"} flexDirection={"row"} justifyContent={"flex-start"}>
              <Image w={"50px"} src='./assets/images/india.png'></Image>
              <Text fontSize={"24px"}>India</Text>
            </Flex>
            <Flex gap={"35px"} alignItems={"center"} flexDirection={"row"} justifyContent={"flex-start"}>
              <Image w={"50px"} src='./assets/images/mexico.png'></Image>
              <Text fontWeight={"bold"} fontSize={"36px"}>Mexico</Text>
            </Flex>
            <Flex gap={"35px"} alignItems={"center"} flexDirection={"row"} justifyContent={"flex-start"}>
              <Image w={"50px"} src='./assets/images/costa-rica.png'></Image>
              <Text fontSize={"24px"}>Costa Rica</Text>
            </Flex>
            <Flex gap={"35px"} alignItems={"center"} flexDirection={"row"} justifyContent={"flex-start"}>
              <Image w={"50px"} src='./assets/images/colombia.png'></Image>
              <Text fontSize={"24px"}>Colombia</Text>
            </Flex>
            <Flex gap={"35px"} alignItems={"center"} flexDirection={"row"} justifyContent={"flex-start"}>
              <Image w={"50px"} src='./assets/images/dominician-republic.png'></Image>
              <Text fontSize={"24px"}>Dominician Republic</Text>
            </Flex>
          </Flex>
          <Flex gap={"30px"} pl={"35px"} flexDirection={"column"} h={"625px"} borderTopLeftRadius={"85px"} borderTopRightRadius={"60px"} borderBottomLeftRadius={"60px"} borderBottomRightRadius={"225px"} ml={"20%"} justifyContent={"center"} alignItems={"flex-start"} w={"40%"} bgColor={"white"} boxShadow={"2xl"}>
            <Text fontSize={"30px"}>Pricing</Text>
            <Text w={"80%"} fontSize={"18px"} color={"#1BB6E5"}>Our Subscription <Mark color={"#1BB6E5"} fontWeight={"bold"}>$10</Mark> cost vs 1 time average appointment cost in countries</Text>
            <Flex alignItems={"center"} flexDirection={"row"}>
              <Flex flexDirection={"column"}>
                <Text pb={"10px"} pt={"10px"} fontSize={"30px"} fontWeight={"bold"}>Average Price</Text>
                <Text w={"70%"}>National average price for a cear team per visit</Text>
              </Flex>
              <Text fontSize={"70px"} color={"#1462F9"} fontWeight={"bold"}>$85</Text>
            </Flex>
            <Flex justifyContent={"space-between"} pr={"80px"} mt={"30px"} w={"100%"} flexDirection={"row"}>
              <VStack >
                <Text>Physician</Text>
                <Text fontWeight={"bold"} fontSize={"24px"}>$45</Text>
              </VStack>
              <VStack >
                <Text>Psychologist</Text>
                <Text fontWeight={"bold"} fontSize={"24px"}>$16</Text>
              </VStack>
              <VStack  >
                <Text>Nutritionist</Text>
                <Text fontWeight={"bold"} fontSize={"24px"}>$24</Text>
              </VStack>
            </Flex>
            <Button _hover={{ bg: "white", color: "#2BA3F4", border: "2px" }} mt={"20px"} ml={"10px"} fontWeight={"bold"} borderRadius={"70px"} w={"220px"} h={"60px"} bgColor={"#2BA3F4"} color={"white"}>Get Started</Button>
          </Flex>
        </Flex>
      </VStack>

      {/* SECTİON 5 */}
      <VStack mt={"300px"} justifyContent={"center"} w={"100%"}>
        <Flex flexDirection={"row"} justifyItems={"flex-start"} w={"70%"}>
          <Flex w={"50"} gap={"30px"} flexDirection={"column"}>
            <Text fontWeight={"bold"} w={"55%"} fontSize={"45px"}>What we have to combat in today’s world</Text>
            <Text mt={"20px"} w={"65%"} fontSize={"14px"}>We help you manage and protect you today and tomorrow.Protecting yourself and family is key. We inspire to bring the lowest cost in medical care. The next phase is low cost medicine for all our subscribers.</Text>
            <Button _hover={{ bg: "white", color: "#2BA3F4", border: "2px" }} w={"220px"} h={"60px"} borderRadius={"70px"} color={"white"} bgColor={"#2BA3F4"}>Get Started</Button>
          </Flex>
          <Flex gap={"10px"} flexDirection={"column"}>
            <Flex alignItems={"flex-end"} gap={"10px"} flexDirection={"row"}>
              <Flex justifyContent={"center"} alignItems={"center"} borderTopLeftRadius={"35px"} borderTopRightRadius={"35px"} borderBottomLeftRadius={"35px"} w={"300px"} h={"150px"} bgColor={"#FFEDDD"}>
                <Text textAlign={"center"} fontSize={"20px"}>Cronic deseases</Text>
              </Flex>
              <Flex justifyContent={"center"} alignItems={"center"} borderTopLeftRadius={"35px"} borderTopRightRadius={"35px"} borderBottomRightRadius={"35px"} w={"300px"} h={"200px"} bgColor={"#DCE2FF"}>
                <Text textAlign={"center"} fontSize={"20px"}>Heart diseases</Text>
              </Flex>
            </Flex>
            <Flex alignItems={"flex-start"} gap={"10px"} flexDirection={"row"}>
              <Flex justifyContent={"center"} alignItems={"center"} borderTopLeftRadius={"35px"} borderBottomRightRadius={"35px"} borderBottomLeftRadius={"35px"} w={"300px"} h={"200px"} bgColor={"#F0DDFF"}>
                <Text w={"75%"} textAlign={"center"} fontSize={"20px"}>Pollution relataed sickness</Text>
              </Flex>
              <Flex justifyContent={"center"} alignItems={"center"} borderBottomRightRadius={"35px"} borderTopRightRadius={"35px"} borderBottomLeftRadius={"35px"} w={"300px"} h={"150px"} bgColor={"#E5F9FF"}>
                <Text w={"75%"} textAlign={"center"} fontSize={"20px"}>Global warming potential health risk</Text>
              </Flex>

            </Flex>
          </Flex>
        </Flex>
      </VStack>

      {/* SECTİON 6 */}
      <VStack mt={"200px"}>
        <Flex position={"relative"} gap={"100px"} flexDirection={"row"}>
          <Image ml={"50px"} w={"800px"} src='./assets/images/component-2.png'></Image>
          <Flex gap={"30px"} justifyContent={"center"} flexDirection={"column"}>
            <Image w={"650px"} right={"80px"} top={"50px"} position={"absolute"} zIndex={"-1"} src='./assets/images/background-items-1.png'></Image>
            <Text pb={"20px"} fontSize={"45px"} fontWeight={"bold"}>You don’t need to</Text>
            <Flex alignItems={"center"} flexDirection={"row"}>
              <Image ml={"15px"} w={"20px"} h={"20px"} src='./assets/images/dot-1.png'></Image>
              <Text pl={"20px"} fontSize={"20px"}>Schedule an appointment</Text>
            </Flex>
            <Flex alignItems={"center"} flexDirection={"row"}>
              <Image ml={"15px"} w={"20px"} h={"20px"} src='./assets/images/dot-2.png'></Image>
              <Text pl={"20px"} fontSize={"20px"}>Give up a day of work</Text>
            </Flex>
            <Flex alignItems={"center"} flexDirection={"row"}>
              <Image ml={"15px"} w={"20px"} h={"20px"} src='./assets/images/dot-3.png'></Image>
              <Text w={"60%"} pl={"20px"} fontSize={"20px"}>Ask for medical records. Your records say with you at all times.</Text>
            </Flex>
            <Flex alignItems={"center"} flexDirection={"row"}>
              <Image ml={"15px"} w={"20px"} h={"20px"} src='./assets/images/dot-4.png'></Image>
              <Text w={"60%"} pl={"20px"} fontSize={"20px"}>Continue to see new doctors. Your care team is with you longterm</Text>
            </Flex>
          </Flex>
        </Flex>
      </VStack>

      {/* SECTİON 7 */}
      <VStack position={"relative"} mt={"200px"}>
        <Image zIndex={"-1"} position={"absolute"} src='./assets/images/background-rect-3.png'></Image>
        <Image zIndex={"-1"} position={"absolute"} src='./assets/images/background-rect-4.png'></Image>
        <Text fontSize={"45px"} fontWeight={"bold"}>Our highlighted doctors</Text>
        <Grid pt={"150px"} rowGap={"50px"} columnGap={"150px"} templateColumns={"repeat(3, 2fr)"}>
          <Flex alignItems={"center"} flexDirection={"column"} gap={"15px"} width={"200px"}>
            <Image boxSize={"200px"} border={"8px"} borderColor={"#EEF3FA"} borderRadius={"180px"} src='./assets/images/doctor-1.png'></Image>
            <Text fontSize={"20px"} fontWeight={"bold"} color={"white"}>Harsha Kakkeir</Text>
            <Text color={"white"} fontSize={"14px"}>MBBS M.D. (MEDICINE)</Text>
            <Flex gap={"5px"} flexDirection={"row"}>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#4068D1"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/facebook.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#FF3030"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/youtube.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#56BBF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/twitter.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#1A8BF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/linkedin.png'></Image>
              </Circle>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} flexDirection={"column"} gap={"15px"} width={"200px"}>
            <Image boxSize={"200px"} border={"8px"} borderColor={"#EEF3FA"} borderRadius={"180px"} src='./assets/images/doctor-2.png'></Image>
            <Text fontSize={"20px"} fontWeight={"bold"} color={"white"}>Harsha Kakkeir</Text>
            <Text color={"white"} fontSize={"14px"}>MBBS M.D. (MEDICINE)</Text>
            <Flex gap={"5px"} flexDirection={"row"}>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#4068D1"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/facebook.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#FF3030"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/youtube.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#56BBF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/twitter.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#1A8BF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/linkedin.png'></Image>
              </Circle>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} flexDirection={"column"} gap={"15px"} width={"200px"}>
            <Image boxSize={"200px"} border={"8px"} borderColor={"#EEF3FA"} borderRadius={"180px"} src='./assets/images/doctor-3.png'></Image>
            <Text fontSize={"20px"} fontWeight={"bold"} color={"white"}>Harsha Kakkeir</Text>
            <Text color={"white"} fontSize={"14px"}>MBBS M.D. (MEDICINE)</Text>
            <Flex gap={"5px"} flexDirection={"row"}>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#4068D1"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/facebook.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#FF3030"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/youtube.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#56BBF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/twitter.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#1A8BF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/linkedin.png'></Image>
              </Circle>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} flexDirection={"column"} gap={"15px"} width={"200px"}>
            <Image boxSize={"200px"} border={"8px"} borderColor={"#EEF3FA"} borderRadius={"180px"} src='./assets/images/doctor-4.png'></Image>
            <Text fontSize={"20px"} fontWeight={"bold"} color={"white"}>Harsha Kakkeir</Text>
            <Text color={"white"} fontSize={"14px"}>MBBS M.D. (MEDICINE)</Text>
            <Flex gap={"5px"} flexDirection={"row"}>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#4068D1"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/facebook.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#FF3030"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/youtube.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#56BBF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/twitter.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#1A8BF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/linkedin.png'></Image>
              </Circle>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} flexDirection={"column"} gap={"15px"} width={"200px"}>
            <Image boxSize={"200px"} border={"8px"} borderColor={"#EEF3FA"} borderRadius={"180px"} src='./assets/images/doctor-5.png'></Image>
            <Text fontSize={"20px"} fontWeight={"bold"} color={"white"}>Harsha Kakkeir</Text>
            <Text color={"white"} fontSize={"14px"}>MBBS M.D. (MEDICINE)</Text>
            <Flex gap={"5px"} flexDirection={"row"}>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#4068D1"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/facebook.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#FF3030"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/youtube.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#56BBF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/twitter.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#1A8BF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/linkedin.png'></Image>
              </Circle>
            </Flex>
          </Flex>
          <Flex alignItems={"center"} flexDirection={"column"} gap={"15px"} width={"200px"}>
            <Image boxSize={"200px"} border={"8px"} borderColor={"#EEF3FA"} borderRadius={"180px"} src='./assets/images/doctor-6.png'></Image>
            <Text fontSize={"20px"} fontWeight={"bold"} color={"white"}>Harsha Kakkeir</Text>
            <Text color={"white"} fontSize={"14px"}>MBBS M.D. (MEDICINE)</Text>
            <Flex gap={"5px"} flexDirection={"row"}>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#4068D1"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/facebook.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#FF3030"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/youtube.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#56BBF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/twitter.png'></Image>
              </Circle>
              <Circle border={"1px"} borderColor={"white"} bgColor={"#1A8BF3"} boxSize={"35px"}>
                <Image boxSize={"15px"} src='./assets/images/linkedin.png'></Image>
              </Circle>
            </Flex>
          </Flex>
        </Grid>
        <VStack w={"70%"} pt={"150px"}>

          <Flex position={"relative"} alignItems={"center"} w={"100%"} gap={"240px"} flexDirection={"row"}>
            <Image h={"30px"} src='./assets/images/logo-2.png'></Image>
            <Flex left={"33%"} position={"absolute"} flexDirection={"row"}>
              <Button fontSize={"15px"} textColor={"white"} variant={"none"}>Home</Button>
              <Button fontSize={"15px"} textColor={"white"} variant={"none"}>Product</Button>
              <Button fontSize={"15px"} textColor={"white"} variant={"none"}>Pricing</Button>
              <Button fontSize={"15px"} textColor={"white"} variant={"none"}>About Us</Button>
              <Button fontSize={"15px"} textColor={"white"} variant={"none"}>Contact Us</Button>
            </Flex>
            <Flex right={"-5px"} position={"absolute"} flexDirection={"row"}>
              <Button fontWeight={"light"} fontSize={"15px"} textColor={"white"} variant={"none"}>Trems and conditation</Button>
              <Button fontWeight={"light"} fontSize={"15px"} textColor={"white"} variant={"none"}>Privacy policy</Button>
            </Flex>
          </Flex>
          <Text color={"white"} pt={"50px"} pb={"20px"}>© lezzyhealth2019. All rights reserved.</Text>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default App;
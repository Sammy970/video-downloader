import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Instagram = () => {
  const [instaLink, setInstaLink] = useState("");
  const [doApiCall, setDoApiCall] = useState(false);
  const [resInstaData, setResInstaData] = useState("");

  const submitHandler = () => {
    // console.log(instaLink);
    setDoApiCall(!doApiCall);
  };

  useEffect(() => {
    const getInstaData = async () => {
      const response = await fetch(
        `https://vdser.vercel.app/api/insta?link=${instaLink}`
      );

      await setDoApiCall(!doApiCall);

      // await console.log(response.ok);
      const resData = await response.json();
      console.log(resData);
      setResInstaData(resData);
    };

    if (doApiCall) {
      getInstaData();
    } else {
      return; //
    }
  }, [instaLink, doApiCall]);

  return (
    <Card
      mt={10}
      backdropBlur={20}
      background={"rgba(255, 255, 255, 0.09)"}
      borderRadius={"16px"}
      boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
      backdropFilter={"blur(5px)"}
      border={"1px solid rgba(255, 255, 255, 0.14)"}
    >
      <CardBody p={5} fontFamily={"'Hind', sans-serif"} color={"white"}>
        <Text
          mb={10}
          fontFamily={"'Khand', sans-serif"}
          fontWeight={600}
          fontSize={{ base: 25, md: 35 }}
        >
          Instagram
        </Text>
        {/* <Text mb={10}>https://fb.watch/m_jEGodCb7</Text> */}
        <FormControl mb={8}>
          <FormLabel
            fontSize={{ base: 16, md: 18 }}
            fontWeight={400}
            letterSpacing={1}
          >
            Insta Link ( इंस्टा लिंक )
          </FormLabel>
          <Input
            type="text"
            mb={8}
            value={instaLink}
            onChange={(e) => setInstaLink(e.target.value)}
          />
          <Button onClick={submitHandler}>Submit</Button>
        </FormControl>

        {resInstaData && (
          <HStack justifyContent={"center"} gap={10}>
            <Link
              p={3}
              backgroundColor={"white"}
              borderRadius={5}
              color={"#171717"}
              target="_blank"
              fontWeight={"extrabold"}
              href={resInstaData.data[0].url}
            >
              Download
            </Link>
          </HStack>
        )}
      </CardBody>
    </Card>
  );
};

export default Instagram;

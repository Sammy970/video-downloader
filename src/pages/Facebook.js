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

const Facebook = () => {
  const [fbVideoLink, setFbVideoLink] = useState("");
  const [doApiCall, setDoApiCall] = useState(false);
  const [resFbData, setResFbData] = useState("");

  const submitHandler = () => {
    // console.log(fbVideoLink);
    setDoApiCall(!doApiCall);
  };

  useEffect(() => {
    const getFbVideoData = async () => {
      const response = await fetch(
        `https://vdser.vercel.app/api/fb?video=${fbVideoLink}`
      );

      await setDoApiCall(!doApiCall);

      // await console.log(response.ok);
      const resData = await response.json();
      console.log(resData);
      setResFbData(resData);
    };

    if (doApiCall) {
      getFbVideoData();
    } else {
      return; //
    }
  }, [fbVideoLink, doApiCall]);

  return (
    <Card
      mt={10}
      backdropBlur={20}
      background={"rgba(255, 255, 255, 0.22)"}
      borderRadius={"16px"}
      boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
      backdropFilter={"blur(5px)"}
      border={"1px solid rgba(255, 255, 255, 0.14)"}
    >
      <CardBody fontFamily={"'Hind', sans-serif"} color={"white"}>
        <Text
          mb={10}
          fontFamily={"'Khand', sans-serif"}
          fontWeight={600}
          fontSize={{ base: 20, md: 35 }}
        >
          Facebook
        </Text>
        {/* <Text mb={10}>https://fb.watch/m_jEGodCb7</Text> */}
        <FormControl mb={10}>
          <FormLabel fontSize={18} fontWeight={400} letterSpacing={1}>
            FB Video Link ( फेसबुक वीडियो लिंक )
          </FormLabel>
          <Input
            type="text"
            mb={10}
            value={fbVideoLink}
            onChange={(e) => setFbVideoLink(e.target.value)}
          />
          <Button onClick={submitHandler}>Submit</Button>
        </FormControl>

        {resFbData && (
          <>
            <Text mb={6}>{resFbData.title}</Text>
            <HStack justifyContent={"center"} gap={10}>
              <Link
                p={3}
                backgroundColor={"white"}
                borderRadius={5}
                color={"#171717"}
                fontWeight={"bold"}
                target="_blank"
                href={resFbData.hd}
              >
                Download HD
              </Link>
              <Link
                p={3}
                backgroundColor={"white"}
                borderRadius={5}
                color={"#171717"}
                fontWeight={"bold"}
                target="_blank"
                href={resFbData.sd}
              >
                Download SD
              </Link>
            </HStack>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default Facebook;

import {
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
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
    <div className="App">
      <Container color={"white"}>
        <Text mb={10}>Facebook Video Downloader</Text>
        <Text mb={10}>https://fb.watch/m_jEGodCb7</Text>
        <FormControl mb={10}>
          <FormLabel>FB Video Link (फेसबुक वीडियो लिंक)</FormLabel>
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
                Download in HD
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
                Download in SD
              </Link>
            </HStack>
          </>
        )}
      </Container>
    </div>
  );
}

export default App;

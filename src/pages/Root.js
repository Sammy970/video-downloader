import { Button, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Container maxW={"1000px"} color={"white"}>
      <Text
        mb={10}
        // color={"black"}
        fontFamily={"'Array', sans-serif"}
        fontWeight={700}
        fontSize={{ base: 40, sm: 50, md: 55, lg: 60 }}
      >
        Video Downloader
      </Text>
      <Grid
        maxW={"50%"}
        margin={"auto"}
        justifyContent={"center"}
        gap={{ base: 4, md: 20 }}
        templateColumns={"1fr 1fr 1fr"}
      >
        <GridItem>
          <Button>
            <Link to={"/fb"}>Facebook</Link>
          </Button>
        </GridItem>
        <GridItem>
          <Button>
            <Link to={"/insta"}>Instagram</Link>
          </Button>
        </GridItem>
        <GridItem>
          <Button>
            <Link to={"/youtube"}>Youtube</Link>
          </Button>
        </GridItem>
      </Grid>
      <Outlet />
    </Container>
  );
};

export default Root;

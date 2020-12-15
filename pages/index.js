import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Center, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{height: "100%"}}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        h="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
        bg="#0f5788"
      >
        <GridItem rowSpan={2} colSpan={3} >
          <Image
            src="/grandcast.png"
            alt="GRANDcast logo"
            height={534}
            width={866}
          />
        </GridItem>
        <GridItem mt={4} colSpan={2}><Center>
          <Heading color="white">GRANDcast.FM</Heading></Center>
          <Center><Text color="white" fontSize="2xl">Episode 3: Parsing Podcast Feeds</Text></Center>
          
        </GridItem>

      </Grid>
    </div>
  );
}

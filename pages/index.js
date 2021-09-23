import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Center, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ height: "100%" }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        h="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
        bg="#018bff"
      >
         {/* <GridItem m={4} mt={5} rowSpan={2} colSpan={2}>
           <Image
             src="/flat-graph.png"
             alt="Stream Logo"
             height={1080}
             width={1920}
           />
         </GridItem> */}
        <GridItem mt={8} colSpan={5} rowSpan={2}>
          <Center>
            <Heading color="white" size="3xl" mb={2}>Graph Data Visualization</Heading>
          </Center>
          <Center>
            <Text color="white" fontSize="3xl">
              With GraphQL & react-force-graph
            </Text>
            </Center>
        </GridItem>
      </Grid>
    </div>
  );
}

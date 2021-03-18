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
        bg="#0f5788"
      >
        <GridItem m={4} mt={5} rowSpan={2} colSpan={2}>
          <Image
            src="/grandcastlogo.png"
            alt="GRANDcast logo"
            height={500}
            width={600}
          />
        </GridItem>
        <GridItem mt={8} colSpan={3}>
          <Center>
            <Heading color="white" size="3xl" mb={2}>GRANDcast.FM</Heading>
          </Center>
          <Center>
            <Text color="white" fontSize="3xl" as="u">
              Episode 6:
            </Text>
            </Center>
            <Center>
            <Text color="white" fontSize="3xl">
            Next.js, Chakra UI, &amp; Apollo Client
            </Text>
          </Center>
        </GridItem>
      </Grid>
    </div>
  );
}

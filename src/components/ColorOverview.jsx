import React, { useEffect, useState } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const ColorOverview = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      const response = await fetch("https://api.color.pizza/v1/");
      const data = await response.json();
      setColors(data.colors);
    };

    fetchColors();
  }, []);

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6}>
      {colors.map((color) => (
        <GridItem key={color.hex}>
          <Box w="100%" h="100px" bg={`#${color.hex}`} borderRadius="md" mb={2} />
          <Text textAlign="center">{color.name}</Text>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ColorOverview;

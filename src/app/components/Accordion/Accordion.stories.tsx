import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Accordion } from "./Accordion";
import { AccordionHeader } from "./AccordionHeader/AccordionHeader";
import { AccordionContent } from "./AccordionContent/AccordionContent";
import { Text } from "@/app/components/Text";
import { Box } from "@/app/components/Box";

export default {
  title: "Components/Accordion",
  component: Accordion,
  args: {
    hasBorderTop: false,
    hasBorderBottom: false,
  },
  argTypes: {
    isOpen: {
      control: false,
    },
    hasBorderTop: {
      control: "boolean",
    },
    hasBorderBottom: {
      control: "boolean",
    },
  },
} as Meta<typeof Accordion>;

export const Default: StoryFn<typeof Accordion> = ({
  hasBorderBottom,
  hasBorderTop,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Accordion
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        hasBorderBottom={hasBorderBottom}
        hasBorderTop={hasBorderTop}
      >
        <AccordionHeader className="items-center">
          <Text isMarginless type="h2" isBold>
            Click me one
          </Text>
        </AccordionHeader>
        <AccordionContent>
          <Text type="h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            molestias doloribus expedita eos quia quisquam fugit praesentium
            quas iure quo excepturi vitae adipisci sequi soluta nihil officiis,
            dignissimos nulla natus.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            et in natus sed placeat, rem adipisci ullam ipsum obcaecati ipsa
            optio architecto voluptatem, odit incidunt necessitatibus soluta
            aperiam neque. Laborum.
          </Text>
        </AccordionContent>
      </Accordion>
      <Accordion
        isOpen={!isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        hasBorderBottom={hasBorderBottom}
        hasBorderTop={hasBorderTop}
      >
        <AccordionHeader className="items-center">
          <Text isMarginless type="h2" isBold>
            Click me two
          </Text>
        </AccordionHeader>
        <AccordionContent>
          <Text type="h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            molestias doloribus expedita eos quia quisquam fugit praesentium
            quas iure quo excepturi vitae adipisci sequi soluta nihil officiis,
            dignissimos nulla natus.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            et in natus sed placeat, rem adipisci ullam ipsum obcaecati ipsa
            optio architecto voluptatem, odit incidunt necessitatibus soluta
            aperiam neque. Laborum.
          </Text>
        </AccordionContent>
      </Accordion>
    </Box>
  );
};

export const Custom: StoryFn<typeof Accordion> = ({
  hasBorderBottom,
  hasBorderTop,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Accordion
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        hasBorderBottom={hasBorderBottom}
        hasBorderTop={hasBorderTop}
      >
        <AccordionHeader className="items-center" isIconVisible={false}>
          <Text isMarginless type="h2" isBold>
            Click me one
          </Text>
        </AccordionHeader>
        <AccordionContent>
          <Text type="h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            molestias doloribus expedita eos quia quisquam fugit praesentium
            quas iure quo excepturi vitae adipisci sequi soluta nihil officiis,
            dignissimos nulla natus.
          </Text>
        </AccordionContent>
      </Accordion>
      <Accordion
        isOpen={!isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
        hasBorderBottom={hasBorderBottom}
        hasBorderTop={hasBorderTop}
      >
        <AccordionHeader className="items-center" isIconVisible={false}>
          <Text isMarginless type="h2" isBold>
            Click me two
          </Text>
        </AccordionHeader>
        <AccordionContent>
          <Text type="h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            molestias doloribus expedita eos quia quisquam fugit praesentium
            quas iure quo excepturi vitae adipisci sequi soluta nihil officiis,
            dignissimos nulla natus.
          </Text>
        </AccordionContent>
      </Accordion>
    </Box>
  );
};

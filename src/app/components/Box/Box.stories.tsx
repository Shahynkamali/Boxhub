import type { Meta, StoryFn } from "@storybook/react";
import { Column } from "@/app/components/Column";
import { Columns } from "@/app/components/Columns";
import { Text } from "@/app/components/Text";
import { Box } from "./Box";

export default {
  title: "Components/Box",
  component: Box,
  args: {
    isOverflowVisible: false,
    isPaddingless: false,
  },
  argTypes: {
    isOverflowVisible: {
      control: "boolean",
      description: "Allows items within the box to overflow the box",
    },
    isPaddingless: {
      control: "boolean",
      description: "removes all padding within the box",
    },
  },
} as Meta<typeof Box>;

export const Default: StoryFn<typeof Box> = ({
  isOverflowVisible,
  isPaddingless,
}) => {
  return (
    <Box isOverflowVisible={isOverflowVisible} isPaddingless={isPaddingless}>
      Just a box
    </Box>
  );
};

export const Example = () => {
  return (
    <Box>
      <Columns>
        <Column columnWidth="one">
          <div className="flex items-center mb-4">
            <Text isBold isMarginless type="h3">
              View
            </Text>
          </div>
          <Text className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            molestias error iure eveniet tenetur dolores magnam explicabo fuga
            sapiente ab perferendis modi iste quas, alias debitis veritatis
            facilis laborum nisi.
          </Text>
        </Column>
      </Columns>
    </Box>
  );
};

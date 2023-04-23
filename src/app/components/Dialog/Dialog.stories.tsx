import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Button } from "@/app/components/Button";
import { Column } from "@/app/components/Column";
import { Columns } from "@/app/components/Columns";
import { Text } from "@/app/components/Text";
import { Dialog } from "./Dialog";
import { DialogHeader } from "./DialogHeader";
import { DialogContent } from "./DialogContent";
import { DialogFooter } from "./DialogFooter";

export default {
  title: "Components/Dialog",
  component: Dialog,
  args: {
    size: "medium",
  },
  argTypes: {
    options: ["small", "medium", "large"],
    control: { type: "radio" },
  },
  parameters: {
    docs: {
      description: {
        component: `A Dialog is a centred container that houses a title, description (optional), and actions.`,
      },
    },
  },
} as Meta<typeof Dialog>;

export const Default: StoryFn<typeof Dialog> = ({ size }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)}>Trigger Dialog</Button>
      <Dialog size={size} isOpen={isDialogOpen} onClose={handleCloseDialog}>
        <DialogHeader onClose={handleCloseDialog}>
          <Text isMarginless type="h2" className="text-left">
            Hasta la vista, baby
          </Text>
        </DialogHeader>
        <DialogContent>
          <Columns>
            <Column>
              <Text>lala</Text>
            </Column>
          </Columns>
        </DialogContent>
        <DialogFooter>
          <Columns>
            <Column>
              <Button isOutlined onClick={handleCloseDialog}>
                No thanks :(
              </Button>
            </Column>
            <Column>
              <Button onClick={handleCloseDialog}>Sounds good :)</Button>
            </Column>
          </Columns>
        </DialogFooter>
      </Dialog>
    </>
  );
};

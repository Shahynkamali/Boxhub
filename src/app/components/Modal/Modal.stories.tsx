import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Box } from "@/app/components/Box";
import { Button } from "@/app/components/Button";
import { Column } from "@/app/components/Column";
import { Columns } from "@/app/components/Columns";

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `A Modal is a component that blocks out the functionality of the screen behind it. You can put any kind of content
        into a Modal or build custom components on top of it. If you're looking to surface a message with actions, you should have a look at the Dialog component.`,
      },
    },
  },
} as Meta<typeof Modal>;

export const Default: StoryFn<typeof Modal> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <Button onClick={() => setIsModalOpen(true)}>Trigger Modal</Button>
      </div>
      <Modal isOpen={isModalOpen}>
        <Columns>
          <Column>
            <Column columnWidth="small">
              <Button
                isOutlined
                onClick={handleCloseModal}
                className="self-end"
              >
                Close me
              </Button>
            </Column>
            <Column className="items-center justify-center p-4 text-center h-[80vh]">
              <Box className="w-full md:w-3/5 lg:w-2/5">
                <Columns>
                  <Column>
                    <Columns>
                      <Column columnWidth="one">
                        <div>Some content here</div>
                      </Column>
                      <Column columnWidth="one">
                        <div>Some content there</div>
                      </Column>
                    </Columns>
                    <Columns>
                      <Column columnWidth="one">
                        <Button isOutlined onClick={handleCloseModal}>
                          No thanks
                        </Button>
                      </Column>
                      <Column columnWidth="one">
                        <Button onClick={handleCloseModal}>
                          Got it, thanks!
                        </Button>
                      </Column>
                    </Columns>
                  </Column>
                </Columns>
              </Box>
            </Column>
          </Column>
        </Columns>
      </Modal>
    </>
  );
};

import type { FC } from "react";
import { Button, ModalProps } from "components";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "components";

interface Props extends Pick<ModalProps, "isOpen"> {
  onClose: () => void;
}

const MapDialog: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Dialog onClose={onClose} isOpen={isOpen}>
      <DialogHeader onClose={onClose}>Map</DialogHeader>
      <DialogContent>hello</DialogContent>
      <DialogFooter>
        <Button isOutlined onClick={onClose}>
          Close
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export { MapDialog };

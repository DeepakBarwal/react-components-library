import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam
        nulla, posuere a nulla sit amet, aliquet rutrum quam. Integer sit amet
        diam risus. Vestibulum efficitur odio eu odio maximus, eget elementum
        risus blandit. Praesent enim nunc, dapibus ac imperdiet ut, sodales quis
        lacus. Quisque sollicitudin a tortor aliquam pretium. Vestibulum sit
        amet metus ultrices, finibus dui ultrices, luctus orci. Integer sit amet
        tincidunt purus. Aenean dignissim lacus ipsum, ac luctus arcu
        scelerisque vel. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam
        nulla, posuere a nulla sit amet, aliquet rutrum quam. Integer sit amet
        diam risus. Vestibulum efficitur odio eu odio maximus, eget elementum
        risus blandit. Praesent enim nunc, dapibus ac imperdiet ut, sodales quis
        lacus. Quisque sollicitudin a tortor aliquam pretium. Vestibulum sit
        amet metus ultrices, finibus dui ultrices, luctus orci. Integer sit amet
        tincidunt purus. Aenean dignissim lacus ipsum, ac luctus arcu
        scelerisque vel. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam
        nulla, posuere a nulla sit amet, aliquet rutrum quam. Integer sit amet
        diam risus. Vestibulum efficitur odio eu odio maximus, eget elementum
        risus blandit. Praesent enim nunc, dapibus ac imperdiet ut, sodales quis
        lacus. Quisque sollicitudin a tortor aliquam pretium. Vestibulum sit
        amet metus ultrices, finibus dui ultrices, luctus orci. Integer sit amet
        tincidunt purus. Aenean dignissim lacus ipsum, ac luctus arcu
        scelerisque vel. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam
        nulla, posuere a nulla sit amet, aliquet rutrum quam. Integer sit amet
        diam risus. Vestibulum efficitur odio eu odio maximus, eget elementum
        risus blandit. Praesent enim nunc, dapibus ac imperdiet ut, sodales quis
        lacus. Quisque sollicitudin a tortor aliquam pretium. Vestibulum sit
        amet metus ultrices, finibus dui ultrices, luctus orci. Integer sit amet
        tincidunt purus. Aenean dignissim lacus ipsum, ac luctus arcu
        scelerisque vel. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam
        nulla, posuere a nulla sit amet, aliquet rutrum quam. Integer sit amet
        diam risus. Vestibulum efficitur odio eu odio maximus, eget elementum
        risus blandit. Praesent enim nunc, dapibus ac imperdiet ut, sodales quis
        lacus. Quisque sollicitudin a tortor aliquam pretium. Vestibulum sit
        amet metus ultrices, finibus dui ultrices, luctus orci. Integer sit amet
        tincidunt purus. Aenean dignissim lacus ipsum, ac luctus arcu
        scelerisque vel. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam
        nulla, posuere a nulla sit amet, aliquet rutrum quam. Integer sit amet
        diam risus. Vestibulum efficitur odio eu odio maximus, eget elementum
        risus blandit. Praesent enim nunc, dapibus ac imperdiet ut, sodales quis
        lacus. Quisque sollicitudin a tortor aliquam pretium. Vestibulum sit
        amet metus ultrices, finibus dui ultrices, luctus orci. Integer sit amet
        tincidunt purus. Aenean dignissim lacus ipsum, ac luctus arcu
        scelerisque vel. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam
        nulla, posuere a nulla sit amet, aliquet rutrum quam. Integer sit amet
        diam risus. Vestibulum efficitur odio eu odio maximus, eget elementum
        risus blandit. Praesent enim nunc, dapibus ac imperdiet ut, sodales quis
        lacus. Quisque sollicitudin a tortor aliquam pretium. Vestibulum sit
        amet metus ultrices, finibus dui ultrices, luctus orci. Integer sit amet
        tincidunt purus. Aenean dignissim lacus ipsum, ac luctus arcu
        scelerisque vel. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam
        nulla, posuere a nulla sit amet, aliquet rutrum quam. Integer sit amet
        diam risus. Vestibulum efficitur odio eu odio maximus, eget elementum
        risus blandit. Praesent enim nunc, dapibus ac imperdiet ut, sodales quis
        lacus. Quisque sollicitudin a tortor aliquam pretium. Vestibulum sit
        amet metus ultrices, finibus dui ultrices, luctus orci. Integer sit amet
        tincidunt purus. Aenean dignissim lacus ipsum, ac luctus arcu
        scelerisque vel. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam
        nulla, posuere a nulla sit amet, aliquet rutrum quam. Integer sit amet
        diam risus. Vestibulum efficitur odio eu odio maximus, eget elementum
        risus blandit. Praesent enim nunc, dapibus ac imperdiet ut, sodales quis
        lacus. Quisque sollicitudin a tortor aliquam pretium. Vestibulum sit
        amet metus ultrices, finibus dui ultrices, luctus orci. Integer sit amet
        tincidunt purus. Aenean dignissim lacus ipsum, ac luctus arcu
        scelerisque vel. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam
        nulla, posuere a nulla sit amet, aliquet rutrum quam. Integer sit amet
        diam risus. Vestibulum efficitur odio eu odio maximus, eget elementum
        risus blandit. Praesent enim nunc, dapibus ac imperdiet ut, sodales quis
        lacus. Quisque sollicitudin a tortor aliquam pretium. Vestibulum sit
        amet metus ultrices, finibus dui ultrices, luctus orci. Integer sit amet
        tincidunt purus. Aenean dignissim lacus ipsum, ac luctus arcu
        scelerisque vel. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum diam
        nulla, posuere a nulla sit amet, aliquet rutrum quam. Integer sit amet
        diam risus. Vestibulum efficitur odio eu odio maximus, eget elementum
        risus blandit. Praesent enim nunc, dapibus ac imperdiet ut, sodales quis
        lacus. Quisque sollicitudin a tortor aliquam pretium. Vestibulum sit
        amet metus ultrices, finibus dui ultrices, luctus orci. Integer sit amet
        tincidunt purus. Aenean dignissim lacus ipsum, ac luctus arcu
        scelerisque vel. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
    </div>
  );
};

export default ModalPage;

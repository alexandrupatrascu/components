import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage({}) {
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
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Agreement we need to accept!</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse
        alias quis quas culpa unde? Eligendi porro fugiat accusamus excepturi
        similique doloribus animi eius, quasi perferendis culpa maxime. Magni,
        rerum? Tempore porro doloremque sequi aliquid fugiat dignissimos iure
        itaque voluptas, assumenda aut at ea reiciendis libero pariatur, tempora
        hic architecto accusamus corrupti nesciunt sapiente modi beatae minima
        reprehenderit! Distinctio, nobis. Voluptas vel tempore aliquam dolore
        fuga, nobis dolor aperiam repudiandae sunt laboriosam quibusdam, libero
        quos exercitationem suscipit harum? Voluptate exercitationem ullam optio
        quasi, suscipit at tempore porro deserunt facilis ipsa. Provident
        accusamus veniam laboriosam excepturi inventore dolorem impedit,
        aspernatur numquam nulla, labore itaque. Sequi quae tempora deleniti
        provident illo porro et molestias laudantium, assumenda cumque
        asperiores ea facilis exercitationem! Officiis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse
        alias quis quas culpa unde? Eligendi porro fugiat accusamus excepturi
        similique doloribus animi eius, quasi perferendis culpa maxime. Magni,
        rerum? Tempore porro doloremque sequi aliquid fugiat dignissimos iure
        itaque voluptas, assumenda aut at ea reiciendis libero pariatur, tempora
        hic architecto accusamus corrupti nesciunt sapiente modi beatae minima
        reprehenderit! Distinctio, nobis. Voluptas vel tempore aliquam dolore
        fuga, nobis dolor aperiam repudiandae sunt laboriosam quibusdam, libero
        quos exercitationem suscipit harum? Voluptate exercitationem ullam optio
        quasi, suscipit at tempore porro deserunt facilis ipsa. Provident
        accusamus veniam laboriosam excepturi inventore dolorem impedit,
        aspernatur numquam nulla, labore itaque. Sequi quae tempora deleniti
        provident illo porro et molestias laudantium, assumenda cumque
        asperiores ea facilis exercitationem! Officiis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse
        alias quis quas culpa unde? Eligendi porro fugiat accusamus excepturi
        similique doloribus animi eius, quasi perferendis culpa maxime. Magni,
        rerum? Tempore porro doloremque sequi aliquid fugiat dignissimos iure
        itaque voluptas, assumenda aut at ea reiciendis libero pariatur, tempora
        hic architecto accusamus corrupti nesciunt sapiente modi beatae minima
        reprehenderit! Distinctio, nobis. Voluptas vel tempore aliquam dolore
        fuga, nobis dolor aperiam repudiandae sunt laboriosam quibusdam, libero
        quos exercitationem suscipit harum? Voluptate exercitationem ullam optio
        quasi, suscipit at tempore porro deserunt facilis ipsa. Provident
        accusamus veniam laboriosam excepturi inventore dolorem impedit,
        aspernatur numquam nulla, labore itaque. Sequi quae tempora deleniti
        provident illo porro et molestias laudantium, assumenda cumque
        asperiores ea facilis exercitationem! Officiis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse
        alias quis quas culpa unde? Eligendi porro fugiat accusamus excepturi
        similique doloribus animi eius, quasi perferendis culpa maxime. Magni,
        rerum? Tempore porro doloremque sequi aliquid fugiat dignissimos iure
        itaque voluptas, assumenda aut at ea reiciendis libero pariatur, tempora
        hic architecto accusamus corrupti nesciunt sapiente modi beatae minima
        reprehenderit! Distinctio, nobis. Voluptas vel tempore aliquam dolore
        fuga, nobis dolor aperiam repudiandae sunt laboriosam quibusdam, libero
        quos exercitationem suscipit harum? Voluptate exercitationem ullam optio
        quasi, suscipit at tempore porro deserunt facilis ipsa. Provident
        accusamus veniam laboriosam excepturi inventore dolorem impedit,
        aspernatur numquam nulla, labore itaque. Sequi quae tempora deleniti
        provident illo porro et molestias laudantium, assumenda cumque
        asperiores ea facilis exercitationem! Officiis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse
        alias quis quas culpa unde? Eligendi porro fugiat accusamus excepturi
        similique doloribus animi eius, quasi perferendis culpa maxime. Magni,
        rerum? Tempore porro doloremque sequi aliquid fugiat dignissimos iure
        itaque voluptas, assumenda aut at ea reiciendis libero pariatur, tempora
        hic architecto accusamus corrupti nesciunt sapiente modi beatae minima
        reprehenderit! Distinctio, nobis. Voluptas vel tempore aliquam dolore
        fuga, nobis dolor aperiam repudiandae sunt laboriosam quibusdam, libero
        quos exercitationem suscipit harum? Voluptate exercitationem ullam optio
        quasi, suscipit at tempore porro deserunt facilis ipsa. Provident
        accusamus veniam laboriosam excepturi inventore dolorem impedit,
        aspernatur numquam nulla, labore itaque. Sequi quae tempora deleniti
        provident illo porro et molestias laudantium, assumenda cumque
        asperiores ea facilis exercitationem! Officiis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse
        alias quis quas culpa unde? Eligendi porro fugiat accusamus excepturi
        similique doloribus animi eius, quasi perferendis culpa maxime. Magni,
        rerum? Tempore porro doloremque sequi aliquid fugiat dignissimos iure
        itaque voluptas, assumenda aut at ea reiciendis libero pariatur, tempora
        hic architecto accusamus corrupti nesciunt sapiente modi beatae minima
        reprehenderit! Distinctio, nobis. Voluptas vel tempore aliquam dolore
        fuga, nobis dolor aperiam repudiandae sunt laboriosam quibusdam, libero
        quos exercitationem suscipit harum? Voluptate exercitationem ullam optio
        quasi, suscipit at tempore porro deserunt facilis ipsa. Provident
        accusamus veniam laboriosam excepturi inventore dolorem impedit,
        aspernatur numquam nulla, labore itaque. Sequi quae tempora deleniti
        provident illo porro et molestias laudantium, assumenda cumque
        asperiores ea facilis exercitationem! Officiis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse
        alias quis quas culpa unde? Eligendi porro fugiat accusamus excepturi
        similique doloribus animi eius, quasi perferendis culpa maxime. Magni,
        rerum? Tempore porro doloremque sequi aliquid fugiat dignissimos iure
        itaque voluptas, assumenda aut at ea reiciendis libero pariatur, tempora
        hic architecto accusamus corrupti nesciunt sapiente modi beatae minima
        reprehenderit! Distinctio, nobis. Voluptas vel tempore aliquam dolore
        fuga, nobis dolor aperiam repudiandae sunt laboriosam quibusdam, libero
        quos exercitationem suscipit harum? Voluptate exercitationem ullam optio
        quasi, suscipit at tempore porro deserunt facilis ipsa. Provident
        accusamus veniam laboriosam excepturi inventore dolorem impedit,
        aspernatur numquam nulla, labore itaque. Sequi quae tempora deleniti
        provident illo porro et molestias laudantium, assumenda cumque
        asperiores ea facilis exercitationem! Officiis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse
        alias quis quas culpa unde? Eligendi porro fugiat accusamus excepturi
        similique doloribus animi eius, quasi perferendis culpa maxime. Magni,
        rerum? Tempore porro doloremque sequi aliquid fugiat dignissimos iure
        itaque voluptas, assumenda aut at ea reiciendis libero pariatur, tempora
        hic architecto accusamus corrupti nesciunt sapiente modi beatae minima
        reprehenderit! Distinctio, nobis. Voluptas vel tempore aliquam dolore
        fuga, nobis dolor aperiam repudiandae sunt laboriosam quibusdam, libero
        quos exercitationem suscipit harum? Voluptate exercitationem ullam optio
        quasi, suscipit at tempore porro deserunt facilis ipsa. Provident
        accusamus veniam laboriosam excepturi inventore dolorem impedit,
        aspernatur numquam nulla, labore itaque. Sequi quae tempora deleniti
        provident illo porro et molestias laudantium, assumenda cumque
        asperiores ea facilis exercitationem! Officiis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse
        alias quis quas culpa unde? Eligendi porro fugiat accusamus excepturi
        similique doloribus animi eius, quasi perferendis culpa maxime. Magni,
        rerum? Tempore porro doloremque sequi aliquid fugiat dignissimos iure
        itaque voluptas, assumenda aut at ea reiciendis libero pariatur, tempora
        hic architecto accusamus corrupti nesciunt sapiente modi beatae minima
        reprehenderit! Distinctio, nobis. Voluptas vel tempore aliquam dolore
        fuga, nobis dolor aperiam repudiandae sunt laboriosam quibusdam, libero
        quos exercitationem suscipit harum? Voluptate exercitationem ullam optio
        quasi, suscipit at tempore porro deserunt facilis ipsa. Provident
        accusamus veniam laboriosam excepturi inventore dolorem impedit,
        aspernatur numquam nulla, labore itaque. Sequi quae tempora deleniti
        provident illo porro et molestias laudantium, assumenda cumque
        asperiores ea facilis exercitationem! Officiis
      </p>
    </div>
  );
}

export default ModalPage;

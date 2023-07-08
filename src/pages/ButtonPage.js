import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          yoooo
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase /> Sell
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Whoooo
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Dang
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;

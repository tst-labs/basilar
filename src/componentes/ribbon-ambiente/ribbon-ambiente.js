import { Ribbon } from "react-dev-ribbon";
import PropTypes from "prop-types";

const DESENVOLVIMENTO = "DESENVOLVIMENTO";
const PRODUCAO = "PRODUCAO";

const RibbonAmbiente = (props) => {
  let ambiente = props.ambiente.toUpperCase();
  if (ambiente === "") {
    ambiente = DESENVOLVIMENTO;
  }
  return (
    ambiente !== PRODUCAO && (
      <Ribbon
        width={200}
        //angle={0.00001}
        //        style={{ top: 0, opacity: 0.3, left: 0 }}
        style={{ opacity: 0.3 }}
      >
        {ambiente}
      </Ribbon>
    )
  );
};

RibbonAmbiente.propTypes = {
  ambiente: PropTypes.string.isRequired
};

export default RibbonAmbiente;

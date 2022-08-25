import { Ribbon } from "react-dev-ribbon";
import PropTypes from "prop-types";

const DESENVOLVIMENTO = "DESENVOLVIMENTO";
const PRODUCAO = "PRODUCAO";

const RibbonAmbiente = (props) => {
  let ambiente = props.ambiente.toUpperCase();
  if (ambiente === "") {
    ambiente = DESENVOLVIMENTO;
  }
  return ambiente !== PRODUCAO && <Ribbon width={200}>{ambiente}</Ribbon>;
};

RibbonAmbiente.propTypes = {
  ambiente: PropTypes.string.isRequired
};

export default RibbonAmbiente;

import { styles as sy } from "./dropSelect.styles"

const Select:React.FC = () => {
    return (
 <sy.container >
  <option value="Português">Português</option>
  <option value="Matemática">Matemática</option>
  <option value="Ciência">Ciência</option>
  </sy.container>
    );
    };

    export {Select};
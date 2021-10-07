import { words } from "lodash";

function capitalize(string) {
  if (typeof string != "string") {
    throw "only strings accepted";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalize;

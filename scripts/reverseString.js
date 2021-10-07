function reverse(string) {
  if (typeof string != "string") {
    throw "this is not a string";
  }
  return string.split("").reverse("").join("");
}
export default reverse;

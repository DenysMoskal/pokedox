export const padZero = (num: number) => {
  if (num >= 100) {
    return num.toString();
  } else if (num >= 10) {
    return "0" + num.toString();
  } else {
    return "00" + num.toString();
  }
};

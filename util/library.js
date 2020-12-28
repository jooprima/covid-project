export const sum = function (key, props) {
  if (props.isGlobal == false) {
    switch (key) {
      case "Confirmed":
        return props.data[0].positif;
      case "Recovered":
        return props.data[0].sembuh;
      case "Deaths":
        return props.data[0].meninggal;
      case "Active":
        return props.data[0].dirawat;
      default:
        return 0;
    }
  } else {
    switch (key) {
      case "Confirmed":
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Confirmed;
        }, 0);
      case "Recovered":
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Recovered;
        }, 0);
      case "Deaths":
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Deaths;
        }, 0);
      case "Active":
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Active;
        }, 0);
      default:
        return 0;
    }
  }
};

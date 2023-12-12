
const FormatPrice = ({ price }) => {
  // const { } = price;
  //bn-BD -- taka sin end e chole jay and all bangla
  //en-IN -- taka sin start e chole jay and number in english
  //bn-IN -- taka sin start e chole jay and all bangla
  return Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'BDT',
    currencyDisplay: 'narrowSymbol', //currency sign choto ase
    // currencyDisplay: 'symbol', //BDT ase
    maximumFractionDigits: 2,
  }).format(price / 100);
};

export default FormatPrice;
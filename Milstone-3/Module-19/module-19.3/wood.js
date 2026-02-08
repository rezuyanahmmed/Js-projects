// mot hishab............

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairwood = 5;
  const perTablewood = 15;
  const perBedwood = 30;

  const chairTotalwood = chairQuantity * perChairwood;
  const tableTotalwood = tableQuantity * perTablewood;
  const bedTotalwood = bedQuantity * perBedwood;

  const totalWood = chairTotalwood + tableTotalwood + bedTotalwood;

  return totalWood;

}
const wood = woodQuantity(4, 2, 1);
console.log(wood);

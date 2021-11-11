const now = new Date();
export const yearsWorking = now.getFullYear() - 2015;
const monthsSincebeginning = yearsWorking * 12;
const monthsSinceThisYear = now.getMonth() + 1;
const totalMonths = monthsSincebeginning + monthsSinceThisYear;

const workingRatio = 1 / 2;
const hoursOfWorkInAMonth = 150;
const hoursWorking = totalMonths * hoursOfWorkInAMonth * workingRatio;

export default hoursWorking; // HARDER - BETTER - FASTER - STRONGER

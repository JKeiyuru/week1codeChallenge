function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate NSSF Deductions (use the fixed percentage (i.e 6%) of gross salary)
    let nssfDeductions = calculateNSSFDeductions(grossSalary);

    // Calculate NHIF Deductions
    let nhifDeductions = calculateNHIFDeductions(grossSalary);

    // Calculate PAYE (Tax) 
    let taxableIncome = grossSalary - (nssfDeductions + nhifDeductions);
    let payeeTax = calculatePAYETax(taxableIncome);

    // Calculate net salary (gross salary minus all deductions)
    let netSalary = grossSalary - (nssfDeductions + nhifDeductions + payeeTax);

    // Results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`PAYE (Tax): ${payeeTax}`);
    console.log(`Net Salary: ${netSalary}`);

    return netSalary;
}

// Function to calculate NSSF deductions 
function calculateNSSFDeductions(grossSalary) {
    return grossSalary * 0.06; 
}

// Function to calculate NHIF deductions
function calculateNHIFDeductions(grossSalary) {
    if (grossSalary <= 5999){
         return 150
    } else if (grossSalary <= 7999){
         return 300
    } else if (grossSalary <= 11999){
         return 400
    } else if (grossSalary <= 14999){
         return 500
    } else if (grossSalary <= 19999){
         return 600
    } else if (grossSalary <= 24999){ 
        return 750
    } else if (grossSalary <= 29999){ 
        return 850
    } else if (grossSalary <= 34999){
        return 900
    } else if (grossSalary <= 39999){
         return 950
    } else if (grossSalary <= 44999){
         return 1000
    } else if (grossSalary <= 49999){
         return 1100
    } else if (grossSalary <= 59999){
         return 1200
    } else if (grossSalary <= 69999){
         return 1300
    } else if (grossSalary <= 79999){ 
         return 1400
    } else if (grossSalary <= 89999){ 
         return 1500
    } else if (grossSalary <= 99999){
         return 1600
    } else if (grossSalary >= 100000){
         return 1700}
    return 0; //Default/Fallback return value, incase an unexpected error occurs.
}

// Function to calculate PAYE 
function calculatePAYETax(taxableIncome) {
    let tax = 0;

    if (taxableIncome <= 24000) {
        tax = taxableIncome * 0.10  // 10% for income up to 24,000 Ksh
    } else if (taxableIncome <= 32333) {
        tax = 24000 * 0.10 + (taxableIncome - 24000) * 0.25  // 25% for income between 24,001 and 32,333 Ksh
    } else if (taxableIncome <= 500000) {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (taxableIncome - 32333) * 0.30  // 30% for income above 32,334
    } else if (taxableIncome <= 800000) {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (taxableIncome - 500000) * 0.325
    } else {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (taxableIncome - 800000) * 0.35
    }

    return tax;
}

let basicSalary = parseFloat(prompt("Enter your basic salary:"))
let benefits = parseFloat(prompt("Enter your benefits:"))
calculateNetSalary(basicSalary, benefits)

/**
 * ? Make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.
 * How to do calculation
 * An employee pays 12% of his income as tax. He spends 50% of after-tax income on 'needs', 30% after tax-income on 'wants', and 20% after-tax income on 'savings'.
The tax is 12% and you will decide the income. what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

Output:
fiftyThirtyTwenty(10000) ➞ { Needs: 4400, Wants: 2640, Savings: 1760 }

fiftyThirtyTwenty(50000) ➞ { Needs: 22000, Wants: 13200, Savings: 8800 }
 */

const calculateBudget = income => {
    let afterTaxIncome = income - income * (12 / 100);
    return {
        Needs: afterTaxIncome * 0.5,
        Wants: afterTaxIncome * 0.3,
        Savings: afterTaxIncome * 0.2
    }

}
console.log(calculateBudget(50000));
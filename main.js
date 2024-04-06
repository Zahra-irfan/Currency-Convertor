#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EURO: 0.92,
    GBP: 0.79,
    CAD: 1.35,
    AUD: 1.52,
    JPY: 151.61,
    INR: 83.29,
    PKR: 277.85,
    SAR: 3.75,
    SGD: 1.34,
    TRY: 32.03,
};
let input = await inquirer.prompt([{
        name: "fromCurrency",
        message: "Hello User, please select the currency you wish to convert!",
        type: "list",
        choices: ["USD",
            "EURO",
            "GBP",
            "CAD",
            "AUD",
            "JPY",
            "INR",
            "PKR",
            "SAR",
            "SGD",
            "TRY"]
    },
    {
        name: "toCurrency",
        message: "Please select the currency you'd like your currency to be converted to.",
        type: "list",
        choices: ["USD",
            "EURO",
            "GBP",
            "CAD",
            "AUD",
            "JPY",
            "INR",
            "PKR",
            "SAR",
            "SGD",
            "TRY"]
    },
    {
        name: "amount",
        message: "Please enter the method you'd like to choose to enter the amount you wish to be converted.",
        type: "list",
        choices: ["Input manually", "Quick add"]
    }]);
if (input.amount === "Input manually") {
    let add = await inquirer.prompt({
        name: "value",
        message: "Please enter the amount you wish to convert",
        type: "number",
    });
    if (!add.value) {
        console.log("Please enter a value! You can not skip this.");
    }
    else {
        let ToCurrency = currency[input.toCurrency];
        let FromCurrency = currency[input.fromCurrency];
        let Amount = add.value;
        let baseCurrency = Amount / FromCurrency;
        let convertedCurrency = baseCurrency * ToCurrency;
        console.log(`This is your given amount in ${input.toCurrency}:
    ${convertedCurrency.toFixed(2)}.`);
    }
}
if (input.amount === "Quick add") {
    let add = await inquirer.prompt({
        name: "value",
        message: "Please select the amount you wish to convert",
        type: "list",
        choices: ["1", "10", "1000", "2000", "5000", "10000", "50000"]
    });
    let ToCurrency = currency[input.toCurrency];
    let FromCurrency = currency[input.fromCurrency];
    let Amount = add.value;
    let baseCurrency = Amount / FromCurrency;
    let convertedCurrency = baseCurrency * ToCurrency;
    console.log(`This is your given amount in ${input.toCurrency}:
     ${convertedCurrency.toFixed(2)}.`);
}

/**
 * ? Write a function addApplicant() to add a applicants to the array of applicants. The applicants you add must be an object with a key of name and a value of whatever you'd like.

* ? Write a function addLanguage() that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

* ? Write a function addCountry() that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the 'country' and the value as an object with the keys of "capital" and "population" and their respective values.
 */

import { applicantList } from './data.js'
import { addApplicant, addLanguage, addCountry } from './functions.js'

addApplicant("Joe");
addLanguage("italian", "Ciao");
addCountry("Germany", "Berlin", 9000000)
console.log(applicantList);
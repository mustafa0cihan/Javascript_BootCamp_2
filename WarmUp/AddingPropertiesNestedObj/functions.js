import { applicantList } from './data.js'

const addApplicant = speakerName => {
    applicantList.applicants.push({
        name: speakerName
    })
    return applicantList;
}

const addLanguage = (language, helloInLanguage) => {
    applicantList.data.languages[language] = {
        hello: helloInLanguage
    }
    return applicantList;
}

const addCountry = (name, capital, population) => {
    applicantList.data.continents.europe.countries[name] = {
        capital: capital,
        population: population
    }
}

export { addApplicant, addLanguage, addCountry, applicantList };
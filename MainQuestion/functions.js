import schoolData from './data.js'

// Todo: List all class names in a order as [8A,8B,...]
const classNames =
    schoolData
        .map(pClass => `${pClass.grade}${pClass.group}`)
        .sort();

// !==================================================
// Todo: Add an email account to the list (lastname.firstname@hicoders.ch) by using firstname, lastname of the students and with @hicoders.ch domain name.
const listWithEmail = schoolData.map(pClass => {
    pClass.students.forEach(student => student['email'] = `${student.lastname.toLowerCase()}.${student.firstname.toLowerCase()}@hicoders.ch`)
    return pClass;
})

// !=====================================================
// Todo: Find the profession(s) of the richest parents.
const professionOfRichestParents = () => {
    // find maximum income for each class 
    const richestParents = schoolData.map((pClass) => {
        const students = pClass.students;
        const eachClassRichest = students.reduce((maxIncome, student) => {
            return Math.max(maxIncome, student.parents.income)
        }, 0)

        return eachClassRichest;
    })
    // Get the highest income among the all classes
    const highestIncome = richestParents.sort((a, b) => b - a)[0];
    // Find the student whose parent has highest income 
    const theProfessions = schoolData
        .flatMap(pClass => {
            const richestStudent = pClass.students
                .filter(student => student.parents.income === highestIncome)
                // Create the result What if there are two highest income
                .map(student => {
                    return { ...{}, 'professionOfFather': student.parents.professionOfFather, 'professionOfMother': student.parents.professionOfMother }
                })
            return richestStudent
        })
    return theProfessions;
}
// !=======================================================
// Todo: Create a login information for each student and add it as an object (logInfo:{username:fLastname,password:the day of the birthdate+the last_three_chars_of_the_lastname+zipCode})

const listWithLogin = schoolData.map(pClass => {
    pClass.students.forEach(student => {
        const userName = `${student.firstname.toLowerCase()[0]}${student.lastname.toLowerCase()}`
        const birthday = new Date(student.bod).getDate();
        const zipCode = student.parents.address.zip
        const theLastLetters = student.lastname.slice(-3)

        const loginObj = {}
        loginObj['username'] = userName
        loginObj['password'] = `${birthday}${theLastLetters}${zipCode}`;
        student['logInfo'] = loginObj;
    })
    return pClass;
})

// !=======================================================
// Todo: Create a new list that shows only classes, students id, fullname,gender and average of the lessons for each student.
const averageOfLessonsEachStudent = schoolData.map(pClass => {
    // first find average of the students
    const newStudentArr = pClass.students.map(student => {
        let count = 0
        let total = 0;
        for (let lesson in student.lessons) {
            count++;
            total += student.lessons[lesson];
        }
        const average = total / count;
        // Create a new student object
        return { ...{}, 'id': student.id, 'fullname': `${student.firstname} ${student.lastname}`, 'gender': student.gender, 'average': average };
    })

    return { ...{}, 'class': `${pClass.grade}${pClass.group}`, 'students': newStudentArr };
})
// !=======================================================
// Todo: Create a new list that shows only classnames and all lessons's average.[{class:'8D',averages:{math:45,ict:63, chemistry: 54, biology: 46 }},{...}]
// function calculates average for each given lesson
const calculateAverage = (pLessonsArr, pLesson) => {
    const total = pLessonsArr.reduce((total, next) => {
        total += next.lessons[`${pLesson}`];
        return total;
    }, 0)
    return Math.round(total / pLessonsArr.length);
}
// creates new list
const classesAndLessonsAverages = schoolData.map(pClass => {
    const mathAverage = calculateAverage(pClass.students, 'math')
    // const mathTotal = pClass.students.reduce((total, next) => {
    //     total += next.lessons.math;
    //     return total
    // }, 0)
    // const mathAverage = Math.round(mathTotal / pClass.students.length);
    const ictAverage = calculateAverage(pClass.students, 'ict')
    // const ictTotal = pClass.students.reduce((total, next) => {
    //     total += next.lessons.ict;
    //     return total
    // }, 0)
    // const ictAverage = Math.round(ictTotal / pClass.students.length);
    const chemistryAverage = calculateAverage(pClass.students, 'chemistry')
    // const chemistryTotal = pClass.students.reduce((total, next) => {
    //     total += next.lessons.chemistry;
    //     return total
    // }, 0)
    // const chemistryAverage = Math.round(chemistryTotal / pClass.students.length);
    const biologyAverage = calculateAverage(pClass.students, 'biology')
    // const biologyTotal = pClass.students.reduce((total, next) => {
    //     total += next.lessons.biology;
    //     return total
    // }, 0)
    // const biologyAverage = Math.round(biologyTotal / pClass.students.length);

    const averages = { ...{}, 'math': mathAverage, 'ict': ictAverage, 'chemistry': chemistryAverage, 'biology': biologyAverage }
    return { ...{}, 'class': `${pClass.grade}${pClass.group}`, 'averages': averages }
})
// !=======================================================
// Todo: Create a new list that shows only classnames and all lessons's average.[{class:8A, average:75},{...}]

const onlyClassesAndAverages = classesAndLessonsAverages.map(pClass => {
    let total = 0, count = 0;
    for (let lesson in pClass.averages) {
        count++;
        total += pClass.averages[lesson];
    }
    const average = Math.round(total / count);
    return { ...{}, 'class': pClass.class, 'average': average };
})

// !=======================================================
// Todo: Show the GPA of the school(unnecessary)
// !=======================================================
// Todo: Find the most succesfull student(s) among the all classes.

const mostSuccessfulStudent = () => {
    // Find maximum grade for each class
    const highestGradeInClass = averageOfLessonsEachStudent.map(pclass => {
        const maxAverageClass = pclass.students.reduce((maxAverage, next) => Math.max(maxAverage, next.average), 0)
        return maxAverageClass;
    })
    // Find the highest grade of all classes
    const highestAverage = Math.max(...highestGradeInClass);
    // Find the most successful student. Filter the students with the highest average.
    const theMostSuccessfulStudent = averageOfLessonsEachStudent.flatMap(pClass => {
        return pClass.students
            .filter(student => student.average === highestAverage)
            .map(student => `The most successfull student is -- ${student.fullname} -- with the ${student.average} points.`)
    })
    return theMostSuccessfulStudent;
}

// !=======================================================
// Todo: Make a statistic [{className="8A",male:6,female:8,total:14},{...}]

const classMaleFemale = schoolData.map(pClass => {
    let female = 0;
    let male = 0;
    pClass.students.forEach(student => {
        if (student.gender === 'Female') {
            female++;
        } else {
            male++;
        }
    })
    return { ...{}, 'className': `${pClass.grade}${pClass.group}`, 'female': female, 'male': male, 'total': pClass.students.length };
})
// !=======================================================
// Todo: Find the male, female and total number of students.{male:24,female:29,total:53}
const allMaleFemale = () => {
    const female = classMaleFemale.reduce((acc, next) => acc += next.female, 0)
    const male = classMaleFemale.reduce((acc, next) => acc += next.male, 0)
    return { ...{}, 'female': female, 'male': male, 'total': female + male };
}
// !=======================================================
// Todo: Make a list of shirt sizes and amount of need.{S:6,M:18,L:12,XL:4,...}

const sizes = () => {
    // create a new array list from all different shirt sizes ['S','M','2XL',...]
    const sizeArray = schoolData.flatMap(pClass => pClass.students.map(student => student.shirtsize));
    const uniqueSizes = new Set(sizeArray);
    // create a new object with all sizes. Zero '0' is default amount           
    let sizeObj = {}
    uniqueSizes.forEach(size => {
        sizeObj[size] = 0;
    })
    // We have an obj { L: 0, XL: 0, '2XL': 0, S: 0, XS: 0, M: 0, '3XL': 0 }
    // In the next function, this object's property values will be increased
    uniqueSizes.forEach(size => {
        schoolData.forEach(pClass => pClass.students.forEach(student => {
            if (student.shirtsize === size) {
                sizeObj[`${size}`]++;
            }
        }))
    })
    return sizeObj;
}

// !=======================================================
// Todo: Make a student list who was born in 2008.[{fullname:"John Doe",bod:24/11/2008},{...}] 

const bornIn2008 = schoolData.flatMap(pClass => {
    // filter the students who was born in 2008
    return pClass.students.filter(student => {
        const birthYear = new Date(student.bod).getFullYear();
        return birthYear === 2008
        // with map return new object
    }).map(student => {
        return { ...{}, 'fullname': `${student.firstname} ${student.lastname}`, 'bod': student.bod }
    })
})

// !=======================================================
// Todo: Compare the female and male students grade. Exmp Output: Female students are more successful
const whoIsBetter = () => {
    let countMale = 0;
    let countFemale = 0;
    let femaleGradeTotal = 0;
    let maleGradeTotal = 0;

    averageOfLessonsEachStudent.forEach(pClass => pClass.students.forEach(student => {
        if (student.gender === "Female") {
            countFemale++;
            femaleGradeTotal += student.average;
        } else {
            countMale++;
            maleGradeTotal += student.average;
        }
    }))
    const femaleAverage = femaleGradeTotal / countFemale;
    const maleAverage = maleGradeTotal / countMale;

    return femaleAverage > maleAverage ? "Female students are more successful" : "Male students are more successful";
}

// !=======================================================
// Todo: School secretary wants to send a warning letter to some of the parents whose children grades' are so bad. You need to help the secretary. First task: find the three(3) children who has the lowest grade in his/her class({id,fullname,average of the grades}). Second task: Make a new list with those group of three students parents' name and their addresses.

// console.log(averageOfLessonsEachStudent[0].students)
const wishesOfTheSecretary = () => {
    // First task
    const threeFromEachClass = averageOfLessonsEachStudent.flatMap(pClass => {
        return pClass.students
            .sort((a, b) => a.average - b.average)
            .slice(0, 3)
            .map(student => {
                delete student['gender'];
                return student
            })
    })
    // Second task
    const parentsAddress = threeFromEachClass.flatMap(pStudent => {
        return schoolData.flatMap(pClass => {
            return pClass.students
                .filter(student => student.id === pStudent.id)
                .map(student => {
                    return { ...{}, 'fatherName': student.parents.fathername, 'motherName': student.parents.mothername, 'address': student.parents.address }
                })
        })
    })
    const allTasks = { ...{}, 'firstTask': threeFromEachClass, 'secondTask': parentsAddress };
    return allTasks;
}

// !=======================================================

export { classNames, listWithEmail, professionOfRichestParents, listWithLogin, averageOfLessonsEachStudent, classMaleFemale, allMaleFemale, classesAndLessonsAverages, onlyClassesAndAverages, mostSuccessfulStudent, sizes, bornIn2008, whoIsBetter, wishesOfTheSecretary };


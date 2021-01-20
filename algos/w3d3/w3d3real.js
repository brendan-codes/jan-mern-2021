/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [{
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

// iterative solution
function webMD(ailments, meds) {
    // set a max
    let maxSymptomMatchCount = 0;

    // set a map
    const ailmentsMap = {};
    let matchedMeds = [];

    // create map of ailments to avoid relooping
    for (const ailment of ailments) {
        ailmentsMap[ailment] = true;
    }
    // {"fever": true, "pain": true}

    // loop your meds..
    for (const med of meds) {
        let symptomsMatchCount = 0;

        // loop the symptoms of each med...
        for (const symptom of med.treatableSymptoms) {
            // check if symptom is in our ailmentsMap
            if (ailmentsMap.hasOwnProperty(symptom)) { // 0(1)
                symptomsMatchCount++;
            }
        }

        // so we matched symptoms from our ailment to this med...
        if (symptomsMatchCount > 0) {
            // if they're equal to our max, add the med, it's good
            if (symptomsMatchCount === maxSymptomMatchCount) {
                matchedMeds.push(med.name);
                // if they're more than our max...
            } else if (symptomsMatchCount > maxSymptomMatchCount) {
                // update the max, toss the entire old array of matched meds
                // start a new array with this better med as the first element
                maxSymptomMatchCount = symptomsMatchCount;
                matchedMeds = [med.name];
            }
        }
    }

    return matchedMeds;
}


const webMDfunctional = (ailments, medications) =>
                medications
                        .filter(medicine =>  // filter medications, look at each
                            ailments.every(sym => // loop our ailments, test each one with .every
                                medicine.treatableSymptoms.includes(sym) // => check if treatable
                            )
                        )
                        .map(({name}) => name); // map the result and only keep names


console.log(webMD(["inflammation", "instant death"], medications));

// .every checks each element with a test and returns true if all the elements pass
// think questions like "does every number divide by 5 in this list of numbers?"




/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/
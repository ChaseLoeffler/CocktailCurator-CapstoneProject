import React from 'react';

const IngredientList = ({cocktailInfo}) => {

    let info = cocktailInfo?.drinks[0]
    let ingreMeasurements = {};
    for (const thing in info){
        if (thing?.includes('strMeasure')){
            // console.log(`${thing} ${info[thing]}`)
            ingreMeasurements[`${thing}`] = info[thing];
        }
    }

    for (const item in ingreMeasurements){
        if (ingreMeasurements[item] === null){
            delete ingreMeasurements[`${item}`];
        }
    }
    console.log(ingreMeasurements);

    let ingreNames = {};
    for (const thing in info){
        if (thing?.includes('strIngredient')){
            // console.log(`${thing} ${info[thing]}`)
            ingreNames[`${thing}`] = info[thing];
        }
    }

    for (const item in ingreNames){
        if (ingreNames[item] === null){
            delete ingreNames[`${item}`];
        }
    }
    console.log(ingreNames);
    
    let ingredients = Object.values(ingreNames);
    console.log(ingredients);

    let measurements = Object.values(ingreMeasurements);
    console.log(measurements);

    const measList = measurements?.map(el=>(
        <p>{el}:</p>
    ));
    const ingrList = ingredients.map(el =>(
        <p>{el}</p>
    ));
    return (
        <div>
            <ul style={{"justify-content": "flex-start"}}>
                <li style={{"padding-right": "1rem"}}>
                {measList}
                </li>
                <li>
                {ingrList}
                </li>
            </ul>
        </div>
    );
}
 
export default IngredientList;
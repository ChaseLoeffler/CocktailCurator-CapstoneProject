import React from 'react';

const IngredientList = ({cocktailInfo}) => {

    let info = cocktailInfo?.drinks[0]
    let ingreMeasurements = {};
    for (const thing in info){
        if (thing?.includes('strMeasure')){
            ingreMeasurements[`${thing}`] = info[thing];
        }
    }

    for (const item in ingreMeasurements){
        if (ingreMeasurements[item] === null){
            delete ingreMeasurements[`${item}`];
        }
    }
    

    let ingreNames = {};
    for (const thing in info){
        if (thing?.includes('strIngredient')){
            ingreNames[`${thing}`] = info[thing];
        }
    }

    for (const item in ingreNames){
        if (ingreNames[item] === null){
            delete ingreNames[`${item}`];
        }
    }
    
    
    let ingredients = Object.values(ingreNames);
    

    let measurements = Object.values(ingreMeasurements);
    

    const measList = measurements?.map((el,index)=>(
        <p key={index}>{el}:</p>
    ));
    const ingrList = ingredients.map((el,index) =>(
        <p key={index}>{el}</p>
    ));
    return (
        <div>
            <ul style={{"justifyContent": "flex-start"}}>
                <li style={{"paddingRight": "1rem"}}>
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
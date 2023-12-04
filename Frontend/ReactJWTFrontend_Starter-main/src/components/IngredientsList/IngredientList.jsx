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
        if (ingreMeasurements[item] === null || ingreMeasurements[item] === ""){
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
        if (ingreNames[item] === null || ingreNames[item] === "" ){
            delete ingreNames[`${item}`];
        }
    }
    
    
    let ingredients = Object.values(ingreNames);
    console.log(ingredients)
    

    let measurements = Object.values(ingreMeasurements);
    console.log(measurements)


    let wholeList = [];
    for(let i = 0; i < ingredients.length; i++){
        if(measurements[i]=== null || measurements[i] === undefined){
            wholeList.push(ingredients[i])
        }else{
            wholeList.push(measurements[i]+":" +" "+ ingredients[i])
        }
    }
    console.log(wholeList)

    const list = wholeList.map((el,index) =>{
        return(<ul key={index}>
            <li>{el}</li>
        </ul>);
    });
    console.log(list);

    return (
        <div>
            <ul>
                <li>
                {list}
                </li>
            </ul>
        </div>
    );
}
 
export default IngredientList;
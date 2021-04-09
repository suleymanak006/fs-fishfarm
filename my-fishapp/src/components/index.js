import React from 'react';

const Fish = (props) => {

    return (
        <div className="dataList">
            {props.fish.map((fish) => (
                        
                        <div className="text">
                            <p><b>---------------------------------------------</b></p>
                            <p><b>Fish Type:</b>{fish.fishType}</p>
                            <p><b>Price:</b>{fish.price}</p>
                            <p><b>Entry Days:</b>{fish.entryDate.toLocaleDateString()}</p>
                            <p><b>Duration in Days:</b>{fish.durationInDays}</p>
                            <p><b>Item Weights:</b>{fish.itemWeightInGrams}</p>
                            <p><b>Country:</b>{fish.originCountry}</p>
                            <p><b>Season:</b>{fish.season}</p>
                            <p><b>Stock Volume:</b>{fish.stockVolumeInKg}</p>
                            <p><b>Sale Location:</b>{fish.saleLocations.toString()}</p>
                        </div>
                    ))
            }
        </div>
    )

}
export default Fish;

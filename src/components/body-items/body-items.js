

   
import React, { useState } from "react";
import list from '../app/data';
import BodyItem from '../body-item/body-item';
import './body-items.css';

const BodyItems = ({ handleClick }) => {
  return (
    <section>
        <div className="container">
            <div className="wrapper">
                {list.map((item) => (
                    <BodyItem key={item.id} item={item} handleClick={handleClick} />
                ))}

            </div>
        </div>
    </section>
  );
};

export default BodyItems;
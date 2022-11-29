import React, { useEffect, useState } from "react";

import items from "./data";
import { Summary } from "./Summary";

export const Items = () => {
  const [countersData, setCountersData] = useState([]);
  const [SummaryData, setSummaryData] = useState({total_items : 0, total_m2: 0, subtotal: 0,tax: 0, total: 0, due_today: 0});
  const [flag, setFlag] = useState(0);

  const incrementCounter = (id) => {
    const updatedCounters = countersData.map((data) => {
      if (data.id !== id) return data;
      return { ...data, value: data.value + 1 };
    });
    setCountersData(updatedCounters);
    setFlag(1);
  };
  const clear = () => {
    const updatedCounters = countersData.map((data) => {
     
      if (data.value === 0) return data;
      return { ...data, value: 0 };
    });
    setCountersData(updatedCounters);
    setFlag(1);
  };


  const calculate = () => {
    let totalAcumulator=0;
    let m2=0;
    countersData.map((data) =>{
      if(data.value !==0){
   
         totalAcumulator+=data.value;
         m2 += (items[data.id-1].price * data.value);
    }
    })
    setSummaryData({
      total_items : totalAcumulator,
      total_m2: (m2).toFixed(2),
      subtotal: (m2*200).toFixed(1),
      tax: (((m2*200)/100)*16).toFixed(1),
      total: (m2*200+((m2*200)/100)*16).toFixed(1),
      due_today: (((m2*200+((m2*200)/100)*16)/100)*50).toFixed(1),
    })
  
  };

  const decrementCounter = (id) => {
    const updatedCounters = countersData.map((data) => {
      if (data.id !== id) return data;
      return { ...data, value: data.value - 1 };
    });
    setCountersData(updatedCounters);
  };

  useEffect(() => {
    const data = [];
    items.map((item) => {
      data.push({ id: item.id, value: 0 });
    });
    setCountersData(data);
  }, []);

  // replaces method calculate with on click
  useEffect(() => {
    calculate();
    setFlag(0)
  }, [flag]);

  


  return (
    <>
      <div className="cards">
        {items.map((item) => {
          return (
            <div className="card-group" key={item.id}>
              <div className="card">
                <img src={item.image} />
                <h1 className="title">{item.name}</h1>
                </div>
                {countersData.map((data) => {
                  
                  {if (item.id === data.id){
                    return (
                      <div  key={data.id} className="counter">
                        <button
                          className="less"
                          onClick={(e) => {
                            decrementCounter(data.id);
                          }}
                        >
                          -
                        </button>
  
                        <input type="text" placeholder={data.value} disabled></input>
                        <button
                          className="more"
                          onClick={(e) => {
                            incrementCounter(data.id);
                          }}
                        >
                          +
                        </button>
                      </div>
                    );
                  }}
                  
                })}
            
            </div>
          );
        })}
        ;
      </div>

      <div className="button-group">
        <button onClick={(e) => {
                            clear();
                          }}>Clear</button>
        <button onClick={(e) => {
                            calculate();
                          }}>Calculate</button>
      </div>

      <Summary
        SummaryData = {SummaryData}
      />
    </>
  );
};

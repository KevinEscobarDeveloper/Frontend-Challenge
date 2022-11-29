import React from "react";

export const Summary = (SummaryData ) => {

  return (
    <div className="summary">
      <h1>Summary</h1>
      <div className="cards">

          <div className="card">
              <div className="body-card"> 
                <p>Total items</p>
                <p>{SummaryData.SummaryData.total_items}</p>
              </div>
              <div className="body-card"> 
                <p>Total M<sup>2</sup></p>
                <p>{SummaryData.SummaryData.total_m2}</p>
              </div>
              <div className="body-card"> 
                <p>Subtotal</p>
                <p>{SummaryData.SummaryData.subtotal}</p>
              </div>
              <div className="body-card"> 
                <p>Tax</p>
                <p>{SummaryData.SummaryData.tax}</p>
              </div>
              <div className="total"> 
                <p>Total </p>
                <p>{SummaryData.SummaryData.total}</p>
              </div>
              <div className="total" > 
                <p>Due Today 50%</p>
                <p>{SummaryData.SummaryData.due_today}</p>
              </div>
          </div>

      </div>
    </div>
  );
};

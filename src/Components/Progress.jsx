import React from 'react'

export default function Progress({donations, target}) {
  let sum = 0
  for (let donation of donations) {
    sum += donation.amount
  }


  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${sum}</span> of
        <span className="secondary">${target}</span>
      </h2>
    </section>
  );
}

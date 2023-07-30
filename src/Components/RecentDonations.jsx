import React from "react";
export default function RecentDonations({donations}) {

  

  const listDonations = donations.map((donation) => {
    return (
      <>
      <li>
        <span>{donation.name} donated ${donation.amount}</span>{donation.caption}
      </li>
      </>
    )
  })

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        
        {listDonations}
         
      </ul>
    </section>
  );
}

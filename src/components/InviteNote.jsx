import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
  return (
      <section id="invite-note">
          <div className="invite-note-wrapper">
              <h5>An Invitation from:</h5>
              <h2>Soudagar Fayaz Ahmad Sahab(Late)</h2>
              <p>and</p>
              <h2>Mrs. Soudagar Shaheen Begum</h2>

              {/* <h5 className="address mb-3">
                    Proprietor: Mohammed Ali Jewellers,
                    <br /> Shroff Bazaar, Adoni.
                </h5> */}
              <h5 className="address mb-3">
                  Residence: MIG - 14, APHB Colony,
                  <br /> Adoni, Kurnool Dist.,
                  <br /> Andhra Pradesh - 518 301.
              </h5>
              {/* <p className="address">
                  Contact: <br />
                  +91 93910 98812.
              </p> */}
          </div>
      </section>
  );
}

export default InviteNote;

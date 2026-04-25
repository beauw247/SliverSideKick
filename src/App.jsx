import React, { useMemo, useState } from "react";


const issueGuides = {
  provider: {
    label: "Finding an in-network provider",
    shortDescription: "Prepare to ask which doctors, specialists, or facilities are covered by your plan.",
    questions: [
      "Is this provider in-network for my specific plan?",
      "Are there different costs for primary care, specialists, urgent care, or hospitals?",
      "Do I need a referral before I can see this provider?",
      "How can I confirm the provider is still accepting this insurance?"
    ],
    readyInfo: [
      "The provider name, location, and phone number",
      "The type of care you are looking for",
      "Your general plan name, if you know it",
      "Your preferred travel distance or appointment location"
    ],
    nextSteps: [
      "Ask the representative where you can verify the provider listing later.",
      "Write down the representative's name, call date, and reference number if available.",
      "Call the provider's office to confirm they accept your exact plan before scheduling."
    ]
  },
  billing: {
    label: "Billing or unexpected cost",
    shortDescription: "Prepare to discuss a bill, explanation of benefits, or charge you did not expect.",
    questions: [
      "Can you explain what this charge is for in plain language?",
      "Was this claim processed as in-network or out-of-network?",
      "Does this amount count toward my deductible, copay, or coinsurance?",
      "Is there an appeal, correction, or review process if the charge seems wrong?"
    ],
    readyInfo: [
      "The bill date and amount",
      "The provider or facility name",
      "The date of service",
      "Any claim number shown on the bill or explanation of benefits"
    ],
    nextSteps: [
      "Compare the provider bill with the insurance explanation of benefits.",
      "Ask whether the bill is final or still being reviewed.",
      "Request written instructions for disputing or appealing the charge if needed."
    ]
  },
  authorization: {
    label: "Prior authorization",
    shortDescription: "Prepare to ask whether a service, procedure, medication, or equipment needs approval first.",
    questions: [
      "Does this service require prior authorization under my plan?",
      "Who is responsible for submitting the authorization request?",
      "What information is needed before the request can be reviewed?",
      "How long does the review usually take?"
    ],
    readyInfo: [
      "The name of the requested service, procedure, medication, or equipment",
      "The ordering provider's name and office phone number",
      "The expected appointment or start date",
      "Any reference number you have already received"
    ],
    nextSteps: [
      "Ask how you will be notified when a decision is made.",
      "Confirm whether you should wait for approval before receiving the service.",
      "Write down any deadlines, reference numbers, and follow-up phone numbers."
    ]
  },
  prescription: {
    label: "Prescription coverage",
    shortDescription: "Prepare to ask about medication cost, coverage, pharmacy options, or alternatives.",
    questions: [
      "Is this medication covered by my plan?",
      "Is there a generic or lower-cost covered alternative?",
      "Does the medication require prior authorization, step therapy, or a quantity limit?",
      "Would mail order or a preferred pharmacy change the cost?"
    ],
    readyInfo: [
      "The medication name and dosage",
      "The prescribing provider's name",
      "The pharmacy name and location",
      "Whether you need a short-term or ongoing supply"
    ],
    nextSteps: [
      "Ask for the covered medication tier and estimated cost.",
      "Confirm whether the prescribing provider needs to send extra information.",
      "Write down any covered alternatives to discuss with your provider."
    ]
  },
  referral: {
    label: "Appointment or referral confusion",
    shortDescription: "Prepare to clarify appointment rules, referrals, and what needs to happen before a visit.",
    questions: [
      "Do I need a referral for this appointment?",
      "Who should send the referral and where should it be sent?",
      "Is the appointment covered if the referral is missing or delayed?",
      "Are there any plan rules I should know before I go?"
    ],
    readyInfo: [
      "The appointment date and provider name",
      "The reason for the appointment in general terms",
      "The referring provider's name, if there is one",
      "Any referral or appointment confirmation number"
    ],
    nextSteps: [
      "Ask the representative to explain the next required action.",
      "Call the provider office to confirm they received any needed referral.",
      "Keep a simple note of who you called and what they told you."
    ]
  }
};

const categoryKeys = Object.keys(issueGuides);

function App() {
  const [selectedIssue, setSelectedIssue] = useState(categoryKeys[0]);
  const [notes, setNotes] = useState("");

  const currentGuide = issueGuides[selectedIssue];
  const notePreview = useMemo(() => notes.trim(), [notes]);

  return (
    <main className="app-shell">
      <section className="intro">
        <p className="eyebrow">KnowWhat2Know</p>
              <h1>SilverSideKick</h1>
              <p>Your guide for preparing insurance calls with confidence</p>
        <p className="intro-text">
          Choose a sample insurance issue and get plain-language questions, items to have ready,
          and next steps for a call with an insurance company.
        </p>
      </section>

      <section className="workspace" aria-label="Insurance call preparation tool">
        <div className="input-panel">
          <label htmlFor="issue-select">What are you calling about?</label>
          <select
            id="issue-select"
            value={selectedIssue}
            onChange={(event) => setSelectedIssue(event.target.value)}
          >
            {categoryKeys.map((key) => (
              <option key={key} value={key}>
                {issueGuides[key].label}
              </option>
            ))}
          </select>

          <fieldset>
            <legend>Or choose a category</legend>
            <div className="category-buttons">
              {categoryKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={selectedIssue === key ? "active" : ""}
                  onClick={() => setSelectedIssue(key)}
                >
                  {issueGuides[key].label}
                </button>
              ))}
            </div>
          </fieldset>

          <label htmlFor="notes">Optional notes for yourself</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Example: I received a bill I did not expect. Do not enter private medical or member information."
            rows="5"
          />
          <p className="privacy-note">
            Keep notes general. Do not enter Social Security numbers, medical records, member IDs,
            or private account details.
          </p>
        </div>

        <div className="results-panel" aria-live="polite">
          <div className="result-heading">
            <p className="eyebrow">Sample guide</p>
            <h2>{currentGuide.label}</h2>
            <p>{currentGuide.shortDescription}</p>
          </div>

          {notePreview && (
            <div className="note-box">
              <h3>Your general note</h3>
              <p>{notePreview}</p>
            </div>
          )}

          <GuideSection title="Questions to ask during the call" items={currentGuide.questions} />
          <GuideSection title="Information to have ready" items={currentGuide.readyInfo} />
          <GuideSection title="Suggested next steps" items={currentGuide.nextSteps} />

          <aside className="disclaimer">
            <h3>Disclaimer</h3>
            <p>
              This app provides general educational guidance using sample scenarios only. It is not
              medical, legal, financial, or insurance advice. Always confirm details directly with
              your insurance company, provider, or another qualified professional.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

function GuideSection({ title, items }) {
  return (
    <section className="guide-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default App;

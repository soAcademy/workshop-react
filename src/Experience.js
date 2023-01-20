const Experience = ({ headingText, expList }) => (
  <>
    {" "}
    <h2 className="font-display text-xl">{headingText}</h2>
    <ul>
      {expList
        .slice(0)
        .reverse()
        .map((exp, index) => (
          <li key={index}>
            <dl className="flex flex-col lg:flex-row">
              <div className="lg:basis-1/4">
                <dt className="font-display">{exp.place}</dt>
                <dd>
                  <div>{exp.city}</div>
                  <div>
                    {exp.startDate} - {exp.endDate}
                  </div>
                </dd>
              </div>
              <div className="lg:basis-3/4">
                <dt className="font-display">{exp.title}</dt>
                <dd>{exp.desc}</dd>
              </div>
            </dl>
          </li>
        ))}
    </ul>
  </>
);

export default Experience;

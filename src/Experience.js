const Experience = ({ headingText, expList }) => (
  <>
    {" "}
    <h2 className="mb-4 text-sm2 font-bold tracking-widest text-gray-550 print:font-normal">
      {headingText}
    </h2>
    {expList
      .slice(0)
      .reverse()
      .map((exp, index) => (
        <section className="mb-4.5 break-inside-avoid" key={index}>
          <header>
            <h3 className="text-lg font-semibold leading-snugish text-gray-700">
              {exp.place}
            </h3>
            <p className="text-md leading-normal text-gray-650">
              {exp.startDate} – {exp.endDate} | {exp.title}
            </p>
          </header>
          <p className="mt-2.1 text-md leading-normal text-gray-700">
            {exp.desc}
          </p>
        </section>
      ))}
  </>
);

export default Experience;

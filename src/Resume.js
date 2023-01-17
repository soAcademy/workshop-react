const Resume = ({ firstName, lastName }) => (
  <>
    <div className="flex flex-row h-screen">
      <div className="basis-1/4 bg-indigo-500 p-4 text-left">
        <h2 className="text-xl">About Me</h2>
      </div>
      <div className="basis-3/4 p-4 text-left">
        <h1 className="text-2xl">
          {firstName} {lastName}
        </h1>
      </div>
    </div>
  </>
);

export default Resume;

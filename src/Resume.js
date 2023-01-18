const Resume = ({ firstName, lastName }) => (
  <>
    <div className="grid gap-0 grid-cols-1 md:grid-cols-3 h-screen">
      <div className="bg-indigo-500 p-4 text-left">
        <h2 className="text-xl">About Me</h2>
      </div>
      <div className="md:col-span-2 p-4 text-left">
        <h1 className="text-2xl">
          {firstName} {lastName}
        </h1>
      </div>
    </div>
  </>
);

export default Resume;

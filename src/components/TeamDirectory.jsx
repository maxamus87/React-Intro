export default function TeamDirectory() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Team Directory</h1>
      <div className="row g-4">
        <TeamCard
          name="Alice Johnson"
          role="Frontend Developer"
          bio="Alice loves building beautiful user interfaces with React."
        />
        <TeamCard
          name="Carol White"
          role="UI/UX Designer"
          bio="Carol creates intuitive designs that users love."
        />
      </div>
      <div className="row g-4 mt-1 justify-content-center">
        <TeamCard
          name="David Brown"
          role="Project Manager"
          bio="David keeps the team on track and delivers projects on time."
        />
      </div>
    </div>
  );
}

function TeamCard({name, role, bio}) {
  return (
    <div className="col-md-6 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{role}</h6>
          <p className="card-text">{bio}</p>
        </div>
      </div>
    </div>
  );
}

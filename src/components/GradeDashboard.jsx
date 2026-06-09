import { getClassReport } from "./lib/studentUtils";

export default function GradeDashboard() {
  const report = getClassReport();

  function getBadgeColor(letterGrade) {
    if (letterGrade === "A") return "bg-white text-dark";
    if (letterGrade === "B") return "bg-white text-dark";
    if (letterGrade === "C") return "bg-white text-dark";
    if (letterGrade === "D") return "bg-white text-dark";
    return "bg-danger";
  }

  return (
    <div className="container mt-5" style={{ fontFamily: "Times New Roman"}}>
      <h1 className="text-center fw-bold mb-4" style={{ fontFamily: "Times New Roman"}}>Grade Dashboard</h1>

      {/* Stats Cards */}
      <div className="row g-4 mb-5" >
        <div className="col-md-4">
          <div className="card text-center text-white shadow-sm bg-dark">
            <div className="card-body">
              <h5 className="card-title text-muted">Total Enrolled</h5>
              <p className="display-4 ">{report.totalEnrolled}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center text-white shadow-sm bg-dark">
            <div className="card-body">
              <h5 className="card-title text-muted">Total Passing</h5>
              <p className="display-4 ">{report.passingCount}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center text-white shadow-sm bg-dark">
            <div className="card-body">
              <h5 className="card-title text-muted">Class Average</h5>
              <p className="display-4 text-white">{report.averageGrade}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Passing Students Table */}
      <div className="card shadow-sm">
        <div className="card-header fw-bold fs-5 bg-dark text-white border-bottom border-white">Passing Students</div>
        <div className="card-body bg-dark">
          <table className="table table-striped table-hover table-dark">
            <thead className="border-bottom border-white">
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Grade</th>
                <th>Letter Grade</th>
              </tr>
            </thead>
            <tbody>
              {report.passingStudents.map(student => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.subject}</td>
                  <td>{student.grade}%</td>
                  <td>
                    <span className={`badge ${getBadgeColor(student.letterGrade)}`}>
                      {student.letterGrade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

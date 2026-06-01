import {useState} from "react";

export default function NavbarApp() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar count={count} />
      <div className="container mt-4">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Add Notification</button>
      </div>
    </div>
  );
}

function Navbar({count}) {
  return (
    <nav className="navbar navbar-expand-ig navbar-dark bg-black px-4">
      <a className="navbar-brand" href="#">My Site</a>
      <div className="navbar-nav ms-auto flex-row gap-3">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Settings</a>
        <a className="nav-link" href="#">Notifications {count > 0 && (
          <span className="badge bg-danger ms-1">{count}</span>
        )}
        </a>
      </div>
    </nav>
  );
}

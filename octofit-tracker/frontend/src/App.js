
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">OctoFit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Workouts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body text-center">
                <h1 className="display-4 mb-4">Welcome to OctoFit Tracker</h1>
                <p className="lead mb-4">
                  Track your fitness activities, join teams, compete on the leaderboard, and get personalized workout suggestions!
                </p>
                <a href="#" className="btn btn-primary btn-lg">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

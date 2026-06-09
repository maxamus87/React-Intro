import "bootstrap/dist/css/bootstrap.min.css";
import { rentals, getRentalReport, getGenreReport } from "./lib/rentalUtils";

// ── Small helper components ───────────────────────────────────────────────────

function StatCard({ label, value, sub }) {
  return (
    <div
      className="card h-100 p-4"
      style={{ backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: 12 }}
    >
      <div style={{ color: "#000", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 700 }}>
        {label}
      </div>
      <div style={{ color: "#000", fontSize: "2.2rem", fontWeight: 400 }}>{value}</div>
      {sub && <div style={{ color: "#000", fontSize: ".85rem" }}>{sub}</div>}
    </div>
  );
}

const genreColors = {
  "Sci-Fi":  "#3b82f6",
  "Horror":  "#ef4444",
  "Romance": "#ec4899",
  "Drama":   "#22c55e",
};

function MemberBadge({ tier }) {
  const styles = {
    gold:   { backgroundColor: "transparent", color: "#eab308", border: "1px solid #eab308" },
    silver: { backgroundColor: "transparent", color: "#555", border: "1px solid #555" },
    none:   { backgroundColor: "transparent", color: "#000", border: "1px solid #000" },
  };
  return (
    <span className="badge" style={styles[tier] ?? styles.none}>
      {tier}
    </span>
  );
}

function GenreCard({ genre, totalRentals, totalRevenue, color }) {
  return (
    <div
      className="card h-100 p-4"
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: 0,
      }}
    >
      <div style={{ color, fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 700 }}>
        {genre}
      </div>
      <div style={{ color, fontSize: "2.2rem", fontWeight: 400 }}>{totalRentals}</div>
      <div style={{ color: "#000", fontSize: ".85rem" }}>
        rentals &nbsp;|&nbsp; ${totalRevenue} revenue
      </div>
    </div>
  );
}

// ── RentalDashboard ───────────────────────────────────────────────────────────

export default function RentalDashboard() {
  const { totalReturned, totalRevenue, mostExpensive, rentals: returnedRentals } =
    getRentalReport(rentals);

  const sciFi  = getGenreReport("Sci-Fi", rentals);
  const action = getGenreReport("Horror", rentals);

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#000", fontFamily: "Times New Roman, Times, serif", "--bs-border-radius": 0, "--bs-card-border-radius": 0, "--bs-card-inner-border-radius": 0 }}>

      {/* Hero header */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2.5rem 0 2rem",
          borderBottom: "1px solid #ccc",
        }}
      >
        <div className="container">
          <h1 className="fw-normal mb-0" style={{ color: "#000", fontFamily: "Times New Roman, Times, serif" }}>Movie Rental Dashboard</h1>
          <p className="mb-0 mt-1" style={{ color: "#000" }}>
            Returned rentals &amp; revenue summary
          </p>
        </div>
      </div>

      <div className="container py-4 mt-4 px-5 pb-5">

        {/* Stat cards */}
        <div className="row g-3 mb-4">
          <div className="col-sm-4">
            <StatCard
              label="Total Returned"
              value={totalReturned}
              sub="rentals checked back in"
            />
          </div>
          <div className="col-sm-4">
            <StatCard
              label="Total Revenue"
              value={`$${totalRevenue}`}
              sub="after membership discounts"
            />
          </div>
          <div className="col-sm-4">
            <StatCard
              label="Most Expensive Rental"
              value={`$${mostExpensive.cost}`}
              sub={`${mostExpensive.customer} — ${mostExpensive.movie}`}
            />
          </div>
        </div>

        {/* Genre cards (stretch goal) */}
        <h6 className="mb-3" style={{ color: "#fff", textTransform: "uppercase", letterSpacing: ".06em", fontWeight: 400 }}>
          Genre Breakdown
        </h6>
        <div className="row g-3 mb-5 justify-content-center">
          <div className="col-sm-4">
            <GenreCard {...sciFi}  color="#3b82f6" />
          </div>
          <div className="col-sm-4">
            <GenreCard {...action} color="#ef4444" />
          </div>
        </div>

        {/* Returned rentals table */}
        <div
          className="card overflow-hidden"
          style={{ backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: 12 }}
        >
          <div className="px-4 pt-4 pb-4">
            <h5 className="mb-0 fw-bold" style={{ color: "#000" }}>Returned Rentals</h5>
            <p className="mb-0 mt-1" style={{ color: "#000", fontSize: ".85rem" }}>
              All returned rentals with discounted costs applied
            </p>
          </div>

          <div className="table-responsive">
            <table className="table table-borderless mb-0" style={{ borderTop: "1px solid #000" }}>
              <thead>
                <tr>
                  <th style={{ fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".05em", backgroundColor: "#fff", color: "#000", fontWeight: 400 }}>Customer</th>
                  <th style={{ fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".05em", backgroundColor: "#fff", color: "#000", fontWeight: 400 }}>Movie</th>
                  <th style={{ fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".05em", backgroundColor: "#fff", color: "#000", fontWeight: 400 }}>Genre</th>
                  <th style={{ fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".05em", backgroundColor: "#fff", color: "#000", fontWeight: 400 }}>Membership</th>
                  <th className="text-center" style={{ fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".05em", backgroundColor: "#fff", color: "#000", fontWeight: 400 }}>Days</th>
                  <th className="text-center" style={{ fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".05em", backgroundColor: "#fff", color: "#000", fontWeight: 400 }}>Cost</th>
                </tr>
              </thead>
              <tbody>
                {returnedRentals.map((r) => (
                  <tr key={r.id} style={{ borderBottom: "1px solid #000", backgroundColor: "#f3f4f6" }}>
                    <td className="fw-bold">{r.customer}</td>
                    <td>{r.movie}</td>
                    <td><span className="badge" style={{ backgroundColor: "transparent", color: genreColors[r.genre] ?? "#555", border: `1px solid ${genreColors[r.genre] ?? "#555"}` }}>{r.genre}</span></td>
                    <td><MemberBadge tier={r.membershipTier} /></td>
                    <td className="text-center">{r.daysRented}</td>
                    <td className="text-center fw-normal" style={{ color: "#000", paddingBottom: "1rem" }}>
                      ${r.cost.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

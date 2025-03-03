import "./About.css";

export function About() {
  return (
    <section className="container my-5" id="mascots">
      <section className="row">
        <section className="col-12 col-md-3" id="mascot1">
          <img
            src="../../../../src/assets/img/03_03_2025_X-Design.png"
            alt="imagen"
            className="mascot-img"
          />
        </section>
        <section className="col-12 col-md-3" id="mascots-center">
          <h2>Hotel Manager</h2>
          <p>
            Discover the ultimate convenience in hotel booking with Hotel
            Manager! Our user-friendly app allows you to effortlessly browse,
            compare, and secure the best accommodations tailored to your needs.
            Enjoy instant confirmations, all at your fingertips. Hire Hotel
            Manager and enjoy taking your hotel to the next level!
          </p>
        </section>
        <section className="col-12 col-md-3" id="mascot2">
          <img
            src="../../../../src/assets/img/03_03_2025_X-Design (1).png"
            alt="imagen"
            className="mascot-img"
          />
        </section>
      </section>
    </section>
  );
}

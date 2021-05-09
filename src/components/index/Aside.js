function Aside() {
  return (
    <aside>
      <div className="dark-mode card">
        <h3>Dark mode is here!</h3>
        <p>
          Go to Settings → Appearance to choose your theme preference.
        </p>
        <a href="">Go to Settings</a>
      </div>

      <h2>Explore repositories</h2>
      <div>
        <a href="">portfolio-toy/soptConnector</a>
      </div>
      <div>
        <a href="">vidit135g/Floral</a>
        <p>Minimal design gallery app for Android</p>
      </div>
      <div>
        <a href="">muzei/muzei</a>
        <p>Muzei Live Wallpaper for Android</p>
      </div>
      <a href="">Explore more →</a>
    </aside>
  );
}

export default Aside;
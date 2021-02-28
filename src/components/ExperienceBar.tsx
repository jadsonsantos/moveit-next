export function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div className="experience-bar--content">
        <div className="experience-bar--current" style={{ width: '50%' }}></div>
        <span className="current-experience" style={{ left: '50%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </header>
  );
}
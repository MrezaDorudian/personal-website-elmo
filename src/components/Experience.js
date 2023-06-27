const Experience = ({ experiences, setExperiences }) => {
  const handleExp = (id, e) => {
    setExperiences(
      experiences.map((exp) => {
        return { ...exp, isSelected: exp.id === id };
      })
    );
  };

  return (
    <div className="exp-content">
      <div className="exp-titles-wrapper">
        {experiences.map((exp) => {
          return (
            <div key={exp.id} className="exp-titles">
              <button
                className={`exp-btn ${exp.isSelected ? "active" : "deactive"}`}
                onClick={(e) => handleExp(exp.id, e)}
                id={exp.id}
              >
                {exp.title}
              </button>
            </div>
          );
        })}
      </div>

      <div className="exp-details-wrapper">
        {experiences.map((exp) => {
          return (
            <div
              key={exp.id}
              className={`exp-detail ${
                exp.isSelected ? "show-details" : "hide-details"
              }`}
            >
              <p className="detail-company">@ {exp.company}</p>
              <p>{exp.location}</p>
              <p>{exp.date}</p>
              <p>{exp.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

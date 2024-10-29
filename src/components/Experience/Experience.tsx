import React, { useEffect, useState } from 'react';
import '../../style/Experience.css';
import axios from 'axios';
import pixelMHImage from '../../assets/img/pixelLogo.png';

interface ExperienceData {
  _id: string;
  company: string;
  duration: string;
  role: string;
}

const Experience: React.FC = () => {
  const [experience, setExperience] = useState<ExperienceData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://backend-go-portfolio.onrender.com/experience')
      .then((response) => {
        setExperience(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching experience data');
        setLoading(false);
      });
  }, []);

  const getCompanyLogo = (company: string): string => {
    switch (company) {
      case 'Assembler Institute of Technology':
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyhGVcsZyh9cn-Azcd7ic5CzZJRXgsrQ2Yg&s';
      case 'Hiberus S.L':
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KPTPQ7TnQ8QTYKt0gri7jdMY9_OSu0K2Ig&s';
      case 'GrupoUB':
        return 'https://redaccion.camarazaragoza.com/wp-content/uploads/2021/04/grupo-ub.png';
      case 'PixelMH':
        return pixelMHImage; // Utiliza la imagen importada
      default:
        return 'https://media.licdn.com/dms/image/v2/D4E03AQHW808_teUy-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718650942542?e=1729123200&v=beta&t=p-q9z8aBSbg-wGP0U_rPH4zm_DMzEiobW9CmgjlSMfE';
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="experience">
      <h2>Experience</h2>
      <ul>
        {experience.map((exp) => (
          <li key={exp._id} className="experience-item">
            <img src={getCompanyLogo(exp.company)} alt={`${exp.company} logo`} className="company-logo" />
            <div className="experience-details">
              <h3>{exp.role} @ <span>{exp.company}</span></h3>
              <p className="experience-duration">{exp.duration}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
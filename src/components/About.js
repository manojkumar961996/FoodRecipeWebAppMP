import React from 'react'
import './About.css';

function About() {
  const author = {
    name: 'Rahul Dravid',
    description: 'Indian Cricketer',
    imageUrl: 'https://149645218.v2.pressablecdn.com/wp-content/uploads/2020/09/Copy-of-SAFAF-2X1-images-2020-09-18T173938.309.jpg',
    socialMedia: {
      twitter: 'https://twitter.com/RahulDravid1973',
      linkedin: 'https://www.linkedin.com/in/rahul-dravid-9534412/',
    },
    publications: [
      {
        title: 'The Wall: Autobiography of Rahul Dravid',
        publisher: 'Hodder & Stoughton',
        releaseDate: '2011-10-20',
      },
      {
        title: 'Playing It My Way: My Autobiography',
        publisher: 'Bloomsbury Publishing',
        releaseDate: '2014-11-06',
      },
    ],
    hobbies: ['Reading', 'Golf', 'Spending time with family'],
  };

  return (
    <div className="about-us-container">
      <div className="about-us-card">
        <img src={author.imageUrl} alt={author.name} className="about-us-image" />
        <h2>{author.name}</h2>
        <p>{author.description}</p>
        <h3>Social Media</h3>
        <ul>
          <li><a href={author.socialMedia.twitter}>Twitter</a></li>
          <li><a href={author.socialMedia.linkedin}>LinkedIn</a></li>
        </ul>
        <h3>Publications</h3>
        <ul>
          {author.publications.map((publication) => (
            <li key={publication.title}>{publication.title}</li>
          ))}
        </ul>
        <h3>Hobbies</h3>
        <ul>
          {author.hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
        <h3>Call to Action</h3>
        <p>Subscribe to my newsletter to stay up-to-date on my latest projects and articles.</p>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default About;

const speakers = [
  {
    name: 'Shri Anurag Singh Thakur',
    title: "Hon'ble Minister Of Youth Affairs and Sports",
    image: './assets/anurag.jpg',
    bio: 'Mr Anurag Singh Thakur is the Union Minister for Information & Broadcasting and Youth Affairs & Sports, Government of India.',
  },
  {
    name: 'Mahendra Singh Dhoni ',
    title: 'Former Indian cricketer and captain (2004-2019)',
    image: './assets/Dhoni1234.png',
    bio: "India's most successful cricket captain, leading the team to victory in multiple tournaments including the 2007 ICC World Twenty20, 2011 Cricket World Cup, and 2013 ICC Champions Trophy.",
  },
  {
    name: 'Sunil Chhetri',
    title: 'Indian professional footballer',
    image: './assets/sunil.jpg',
    bio: 'Popularly known as Captain Fantastic , he holds the second position in terms of scoring most goals in international matches among active players after Cristiano Ronaldo.',
  },
  {
    name: 'Mangte Chungneijang Mary Kom',
    title: 'Indian Ameature Boxer',
    image: './assets/marry.jpg',
    bio: "She's the sole female boxer to win medals in the first seven World Championships, and the only one to win eight World Championship medals.",
  },
  {
    name: 'Neeraj Chopra',
    title: 'Track and Field Athlete',
    image: './assets/neeraj.jpg',
    bio: "He's the current Olympic champion, World Championship silver medalist, and Diamond League champion in Javelin throw, and the first Asian to win Men's Javelin throw Olympic gold.",
  },
];

const speakerContainer = document.getElementById('featured-speakers');
let speakersToShow = 2;

function displaySpeakers() {
  let speakerHtml = '';

  if (window.innerWidth > 768) {
    speakersToShow = speakers.length;
  }

  for (let i = 0; i < speakersToShow; i++) {
    const speaker = speakers[i];

    speakerHtml += `
        <div class="speaker">
          <div class="speaker-image">
            <img src="${speaker.image}" alt="${speaker.name}">
          </div>
          <div class="speaker-text">
            <h3>${speaker.name}</h3>
            <p class="title1">${speaker.title}</p>
            <p class="bio1">${speaker.bio}</p>
          </div>
        </div>
      `;
  }

  function showLessSpeakers() {
    speakersToShow = 2;
    displaySpeakers();

    const lessBtn = speakerContainer.querySelector('.more-btn');
    lessBtn.textContent = 'More ▼';
    lessBtn.removeEventListener('click', showLessSpeakers);
    lessBtn.addEventListener('click', showMoreSpeakers);
  }

  function showMoreSpeakers() {
    if (speakersToShow < speakers.length) {
      speakersToShow += 3;
      displaySpeakers();
    } else {
      const moreBtn = speakerContainer.querySelector('.more-btn');
      if (moreBtn) {
        moreBtn.textContent = 'More ▼';
        moreBtn.removeEventListener('click', showLessSpeakers);
        moreBtn.addEventListener('click', showMoreSpeakers);
      } else {
        const lessBtn = document.createElement('button');
        lessBtn.textContent = 'Less ▲';
        lessBtn.classList.add('more-btn');
        lessBtn.addEventListener('click', showLessSpeakers);
        speakerContainer.appendChild(lessBtn);
      }
    }
  }

  // Add the speaker HTML to the featured-speakers div
  speakerContainer.innerHTML = `
      ${speakerHtml}
    `;

  if (window.innerWidth <= 768 && speakersToShow < speakers.length) {
    const moreBtn = document.createElement('button');
    moreBtn.textContent = 'More ▼';
    moreBtn.classList.add('more-btn');
    moreBtn.addEventListener('click', showMoreSpeakers);
    speakerContainer.appendChild(moreBtn);
  }
}

displaySpeakers();

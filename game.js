const storyText = document.getElementById('story-text');
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const endMessage = document.getElementById('end-message');

const storyPrompts = [
  {
    text: `Imagine yourself in a world where you have access to unlimited knowledge at your fingertips. Yet, instead of being a library of useful information, it has become a factory that shoots out short works full of people's opinions, useless facts, quips that range from slightly funny to confusing, and meticulous documentaries depicting the nuances of various entertainment options. This knowledge has become distracting, always calling upon you to research more, even if it is about stuff you don't care about or want to look into. You find yourself spending hours learning, then forgetting what you have learned as video after video... oh wait I'm talking about the internet aren’t I. Okay...Imagine yourself scrolling endlessly through TikTok videos or YouTube shorts. You have a huge final project to finish for school but you really don't feel like working right now. You realize the deeper you go into the feed the dumber the videos you watch become.`,
    nextPrompt: 1,
  },
  {
    text: `After an hour of endless scrolling you have achieved it! You have memorized the various names of the superheroes found in the DC Comics. You are also familiar with the major plot points of each found in each multiverse. Guided by the wisdom of the comic geeks that made each video you can now create your own dream team of superheroes, not of your favorite ones, but also of your favorite version of them in the DC Comic Multiverse. Wasn't there some project you were supposed to be doing?`,
    nextPrompt: 2,
  },
  {
    text: `You wonder when it got so dark outside, but your second-long break from your phone becomes unbearable. You look down at your phone quickly to catch up on the latest gossip between random Hollywood Guy A and random Hollywood Girl B. You are so invested in their story. Scrolling a few more minutes to find out more juicy deets on their relationship will not hurt anybody... Right?`,
    nextPrompt: 3,
  },
  {
    text: `You barely register that it is 3am. Your endless stream of video game tutorials are interrupted by a video on how to best be productive. Your brain almost processes the fact that you've wasted your day on your phone, but your attention diverted by a new video popping up, detailing an exaggerated recounting of what it is like to be a college student. So relatable. So funny. Your feeling of worry about productivity fades away as you focus on watching more.`,
    nextPrompt: 4,
  },
  {
    text: `You wake up suddenly to your alarm and wonder how much sleep you've gotten last night. You are one day closer to your finals. You open your computer but pause after booting it up...You could get started on studying right now, but you are so tired and need to eat breakfast. Why not just watch a few videos while eating some breakfast? What is the harm in that?`,
    nextPrompt: null,
  },
  {
    text: "Congratulations! You've escaped the procrastinator's most deadly trap.",
    nextPrompt: null, // No next prompt
  },
];

let currentPrompt = 0;

function displayPrompt() {
  if (currentPrompt !== null && currentPrompt < storyPrompts.length) {
    storyText.textContent = storyPrompts[currentPrompt].text;
    endMessage.style.display = "none";
    document.getElementById('choices').style.display = "block";
  } else {
    endMessage.style.display = "block";
    document.getElementById('choices').style.display = "none";
  }
}

function goDeeper() {
  if (storyPrompts[currentPrompt].nextPrompt !== null) {
    currentPrompt = storyPrompts[currentPrompt].nextPrompt;
    displayPrompt();
  } else {
    // Loop back to the first prompt if we've reached the end
    currentPrompt = 0;
    displayPrompt();
  }
}

function stop() {
  currentPrompt = storyPrompts.length - 1; // Go to the end
  displayPrompt();
}

yesButton.addEventListener('click', goDeeper);
noButton.addEventListener('click', stop);

displayPrompt(); // Display the first prompt

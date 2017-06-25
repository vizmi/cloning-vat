// "static": {
const static = {
  "stats": {
    "INT": "Intelligence",
    "REF": "Reflexes",
    "TECH": "Technical Ability",
    "COOL": "Cool",
    "ATTR": "Attractiveness",
    "LUCK": "Luck",
    "MA": "Movement Allowance",
    "BODY": "Body Type",
    "EMP": "Empathy"
  },
  "skills": [
    { "name": "Personal Grooming", "stat": "ATTR", "choose": false },
    { "name": "Wardrobe & Style", "stat": "ATTR", "choose": false },
    { "name": "Other ATTR skill", "stat": "ATTR", "choose": true },

    { "name": "Endurance", "stat": "BODY", "choose": false },
    { "name": "Strength Feat", "stat": "BODY", "choose": false },
    { "name": "Swimming", "stat": "BODY", "choose": false },
    { "name": "Other BODY skill", "stat": "BODY", "choose": true },

    { "name": "Interrogation", "stat": "COOL", "choose": false },
    { "name": "Intimidate", "stat": "COOL", "choose": false },
    { "name": "Oratory", "stat": "COOL", "choose": false },
    { "name": "Resist Torture/Drugs", "stat": "COOL", "choose": false },
    { "name": "Streetwise", "stat": "COOL", "choose": false },
    { "name": "Other COOL skill", "stat": "COOL", "choose": true },

    { "name": "Human Perception", "stat": "EMP", "choose": false },
    { "name": "Interview", "stat": "EMP", "choose": false },
    { "name": "Leadership", "stat": "EMP", "choose": false },
    { "name": "Seduction", "stat": "EMP", "choose": false },
    { "name": "Social", "stat": "EMP", "choose": false },
    { "name": "Persuasion", "stat": "EMP", "choose": false },
    { "name": "Perform", "stat": "EMP", "choose": false },
    { "name": "Other EMP skill", "stat": "EMP", "choose": true },

    { "name": "Accounting", "stat": "INT", "choose": false },
    { "name": "Anthropology", "stat": "INT", "choose": false },
    { "name": "Awareness/Notice", "stat": "INT", "choose": false },
    { "name": "Biology", "stat": "INT", "choose": false },
    { "name": "Botany", "stat": "INT", "choose": false },
    { "name": "Chemistry", "stat": "INT", "choose": false },
    { "name": "Composition", "stat": "INT", "choose": false },
    { "name": "Diagnose Illness", "stat": "INT", "choose": false },
    { "name": "Education", "stat": "INT", "choose": false },
    { "name": "Expert", "stat": "INT", "choose": false },
    { "name": "Gamble", "stat": "INT", "choose": false },
    { "name": "Geology", "stat": "INT", "choose": false },
    { "name": "Hide/Evade", "stat": "INT", "choose": false },
    { "name": "History", "stat": "INT", "choose": false },
    { "name": "Know Language", "stat": "INT", "choose": true },
    { "name": "Library Search", "stat": "INT", "choose": false },
    { "name": "Mathematics", "stat": "INT", "choose": false },
    { "name": "Physics", "stat": "INT", "choose": false },
    { "name": "Programming", "stat": "INT", "choose": false },
    { "name": "Shadow/Track", "stat": "INT", "choose": false },
    { "name": "Stock Market", "stat": "INT", "choose": false },
    { "name": "System Knowledge", "stat": "INT", "choose": false },
    { "name": "Teaching", "stat": "INT", "choose": false },
    { "name": "Wilderness Survival", "stat": "INT", "choose": false },
    { "name": "Zoology", "stat": "INT", "choose": false },
    { "name": "Other INT skill", "stat": "INT", "choose": true },

    { "name": "Archery", "stat": "REF", "choose": false },
    { "name": "Athletics", "stat": "REF", "choose": false },
    { "name": "Brawling", "stat": "REF", "choose": false },
    { "name": "Dance", "stat": "REF", "choose": false },
    { "name": "Dodge & Escape", "stat": "REF", "choose": false },
    { "name": "Driving", "stat": "REF", "choose": false },
    { "name": "Fencing", "stat": "REF", "choose": false },
    { "name": "Handgun", "stat": "REF", "choose": false },
    { "name": "Heavy Weapons", "stat": "REF", "choose": false },
    { "name": "Martial Art", "stat": "REF", "choose": true },
    { "name": "Melee", "stat": "REF", "choose": false },
    { "name": "Motorcycle", "stat": "REF", "choose": false },
    { "name": "Operate Heavy Machinery", "stat": "REF", "choose": false },
    { "name": "Pilot", "stat": "REF", "choose": false },
    { "name": "Pilot (Gyro)", "stat": "REF", "choose": false },
    { "name": "Pilot (Fixed Wing)", "stat": "REF", "choose": false },
    { "name": "Pilot (Dirigible)", "stat": "REF", "choose": false },
    { "name": "Pilot (Vect. Trust)", "stat": "REF", "choose": false },
    { "name": "Rifle", "stat": "REF", "choose": false },
    { "name": "Stealth", "stat": "REF", "choose": false },
    { "name": "Submachinegun", "stat": "REF", "choose": false },
    { "name": "Other REF skill", "stat": "REF", "choose": true },

    { "name": "Aero Tech", "stat": "TECH", "choose": false },
    { "name": "AV Tech", "stat": "TECH", "choose": false },
    { "name": "Basic Tech", "stat": "TECH", "choose": false },
    { "name": "Cryotank Operation", "stat": "TECH", "choose": false },
    { "name": "Cyberdeck Deign", "stat": "TECH", "choose": false },
    { "name": "CyberTech", "stat": "TECH", "choose": false },
    { "name": "Demolitions", "stat": "TECH", "choose": false },
    { "name": "Disguise", "stat": "TECH", "choose": false },
    { "name": "Electronics", "stat": "TECH", "choose": false },
    { "name": "Electronic Security", "stat": "TECH", "choose": false },
    { "name": "First Aid", "stat": "TECH", "choose": false },
    { "name": "Forgery", "stat": "TECH", "choose": false },
    { "name": "Gyro Tech", "stat": "TECH", "choose": false },
    { "name": "Paint or Draw", "stat": "TECH", "choose": false },
    { "name": "Photo & Film", "stat": "TECH", "choose": false },
    { "name": "Pharmaceuticals", "stat": "TECH", "choose": false },
    { "name": "Pick Lock", "stat": "TECH", "choose": false },
    { "name": "Pick Pocket", "stat": "TECH", "choose": false },
    { "name": "Play Instrument", "stat": "TECH", "choose": false },
    { "name": "Weaponsmith", "stat": "TECH", "choose": false },
    { "name": "Other TECH skill", "stat": "TECH", "choose": true }
  ],
  "roles": [
    { "name": "Cop", "ability": "Authority", "skills": [ 23, 54, 13, 48, 30, 49, 57, 7, 11 ] },
    { "name": "Rocker", "ability": "Charismatic Leadership", "skills": [ 23, 19, 1, 27, 49, 87, 11, 18, 16 ] },
    { "name": "Solo", "ability": "Combat Sense", "skills": [ 23, 54, 49, 56, 57, 88, 65, 48, 67, 66 ] },
    { "name": "Media", "ability": "Credibility", "skills": [ 23, 27, 30, 19, 13, 17, 11, 83, 14 ] },
    { "name": "Nomad", "ability": "Family", "skills": [ 23, 3, 57, 65, 52, 71, 44, 49, 48 ] },
    { "name": "Netrunner", "ability": "Interface", "skills": [ 23, 71, 29, 42, 74, 73, 27, 77, 39] },
    { "name": "Techie", "ability": "Jury Rig", "skills": [ 23, 71, 74, 43, 29, 77, 81, 70, 88, 79] },
    { "name": "Medtechie", "ability": "Medical Tech", "skills": [ 23, 71, 28, 29, 72, 36, 84, 45, 13] },
    { "name": "Corp", "ability": "Resources", "skills": [ 23, 13, 29, 36, 17, 18, 41, 1, 0 ] },
    { "name": "Fixer", "ability": "Streetdeal", "skills": [ 23, 80, 54, 49, 57, 85, 86, 8, 18 ] }
  ],
  "style": {
    "clothes": ["Biker leathers", "Blue jeans", "Corporate Suits", "Jumpsuits", "Miniskirts",
      "High Fashion", "Cammos", "Normal clothes", "Nude", "Bag Lady chic"],
    "hair": ["Mohawk", "Long & Ratty", "Short & Spiked", "Wild & all over", "Bald",
      "Striped", "Tinted", "Neat, short", "Short, culry", "Long, straight"],
    "affectations": ["Tatoos", "Mirrorshades", "Ritual Scars", "Spiked gloves", "Nose Rings",
      "Earrings", "Long fingernails", "Spike heeled boots", "Weird Contact Lenses", "Fingerless gloves"]
  },
  "origin": [
    { "name": "Anglo-American", "languages": ["English"] },
    { "name": "African", "languages": ["Bantu", "Fante", "Kongo", "Ashanti", "Zulu", "Swahili"] },
    { "name": "Japanese/Korean", "languages": ["Japanese", "Korean"] },
    { "name": "Central European/Soviet", "languages": ["Bulgarian", "Russian", "Polish", "Ukrainian", "Slovak"] },
    { "name": "Pacific Islander", "languages":
      ["Micronesian", "Tagalog", "Polynesian", "Malayan", "Sudanese", "Indonesian", "Hawaiian"] },
    { "name": "Chinese/Southeast Asian", "languages": ["Burmese", "Cantonese", "Mandarin", "Thai", "Tibetan", "Vietnamese"] },
    { "name": "Black American", "languages": ["English", "Blackfolk"] },
    { "name": "Hispanic American", "languages": ["Spanish", "English"] },
    { "name": "Central/South American", "languages": ["Spanish", "Portuguese"] },
    { "name": "European", "languages":
      ["French", "German", "English", "Spanish", "Italian", "Greek", "Danish", "Norwegian", "Swedish", "Finnish"] }
  ],
  "family": {
    "rank": [
      "Corporate Executive",
      "Corporate Manager",
      "Corporate Technician",
      "Nomad Pack",
      "Pirate Fleet",
      "Gang Family",
      "Crime Lord",
      "Combat Zone Poor",
      "Urban homeless",
      "Arcology family"
    ],
    "parents": [
      "Both parents are living",
      "Your parent(s) died in warfare",
      "Your parent(s) died in an accident",
      "Your parent(s) were murdered",
      "Your parent(s) have amnesia and don't remember you",
      "You never knew your parent(s)",
      "Your parent(s) are in hiding to protect you",
      "You were left with relatives for safekeeping",
      "You grew up on the Street and never had parents",
      "Your parent(s) gave you up for adoption",
      "Your parent(s) sold you for money"
    ],
    "status": [
      "Family status is OK",
      "Family lost everything through betrayal",
      "Family lost everything through bad management",
      "Family exiled/driven from their original home/nation/corporation",
      "Family is imprisoned and you alone escaped",
      "Family vanished. You are only remaining member",
      "Family was murdered/killed and you were only survivor",
      "Family is involved in longterm conspiracy, organization or association",
      "Your family was scattered to the winds due to misfortune",
      "Your family is cursed with a hereditary feud",
      "You are the inheritor of a family debt; you must honor this debt"
    ],
    "childhood": [
      "Spent on the Street with no adult supervision",
      "Spent in a safe Corporate Suburbia",
      "In a Nomad Pack moving from town to town",
      "In a decaying, once upscale neighborhood",
      "In a defended Corporate Zone in the central City",
      "In the heart of the Combat Zone",
      "In a small village or town far from the City",
      "In a large arcology city",
      "In a aquatic Pirate Pack",
      "On a Corporate controlled Farm or Research Facility"
    ]
  },
  "motivation": {
    "personality": [
      "Shy and secretive",
      "Rebellious, antisocial, violent",
      "Arrogant, proud and aloof",
      "Moody, rash and headstrong",
      "Picky fussy and nervous",
      "Stable and serious",
      "Silly and fluffheaded",
      "Sneaky and deceptive",
      "Intellectual and detached",
      "Friendly and outgoing"
    ],
    "person": [
      "A parent",
      "Brother or sister",
      "Lover",
      "Friend",
      "Yourself",
      "A pet",
      "Teacher or mentor",
      "Public figure",
      "A personal hero",
      "No one"
    ],
    "value": [
      "Money",
      "Honor",
      "Your word",
      "Honesty",
      "Knowledge",
      "Vengeance",
      "Love",
      "Power",
      "Having a good time",
      "Friendship"
    ],
    "people": [
      "Neutral",
      "Neutral",
      "I like almost everyone",
      "I hate almost everyone",
      "People are tools. Use them for your own goals and discard them",
      "Every person is a valuable individual",
      "People are obstacles to be destroyed if they cross me",
      "People are untrustworthy. Don't depend on anyone",
      "Wipe'em all out and give the place to the cockroaches",
      "People are wonderful"
    ],
    "posession": [
      "A weapon",
      "A tool",
      "A piece of clothing",
      "A photograph",
      "A book or diary",
      "A recording",
      "A musical instrument",
      "A piece of jewelry",
      "A toy",
      "A letter"
    ]
  },
  lifePath: {
    main: [
      { name: 'Big problems/wins', numbers: [1,2,3], next: 'big' },
      { name: 'Friends & Enemies', numbers: [4,5,6], next: 'contacts' },
      { name: 'Romantic involvement', numbers: [7,8], next: null },
      { name: 'Nothing important', numbers: [9,10], next: null }
    ],
    big: [
      { name: 'Disaster strikes!', numbers: [1,2,3,4,5], next: 'disaster' },
      { name: 'You get lucky!', numbers: [6,7,8,9,10], next: 'luck'}
    ],
    disaster: [
      { name: 'Financial Loss or Debt', numbers: [1], next: 'money'},
      { name: 'Imprisonment', numbers: [2], next: 'months'},
      { name: 'Illness or addiction: Lost 1 pt of REF permanently as a result.', numbers: [3], next: 'disasterAbout' },
      { name: 'Betrayal', numbers: [4], next: 'betrayal' },
      { name: 'Accident', numbers: [5], next: 'accident' },
      { name: 'Lover, friend ot relative killed', numbers: [6], next: 'killed' },
      { name: 'False Accusation', numbers: [7], next: 'accusation'},
      { name: 'Hunted by the Law', numbers: [8], next: 'huntedByTheLaw'},
      { name: 'Hunted by a Corporation', numbers: [9], next: 'huntedByCorporation'},
      { name: 'Mental or physical incapacitation', numbers: [10], next: 'incapacitation'},
    ],
    money: [
      { name: '100 Eb', numbers: [1], next: 'disasterAbout' },
      { name: '200 Eb', numbers: [2], next: 'disasterAbout' },
      { name: '300 Eb', numbers: [3], next: 'disasterAbout' },
      { name: '400 Eb', numbers: [4], next: 'disasterAbout' },
      { name: '500 Eb', numbers: [5], next: 'disasterAbout' },
      { name: '600 Eb', numbers: [6], next: 'disasterAbout' },
      { name: '700 Eb', numbers: [7], next: 'disasterAbout' },
      { name: '800 Eb', numbers: [8], next: 'disasterAbout' },
      { name: '900 Eb', numbers: [9], next: 'disasterAbout' },
      { name: '1000 Eb', numbers: [10], next: 'disasterAbout' }
    ],
    months: [
      { name: '1 month', numbers: [1], next: 'disasterAbout' },
      { name: '2 months', numbers: [2], next: 'disasterAbout' },
      { name: '3 months', numbers: [3], next: 'disasterAbout' },
      { name: '4 months', numbers: [4], next: 'disasterAbout' },
      { name: '5 months', numbers: [5], next: 'disasterAbout' },
      { name: '6 months', numbers: [6], next: 'disasterAbout' },
      { name: '7 months', numbers: [7], next: 'disasterAbout' },
      { name: '8 months', numbers: [8], next: 'disasterAbout' },
      { name: '9 months', numbers: [9], next: 'disasterAbout' },
      { name: '10 months', numbers: [10], next: 'disasterAbout' }
    ],
    betrayal: [
      { name: 'blackmailed', numbers: [1,2,3], next: 'disasterAbout' },
      { name: 'a secret was exposed', numbers: [4,5,6,7], next: 'disasterAbout' },
      { name: 'betrayed', numbers: [8,9,10], next: 'disasterAbout' }
    ],
    accident: [
      { name: 'disfigured, -5 ATTR', numbers: [1,2,3,4], next: 'disasterAbout' },
      { name: 'hospitalized', numbers: [5,6], next: 'months' },
      { name: 'lost memories', numbers: [7,8], next: 'months' },
      { name: 'nightmares (8 out of 10 nights) of the accident', numbers: [9,10], next: 'disasterAbout' }
    ],
    killed: [
      { name: 'they died accidentally', numbers: [1,2,3,4,5], next: 'disasterAbout' },
      { name: 'they were murdered by unknown parties', numbers: [6,7,8], next: 'disasterAbout' },
      { name: 'they were murdered and you know who did it. You just need the proof', numbers: [9,10], next: 'disasterAbout' },
    ],
    accusation: [
      { name: 'theft', numbers: [1,2,3], next: 'disasterAbout' },
      { name: 'cowardice', numbers: [4,5], next: 'disasterAbout' },
      { name: 'murder', numbers: [6,7,8], next: 'disasterAbout'},
      { name: 'rape', numbers: [9], next: 'disasterAbout' },
      { name: 'betrayal', numbers: [10], next: 'disasterAbout' }
    ],
    huntedByTheLaw: [
      { name: 'a couple local cops', numbers: [1,2,3], next: 'disasterAbout' },
      { name: 'the entire local force', numbers: [4,5,6], next: 'disasterAbout' },
      { name: 'State police or Militia', numbers: [7,8], next: 'disasterAbout' },
      { name: 'FBI or equivalent', numbers: [9, 10], next: 'disasterAbout' }
    ],
    huntedByCorporation: [
      { name: 'Small local firm', numbers: [1,2,3], next: 'disasterAbout' },
      { name: 'Statewide corp', numbers: [4,5,6], next: 'disasterAbout' },
      { name: 'National corp', numbers: [7,8], next: 'disasterAbout' },
      { name: 'Multinational corp', numbers: [9,10], next: 'disasterAbout' }
    ],
    incapacitation: [
      { name: 'Nervous disorder. -1 REF', numbers: [1,2,3], next: 'disasterAbout' },
      { name: 'Mental problem -1 CL', numbers: [4,5,6,7], next: 'disasterAbout' },
      { name: 'Psychosis -1 CL, -1 REF', numbers: [8,9,10], next: 'disasterAbout' }
    ],
    disasterAbout: [
      { name: 'Clear your name', numbers: [1,2], next: null },
      { name: 'Live it down and try to forget it', numbers: [3,4], next: null },
      { name: 'Hunt down those responsible and moke them pay!', numbers: [5,6], next: null },
      { name: 'Get what\'s rightfully yours', numbers: [7,8], next: null },
      { name: 'Save, if possible, anyone else involved in the situation', numbers: [9,10], next: null }
    ],
    luck: [
      { name: 'Powerful Connection in City Government', numbers: [1], next: 'govtConnection' },
      { name: 'Financial Windfall', numbers: [2], next: 'money' },
      { name: 'Big score or deal', numbers: [3], next: 'money' },
      { name: 'Find a Sensei (teacher). Begin at +2 or add +1 to a Martial Arts Skill of your choice.', numbers: [4], next: null },
      { name: 'Find a Teacher: Add +1 to any INT based skill, or begin a new INT based skill at +2.', numbers: [5], next: null },
      { name: 'Powerful Corporate Exec owes you one favor.', numbers: [6], next: null },
      { name: 'Local Nomad Pack befriends you. Equivalent to a Family +2', numbers: [7], next: null },
      { name: 'Make a Friend on the Police Force. Inside information at a level of +2 Streetwise on any police related matters', numbers: [8], next: null },
      { name: 'Local Boostergang likes you. You can call upon them for 1 favor a month, equivalent to a Family Special Ability of +2', numbers: [9], next: null } ,
      { name: 'Find a Combat Teacher. Add +1 to any weapon skill with the exception of Martial Arts or Brawling, or begin a new combat skill at +2.', numbers: [10], next: null }
    ],
    govtConnection: [
      { name: 'Police Dept.', numbers: [1,2,3,4], next: null},
      { name: 'District Attorney\'s Office', numbers: [5,6,7], next: null},
      { name: 'Mayor\'s Office', numbers: [8,9,10], next: null},
    ],


    contacts: [
      { name: 'Friend', numbers: [1,2,3,4,5], next: 'friend' },
      { name: 'Enemy', numbers: [6,7,8,9,10], next: 'enemy'}
    ],
    friend: [
      { name: 'Like a big brother/sister to you', numbers: [1], next: null },
      { name: 'Like a kid sister/brother to you', numbers: [2], next: null },
      { name: 'A teacher or mentor', numbers: [3], next: null },
      { name: 'A partner or co-worker', numbers: [4], next: null },
      { name: 'An old lover (choose which one)', numbers: [5], next: null },
      { name: 'An old enemy (choose which one)', numbers: [6], next: null },
      { name: 'Like a foster parent to you', numbers: [7], next: null },
      { name: 'A relative', numbers: [8], next: null },
      { name: 'Reconnect with an old childhood friend', numbers: [9], next: null },
      { name: 'Met through a common interest', numbers: [10], next: null },
    ],
    enemy: [
      { name: 'Ex friend', numbers: [1], next: 'cause' },
      { name: 'Ex lover', numbers: [2], next: 'cause' },
      { name: 'Relative', numbers: [3], next: 'cause' },
      { name: 'Childhood enemy', numbers: [4], next: 'cause' },
      { name: 'Person working for you', numbers: [5], next: 'cause' },
      { name: 'Person you work for', numbers: [6], next: 'cause' },
      { name: 'Partner or co-worker', numbers: [7], next: 'cause' },
      { name: 'Booster gang member', numbers: [8], next: 'cause' },
      { name: 'Corporate Exec', numbers: [9], next: 'cause' },
      { name: 'Government Official ', numbers: [10], next: 'cause' }
    ],
    cause: [
      { name: 'Caused the other to lose face or status', numbers: [1], next: 'fracked' },
      { name: 'Caused the loss of a lover, friend or relative ', numbers: [2], next: 'fracked' },
      { name: 'Caused a major humiliation ', numbers: [3], next: 'fracked' },
      { name: 'Accused the other of cowardice or some other personal flaw ', numbers: [4], next: 'fracked' },
      { name: 'Caused a physical disability: (Roll 1D6. 1=2 lose eye. 3-4=lose arm. 5-6=badly scarred)', numbers: [5], next: 'fracked' },
      { name: 'Deserted or betrayed the other ', numbers: [6], next: 'fracked' },
      { name: 'Turned down other\'s offer of job or romantic involvement ', numbers: [7], next: 'fracked' },
      { name: 'You just didn\'t like each other', numbers: [8], next: 'fracked' },
      { name: 'Was a romantic rival ', numbers: [9], next: 'fracked' },
      { name: 'Foiled a plan of the other\'s  ', numbers: [10], next: 'fracked' }
    ],
    fracked: [
      { name: 'They hate you', numbers: [1,2,3,4], next: 'enemyAbout' },
      { name: 'You hate them', numbers: [5,6,7], next: 'enemyAbout' },
      { name: 'The feeling\'s mutual', numbers: [8,9,10], next: 'enemyAbout' }
    ],
    enemyAbout: [
      { name: 'Go into a murderous killing rage and rip his face off!', numbers: [1,2], next: 'againstYou' },
      { name: 'Avoid the scum', numbers: [3,4], next: 'againstYou' },
      { name: 'Backstab him indirectly', numbers: [5,6], next: 'againstYou' },
      { name: 'Ignore the scum', numbers: [7,8], next: 'againstYou' },
      { name: 'Rip into him verbally', numbers: [9,10], next: 'againstYou' }
    ],
    againstYou: [
      { name: 'Just himself', numbers: [1,2,3], next: null },
      { name: 'Himself and a few friends', numbers: [4,5], next: null },
      { name: 'An entire Gang', numbers: [6,7], next: null },
      { name: 'A small Corporation', numbers: [8], next: null },
      { name: 'A large Corporation', numbers: [9], next: null },
      { name: 'An entire Government Agency', numbers: [10], next: null }
    ],



  }
}
/* { name: '', numbers: [], next: ''},
*/

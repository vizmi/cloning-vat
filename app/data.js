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
  rollTree: {
    sibling: [
      { rolls: [1,2,3,4,5], text: 'Older', next: 'siblingMF' },
      { rolls: [6,7,8,9], text: 'Younger', next: 'siblingMF' },
      { rolls: [10], text: 'Twin', next: 'siblingMF' }
    ],
    siblingMF: [
      { rolls: [2,4,6,8,10], text: 'brother', next: 'siblingFeeling' },
      { rolls: [1,3,5,7,9], text: 'sister', next: 'siblingFeeling'  }
    ],
    siblingFeeling: [
      { rolls: [1,2], text: 'who dislikes you' },
      { rolls: [3,4], text: 'who likes you' },
      { rolls: [5,6], text: 'who is neutral towards you' },
      { rolls: [7,8], text: 'who hero worships you' },
      { rolls: [9,10], text: 'who hates you' }
    ],


    lifePath: [
      { rolls: [1,2,3], text: 'Big problems/wins', next: 'big' },
      { rolls: [4,5,6], text: 'Friends & Enemies', next: 'contacts' },
      { rolls: [7,8], text: 'Romantic involvement', next: 'romance' },
      { rolls: [9,10], text: 'Nothing important' }
    ],
    big: [
      { rolls: [1,2,3,4,5], text: 'Disaster strikes!', next: 'disaster' },
      { rolls: [6,7,8,9,10], text: 'You get lucky!', next: 'luck'}
    ],
    disaster: [
      { rolls: [1], text: 'Financial Loss or Debt', next: 'loss'},
      { rolls: [2], text: 'Imprisonment', next: 'months'},
      { rolls: [3], text: 'Illness or addiction: Lost 1 pt of REF permanently as a result.', next: 'disasterAbout' },
      { rolls: [4], text: 'Betrayal', next: 'betrayal' },
      { rolls: [5], text: 'Accident', next: 'accident' },
      { rolls: [6], text: 'Lover, friend ot relative killed', next: 'killed' },
      { rolls: [7], text: 'False Accusation', next: 'accusation'},
      { rolls: [8], text: 'Hunted by the Law', next: 'huntedByTheLaw'},
      { rolls: [9], text: 'Hunted by a Corporation', next: 'huntedByCorporation'},
      { rolls: [10], text: 'Mental or physical incapacitation', next: 'incapacitation'},
    ],
    loss: [
      { rolls: [1], text: '100 Eb', next: 'disasterAbout' },
      { rolls: [2], text: '200 Eb', next: 'disasterAbout' },
      { rolls: [3], text: '300 Eb', next: 'disasterAbout' },
      { rolls: [4], text: '400 Eb', next: 'disasterAbout' },
      { rolls: [5], text: '500 Eb', next: 'disasterAbout' },
      { rolls: [6], text: '600 Eb', next: 'disasterAbout' },
      { rolls: [7], text: '700 Eb', next: 'disasterAbout' },
      { rolls: [8], text: '800 Eb', next: 'disasterAbout' },
      { rolls: [9], text: '900 Eb', next: 'disasterAbout' },
      { rolls: [10], text: '1000 Eb', next: 'disasterAbout' }
    ],
    months: [
      { rolls: [1], text: '1 month', next: 'disasterAbout' },
      { rolls: [2], text: '2 months', next: 'disasterAbout' },
      { rolls: [3], text: '3 months', next: 'disasterAbout' },
      { rolls: [4], text: '4 months', next: 'disasterAbout' },
      { rolls: [5], text: '5 months', next: 'disasterAbout' },
      { rolls: [6], text: '6 months', next: 'disasterAbout' },
      { rolls: [7], text: '7 months', next: 'disasterAbout' },
      { rolls: [8], text: '8 months', next: 'disasterAbout' },
      { rolls: [9], text: '9 months', next: 'disasterAbout' },
      { rolls: [10], text: '10 months', next: 'disasterAbout' }
    ],
    betrayal: [
      { rolls: [1,2,3], text: 'Blackmailed', next: 'disasterAbout' },
      { rolls: [4,5,6,7], text: 'A secret was exposed', next: 'disasterAbout' },
      { rolls: [8,9,10], text: 'Betrayed', next: 'disasterAbout' }
    ],
    accident: [
      { rolls: [1,2,3,4], text: 'Disfigured, -5 ATTR', next: 'disasterAbout' },
      { rolls: [5,6], text: 'Hospitalized', next: 'months' },
      { rolls: [7,8], text: 'Lost memories', next: 'months' },
      { rolls: [9,10], text: 'Nightmares (8 out of 10 nights) of the accident', next: 'disasterAbout' }
    ],
    killed: [
      { rolls: [1,2,3,4,5], text: 'They died accidentally', next: 'disasterAbout' },
      { rolls: [6,7,8], text: 'They were murdered by unknown parties', next: 'disasterAbout' },
      { rolls: [9,10], text: 'They were murdered and you know who did it. You just need the proof', next: 'disasterAbout' },
    ],
    accusation: [
      { rolls: [1,2,3], text: 'Theft', next: 'disasterAbout' },
      { rolls: [4,5], text: 'Cowardice', next: 'disasterAbout' },
      { rolls: [6,7,8], text: 'Murder', next: 'disasterAbout'},
      { rolls: [9], text: 'Rape', next: 'disasterAbout' },
      { rolls: [10], text: 'Betrayal', next: 'disasterAbout' }
    ],
    huntedByTheLaw: [
      { rolls: [1,2,3], text: 'A couple local cops', next: 'disasterAbout' },
      { rolls: [4,5,6], text: 'The entire local force', next: 'disasterAbout' },
      { rolls: [7,8], text: 'State police or Militia', next: 'disasterAbout' },
      { rolls: [9, 10], text: 'FBI or equivalent', next: 'disasterAbout' }
    ],
    huntedByCorporation: [
      { rolls: [1,2,3], text: 'Small local firm', next: 'disasterAbout' },
      { rolls: [4,5,6], text: 'Statewide corp', next: 'disasterAbout' },
      { rolls: [7,8], text: 'National corp', next: 'disasterAbout' },
      { rolls: [9,10], text: 'Multinational corp', next: 'disasterAbout' }
    ],
    incapacitation: [
      { rolls: [1,2,3], text: 'Nervous disorder. -1 REF', next: 'disasterAbout' },
      { rolls: [4,5,6,7], text: 'Mental problem -1 CL', next: 'disasterAbout' },
      { rolls: [8,9,10], text: 'Psychosis -1 CL, -1 REF', next: 'disasterAbout' }
    ],
    disasterAbout: [
      { rolls: [1,2], text: 'Clear your name' },
      { rolls: [3,4], text: 'Live it down and try to forget it' },
      { rolls: [5,6], text: 'Hunt down those responsible and moke them pay!' },
      { rolls: [7,8], text: 'Get what\'s rightfully yours' },
      { rolls: [9,10], text: 'Save, if possible, anyone else involved in the situation' }
    ],
    luck: [
      { rolls: [1], text: 'Powerful Connection in City Government', next: 'govtConnection' },
      { rolls: [2], text: 'Financial Windfall', next: 'money' },
      { rolls: [3], text: 'Big score or deal', next: 'money' },
      { rolls: [4], text: 'Find a Sensei (teacher). Begin at +2 or add +1 to a Martial Arts Skill of your choice.' },
      { rolls: [5], text: 'Find a Teacher: Add +1 to any INT based skill, or begin a new INT based skill at +2.' },
      { rolls: [6], text: 'Powerful Corporate Exec owes you one favor.' },
      { rolls: [7], text: 'Local Nomad Pack befriends you. Equivalent to a Family +2' },
      { rolls: [8], text: 'Make a Friend on the Police Force. Inside information at a level of +2 Streetwise on any police related matters' },
      { rolls: [9], text: 'Local Boostergang likes you. You can call upon them for 1 favor a month, equivalent to a Family Special Ability of +2' } ,
      { rolls: [10], text: 'Find a Combat Teacher. Add +1 to any weapon skill with the exception of Martial Arts or Brawling, or begin a new combat skill at +2.' }
    ],
    govtConnection: [
      { rolls: [1,2,3,4], text: 'Police Dept.'},
      { rolls: [5,6,7], text: 'District Attorney\'s Office' },
      { rolls: [8,9,10], text: 'Mayor\'s Office' },
    ],
    money: [
      { rolls: [1], text: '100 Eb' },
      { rolls: [2], text: '200 Eb' },
      { rolls: [3], text: '300 Eb' },
      { rolls: [4], text: '400 Eb' },
      { rolls: [5], text: '500 Eb' },
      { rolls: [6], text: '600 Eb' },
      { rolls: [7], text: '700 Eb' },
      { rolls: [8], text: '800 Eb' },
      { rolls: [9], text: '900 Eb' },
      { rolls: [10], text: '1000 Eb' }
    ],


    contacts: [
      { rolls: [1,2,3,4,5], text: 'Friend', next: 'friend' },
      { rolls: [6,7,8,9,10], text: 'Enemy', next: 'enemy' }
    ],
    friend: [
      { rolls: [1], text: 'Like a big brother/sister to you' },
      { rolls: [2], text: 'Like a kid sister/brother to you' },
      { rolls: [3], text: 'A teacher or mentor' },
      { rolls: [4], text: 'A partner or co-worker' },
      { rolls: [5], text: 'An old lover (choose which one)' },
      { rolls: [6], text: 'An old enemy (choose which one)' },
      { rolls: [7], text: 'Like a foster parent to you' },
      { rolls: [8], text: 'A relative' },
      { rolls: [9], text: 'Reconnect with an old childhood friend' },
      { rolls: [10], text: 'Met through a common interest' },
    ],
    enemy: [
      { rolls: [1], text: 'Ex friend', next: 'cause' },
      { rolls: [2], text: 'Ex lover', next: 'cause' },
      { rolls: [3], text: 'Relative', next: 'cause' },
      { rolls: [4], text: 'Childhood enemy', next: 'cause' },
      { rolls: [5], text: 'Person working for you', next: 'cause' },
      { rolls: [6], text: 'Person you work for', next: 'cause' },
      { rolls: [7], text: 'Partner or co-worker', next: 'cause' },
      { rolls: [8], text: 'Booster gang member', next: 'cause' },
      { rolls: [9], text: 'Corporate Exec', next: 'cause' },
      { rolls: [10], text: 'Government Official ', next: 'cause' }
    ],
    cause: [
      { rolls: [1], text: 'Caused the other to lose face or status', next: 'fracked' },
      { rolls: [2], text: 'Caused the loss of a lover, friend or relative', next: 'fracked' },
      { rolls: [3], text: 'Caused a major humiliation', next: 'fracked' },
      { rolls: [4], text: 'Accused the other of cowardice or some other personal flaw', next: 'fracked' },
      { rolls: [5], text: 'Caused a physical disability', next: 'disability', nextDie: 6 },
      { rolls: [6], text: 'Deserted or betrayed the other', next: 'fracked' },
      { rolls: [7], text: 'Turned down other\'s offer of job or romantic involvement', next: 'fracked' },
      { rolls: [8], text: 'You just didn\'t like each other', next: 'fracked' },
      { rolls: [9], text: 'Was a romantic rival', next: 'fracked' },
      { rolls: [10], text: 'Foiled a plan of the other\'s', next: 'fracked' }
    ],
    disability: [
      { rolls: [1,2], text: 'Lose eye', next: 'fracked'},
      { rolls: [3,4], text: 'Lose arm', next: 'fracked'},
      { rolls: [5,6], text: 'Badly scarred', next: 'fracked'},
    ],
    fracked: [
      { rolls: [1,2,3,4], text: 'They hate you', next: 'enemyAbout' },
      { rolls: [5,6,7], text: 'You hate them', next: 'enemyAbout' },
      { rolls: [8,9,10], text: 'The feeling\'s mutual', next: 'enemyAbout' }
    ],
    enemyAbout: [
      { rolls: [1,2], text: 'Go into a murderous killing rage and rip his face off!', next: 'againstYou' },
      { rolls: [3,4], text: 'Avoid the scum', next: 'againstYou' },
      { rolls: [5,6], text: 'Backstab him indirectly', next: 'againstYou' },
      { rolls: [7,8], text: 'Ignore the scum', next: 'againstYou' },
      { rolls: [9,10], text: 'Rip into him verbally', next: 'againstYou' }
    ],
    againstYou: [
      { rolls: [1,2,3], text: 'Just himself' },
      { rolls: [4,5], text: 'Himself and a few friends' },
      { rolls: [6,7], text: 'An entire Gang' },
      { rolls: [8], text: 'A small Corporation' },
      { rolls: [9], text: 'A large Corporation' },
      { rolls: [10], text: 'An entire Government Agency' }
    ],
    romance: [
      { rolls: [1,2,3,4], text: 'Happy love affair' },
      { rolls: [5], text: 'Tragic love affair', next: 'tragicRomance' },
      { rolls: [6,7], text: 'Love affair with problems', next: 'problematicRomance' },
      { rolls: [8,9,10], text: 'Fast Affairs and Hot Dates' },
    ],
    tragicRomance: [
      { rolls: [1], text: 'Lover died in accident', next: 'mutualFeelings' },
      { rolls: [2], text: 'Lover mysteriously vanished', next: 'mutualFeelings' },
      { rolls: [3], text: 'It didn\'t work out', next: 'mutualFeelings' },
      { rolls: [4], text: 'A personal goal or vendetta came between you', next: 'mutualFeelings' },
      { rolls: [5], text: 'Lover kidnapped', next: 'mutualFeelings' },
      { rolls: [6], text: 'Lover went insane', next: 'mutualFeelings' },
      { rolls: [7], text: 'Lover committed suicide', next: 'mutualFeelings' },
      { rolls: [8], text: 'Lover killed in a fight', next: 'mutualFeelings' },
      { rolls: [9], text: 'Rival cut you out of the action', next: 'mutualFeelings' },
      { rolls: [10], text: 'Lover imprisoned or exiled', next: 'mutualFeelings' },
    ],
    mutualFeelings: [
      { rolls: [1], text: 'They still love you' },
      { rolls: [2], text: 'You still love them' },
      { rolls: [3], text: 'You still love each other' },
      { rolls: [4], text: 'You hate them' },
      { rolls: [5], text: 'They hate you' },
      { rolls: [6], text: 'You hate each other' },
      { rolls: [7], text: 'You\'re friends' },
      { rolls: [8], text: 'No feeling\'s either way; it\'s over' },
      { rolls: [9], text: 'You like them, they hate you' },
      { rolls: [10], text: 'They like you, you hate them' }
    ],
    problematicRomance: [
      { rolls: [1], text: 'Your lover\'s friends/family hate you' },
      { rolls: [2], text: 'Your lover\'s friends/family would use any means to get rid of you' },
      { rolls: [3], text: 'Your friends/family hate your lover' },
      { rolls: [4], text: 'One of you has a romantic rival' },
      { rolls: [5], text: 'You are separated in some way' },
      { rolls: [6], text: 'You fight constantly' },
      { rolls: [7], text: 'You\'re professional rivals' },
      { rolls: [8], text: 'One of you is insanely jealous' },
      { rolls: [9], text: 'One of you is \"messing around\"' },
      { rolls: [10], text: 'You have conflicting backgrounds and families' }
    ]
  }
}

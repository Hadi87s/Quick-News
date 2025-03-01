// This will run once just to create our db.
import sql from 'better-sqlite3';
import { debugPort } from 'process';

const db = sql('news.db');

const newsData = [
  {
    title: "New AI Model Surpasses Human Performance",
    description: "A groundbreaking AI model has achieved unprecedented accuracy in various cognitive tasks.",
    imageUrl: "https://images.unsplash.com/photo-1726607102396-548750ce07f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "Tech Daily",
    category: "Technology",
  },
  {
    title: "Stock Market Hits Record Highs",
    description: "Investors celebrate as major stock indices reach new all-time highs amid economic recovery.",
    imageUrl: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "Financial Times",
    category: "Business",
  },
  {
    title: "Climate Change: A Growing Concern",
    description: "Scientists warn that global temperatures are rising at an alarming rate.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1664298311043-46b3814a511f?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "Nature Journal",
    category: "Environment",
  },
  {
    title: "Breakthrough in Cancer Research",
    description: "New treatment shows promise in early trials, offering hope for millions worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "Medical News Today",
    category: "Health",
  },
  {
    title: "SpaceX Successfully Lands Starship Prototype",
    description: "The latest test flight marks a major milestone in the journey to Mars.",
    imageUrl: "https://images.unsplash.com/photo-1517976547714-720226b864c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "Space Explorer",
    category: "Space",
  },
  {
    title: "World Cup Finals: Historic Victory",
    description: "An intense match ends with a historic victory in the World Cup finals.",
    imageUrl: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "Sports Weekly",
    category: "Sports",
  },
  {
    title: "Advancements in Quantum Computing",
    description: "New breakthroughs in quantum computing could revolutionize the tech industry.",
    imageUrl: "https://images.unsplash.com/photo-1617839625591-e5a789593135?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "Tech Innovations",
    category: "Technology",
  },
  {
    title: "New Legislation Aims to Tackle Cybercrime",
    description: "Governments worldwide introduce new laws to combat rising cyber threats.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "Global News",
    category: "Politics",
  },
  {
    title: "Electric Vehicles Gain Popularity Worldwide",
    description: "Sales of electric vehicles continue to grow as governments push for cleaner transportation.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1715789261470-fb25ffbf70d3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "Green Tech",
    category: "Technology",
  },
  {
    title: "Major Data Breach Exposes Millions of Users",
    description: "A large-scale data breach has compromised the personal data of millions of users.",
    imageUrl: "https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "Cyber Daily",
    category: "Technology",
  },
  {
    title: "Archaeologists Discover Lost Civilization Ruins",
    description: "An ancient civilization's ruins have been uncovered, providing new insights into history.",
    imageUrl: "https://images.unsplash.com/photo-1572905421176-6fa2f11a236e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "History Today",
    category: "History",
  },
  {
    title: "Wildlife Conservation Efforts Show Positive Results",
    description: "Conservation programs have helped restore endangered species populations worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1464039397811-476f652a343b?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceIcon: "/newspaper.png",
    sourceName: "Wildlife Journal",
    category: "Environment",
  }
];


db.prepare(`
    CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        imageUrl TEXT NOT NULL,
        sourceIcon TEXT NOT NULL,
        sourceName TEXT NOT NULL,
        category TEXT NOT NULL
    )
    `).run();

const insertData = () => {
    const insertCommand = db.prepare(`
        INSERT INTO news (title, description, imageUrl, sourceIcon, sourceName, "category") VALUES (@title,@description,@imageUrl,@sourceIcon,@sourceName, @category)`);

    for (const item of newsData) {
        insertCommand.run(item);
    }
}

insertData();

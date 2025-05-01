const fs = require('fs');

const articles = [
  {
    id: 1,
    title: "Historic Spring Tornado Outbreak in Central US",
    date: "April 15, 2024",
    location: "Oklahoma, Kansas, Texas",
    severity: "Severe",
    image: "https://images.unsplash.com/photo-1527482937786-6608f6e14c15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "The spring of 2024 witnessed one of the most significant tornado outbreaks in recent history across the Central United States, producing over 30 confirmed tornadoes in a single day and marking it as one of the most intense weather events of the decade.",
      keyPoints: [
        "Multiple EF3 and EF4 tornadoes confirmed, with wind speeds exceeding 165 mph",
        "Over 50,000 residents affected across three states",
        "Significant damage to infrastructure and property, estimated at $2.3 billion",
        "Record-breaking hail sizes reported, reaching up to 4.5 inches in diameter"
      ],
      analysis: "The outbreak was characterized by an unusually strong jet stream pattern that created exceptional wind shear in the lower atmosphere. This, combined with extremely unstable air masses, led to the formation of numerous supercell thunderstorms.",
      impacts: [
        "Power outages affecting more than 100,000 households",
        "Agricultural damage spanning over 50,000 acres of farmland",
        "Emergency response mobilization across three states",
        "Long-term recovery challenges for affected communities"
      ],
      conclusion: "This historic outbreak will influence severe weather preparedness and response strategies for years to come, potentially saving countless lives in future events."
    }
  },
  {
    id: 2,
    title: "Record-Breaking Heat Wave Grips Western United States",
    date: "April 12, 2024",
    location: "California, Nevada, Arizona",
    severity: "Extreme",
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "An extraordinary early spring heat wave has shattered temperature records across the Western United States, raising serious concerns about drought conditions, wildfire risks, and public health impacts.",
      keyPoints: [
        "Phoenix, AZ: 105°F (Previous April record: 103°F)",
        "Las Vegas, NV: 101°F (Previous April record: 98°F)",
        "Sacramento, CA: 91°F (Previous April record: 89°F)",
        "Multiple cities experiencing mid-summer conditions in spring"
      ],
      analysis: "Climate scientists attribute this extreme weather event to a combination of factors, including a persistent high-pressure system, ongoing drought conditions, and long-term climate change effects.",
      impacts: [
        "Heat-related emergency room visits up 300%",
        "Cooling centers opened across major cities",
        "Early start to wildfire season",
        "Significant strain on power grid systems"
      ],
      conclusion: "The heat wave serves as a stark reminder of the changing climate and the need for comprehensive adaptation strategies."
    }
  },
  {
    id: 3,
    title: "Unprecedented Arctic Sea Ice Loss Recorded",
    date: "April 10, 2024",
    location: "Arctic Circle",
    severity: "Critical",
    image: "https://images.unsplash.com/photo-1534862559316-c7c3d61b9bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "Scientists monitoring Arctic sea ice conditions have reported an unprecedented decline...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 4,
    title: "Devastating Cyclone Impacts South Pacific Islands",
    date: "April 8, 2024",
    location: "South Pacific Ocean",
    severity: "Severe",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "A Category 5 cyclone has caused widespread destruction across multiple Pacific island nations...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 5,
    title: "Megadrought Intensifies in Mediterranean Region",
    date: "April 6, 2024",
    location: "Mediterranean Basin",
    severity: "Critical",
    image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "Historic drought conditions continue to worsen across Southern Europe and North Africa...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 6,
    title: "Rare Spring Blizzard Paralyzes Northern Europe",
    date: "April 4, 2024",
    location: "Scandinavia and Baltic Region",
    severity: "Severe",
    image: "https://images.unsplash.com/photo-1516431883659-655d5420c6f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "An unexpected late-season snowstorm has brought record snowfall to Northern European countries...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 7,
    title: "Massive Dust Storm Engulfs Middle Eastern Cities",
    date: "April 2, 2024",
    location: "Middle East",
    severity: "Extreme",
    image: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "An unprecedented dust storm has reduced visibility to near zero across multiple countries...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 8,
    title: "Record Rainfall Triggers Landslides in South America",
    date: "March 31, 2024",
    location: "Andes Region",
    severity: "Critical",
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "Extreme precipitation has led to devastating landslides and flooding in multiple Andean countries...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 9,
    title: "Unprecedented Ocean Heat Wave Threatens Marine Life",
    date: "March 29, 2024",
    location: "Pacific Ocean",
    severity: "Critical",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080b4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "Marine scientists report extreme ocean temperatures causing widespread coral bleaching...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 10,
    title: "Severe Air Quality Crisis Hits Asian Megacities",
    date: "March 27, 2024",
    location: "Southeast Asia",
    severity: "Extreme",
    image: "https://images.unsplash.com/photo-1573747806413-2ddd2f5ed207?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "Dangerous levels of air pollution have forced school closures and health warnings...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 11,
    title: "Historic Flooding Devastates Central African Nations",
    date: "March 25, 2024",
    location: "Central Africa",
    severity: "Severe",
    image: "https://images.unsplash.com/photo-1547683905-f686c993c794?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "Unprecedented rainfall has caused major rivers to overflow in Central Africa...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 12,
    title: "Extreme Cold Snap Hits Australian Winter",
    date: "March 23, 2024",
    location: "Southern Australia",
    severity: "Severe",
    image: "https://images.unsplash.com/photo-1517759568276-1bcef0316c3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "An unusual winter weather pattern has brought record-low temperatures to Australia...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 13,
    title: "Volcanic Activity Disrupts Pacific Air Travel",
    date: "March 21, 2024",
    location: "Pacific Ring of Fire",
    severity: "Extreme",
    image: "https://images.unsplash.com/photo-1514924527133-371124f6f5e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "Multiple volcanic eruptions have caused widespread flight cancellations...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 14,
    title: "Unprecedented Spring Frost Damages European Crops",
    date: "March 19, 2024",
    location: "Western Europe",
    severity: "Severe",
    image: "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "A late frost event has caused significant damage to agricultural regions...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 15,
    title: "Massive Ice Shelf Collapse in Antarctica",
    date: "March 17, 2024",
    location: "Antarctic Peninsula",
    severity: "Critical",
    image: "https://images.unsplash.com/photo-1517759568276-1bcef0316c3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "Scientists have documented the rapid disintegration of a major Antarctic ice shelf...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 16,
    title: "Saharan Dust Cloud Reaches Americas",
    date: "March 15, 2024",
    location: "Atlantic Basin",
    severity: "Moderate",
    image: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "A massive dust plume from Africa has crossed the Atlantic Ocean...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 17,
    title: "Monsoon Arrives Early in South Asia",
    date: "March 13, 2024",
    location: "Indian Subcontinent",
    severity: "Severe",
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "The unexpected early onset of monsoon season has brought heavy rainfall...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 18,
    title: "Polar Vortex Disruption Causes Weather Chaos",
    date: "March 11, 2024",
    location: "Northern Hemisphere",
    severity: "Extreme",
    image: "https://images.unsplash.com/photo-1516431883659-655d5420c6f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "A major disruption of the polar vortex has led to extreme weather conditions...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 19,
    title: "Great Lakes Experience Record Low Ice Cover",
    date: "March 9, 2024",
    location: "Great Lakes Region",
    severity: "Moderate",
    image: "https://images.unsplash.com/photo-1543968996-ee822b8176ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "Warming temperatures have led to historically low ice coverage on the Great Lakes...",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  },
  {
    id: 20,
    title: "El Niño Reaches Historic Intensity",
    date: "March 7, 2024",
    location: "Global",
    severity: "Critical",
    image: "https://images.unsplash.com/photo-1527482937786-6608f6e14c15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    baseContent: {
      intro: "In an unprecedented development, the current El Niño event has reached historic intensity levels, surpassing previous records and causing widespread disruption to global weather patterns.",
      keyPoints: [
        "Record-breaking temperature anomalies in the central Pacific",
        "Significant shifts in global precipitation patterns",
        "Disruption of marine ecosystems worldwide",
        "Extreme weather events across multiple continents"
      ],
      analysis: "Scientists at major climate monitoring centers worldwide are reporting exceptional warming in the equatorial Pacific Ocean, with far-reaching consequences for weather systems across the globe.",
      impacts: [
        "Agricultural disruptions in multiple regions",
        "Increased frequency of extreme weather events",
        "Marine ecosystem disturbances",
        "Global economic impacts estimated in billions"
      ],
      conclusion: "This historic El Niño event highlights the interconnected nature of global weather systems and the increasing intensity of climate-related phenomena."
    }
  }
];

function generateFullArticle(article) {
  const { baseContent } = article;
  const fullArticle = `
${baseContent.intro}

Key Findings:
${baseContent.keyPoints.map(point => `- ${point}`).join('\n')}

Detailed Analysis:
${baseContent.analysis}

Impact Assessment:
${baseContent.impacts.map(impact => `- ${impact}`).join('\n')}

Conclusion:
${baseContent.conclusion}

[... continues with detailed scientific analysis, eyewitness accounts, and recovery efforts ...]
  `.trim();

  return {
    ...article,
    summary: `${baseContent.intro.slice(0, 150)}...`,
    fullArticle
  };
}

const weatherNews = articles.map(generateFullArticle);

const output = `export const weatherNews = ${JSON.stringify(weatherNews, null, 2)};`;

fs.writeFileSync('src/data/weatherNews.js', output);

console.log('Generated weather news articles successfully!'); 
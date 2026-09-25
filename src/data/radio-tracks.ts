export interface RadioTrack {
  id: string;
  title: string;
  speaker: string;
  series: string;
  duration: string;
  durationSeconds: number;
  src: string;
  category: string;
  image?: string;
  description?: string;
}

export const BWC_RADIO_TRACKS: RadioTrack[] = [
  {
    id: "face-to-face-pt1",
    title: "Face 2 Face (Part 1)",
    speaker: "Pastor Udochukwu Nwanma",
    series: "Face 2 Face",
    duration: "55m",
    durationSeconds: 3305,
    src: "/sermon/pastor-ud-face-to-face.mp3",
    category: "Intimacy",
    image: "/images/pastUD.jpg",
    description:
      "Part 1 of the Face 2 Face series. A profound journey into seeking God's presence, direct communion with the Father, and transforming from glory to glory.",
  },
  {
    id: "face-to-face-pt2",
    title: "Face 2 Face (Part 2)",
    speaker: "Pastor Udochukwu Nwanma",
    series: "Face 2 Face",
    duration: "1h 05m",
    durationSeconds: 3902,
    src: "/sermon/pastor-ud-face-to-face-pt2.mp3",
    category: "Intimacy",
    image: "/images/pastUD.jpg",
    description:
      "Part 2 of the Face 2 Face series. Beholding the glory of the Lord, beholding as in a glass, and walking in uninterrupted fellowship.",
  },
  {
    id: "face-to-face-pt3",
    title: "Face 2 Face (Part 3)",
    speaker: "Pastor Udochukwu Nwanma",
    series: "Face 2 Face",
    duration: "46m",
    durationSeconds: 2785,
    src: "/sermon/pastor-ud-face-to-face-pt3.mp3",
    category: "Intimacy",
    image: "/images/pastUD.jpg",
    description:
      "The concluding climax of Face 2 Face. Entering into the secret place of the Most High and carrying divine manifestation everywhere.",
  },
  {
    id: "dont-give-up",
    title: "Don't Give Up",
    speaker: "Pastor Udochukwu Nwanma",
    series: "Kingdom Faith",
    duration: "1h 06m",
    durationSeconds: 3991,
    src: "/sermon/pastor-ud-dont-give-up.mp3",
    category: "Faith & Perseverance",
    image: "/images/pastUD.jpg",
    description:
      "A battle cry of hope and endurance. Trusting God in trials, holding fast to your confession, and breaking through to victory.",
  },
  {
    id: "living-the-love-life",
    title: "Living the Love Life",
    speaker: "Pastor Chika UD Nwanma",
    series: "The Love Walk",
    duration: "58m",
    durationSeconds: 3487,
    src: "/sermon/pst-chika-living-the-love-life.mp3",
    category: "Grace & Love",
    image: "/images/chika.jpg",
    description:
      "Understanding the power of God's unconditional love working in and through us to impact marriages, families, and communities.",
  },
  {
    id: "spiritual-warfare-part-2",
    title: "Spiritual Warfare (Part 2)",
    speaker: "Pastor Udochukwu Nwanma",
    series: "Kingdom Authority",
    duration: "1h 02m",
    durationSeconds: 3743,
    src: "/sermon/pst-ud-spiritual-warfare-part-2.mp3",
    category: "Kingdom Authority",
    image: "/images/pastUD.jpg",
    description:
      "Standing firm in Christ's finished work, operating from a position of seated authority, and disarming every device of darkness.",
  },
];

import { useState } from "react";

const newsData = [
  { id: 1, title: "Private Universities Rank Higher in Research", content: "Recent studies show private universities in Bangladesh are excelling in research output and faculty publications." },
  { id: 2, title: "Tuition Fees: Rising Costs for Students", content: "A report suggests that tuition fees in private universities have increased by 15% over the last five years." },
  { id: 3, title: "Industry Collaboration Improves Job Placements", content: "Private universities are partnering with industries to improve graduate employability and internship opportunities." },
  { id: 4, title: "New Campus Openings Across the Country", content: "Several private universities are expanding their campuses to accommodate more students and provide better facilities." },
  { id: 5, title: "Scholarship Programs on the Rise", content: "Many private universities are introducing new scholarship programs to support financially disadvantaged students." }
];

const factsData = [
  "There are over 100 private universities in Bangladesh.",
  "Most private universities follow the semester system, unlike public universities.",
  "Some private universities have international collaborations for dual degrees.",
  "Private universities contribute significantly to research in business, IT, and engineering fields.",
  "Private universities offer more flexible course options and evening programs for working students.",
  "Many private universities have state-of-the-art laboratories and research centers."
];

const Homepage = () => {
  const [news] = useState(newsData);
  const [facts] = useState(factsData);

  return (
    <div className="min-h-screen" style={{ 
      background: "linear-gradient(to right top, #FDF0D5, #E5C1F2)",
      padding: "20px"
    }}>
      {/* Hero Section */}
      <div className="hero min-h-screen flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold text-gray-800">Welcome to University News</h1>
            <p className="py-6 text-lg text-gray-600">
              Stay updated with the latest news, trends, and insights about private universities in Bangladesh. Discover top stories, facts, and in-depth analysis here.
            </p>
            <button className="btn btn-primary text-lg px-6 py-3">Explore Now</button>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="p-6 max-w-6xl mx-auto">
        <header className="text-center text-5xl font-bold text-gray-800 border-b-4 pb-6 mb-8">University News Daily</header>
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="md:col-span-2">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Top Stories</h2>
            {news.map((article) => (
              <article key={article.id} className="mb-8 p-6 bg-white shadow-lg rounded-md">
                <h3 className="text-2xl font-bold text-gray-800">{article.title}</h3>
                <p className="text-gray-700 mt-3 text-lg">{article.content}</p>
              </article>
            ))}
          </section>
          <aside className="bg-white p-6 shadow-lg rounded-md">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Did You Know?</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              {facts.map((fact, index) => (
                <li key={index} className="mb-3">{fact}</li>
              ))}
            </ul>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Homepage;

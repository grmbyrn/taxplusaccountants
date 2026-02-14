const articles = [
  {
    title: "How to Prepare for Tax Season: Essential Tips",
    summary: "Get ready for tax season with these essential tips for businesses and individuals. Learn how to organize your documents and maximize your deductions.",
    date: "September 20, 2025"
  },
  {
    title: "The Importance of Financial Planning for Small Businesses",
    summary: "Discover why financial planning is crucial for small businesses and how it can help you achieve long-term success.",
    date: "September 12, 2025"
  },
  {
    title: "Top 5 Accounting Mistakes and How to Avoid Them",
    summary: "Avoid common accounting mistakes with our expert advice. Learn what to watch out for and how to keep your books accurate.",
    date: "September 5, 2025"
  }
];

const LatestArticles = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
        Take a look at our news and articles
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
            <div>
              <span className="block text-sm text-muted-foreground mb-2">{article.date}</span>
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-muted-foreground mb-4">{article.summary}</p>
            </div>
            <a
              href="#"
              className="text-primary font-semibold hover:underline mt-auto"
              tabIndex={-1}
              aria-disabled="true"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LatestArticles;
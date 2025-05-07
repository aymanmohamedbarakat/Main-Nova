import React from "react";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog3.png";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The History of Diamond Engagement Rings",
      excerpt:
        "Discover the fascinating origins of diamond engagement rings and how they became a symbol of love and commitment.",
      image: Blog1,
      date: "May 2, 2025",
      category: "Traditions",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Wedding Band",
      excerpt:
        "Find the ideal wedding band to complement your engagement ring with our comprehensive guide.",
      image: Blog2,
      date: "April 28, 2025",
      category: "Buying Guides",
    },
    {
      id: 3,
      title: "Ethical Sourcing in Jewelry: Why It Matters",
      excerpt:
        "Learn about the importance of ethical sourcing in the jewelry industry and how to make responsible purchases.",
      image: Blog3,
      date: "April 15, 2025",
      category: "Sustainability",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-3">Elegant Insights</h1>
          <p className="lead text-muted">
            Discover the latest trends, tips, and stories about fine jewelry.
          </p>
          <hr className="my-4" />
        </div>
      </div>

      <div className="row">
        {blogPosts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card h-100 shadow-sm">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <span className="badge bg-secondary mb-2">{post.category}</span>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
              </div>
              <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                <small className="text-muted">{post.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

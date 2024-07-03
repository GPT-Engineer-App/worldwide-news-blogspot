import { Link } from "react-router-dom";

const categories = [
  { name: "World", path: "/categories/world" },
  { name: "Politics", path: "/categories/politics" },
  { name: "Business", path: "/categories/business" },
  { name: "Technology", path: "/categories/technology" },
  { name: "Sports", path: "/categories/sports" },
  { name: "Entertainment", path: "/categories/entertainment" },
];

const Categories = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name}>
            <Link to={category.path} className="text-blue-500">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
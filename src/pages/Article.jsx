import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

const fetchArticle = async (id) => {
  const res = await fetch(`https://api.example.com/articles/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }
  return res.json();
};

const Article = () => {
  const { id } = useParams();
  const { data: article, isLoading } = useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchArticle(id),
  });

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <Skeleton className="h-64 w-full" />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <p className="text-gray-500 mb-4">
            By {article.author} on {new Date(article.publishedAt).toLocaleDateString()}
          </p>
          <img src={article.image} alt={article.title} className="w-full h-64 object-cover mb-4" />
          <div className="prose">
            <p>{article.content}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Article;
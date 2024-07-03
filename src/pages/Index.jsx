import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const fetchFeaturedNews = async () => {
  const res = await fetch("https://api.example.com/featured-news");
  if (!res.ok) {
    throw new Error("Failed to fetch featured news");
  }
  return res.json();
};

const fetchLatestNews = async () => {
  const res = await fetch("https://api.example.com/latest-news");
  if (!res.ok) {
    throw new Error("Failed to fetch latest news");
  }
  return res.json();
};

const Index = () => {
  const { data: featuredNews, isLoading: isLoadingFeatured } = useQuery({
    queryKey: ["featuredNews"],
    queryFn: fetchFeaturedNews,
  });

  const { data: latestNews, isLoading: isLoadingLatest } = useQuery({
    queryKey: ["latestNews"],
    queryFn: fetchLatestNews,
  });

  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured News</h2>
        {isLoadingFeatured ? (
          <Skeleton className="h-64 w-full" />
        ) : (
          <Card>
            <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-64 object-cover" />
            <CardHeader>
              <CardTitle>{featuredNews.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{featuredNews.description}</p>
              <Link to={`/article/${featuredNews.id}`} className="text-blue-500">
                Read more
              </Link>
            </CardContent>
          </Card>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoadingLatest
            ? Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-48 w-full" />
              ))
            : latestNews.map((news) => (
                <Card key={news.id}>
                  <img src={news.thumbnail} alt={news.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{news.description}</p>
                    <Link to={`/article/${news.id}`} className="text-blue-500">
                      Read more
                    </Link>
                  </CardContent>
                </Card>
              ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
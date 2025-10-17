import React, { useState, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Card, Spin, Button, Row, Col, Pagination } from "antd";

const { Meta } = Card;

const fetchProducts = async ({ pageParam = 1 }) => {
  const limit = 12;
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${(pageParam - 1) * limit}`
  );
  const data = await res.json();
  return {
    products: data.products,
    nextPage: pageParam + 1,
    total: data.total,
  };
};

const ProductsWithPaginationAndLoadMore = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: fetchProducts,
      getNextPageParam: (lastPage, allPages) => {
        const loaded = allPages.flatMap((p) => p.products).length;
        return loaded < lastPage.total ? lastPage.nextPage : undefined;
      },
    });

  const [currentPage, setCurrentPage] = useState(1);
  const [displayCount, setDisplayCount] = useState(12);
  const pageSize = 12;

  const allProducts = data?.pages?.flatMap((page) => page.products) ?? [];
  const total = data?.pages?.[0]?.total ?? 0;

  const startIndex = (currentPage - 1) * pageSize;
  const displayedProducts = allProducts.slice(startIndex, startIndex + displayCount);

  useEffect(() => {
    setDisplayCount(12);
    const totalNeeded = startIndex + 12;
    if (allProducts.length < totalNeeded && hasNextPage) {
      fetchNextPage();
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLoadMore = async () => {
    const nextDisplay = displayCount + 8;
    const totalNeeded = startIndex + nextDisplay;

    if (allProducts.length < totalNeeded && hasNextPage) {
      await fetchNextPage();
    }

    setDisplayCount(nextDisplay);
  };

  if (isLoading) {
    return (
      <Spin size="large" style={{ display: "block", margin: "100px auto" }} />
    );
  }

  return (
    <div style={{ padding: "40px 60px", maxWidth: 1300, margin: "0 auto" }}>
      <h2 style={{ fontSize: 26, fontWeight: 600, marginBottom: 30, textAlign: "center" }}>
        Mahsulotlar
      </h2>

      <Row gutter={[20, 20]}>
        {displayedProducts.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{
                borderRadius: 12,
                overflow: "hidden",
                boxShadow:
                  "0 2px 8px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.03)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              cover={
                <img
                  alt={item.title}
                  src={item.thumbnail}
                  style={{
                    height: 220,
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              }
            >
              <Meta
                title={item.title}
                description={
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>
                      ${item.price}
                    </div>
                    <div style={{ color: "#888", fontSize: 13, marginTop: 4 }}>
                      {item.category}
                    </div>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      {startIndex + displayCount < total && (
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Button
            type="primary"
            size="large"
            onClick={handleLoadMore}
            loading={isFetchingNextPage}
            style={{
              width: 320,
              height: 50,
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 12,
              background: "#6C3BF6",
            }}
          >
            {isFetchingNextPage ? "Yuklanmoqda..." : "Yana ko‘rsatish"}
          </Button>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "center", marginTop: 30}}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default ProductsWithPaginationAndLoadMore;


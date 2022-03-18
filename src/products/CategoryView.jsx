import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Pagination,
  Typography,
  CircularProgress,
} from "@mui/material";
import ProductCard2 from "./ProductCard2";
import axios from "axios";
import { NETWORK_URL } from "../links";

const CategoryView = (props) => {
  const { category } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [fetching, setFetching] = useState(false);

  const fetchData = useCallback(
    (pageNumber) => {
      setDataList([]);
      setFetching(true);
      axios
        .get(`${NETWORK_URL}/client/category/${category}/${pageNumber}`)
        .then((response) => response.data)
        .then((data) => {
          if (data.product_list.length > 0) {
            setDataList([...data.product_list]);
            setPageCount(data.number_of_pages);
          }
          // // setIsZero(data.product_list.length > 0);
          setFetching(false);
          // console.log(data);
        })
        .catch((error) => {
          alert("something went wrong");
          // setFetching(false);
        });
    },
    [category]
  );

  useEffect(() => {
    fetchData(pageNumber);
    return () => {
      setDataList([]);
    };
  }, [fetchData]);

  const upDatePageNumber = (event, value) => {
    if (value !== pageNumber) {
      setPageNumber(value);
      fetchData(value);
    }
  };

  return (
    <>
      <Box sx={{ mt: "10rem" }} />
      <Typography variant="h4" align="center" gutterBottom sx={{ my: "3rem" }}>
        {category}
      </Typography>
      {fetching ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">Loading...</Typography> &nbsp;
            <CircularProgress />
          </Box>
        </>
      ) : (
        <>
          {!dataList.length > 0 ? (
            <>
              <Typography variant="h4" align="center">
                Nothing Here
              </Typography>
            </>
          ) : (
            <>
              <Grid
                container
                rowGap={5}
                columnGap={1}
                justifyContent="space-evenly"
                sx={{
                  width: {
                    lg: "90%",
                    md: "90%",
                    sm: "95%",
                    xs: "95%",
                  },
                  mx: "auto",
                  my: "1rem",
                }}
              >
                {dataList.map((item, index) => {
                  return (
                    <ProductCard2
                      item={item}
                      category={category}
                      key={`productCard2${category}${index}`}
                    />
                  );
                })}
              </Grid>
            </>
          )}
        </>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: "3rem",
        }}
      >
        <Pagination
          count={pageCount}
          defaultPage={1}
          color="primary"
          shape="rounded"
          showFirstButton={true}
          showLastButton={true}
          onChange={upDatePageNumber}
          size="large"
          disabled = { dataList.length === 0 }
        />
      </Box>
    </>
  );
};

export default CategoryView;

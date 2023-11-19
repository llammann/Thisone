import React from "react";
import greenone from "../images/greenone.webp";
import { HeartOutlined } from "@ant-design/icons";
import { HeartFilled } from "@ant-design/icons";

import { ShoppingFilled } from "@ant-design/icons";

import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";

function Basket({ products, setProducts, BasketState, setBasketState }) {
  // LOCAL
  let baskettarray = [];
  if (JSON.parse(localStorage.getItem("BasketLocal"))) {
    baskettarray = [...JSON.parse(localStorage.getItem("BasketLocal"))];
  }

  return (
    <>
      <h1>Basket</h1>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(270px, 1fr))"
      >
        {baskettarray.map((bas) => {
          console.log(bas);
          let product = products.find((prod) => prod.id === bas);
          console.log(product);
          if (product) {
            {
              return (
                <Card key={product.id}>
                  <img src={greenone} />
                  <CardHeader>
                    <Heading size="md">{product.name}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{product.description}</Text>
                    <h1>ID: {product.id}</h1>
                  </CardBody>
                  <CardFooter>
                    <Button>{<HeartOutlined />}</Button>
                    <Button
                      id={product.id}
                      onClick={(e) => {
                        // console.log("heyyy broo")
                        // console.log(e.target.id);
                        let check = BasketState.includes(e.target.id);
                        if (check) {
                          let removed = BasketState.filter(
                            (bas) => bas !== e.target.id
                          );
                          setBasketState(removed);
                          console.log("silindi");
                          // LOCAL
                          localStorage.setItem(
                            "BasketLocal",
                            JSON.stringify(removed)
                          );
                        } else {
                          console.log("silinmir");
                        }
                      }}
                    >
                      <ShoppingFilled />
                    </Button>
                    <Button>{product.discountPercent}%</Button>
                    {/* <Button><HeartFilled /></Button> */}
                  </CardFooter>
                </Card>
              );
            }
          } else {
            return null;
          }
        })}
      </SimpleGrid>
    </>
  );
}

export default Basket;

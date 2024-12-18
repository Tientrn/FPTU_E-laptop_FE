import React from "react";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import DetailsIcon from "@mui/icons-material/Details";

function Laptop() {
  return (
    <div className="product">
      <div className="laptop">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Lenovo ThinkPad"
            height="140"
            image="https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/03/lenovo-thinkpad-t14-gen-4-angled-view-grey-blue-and-orange.jpg"
          />
          <CardContent>
            <Typography
              variant="h7"
              sx={{ color: "black", fontWeight: "bolder" }}
            >
              Laptop Lenovo ThinkPad T14s Gen 4, Core i7-1370P, Ram 32GB, SSD
              256GB, Màn hình 14 inch, Wifi 6
            </Typography>
            <Typography
              gutterBottom
              variant="price"
              component="div"
              sx={{ marginTop: "10px" }}
            >
              <span className="price">6,450,000₫</span>
              <del>6,990,000₫</del>
            </Typography>

            <Rating
              name="size-medium"
              defaultValue={2}
              sx={{ marginTop: "10px" }}
            />
          </CardContent>
          <CardActions>
            <Button size="small">
              <ShoppingCartCheckoutRoundedIcon /> Add to cart
            </Button>
            <Button size="small">
              <DetailsIcon />
              View detail
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Laptop;

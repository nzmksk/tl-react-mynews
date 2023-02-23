import {
  Favorite as FavoriteIcon,
  MoreVert as MoreVertIcon,
  Share as ShareIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import img from "../../../images/SupraSono-01.png";

function NewsItem() {
  return (
    <Card sx={{ maxWidth: "300px" }}>
      <CardHeader
        avatar={<Avatar>N</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="News title"
        subheader="Date published"
      />
      <CardMedia component="img" image={img} />
      <CardContent>
        <Typography>News details</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default NewsItem;

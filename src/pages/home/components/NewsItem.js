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

function NewsItem(props) {
  const { author, content, description, publishedAt, title, url, urlToImage } =
    props.news;

  return (
    <Card sx={{ maxWidth: "300px" }}>
      <CardHeader
        avatar={<Avatar>{author}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={publishedAt}
      />
      <CardMedia component="img" src={urlToImage} />
      <CardContent>
        <Typography>{content}</Typography>
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

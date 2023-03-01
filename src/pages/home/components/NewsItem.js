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

function NewsItem({news}) {
  const { author, publishedAt, title, url, urlToImage } = news;

  const publishedDate = publishedAt.slice(0, 10);

  const redirectLink = () => {
    window.open().location.href = url;
  };

  return (
    <Card sx={{ maxWidth: "200px" }} onClick={redirectLink}>
      <CardHeader
        avatar={<Avatar>{author[0]}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={publishedDate}
      />
      <CardMedia component="img" src={urlToImage} />
      <CardContent>
        <Typography>{title}</Typography>
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

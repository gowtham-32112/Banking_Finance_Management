import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const images = [
  {
    url: 'https://www.informalnewz.com/wp-content/webp-express/webp-images/uploads/2023/07/cash-withdrawal--768x448.jpg.webp',
    title: 'WITHDRAWAL',
    width: '33.33%',
    height:'33.33%',
  },
  {
    url: 'https://cdn.corporatefinanceinstitute.com/assets/deposit.jpeg',
    title: 'DEPOSIT',
    width: '33.33%',
    height:'33.33%',
  },
  {
    url: 'https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2021/11/How-To-Get-a-Personal-Loan-easily-768x576.jpg',
    title: 'LOAN',
    width: '33.33%',
    height:'33.33%',
  },
  {
    url: 'https://images.assettype.com/fortuneindia%2F2021-06%2F249aac8f-33e8-497a-820a-88a3576d2e58%2FJX7PWD__1_.jpg?w=1250&q=60',
    title: 'INSURANCE',
    width: '33.33%',
    height:'33.33%',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQW_eIB-r7ET-I-FolSnzRMX3_TvpvTwCGI0bTKwhcPQ&s',
    title: 'CARDS',
    width: '33.33%',
    height:'33.33%',
  },
  {
    url: 'https://www.shutterstock.com/image-photo/open-bank-account-banking-savings-600nw-392326690.jpg',
    title: 'MYACCOUNTS',
    width: '33.33%',
    height:'33.33%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 3,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '10px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 1,
  right: 1,
  top: 1,
  bottom: 1,
  backgroundsize: 'contain',
  backgroundPosition: 'center',
  backgroundColor:'#eeeeee',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const TextFieldContainer = styled(Box)({
  width: '100%',
  marginTop: 20,
});

export default function ButtonBaseDemo() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
      <TextFieldContainer>
        <TextField label="Enter your text" variant="outlined" />
      </TextFieldContainer>
    </Box>
  );
}

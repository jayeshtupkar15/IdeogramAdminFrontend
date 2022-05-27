import React, { useEffect, useState } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';
import FileSaver from 'file-saver';
import ImageList from '@mui/material/ImageList';
import { Button, Card, Checkbox } from '@material-ui/core';
import ImageListItem from '@mui/material/ImageListItem';
import CardMedia from '@mui/material/CardMedia';
import background1 from 'src/assets/backgrounds/background1.jpg'
import background2 from 'src/assets/backgrounds/background2.jpg'
import background3 from 'src/assets/backgrounds/background3.jpg'
import background4 from 'src/assets/backgrounds/background4.jpg'
import background5 from 'src/assets/backgrounds/background5.jpg'
import {useNavigate}  from 'react-router-dom';

const CustomizedMedia = () => {

  const [selectedImage, setSelectedImage] = useState(background1);
  const images = [background1,background2,background3,background4,background5];

  const navigate = useNavigate();

  const handleClick = (img,index)=>{
    console.log(img)
    setSelectedImage(img);
  }

  return (
    <>
    <Card      
    sx={{
      padding: "10px",
        display: 'flex',
        justifyContent: "space-between"
      }}
      >
        {images.map((image,index)=>(<img key={index} src={image} style={{width: '200px', border: "2px solid red"}} onClick={()=>handleClick(image,index)}/>))} 
    </Card>
    <Button
          color="primary"
          size="large"
          variant="contained"
          sx={{ m: 1 }}
          href="editimage"
        >
          Proceed
        </Button>
    </>
  );
};

export default CustomizedMedia;

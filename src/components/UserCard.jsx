import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import { useNavigate } from "react-router-dom";

const FlexBetween = styled(Box)({
    display: "flex",
    alignItems: "center",
    border: "1px solid #000",
    padding: "10px",
    gap: "20px",
    marginBottom: "10px",
    borderRadius: "10px",
  });
export default function UserCard({id,url,name,subtitle}) {
    const navigate = useNavigate();

  return (
    <FlexBetween>
        <Box width={'60px'} height={'60px'}>
        <img
            style={{ objectFit: "cover", borderRadius: "50%" }}
            width={'60px'}
            height={'60px'}
            alt="user"
            src={url}
        />
        </Box>
        <Box
          onClick={() => {
            navigate(id);
          }}
          sx={{ textAlign: 'left' }}
        >
          <Typography
            color={"primary"}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: 'green',
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={'textSecondary'} fontSize="0.85rem">
            {subtitle}
          </Typography>
        </Box>
    </FlexBetween>
  )
}

import { Link } from 'react-router-dom';
import { Typography ,Card, CardContent,CardMedia, Box } from '@mui/material';
import { Check, CheckCircle } from '@mui/icons-material';

import { demoProfilePicture } from './utils/constants';

const ChannelCard = ({channelDetail}) => {
    return ( 
        <Box sx={{
            boxShadow : 'none',
            borderRadius : 0
        }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display : 'flex' , flexDirection : 'row' , justifyContent :'column' ,textAlign : 'center' , color : '#FFF'}}>
                    <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius : '50%' ,height : '180px' ,width : '80px' }}
                    />
                </CardContent>
            </Link>
        </Box>
     );
}
 
export default ChannelCard;
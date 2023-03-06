import { Stack,Box } from '@mui/material'
import ChannelCard from './ChannelCard';
import ViedoCard from './ViedoCard';



const Videos = ({videos}) => {
    
    return ( 
        <Stack direction='row' flexWrap='wrap' justifycontent='start' gap={2}>
            {videos.map((item,idx)=>(
                <Box key={idx}>
                    { item.id.videoId && <ViedoCard viedo={item}/> }
                    { item.id.channelId && <ChannelCard channelDetail={item}/>}
                </Box>
            ))}
        </Stack>
     );
}
 
export default Videos;
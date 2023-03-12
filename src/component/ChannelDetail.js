import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos,ChannelCard } from './';
import { fetchApi } from './utils/fetchApi';


const ChannelDetail = () => {

    const [channelDetail,setchannelDetail] = useState(null);
    const [ videos,setVideos ] = useState([]);
    const { id } = useParams();

    useEffect(()=>{
        fetchApi(`channels?part=snippet&id=${id}`)
        .then((data)=>setchannelDetail(data?.items[0]))

        fetchApi(`search?channelId=${id}&part=snippet&order=date`)
        .then((data)=>setVideos(data?.items))
    },[id])

    return ( 
    <Box minHeight="95vh">
    <Box>
        <div style={{
             background: 
                'linear-gradient(90deg, rgba(182,10,63,1) 0%, rgba(224,67,102,1) 26%, rgba(3,217,215,1) 47%, rgba(153,115,37,1) 70%, rgba(245,1,84,1) 95%)',
                zIndex : 10 ,
                height : "300px"     
        }}/>
        <ChannelCard channelDetail={channelDetail}
        marginTop= "-110px"/>
       
       
    </Box>
    <Box display="flex" p='2'>
        <Box sx={{ mr: {sm: '100px'}}}/>
        <Videos videos={videos} />
         
    </Box>
    </Box>
     );
}
 
export default ChannelDetail;
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Box from "@mui/material/Box";

import { Navbar,ChannelDetail,Feed, SearchFeed, ViedoDetail } from "./component";



const App = () =>(
    <BrowserRouter>
    <Navbar/>
        <Box sx={{backgroundColor : '#000'}}>
        <Routes>
           <Route path="/" element={<Feed/> }/>
           <Route path="/viedo/:id" element={<ViedoDetail/> }/>
           <Route path="/channel/:id" element={<ChannelDetail/> }/>
           <Route path="/search/:searchTerm" element={<SearchFeed/> }/>

        </Routes>
        </Box>
    </BrowserRouter>
)

export default App;
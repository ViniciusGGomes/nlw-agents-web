import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecordRoomAudio } from "./pages/record-room-audio";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<CreateRoom />} />
          <Route element={<Room />} path="/room/:roomId"></Route>
          <Route
            element={<RecordRoomAudio />}
            path="/room/:roomId/audio"
          ></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

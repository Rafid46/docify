"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react";
import Loader from "./Loader";
import Header from "@/app/(root)/Header";
import { Editor } from "./editor/Editor";

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header />
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;

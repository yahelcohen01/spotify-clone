import React, { useState, useEffect, useRef } from "react";
import { Card, Grid } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "../components/global/Sidebar/Sidebar";
import { Outlet } from "@tanstack/react-router";
import { Controls } from "../components/global/AudioControl/Controls";
import { AppToolBar } from "../components/global/AppToolBar/AppToolBar";

export const Route = createFileRoute("/_sidebarLayout")({
  component: () => {
    const [opacity, setOpacity] = useState<number>(0);
    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
      if (cardRef.current) {
        const scrollTop = cardRef.current.scrollTop;
        const maxScroll = 75;
        const newOpacity = Math.min(1, scrollTop / (maxScroll / 2));
        setOpacity(newOpacity);
      }
    };

    useEffect(() => {
      const cardElement = cardRef.current;
      if (cardElement) {
        cardElement.addEventListener("scroll", handleScroll);
        return () => {
          cardElement.removeEventListener("scroll", handleScroll);
        };
      }
    }, []);

    return (
      <Grid container height="100%">
        <Grid
          item
          xs={12}
          style={{
            height: "calc(100% - 72px)",
            display: "flex",
            padding: ".5rem",
            columnGap: ".5rem",
          }}
        >
          <Sidebar />
          <Card
            ref={cardRef}
            sx={{
              width: "100%",
              background: "linear-gradient(#222, #121212)",
              height: "100%",
              overflowY: "scroll",
            }}
          >
            <AppToolBar opacity={opacity} />
            <Outlet />
          </Card>
        </Grid>
        <Controls />
      </Grid>
    );
  },
});

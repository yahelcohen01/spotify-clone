import { Box, Typography } from "@mui/material";
import logo from "../../../public/logo.svg";
import { Link } from "@tanstack/react-router";

export const NotFound = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="p-5 grid place-items-center gap-8">
        <img className="border-r-1" src={logo} alt={"logo"} loading="lazy" />
        <Typography variant="h3" fontWeight={500}>
          Page not found
        </Typography>
        <Typography variant="h6" fontWeight={300} sx={{ opacity: 0.6 }}>
          We can’t seem to find the page you are looking for.
        </Typography>
        <Link to="/">
          <button className="bg-white text-black text-base py-3 px-6 rounded-full transform transition-transform duration-100 hover:scale-110">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

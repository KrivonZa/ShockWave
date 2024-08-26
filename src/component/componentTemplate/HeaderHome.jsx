import React, { useState, useEffect } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';

export const HeaderHome = () => {

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false); // cuộn xuống, ẩn header
      } else {
        setShowHeader(true); // cuộn lên, hiện header
      }

      setLastScrollY(currentScrollY); // cập nhật vị trí cuộn
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <div>
      {/*Màn hình điện thoại*/}
      <div className={`w-full flex lg:hidden fixed top-0 z-50 justify-between items-center text-[var(--primary-text-color)] text-xl font-medium px-4 py-3 bg-[#F7FBFC] bg-opacity-75 backdrop-blur-sm border-b-2 border-b-[#B9D7EA] shadow-[0px_8px_20px_5px_rgba(44,116,179,0.4)] transition-transform duration-300 ease-in-out ${showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div className="flex justify-between items-center w-full">
          <div className="h-20 w-20 rounded-full cursor-pointer" onClick={() => navigate('/home')}>
            <img src="/image/ShockWave.png" alt="Logo"></img>
          </div>
          <div>
            <MenuIcon onClick={toggleDrawer(true)} />
          </div>
        </div>

        {/* Drawer for menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250 }}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/home')}>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/contact')}>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/login')}>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/register')}>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </div>

      {/*Màn hình rộng hơn*/}
      <div
        className={`hidden fixed top-0 w-full z-50 lg:flex justify-between items-center text-[var(--primary-text-color)] text-xl font-medium px-4 py-3 bg-[#F7FBFC] bg-opacity-75 backdrop-blur-sm border-b-2 border-b-[#B9D7EA] shadow-[0px_8px_20px_5px_rgba(44,116,179,0.4)] transition-transform duration-300 ease-in-out ${showHeader ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="flex items-center space-x-12 px-20">
          <div className="h-20 w-20 rounded-full cursor-pointer" onClick={() => navigate('/home')}>
            <img src="/image/ShockWave.png" alt="Logo"></img>
          </div>
          <div className="hover:shadow-glow duration-200 cursor-pointer" onClick={() => navigate('/home')}>Home</div>
          <div className="hover:shadow-glow duration-200 cursor-pointer" onClick={() => navigate('/contact')}>Contact</div>
        </div>

        <div className="flex space-x-20 px-20">
          <div className="hover:shadow-glow duration-200 cursor-pointer" onClick={() => navigate('/login')}>
            Login
          </div>
          <div className="hover:shadow-glow duration-200 cursor-pointer" onClick={() => navigate('/register')}>Register</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;

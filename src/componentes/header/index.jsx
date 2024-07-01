import React, {useState} from "react";
import {
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Hidden,
    Menu,
    MenuItem,
    MenuList
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";



const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null); // Estado para el anclaje del menú
    
    
    const pathname = window.location.pathname;

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //setTimeout(() => {handleClick({})}, 5000);

    return (
        <div className="bg-red-500">
            <Container>
                <div className="mx-auto">
                    <div className="flex items-center justify-between p-4">
                        <a href="/"> 
                                <img style={{maxWidth:"180px"}} src="static/images/goodmarket_white_text.png" alt="logo"/>
                                </a>
                        <Hidden mdDown>
                            <nav className="hidden md:flex items-center text-white ">
                                <a href="#MetodosDePago" className="hover:text-gray-500 mx-5 text-xl font-semibold"
                                    style={{
                                        color: pathname === '#metodosdepago' ? '#2563EB' : 'white'
                                    }}>Métodos de pago</a>
                                    {/* <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose = {handleClose}

                                    >
                                        <a href="/AcercaDe">
                                            <MenuItem
                                                onClick={handleClose}>Acerca del HPC
                                            </MenuItem></a>
                                        <a href="/Infraestructura">
                                        <MenuItem

                                            onClick={handleClose}>Infraestructura

                                        </MenuItem></a>
                                        <a href="/Equipo">
                                        <MenuItem
                                            onClick={handleClose}>Equipo
                                        </MenuItem></a>

                                    </Menu> */}


                                 {/* <img className="mx-0.5 my-0.5 "src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNgGFDAysDAEIlHPhKqBgwKGRgYKrEoKsImjq4Yl2YUSbyKYKAYimkMAAtZByDUNaADAAAAAElFTkSuQmCC"/> */}

                                <a href="#Ubicacion" className="hover:text-gray-500 mx-5 text-xl font-semibold"
                                style={{
                                    color: pathname === '#ubicacion' ? '#2563EB' : 'white',
                                    
                                }}>Ubicación</a>
                                <a href="#Marcas" className="hover:text-gray-500 mx-5 text-xl font-semibold"
                                style={{
                                    color: pathname === '#marcas' ? '#2563EB' : 'white'
                                }}>Marcas</a>
                                

                            </nav>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                    </div>
                </div>
            </Container>
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <div
                    role="presentation"
                    onClick={handleDrawerClose}
                    onKeyDown={handleDrawerClose}
                >
                    <List>
                        <ListItem
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                        </ListItem>
                        <ListItem>
                            <a href="#MetodosDePago">
                                <ListItemText primary="Métodos de pago"></ListItemText>
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="#Ubicacion"><ListItemText primary="Ubicación"></ListItemText> </a>
                        </ListItem>
                        <ListItem>
                            <a href="#Marcas"><ListItemText primary="Marcas"></ListItemText> </a>
                        </ListItem>
                        
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default Header;

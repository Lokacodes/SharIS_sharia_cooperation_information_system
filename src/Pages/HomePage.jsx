import { MoreVert } from '@mui/icons-material';
import { Paper, Grid, useMediaQuery, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import MiniDrawer from '../components/sideBar';


export default function HomePage() {
    const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return (
        <>
            
                <Typography variant="h4" fontWeight={500} fontFamily={'montserrat'} color="initial">Beranda</Typography>
                <Paper elevation={3} sx={{ borderRadius: 5, position: 'relative', overflow: 'hidden', p: { xs: 3, sm: 4, md: 4 }, mt: 2 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <Typography variant={isXsScreen ? "body2" : "h6"} fontWeight={400} fontFamily={'montserrat'} color="#4B4B4B">Selamat Datang di</Typography>
                            <Typography variant={isXsScreen ? "body1" : "h6"} fontFamily={'montserrat'} color="#4B4B4B">Koperasi Syariah</Typography>
                            <Typography variant={isXsScreen ? "body1" : "h6"} fontWeight={600} fontFamily={'montserrat'} color="initial">Khadijah Ar-Rochim Sejahtera</Typography>
                        </Grid>
                        {!isXsScreen && (
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <img src="hijab.jpg" alt="" style={{ height: '100%', objectFit: 'cover', position: 'absolute', }} />
                            </Grid>
                        )}
                    </Grid>
                </Paper>
                <Grid container spacing={3} py={3} alignItems="center">
                    <Grid item xs="auto" sm="auto">
                        <Paper elevation={3} sx={{ borderRadius: 5, p: 2, background: 'linear-gradient(to bottom left, #91C125, #3285A9)' }}>
                            <Grid container spacing={1} alignItems="center">
                                <Grid item xs={6}>
                                    <Typography variant="body1" color="#FFFFFF" fontFamily={'montserrat'}>ANGGOTA</Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <MoreVert fontSize='medium' sx={{ color: "#ffffff" }} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} p={4}>
                                <Grid item>
                                    <Typography variant="h1" fontWeight={700} color="#FFFFFF" fontFamily={'montserrat'}>76</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6" color="#FFFFFF" fontFamily={'montserrat'}>Orang</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs="auto" sm="auto">
                        <Paper elevation={3} sx={{ borderRadius: 5, p: 2 }}>
                            <Grid container spacing={1} alignItems="center">
                                <Grid item xs={6}>
                                    <Typography variant="body1" color="inherit" fontFamily={'montserrat'}>PIUTANG</Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <MoreVert fontSize='medium' sx={{ color: "inherit" }} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} direction={'column'} pt={2}>
                                <Grid item>
                                    <Typography variant="body1" color="inherit" fontFamily={'montserrat'}>Belum Lunas</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4" color="inherit" fontFamily={'montserrat'}>Rp 1 000 000</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" color="inherit" fontFamily={'montserrat'}>Lunas</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4" color="inherit" fontFamily={'montserrat'}>Rp 1 000 000</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs="auto" sm="auto">
                        <Paper elevation={3} sx={{ borderRadius: 5, p: 2 }}>
                            <Grid container spacing={1} alignItems="center">
                                <Grid item xs={6}>
                                    <Typography variant="body1" color="inherit" fontFamily={'montserrat'}>SIMPANAN</Typography>
                                </Grid>
                                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <MoreVert fontSize='medium' sx={{ color: "inherit" }} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} direction={'column'} pt={2}>
                                <Grid item>
                                    <Grid container spacing={7}>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" color="inherit" fontFamily={'montserrat'} >Pokok</Typography>
                                        </Grid>
                                        <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Typography variant="body1" fontFamily={'montserrat'} color="inherit">Rp 1 000 000</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Divider />
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={7}>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" color="inherit" fontFamily={'montserrat'} >Wajib</Typography>
                                        </Grid>
                                        <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Typography variant="body1" fontFamily={'montserrat'} color="inherit">Rp 1 000 000</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Divider />
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={7}>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" color="inherit" fontFamily={'montserrat'} >Sukarela</Typography>
                                        </Grid>
                                        <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Typography variant="body1" fontFamily={'montserrat'} color="inherit">Rp 1 000 000</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Divider />
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={7}>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" color="inherit" fontFamily={'montserrat'} >Jumlah</Typography>
                                        </Grid>
                                        <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Typography variant="body1" fontFamily={'montserrat'} color="inherit">Rp 4 000 000</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Divider />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
        </>
    );
}

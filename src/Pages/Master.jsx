import Typography from '@mui/material/Typography'
import MiniDrawer from '../components/sideBar'
import { useMediaQuery, Grid, Paper, IconButton } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { Assessment, CreditCard } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


export default function Master() {
    const isXsScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const navigate = useNavigate();
    return (
        <>
            <Typography variant="h4" fontWeight={500} fontFamily={'montserrat'} color="initial">Master</Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <IconButton aria-label="" onClick={() => navigate('/mockdata')}>
                        <Paper elevation={3} sx={{borderRadius:5}}>
                            <Grid container spacing={1} direction={"column"} textAlign={"center"} p={4} width={"150px"}>
                                <Grid item>
                                    <PeopleIcon fontSize='large'></PeopleIcon>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" color="initial">Anggota</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </IconButton>

                </Grid>
                <Grid item>
                    <IconButton aria-label="" onClick={() => navigate('/mockdata')}>
                        <Paper elevation={3} sx={{borderRadius:5}}>
                            <Grid container spacing={1} direction={"column"} textAlign={"center"} p={4} width={"150px"}>
                                <Grid item>
                                    <LocalAtmIcon fontSize='large'></LocalAtmIcon>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" color="initial">Simpanan</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </IconButton>

                </Grid>
                <Grid item>
                    <IconButton aria-label="" onClick={() => navigate('/mockdata')}>
                        <Paper elevation={3} sx={{borderRadius:5}}>
                            <Grid container spacing={1} direction={"column"} textAlign={"center"} p={4} width={"150px"}>
                                <Grid item>
                                    <CreditCard fontSize='large'></CreditCard>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" color="initial">Piutang</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </IconButton>

                </Grid>
                <Grid item>
                    <IconButton aria-label="" onClick={() => navigate('/mockdata')}>
                        <Paper elevation={3} sx={{borderRadius:5}}>
                            <Grid container spacing={1} direction={"column"} textAlign={"center"} p={4} width={"150px"}>
                                <Grid item>
                                    <Assessment fontSize='large'></Assessment>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1" color="initial">Rekap</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
}
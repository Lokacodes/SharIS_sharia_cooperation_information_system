import { Typography, Paper, Grid, TextField, Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react'
import * as React from 'react';
import { DateField, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";

export default function Transaksi() {
    const [jnsTransaksi, setJnsTransaksi] = useState("");
    const [jnsSimpanan, setJnsSimpanan] = useState("");
    const [lamaPinjam, setLamaPinjam] = useState(null);
    const [tanggalPinjam, setTanggalPinjam] = useState(null);
    const [tenggatPelunasan, setTenggatPelunasan] = useState(null);
    const [jumlahPinjam, setjumlahPinjam] = useState(2000000);

    const handleChange = (event) => {
        setJnsTransaksi(event.target.value);
    };

    const handleChangeSimpanan = (event) => {
        setJnsSimpanan(event.target.value);
    }

    const handleChangeJumlahPinjam = (event) => {
        setjumlahPinjam(event.target.value);
    }
    const handleChangeLamaPinjam = (event) => {
        setLamaPinjam(event.target.value);
        const tenggat = tanggalPinjam.add(lamaPinjam, 'month')
        setTenggatPelunasan(tenggat);
        console.log(tanggalPinjam);
        console.log(tenggat);

    }
    return (
        <>
            <Typography variant="h4" fontWeight={500} fontFamily={'montserrat'} color="initial">Transaksi</Typography>

            <Paper elevation={3} sx={{ borderRadius: 3, position: 'relative', overflow: 'hidden', p: { xs: 3, sm: 4, md: 4 }, mt: 2 }}>
                <Grid container spacing={2} direction={"column"} p={0.5}>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <TextField
                                    id="outlined-required"
                                    label="Nama Anggota"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    id="outlined-required"
                                    label="ID Anggota"
                                    disabled
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="jenis-transaksi">Jenis Transaksi</InputLabel>
                                    <Select
                                        labelId="jenis-transaksi-label"
                                        id="jenis-transaksi-select"
                                        value={jnsTransaksi}
                                        label="Jenis Transaksi"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"Simpan"}>Simpan</MenuItem>
                                        <MenuItem value={"Pinjam"}>Pinjam</MenuItem>
                                        <MenuItem value={"Angsur"}>Angsur</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>

                    {jnsTransaksi === "Simpan" && (
                        <>
                            <Grid item mt={5}>
                                <Grid container spacing={2}>
                                    <Grid item md={3}>
                                        <Typography variant="h4" fontWeight={500} fontFamily={'montserrat'} color="initial">Simpanan</Typography>
                                    </Grid>
                                    <Grid item md={3}>
                                        <FormControl fullWidth>
                                            <InputLabel id="jenis-transaksi">Jenis Simpanan</InputLabel>
                                            <Select
                                                labelId="jenis-Simpanan-label"
                                                id="jenis-Simpanan-select"
                                                value={jnsSimpanan}
                                                label="Jenis Simpanan"
                                                onChange={handleChangeSimpanan}
                                            >
                                                <MenuItem value={"Sukarela"}>Sukarela</MenuItem>
                                                <MenuItem value={"Wajib"}>Wajib</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} textAlign={"right"}>
                                        <Button color="inherit" onClick={() => { setJnsTransaksi("") }}>tutup</Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item >
                                <Grid container spacing={2}>
                                    <Grid item md={6}>
                                        <TextField
                                            id="outlined-required"
                                            label="Jumlah"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField
                                            id="outlined-required"
                                            label="Tanggal"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item textAlign={"right"}>
                                <Button variant="contained" color="success">Simpan</Button>
                            </Grid>
                        </>
                    )}

                    {jnsTransaksi === "Pinjam" && (
                        <><LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Grid item mt={5}>
                                <Grid container spacing={2}>
                                    <Grid item md={6}>
                                        <Typography variant="h4" fontWeight={500} fontFamily={'montserrat'} color="initial">Peminjaman</Typography>
                                    </Grid>
                                    <Grid item md={6} textAlign={"right"}>
                                        <Button color="inherit" onClick={() => { setJnsTransaksi("") }}>tutup</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Grid container spacing={2}>
                                    <Grid item md={6}>
                                        <TextField
                                            id="Jumlah-pinjam"
                                            label="Jumlah-pinjam"
                                            fullWidth
                                            value={jumlahPinjam}
                                            onChange={handleChangeJumlahPinjam}
                                            helperText="dalam Rupiah"
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <DatePicker
                                            value={tanggalPinjam}
                                            onChange={(newValue) => {
                                                setTanggalPinjam(newValue)
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Grid container spacing={2}>
                                    <Grid item md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="lama-pinjam">Lama Pinjam</InputLabel>
                                            <Select
                                                labelId="lama-pinjam-label"
                                                id="lama-pinjam-select"
                                                value={lamaPinjam}
                                                label="Lama Pinjam"
                                                onChange={handleChangeLamaPinjam}
                                            >
                                                <MenuItem value={10}>10 Bulan</MenuItem>
                                                <MenuItem value={12}>12 Bulan</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6}>
                                        <DateField
                                            label="tenggat pelunasan"
                                            defaultValue={tenggatPelunasan}
                                            value={tenggatPelunasan}
                                            disabled
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Grid container spacing={2}>
                                    <Grid item md={6}>
                                        <TextField
                                            id="outlined-required"
                                            label="Nominal Angsuran"
                                            value={jumlahPinjam/lamaPinjam}
                                            onChange={()=>{}}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item textAlign={"right"}>
                                <Button variant="contained" color="success">Simpan</Button>
                            </Grid>
                        </LocalizationProvider>
                        </>
                    )}
                </Grid>
            </Paper>

        </>
    )
}
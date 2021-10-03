import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Chip from '@mui/material/Chip'
import Layout from '../../components/layout'

export default function Pokemon({ pokemon }) {
    // eslint-disable-next-line no-console
    console.log(pokemon.name, pokemon)

    const { stats, name, order, sprites, types } = pokemon

    return (
        <Layout>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <h1>{`${name} (#${order})`}</h1>
                    {types.map(({ type }) => {
                        return <Chip key={type.name} label={type.name} />
                    })}
                </Grid>
                <Grid item xs={4}>
                    <img src={sprites.front_default} alt={name} />
                </Grid>
                <Grid item xs={8}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Stat</TableCell>
                                    <TableCell align="right">Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {stats.map(({ base_stat: baseStat, stat: { name: statName } }) => (
                                    <TableRow key={statName}>
                                        <TableCell component="th" scope="row">
                                            {statName}
                                        </TableCell>
                                        <TableCell align="right">{baseStat}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const { params } = ctx
    // Fetch necessary data for the blog post using params.id
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(response => response.json())
    return {
        props: {
            pokemon: data
        }
    }
}

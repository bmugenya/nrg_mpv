import { Container, Grid } from '@material-ui/core'
import './App.css'
import Header from './Header'
import Radio from './Radio'
import Fm from './Fm'

function App() {
  return (
    <Container>
      <Header />
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={6}>
          <Radio />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Fm />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App

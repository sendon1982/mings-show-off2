import { Button, Card, CardContent, CardHeader, Container, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { CheckBox } from "@mui/icons-material";
  
const CreateTeamTemplate = () => {
  return (
    <Container sx={{
      py:6
    }}>
      <Grid container spacing={6}>
        <Grid item xs={5}>
          <FormLabel>Team Name</FormLabel>
          <TextField id="team-name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={5}>
          <FormLabel>Contact Email</FormLabel>
          <TextField id="contact-email" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={5}>
          <Card>
            <CardHeader
            title='JIRA Config'
            action={
              <IconButton>
                <CloseIcon />
              </IconButton>
            }
            sx={{
              backgroundColor:'#ccc',
            }} />
            <CardContent>
              <FormLabel>Project Key</FormLabel>
              <TextField id="project-key" variant="outlined" fullWidth value={'MTSIMGN'}/>
              <FormLabel>Jira ServerId</FormLabel>
              <TextField id="jira-server-id" variant="outlined" fullWidth disabled value={'some-id-here'} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card>
            <CardHeader
            title='Confluence Config'
            action={
              <IconButton>
                <CloseIcon />
              </IconButton>
            }
            sx={{
              backgroundColor:'#ccc',
            }} />
            <CardContent>
              <FormLabel>Space Key</FormLabel>
              <TextField id="space-key" variant="outlined" fullWidth value={'MARGDEV'}/>
              <FormLabel>Release Parent Page Name</FormLabel>
              <TextField id="release-parent-page-name" variant="outlined" fullWidth value={'Margin+releases'} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10}>
          <Card>
            <CardHeader
            title='CGMCHANGE Config'
            action={
              <IconButton>
                <CloseIcon />
              </IconButton>
            }
            sx={{
              backgroundColor:'#ccc',
            }} />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <FormLabel>Infrastructure Manager</FormLabel>
                  <TextField id="infrastructure-manager" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel>Aprove Group</FormLabel>
                  <Select
                    defaultValue={'OneCGM Teck - Risk Services'}
                    fullWidth
                  >
                    <MenuItem value={'OneCGM Teck - Risk Services'}>OneCGM Teck - Risk Services</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel>Deploy Tool</FormLabel>
                  <Select
                    defaultValue={'FICC Release'}
                    fullWidth
                  >
                    <MenuItem value={'FICC Release'}>FICC Release</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel>OpCat</FormLabel>
                  <Select
                    defaultValue={'Development - Automatic Implementation'}
                    fullWidth
                  >
                    <MenuItem value={'Development - Automatic Implementation'}>Development - Automatic Implementation</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <FormGroup sx={{p:2}}>
                    <FormControlLabel control={<CheckBox defaultChecked />} label="Risk Assessment Check" />
                  </FormGroup>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel>Impacted Areas Region Organization</FormLabel>
                  <TextField id="inpacted-areas-region-organization" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel>Impacted Areas Department</FormLabel>
                  <TextField id="inpacted-areas-department" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel>Impacted Areas</FormLabel>
                  <TextField id="inpacted-areas" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel>Related Assets</FormLabel>
                  <TextField id="related-assets" variant="outlined" fullWidth/>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} sx={{textAlign:'end'}}>
          <Button variant="contained" size="large" color="secondary">Save Team Config</Button>
        </Grid>
      </Grid>
    </Container>
  );
};
  
export default CreateTeamTemplate;
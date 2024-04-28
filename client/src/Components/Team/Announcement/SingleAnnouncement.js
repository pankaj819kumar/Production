// MUI Components
import { Box, Paper, Stack, Typography, Divider } from "@mui/material";
import { TextField } from "@mui/material";

import MDEditor from "@uiw/react-md-editor";

const SingleAnnouncement = ({ announcement }) => {
  return (
    <Box sx={{ width: 600, minHeight: 400 }}>
      <Paper elevation={3} sx={{ padding: "10px 15px", width: "100%", minHeight: 400 }}>
        <Stack spacing={1}>
          <Stack direction="row" spacing={1} divider={<Divider flexItem orientation="vertical" />}>
            <Typography variant="h6" color="primary">
              <strong>{announcement.title.split("|")[0]}</strong>
            </Typography>
            <Typography variant="h6" color="primary">
              <strong>{announcement.title.split("|")[1]}</strong>
            </Typography>
          </Stack>
          <Divider flexItem orientation="horizontal" />
          {/* <TextField value={announcement.content} multiline minRows={5} /> */}
          <MDEditor.Markdown source={announcement.content} wrapperElement={{"data-color-mode": "light"}}/>
        </Stack>
      </Paper>
    </Box>
  );
};
export default SingleAnnouncement;

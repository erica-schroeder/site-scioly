import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography
} from '@mui/material';

export default function GroupSelector({ name, group, selectedSets, onChange }) {
  const sets = group.sets || [];

  // Determine if all sets are selected
  const allSelected = sets.length > 0 && sets.every(s => selectedSets.includes(s.key));
  const someSelected = sets.some(s => selectedSets.includes(s.key)) && !allSelected;

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newSelection = checked
      ? [...new Set([...selectedSets, ...sets.map(s => s.key)])]
      : selectedSets.filter(key => !sets.map(s => s.key).includes(key));
    onChange(newSelection);
  };

  const handleSetChange = (setId) => (e) => {
    const checked = e.target.checked;
    const newSelection = checked
      ? [...selectedSets, setId]
      : selectedSets.filter(id => id !== setId);
    onChange(newSelection);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <List
          dense
          sx={{ height: {xs: 'auto', sm: 350}, minHeight: 200, overflowY: "auto" }}
          subheader={
            <ListSubheader sx={{
              backgroundColor: "card.background",
              color: 'inherit',
            }}>
              <Stack>
                <Typography variant="h6" fontWeight="bold">{name}</Typography>
                <Stack direction="row" alignItems="center">
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={allSelected}
                      indeterminate={someSelected}
                      onChange={handleSelectAll}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Select All" />
                </Stack>
                <Divider sx={{ my: 1 }} />
              </Stack>
            </ListSubheader>
          }
        >
          {group.sets.map((s) => (
            <ListItem key={s.key}
              sx={{
                py: 0,
              }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={selectedSets.includes(s.key)}
                  onChange={handleSetChange(s.key)}
                />
              </ListItemIcon>
              <ListItemText primary={s.displayName || s.key} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

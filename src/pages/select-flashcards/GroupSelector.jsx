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
import { sortBy } from 'lodash-es';

export default function GroupSelector({ name, group, selectedSets, onChange }) {
  const sets = sortBy(group.sets, ['title']) || [];

  // Determine if all sets are selected
  const allSelected = sets.length > 0 && sets.every(s => selectedSets.includes(s.id));
  const someSelected = sets.some(s => selectedSets.includes(s.key)) && !allSelected;

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const newSelection = checked
      ? [...new Set([...selectedSets, ...sets.map(s => s.id)])]
      : selectedSets.filter(id => !sets.map(s => s.id).includes(id));
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
    <Card variant="outlined"
    sx={{
    }}
    >
      <CardContent>
        <List
          dense
          sx={{
            height: 300,
            minHeight: 200,
            overflowY: "auto",
          }}
          subheader={
            <ListSubheader sx={{
              backgroundColor: "card.background",
              color: 'inherit',
            }}>
              <Stack>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ ml: -2 }}>{name}</Typography>
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
          {sets.map((s) => (
            <ListItem key={s.key}
              sx={{
                py: 0,
              }}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={selectedSets.includes(s.id)}
                  onChange={handleSetChange(s.id)}
                />
              </ListItemIcon>
              <ListItemText primary={s.title} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
